# -*- coding: utf-8 -*-
#
# Receives and responds to the HTTP request from the Python server.
#
# Copyright (c) 2015 carlosperate https://github.com/carlosperate/
# Licensed under the Apache License, Version 2.0 (the "License"):
#   http://www.apache.org/licenses/LICENSE-2.0
#
from __future__ import unicode_literals, absolute_import
import json
import cgi
import sys
import re
import os
import shutil # added by Mee to copy sound data
try:
    # 2.x name
    import Tkinter
    import urlparse
    import tkFileDialog
    import SimpleHTTPServer
except ImportError:
    # 3.x name
    import tkinter as Tkinter
    import urllib.parse as urlparse
    import tkinter.filedialog as tkFileDialog
    import http.server as SimpleHTTPServer

import ardublocklyserver.actions as actions

import ardublocklyserver.gui as gui

from ardublocklyserver.compilersettings import ServerCompilerSettings

try:
    # 2.x name
    from urllib import unquote
except ImportError:
    # 3.x name
    from urllib.parse import unquote


class BlocklyRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    """
    Simple Python HTTP request handler to pass over the AJAX requests.
    """

    def do_POST(self):
        """
        Serves the POST request, using form-like data
        """
        message_back = None
        content_type, parameters_dict = cgi.parse_header(
            self.headers.get("Content-type"))
        content_length = int(self.headers.get('content-length'))

        if content_type == 'application/x-www-form-urlencoded':
            parameters = urlparse.parse_qs(
                parse_qs_encoder(self.rfile.read(content_length)),
                keep_blank_values=False)
            message_back = handle_settings(parameters)
        elif content_type == 'text/plain':
            data_string = self.rfile.read(content_length)
            try:
                # At this point message back should contain a normal string
                # with the sketch code
                #TODO: unicode testing over here
                message_back =\
                    '// Flag\'s Block 產生的草稿碼\n\n' + \
                    data_string.decode('utf-8')
            except Exception as e:
                print(e)
                print('\nThere was an error manipulating the sketch data!!!')
            # Returning data is a JSON string with the Arduino CLI output
            message_back = handle_sketch(message_back)

        elif content_type == 'text/xml':
            # 儲存專案
            proj_dir = self.headers.get("Project-Dir")
            proj_filename = self.headers.get("Project-FileName")
            proj_issaveas = self.headers.get("Project-isSaveAs")
            proj_default_name = self.headers.get("Project-Default-Name")
            proj_filetype = self.headers.get("Project-FileType")

            if proj_dir: proj_dir = unquote(proj_dir)
            if proj_filename: proj_filename = unquote(proj_filename)
            if proj_issaveas: proj_issaveas = unquote(proj_issaveas)
            if proj_default_name: proj_default_name = unquote(proj_default_name)
            if proj_filetype: proj_filetype = unquote(proj_filetype)

            if sys.version_info[0] == 2:
                if proj_dir: proj_dir = proj_dir.decode('utf-8')
                if proj_filename: proj_filename = proj_filename.decode('utf-8')
                if proj_default_name: proj_default_name = proj_default_name.decode('utf-8')
                if proj_filetype: proj_filetype = proj_filetype.decode('utf-8')
            else:
                pass  # TODO

            xml = self.rfile.read(content_length)

            if not proj_default_name:
                proj_default_name = 'Project'
            if not proj_filetype:
                proj_filetype = 'Project file'

            file_path = ''
            if proj_dir == '' or proj_filename == '' or proj_issaveas == 'yes':
                tkOptions = {}
                tkOptions['title'] = 'Save project as'
                tkOptions['defaultextension'] = '.xml'
                # tkOptions['filetypes'] = [('Project file', '.xml'), ('All files', '*')]
                tkOptions['filetypes'] = [(proj_filetype, '.xml')]

                if proj_dir:
                    tkOptions['initialdir'] = proj_dir
                else:
                    tkOptions['initialdir'] = os.path.expanduser('~')

                if proj_filename:
                    tkOptions['initialfile'] = proj_filename
                else:
                    tkOptions['initialfile'] = proj_default_name

                print("Server is opening SaveFile Dialog...")
                sys.stdout.flush()
                file_path = gui.save_file_dialog(tkOptions)
                
                proj_dir = os.path.dirname(file_path)
                proj_filename = os.path.basename(file_path)

            message_back = save_project(xml, proj_dir, proj_filename)

        elif content_type == 'audio/x-wav': # added by Mrr
            # 儲存聲音資料
            data = self.rfile.read(content_length)
            settings = ServerCompilerSettings()
            sound_dir = settings.sketch_dir + '/' + settings.sketch_name + '/data'
            print("Saving sound data to " + sound_dir)
            message_back = save_project(data, sound_dir, "sound.h") #-----------

        elif content_type == 'text/html': # added by Mrr
            # 儲存網頁資料
            data = self.rfile.read(content_length)
            settings = ServerCompilerSettings()
            data_dir = settings.sketch_dir + '/' + settings.sketch_name + '/data'
            print("Saving web page data to " + data_dir)
            message_back = save_project(data, data_dir, "webpages.h") #-----------

        else:
            print('\nError, content type not recognised: ' + str(content_type))
            self.send_response(404, "Ups, not found!")
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write('Error: invalid content type')
            return

        # Responding
        if message_back:
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(message_back.encode("utf-8"))

    def do_GET(self):
        SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map.update({ 
            '.css': 'text/css', 
        })
        parameters = urlparse.parse_qs(urlparse.urlparse(self.path).query)
        # Edited by Mee to check if only one parameter existed.
        # It could avoid restoring FIRSTRUN and sound file when refreshing page 
        # while setting new language.
        if len(parameters) == 1 and 'dev' in parameters and parameters['dev'][0] == 'y':
            firstrun_path = ServerCompilerSettings().get_firstrun_path()
            if not os.path.exists(firstrun_path):
                print('Can not find firstrun file. Creating one new firstrun!')
                try:
                    open(firstrun_path, 'a').close()
                except Exception as e:
                    print('Error: %s' % e)
            #---added by Mee:Restore default sound.h to scream-----
            print('Restoring sound.h to screaming sound.')
            settings = ServerCompilerSettings()
            data_dir = settings.sketch_dir + '/' + settings.sketch_name + '/data'
            shutil.copyfile(data_dir + '/default_sound.h', data_dir + '/sound.h')
            print('Restoring webpages.h to Robot web pages.')
            shutil.copyfile(data_dir + '/default_robot_webpages.h', data_dir + '/webpages.h')
            #------------------------------------------------------
        SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

    def log_request(self, code='-', size='-'):
        """
        Log an accepted request.
        This is called by send_response(), and printed to the stderr by
        log_message. No need to fill the command line with successful responses,
        so only print any non 200.
        :param code:
        :param size:
        :return:
        """
        if code != 200:
            self.log_message('"%s" %s %s',
                             self.requestline, str(code), str(size))


#
# Request functions helpers
#
def parse_qs_encoder(url_to_encode):
    """
    The urlparse.parse_qs function requires an ASCII input in python 3 and a
    unicode array in Python 2, so this helper function is used to return the
    right data.
    :return: Input string encoded in the format required by urlparse.parse_qs.
    """
    if sys.version_info[0] == 3:
        return url_to_encode.decode('utf-8')
    else:
        return str(url_to_encode).encode('utf-8')


def handle_settings(parameters):

    def _get_value(parameters2):
        """ Searches for a 'value' parameter in the dictionary. """
        value2 = None
        for key2 in parameters2:
            if str(key2) == 'value':
                value2 = str(parameters2[key2])
        return value2

    message_back = None
    for key in parameters:
        # Compiler
        if str(key) == 'compiler':
            if str(parameters[key]) == "['get']":
                message_back = actions.get_compiler_path()
            elif str(parameters[key]) == "['set']":
                message_back = actions.set_compiler_path()
        # Sketch
        elif str(key) == 'sketch':
            if str(parameters[key]) == "['get']":
                message_back = actions.get_sketch_path()
            elif str(parameters[key]) == "['set']":
                message_back = actions.set_sketch_path()
        # Arduino Board
        elif str(key) == 'board':
            if str(parameters[key]) == "['get']":
                message_back = actions.get_arduino_boards()
            elif str(parameters[key]) == "['set']":
                value = _get_value(parameters)
                value = re.sub(r'^\[\'', '', value)
                value = re.sub(r'\'\]', '', value)
                message_back = actions.set_arduino_board(value)
        # Serial port
        elif str(key) == 'serial':
            if str(parameters[key]) == "['get']":
                message_back = actions.get_serial_ports()
            elif str(parameters[key]) == "['set']":
                value = _get_value(parameters)
                value = re.sub(r'^\[\'', '', value)
                value = re.sub(r'\'\]', '', value)
                message_back = actions.set_serial_port(value)
        # Launch Only Options
        elif str(key) == 'ide':
            if str(parameters[key]) == "['get']":
                message_back = actions.get_load_ide_only()
            elif str(parameters[key]) == "['set']":
                value = _get_value(parameters)
                value = re.sub(r'^\[\'', '', value)
                value = re.sub(r'\'\]', '', value)
                message_back = actions.set_load_ide_only(value)
        # The Value parameter is only used in some cases
        elif str(key) == 'value':
            pass
        # Parameter not recognised
        else:
            print('The "' + str(key) + '" = ' + str(parameters[key]) +
                  ' parameter is not recognised!')
    return message_back


def handle_sketch(sketch_code):
    """
    Creates an Arduino Sketch and invokes the Arduino CLI.
    Creates a JSON string to return to the page with the following format:
    {"response_type": "ide_output",
     "element" : "div_ide_output",
     "success" : "true",
     "conclusion" : Short text as main conclusion,
     "output" : Output string,
     "error_output" : Output string,
     "exit_code": Exit code}
    """
    sketch_path = actions.create_sketch_from_string(sketch_code)
    success, conclusion, out, error, exit_code =\
        actions.load_arduino_cli(sketch_path)
    json_data = \
        {'response_type': 'ide_output',
         'element': 'div_ide_output',
         'success': success,
         'conclusion': conclusion,
         'output': out,
         'error_output': error,
         'exit_code': exit_code}
    return json.dumps(json_data)

def save_project(xml, directory, filename):
    success = False
    error = ''
    error_id = 0

    if directory == '' and filename == '':
        error = 'user cancelled'
        error_id = 10
    elif directory == '' or filename == '':
        error = 'directory or filename is empty value'
        error_id = 20
    else:
        if not os.path.exists(directory):
            error = 'path not exists'
            error_id = 30
        else:
            file_path = directory + os.sep + filename
            try:
                f = open(file_path, 'w')
                try:
                    f.write(xml)
                    success = True
                except:
                    error = 'can not write to file'
                    error_id = 50
                finally:
                    f.close()
            except:
                error = 'can not open file'
                error_id = 60

    json_data = \
        {'success': success,
         'error': error,
         'error_id': error_id,
         'directory': directory,
         'filename': filename}
    return json.dumps(json_data)
