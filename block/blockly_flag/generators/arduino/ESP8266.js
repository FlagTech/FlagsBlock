/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the ESP8266 WiFi and WebServer blocks.
 *     Arduino Serial library docs: https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html
 *
 * TODO: There are more functions that can be added:
 *       https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html
 */
'use strict';

goog.provide('Blockly.Arduino.ESP8266');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['esp8266_sta_setup'] = function(block) {
  var ssid = Blockly.Arduino.valueToCode(block, 'SSID',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var pinCode = Blockly.Arduino.valueToCode(block, 'PINCODE',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var code = 'WiFi.begin(' + ssid + ', ' + pinCode + ');\n';

  Blockly.Arduino.addInclude('esp8266_','#include <ESP8266WiFi.h>');
  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['esp8266_ap_setup'] = function(block) {
  var ssid = Blockly.Arduino.valueToCode(block, 'SSID',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var pinCode = Blockly.Arduino.valueToCode(block, 'PINCODE',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var channel = block.getFieldValue('CHANNEL');
  var hidden = (block.getFieldValue('HIDDEN') == 'TRUE');
  var code;
  if(ssid.startsWith("String") || ssid.startsWith("(String") || ssid.indexOf('"') == -1) {
    var func = [];
    func.push('bool _softAPString(String ssidStr) {');
    func.push('  char ssidChr[64];');
    func.push('  ssidStr.toCharArray(ssidChr, 63);');
    func.push('  return WiFi.softAP(ssidChr, ' + pinCode + ', ' + channel + ',' + hidden + ');');
    func.push('}');
    var softAPfuncName = Blockly.Arduino.addFunction(
      '_softAPString', func.join('\n'));
    code = softAPfuncName + '(' + ssid + ')';
  }
  else {
    code = 'WiFi.softAP(' + ssid + ', ' + pinCode + ', ' + channel + ',' + hidden + ')';
  }

  Blockly.Arduino.addInclude('esp8266_','#include <ESP8266WiFi.h>');

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_wifi_ap_sta'] = function(block) {
  return 'WiFi.mode(WIFI_AP_STA);\n';
};

Blockly.Arduino['esp8266_connected'] = function(block) {
  var code = '(WiFi.status() == WL_CONNECTED)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_localIP'] = function(block) {
  var code = '(WiFi.localIP().toString())';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_softAPIP'] = function(block) {
  var code = '(WiFi.softAPIP().toString())';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_localMAC'] = function(block) {
  var code = '(WiFi.macAddress())';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_softAPMAC'] = function(block) {
  var code = '(WiFi.softAPmacAddress())';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_webserver_setup'] = function(block, isHTTPS) {
  var portNo = block.getFieldValue('PORT');

  Blockly.Arduino.addInclude('esp8266_','#include <ESP8266WiFi.h>');

  if (isHTTPS === true) {
    Blockly.Arduino.addInclude('esp8266_webserver_secure','#include <ESP8266WebServerSecure.h>\n#include "data/webpages.h"');
  }
  else {
    Blockly.Arduino.addInclude('esp8266_webserver','#include <ESP8266WebServer.h>\n#include "data/webpages.h"');
  }

  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  if (isHTTPS === true) {
    Blockly.Arduino.addVariable(
      '_esp8266WebServer', 
      'ESP8266WebServerSecure ' + _esp8266WebServerName + '(' + portNo +');',
      true);
  }
  else {
    Blockly.Arduino.addVariable(
      '_esp8266WebServer', 
      'ESP8266WebServer ' + _esp8266WebServerName + '(' + portNo +');',
      true);
  }

  var func = [];
  func.push('void handleRoot() {');
  func.push('#ifndef WEBPAGE_IN_PROGMEM');
  func.push('  ' + _esp8266WebServerName + '.send(200, "text/html", mainPage);');
  func.push('#else');
  func.push('  ' + _esp8266WebServerName + '.send_P(200, PSTR("text/html"), mainPage);');
  func.push('#endif');
  func.push('}');
  var funcRootName = Blockly.Arduino.addFunction(
      'handleRoot', func.join('\n'));
  func = [];
  func.push('void handleNotFound() {');
  func.push('#ifndef WEBPAGE_IN_PROGMEM');
  func.push('  ' + _esp8266WebServerName + '.send(404, "text/html", errorPage);');
  func.push('#else');
  func.push('  ' + _esp8266WebServerName + '.send_P(404, PSTR("text/html"), errorPage);');
  func.push('#endif');
  func.push('}');
  var funcNotFoundName = Blockly.Arduino.addFunction(
      'handleNotFound', func.join('\n'));
  func = [];
  func.push('void handleSetting() {');
  func.push('#ifndef WEBPAGE_IN_PROGMEM');
  func.push('  ' + _esp8266WebServerName + '.send(200, "text/html", settingPage);');
  func.push('#else');
  func.push('  ' + _esp8266WebServerName + '.send_P(200, PSTR("text/html"), settingPage);');
  func.push('#endif');
  func.push('}');
  var funcSettingName = Blockly.Arduino.addFunction(
      'handleSetting', func.join('\n'));
    
  var code = _esp8266WebServerName + '.on("/", ' + funcRootName + ');\n' + 
    _esp8266WebServerName + '.onNotFound(' + funcNotFoundName + ');\n' + 
    _esp8266WebServerName + '.on("/setting", ' + funcSettingName + ');\n' + 
    _esp8266WebServerName + '.begin();\n';
      
  return code;
};

Blockly.Arduino['esp8266_webserver_secure_setup'] = function(block) {
  var sslCertKey = 'static const uint8_t x509[] PROGMEM = {' +
    '  0x30, 0x82, 0x01, 0x3c, 0x30, 0x81, 0xe7, 0x02, 0x09, 0x00, 0xdd, 0x2b,' +
    '  0x77, 0x0a, 0x24, 0x5c, 0x0d, 0xe5, 0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86,' +
    '  0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x05, 0x05, 0x00, 0x30, 0x1a, 0x31,' +
    '  0x18, 0x30, 0x16, 0x06, 0x03, 0x55, 0x04, 0x0a, 0x13, 0x0f, 0x46, 0x6c,' +
    '  0x61, 0x67, 0x20, 0x54, 0x65, 0x63, 0x68, 0x6e, 0x6f, 0x6c, 0x6f, 0x67,' +
    '  0x79, 0x30, 0x1e, 0x17, 0x0d, 0x31, 0x38, 0x30, 0x33, 0x32, 0x35, 0x30,' +
    '  0x39, 0x30, 0x32, 0x35, 0x31, 0x5a, 0x17, 0x0d, 0x33, 0x31, 0x31, 0x32,' +
    '  0x30, 0x32, 0x30, 0x39, 0x30, 0x32, 0x35, 0x31, 0x5a, 0x30, 0x31, 0x31,' +
    '  0x18, 0x30, 0x16, 0x06, 0x03, 0x55, 0x04, 0x0a, 0x13, 0x0f, 0x46, 0x6c,' +
    '  0x61, 0x67, 0x20, 0x54, 0x65, 0x63, 0x68, 0x6e, 0x6f, 0x6c, 0x6f, 0x67,' +
    '  0x79, 0x31, 0x15, 0x30, 0x13, 0x06, 0x03, 0x55, 0x04, 0x03, 0x13, 0x0c,' +
    '  0x6d, 0x61, 0x6b, 0x65, 0x72, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65,' +
    '  0x30, 0x5c, 0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d,' +
    '  0x01, 0x01, 0x01, 0x05, 0x00, 0x03, 0x4b, 0x00, 0x30, 0x48, 0x02, 0x41,' +
    '  0x00, 0xe2, 0x56, 0x8b, 0x71, 0x21, 0x73, 0xa2, 0x5e, 0x6f, 0xbc, 0x02,' +
    '  0xc5, 0x8a, 0x7a, 0x26, 0xf2, 0x48, 0x7c, 0x84, 0xb1, 0x38, 0x1d, 0x3c,' +
    '  0x2f, 0xa8, 0xa1, 0x5b, 0xa1, 0x9e, 0x17, 0x5b, 0x6d, 0xbe, 0x75, 0xb7,' +
    '  0xbc, 0x19, 0x02, 0x78, 0x21, 0x14, 0x02, 0x3f, 0xd2, 0x1b, 0x4d, 0x6b,' +
    '  0x50, 0x8d, 0x38, 0xff, 0xc3, 0x6a, 0xef, 0x04, 0x68, 0x99, 0x9a, 0xf8,' +
    '  0x75, 0xab, 0xa5, 0x67, 0x01, 0x02, 0x03, 0x01, 0x00, 0x01, 0x30, 0x0d,' +
    '  0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x05, 0x05,' +
    '  0x00, 0x03, 0x41, 0x00, 0x19, 0x73, 0xb0, 0x71, 0x69, 0xb2, 0xf8, 0xd4,' +
    '  0x2d, 0xad, 0x55, 0x70, 0xc0, 0x8a, 0x23, 0x76, 0x82, 0x2c, 0xa7, 0xf3,' +
    '  0x25, 0x03, 0xa0, 0x54, 0x79, 0x5e, 0x27, 0x16, 0x8c, 0xcc, 0x3a, 0x0a,' +
    '  0x1a, 0x31, 0x37, 0x39, 0x2c, 0x0b, 0x14, 0xdc, 0xa7, 0x23, 0xb4, 0xbb,' +
    '  0xdf, 0x12, 0x0c, 0x67, 0xe5, 0xd7, 0xb7, 0x99, 0x0b, 0x7d, 0x7e, 0x78,' +
    '  0xf5, 0xbd, 0x94, 0x85, 0x44, 0xb3, 0x51, 0x82 };\n' +
    'static const uint8_t rsakey[] PROGMEM = {' +
    '  0x30, 0x82, 0x01, 0x3b, 0x02, 0x01, 0x00, 0x02, 0x41, 0x00, 0xe2, 0x56,' +
    '  0x8b, 0x71, 0x21, 0x73, 0xa2, 0x5e, 0x6f, 0xbc, 0x02, 0xc5, 0x8a, 0x7a,' +
    '  0x26, 0xf2, 0x48, 0x7c, 0x84, 0xb1, 0x38, 0x1d, 0x3c, 0x2f, 0xa8, 0xa1,' +
    '  0x5b, 0xa1, 0x9e, 0x17, 0x5b, 0x6d, 0xbe, 0x75, 0xb7, 0xbc, 0x19, 0x02,' +
    '  0x78, 0x21, 0x14, 0x02, 0x3f, 0xd2, 0x1b, 0x4d, 0x6b, 0x50, 0x8d, 0x38,' +
    '  0xff, 0xc3, 0x6a, 0xef, 0x04, 0x68, 0x99, 0x9a, 0xf8, 0x75, 0xab, 0xa5,' +
    '  0x67, 0x01, 0x02, 0x03, 0x01, 0x00, 0x01, 0x02, 0x40, 0x74, 0xb8, 0x96,' +
    '  0xde, 0x77, 0x96, 0xcf, 0x64, 0x0e, 0x11, 0x12, 0x08, 0xd7, 0x39, 0xd9,' +
    '  0x3d, 0xd6, 0xdd, 0xc7, 0xfc, 0x30, 0x68, 0xfb, 0x31, 0xc4, 0xaf, 0xb9,' +
    '  0xb6, 0x65, 0xf5, 0xbb, 0xa2, 0xab, 0x26, 0x08, 0xe3, 0x8e, 0xc0, 0x7c,' +
    '  0xff, 0x33, 0x32, 0x55, 0x8f, 0x6a, 0xe2, 0x39, 0x11, 0xb5, 0xfd, 0x72,' +
    '  0x16, 0x94, 0x41, 0xdc, 0x15, 0x02, 0x06, 0x8b, 0x49, 0x26, 0xd9, 0xfd,' +
    '  0x55, 0x02, 0x21, 0x00, 0xfc, 0xb5, 0xae, 0x54, 0xc9, 0xa7, 0x86, 0x72,' +
    '  0xf1, 0xc3, 0xca, 0x05, 0xb3, 0x3f, 0xc3, 0x46, 0x8e, 0x60, 0xe1, 0xea,' +
    '  0x2a, 0x79, 0x62, 0xb8, 0xa1, 0xce, 0x09, 0x12, 0x19, 0x83, 0x90, 0x77,' +
    '  0x02, 0x21, 0x00, 0xe5, 0x48, 0xf6, 0x91, 0x8a, 0x92, 0xcb, 0x34, 0x13,' +
    '  0x19, 0x26, 0x3a, 0x91, 0x90, 0xa8, 0xfc, 0x83, 0x1e, 0x70, 0x5d, 0xd5,' +
    '  0xeb, 0x3d, 0x8b, 0x4a, 0x6f, 0x85, 0xb7, 0xad, 0xb5, 0xda, 0x47, 0x02,' +
    '  0x21, 0x00, 0xbd, 0xf9, 0x0a, 0x63, 0xdc, 0xf0, 0x5e, 0x27, 0x3c, 0xce,' +
    '  0x35, 0xa9, 0xd1, 0x55, 0x86, 0xc4, 0x1c, 0xb6, 0x82, 0x3e, 0x99, 0xcd,' +
    '  0x84, 0xc4, 0x4d, 0x86, 0xe8, 0xd4, 0xbd, 0x6f, 0x65, 0x03, 0x02, 0x20,' +
    '  0x2b, 0x1d, 0xc1, 0x60, 0x35, 0x12, 0xcd, 0xab, 0x89, 0x3b, 0xdd, 0x78,' +
    '  0x7e, 0x0f, 0x19, 0xf8, 0x02, 0x20, 0x23, 0x39, 0x42, 0x14, 0xee, 0x89,' +
    '  0xd7, 0x01, 0x89, 0xbf, 0xb4, 0xa6, 0xd1, 0xd9, 0x02, 0x21, 0x00, 0xa9,' +
    '  0xe7, 0xd4, 0x09, 0x4a, 0xdc, 0x74, 0x5f, 0xce, 0xfd, 0x8c, 0xb2, 0x43,' +
    '  0x5a, 0x01, 0xde, 0xcd, 0x5f, 0xa0, 0xeb, 0xd3, 0xee, 0xbb, 0x0d, 0x7a,' +
    '  0xa8, 0xa5, 0xd6, 0x89, 0x48, 0xad, 0xf3 };';
  Blockly.Arduino.addVariable('_SSLCertKey', sslCertKey, true);

  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var code = _esp8266WebServerName + '.setServerKeyAndCert_P(rsakey, sizeof(rsakey), x509, sizeof(x509));\n';
  code += Blockly.Arduino['esp8266_webserver_setup'](block, true);
  return code;
};

Blockly.Arduino['esp8266_webserver_handleclient'] = function(block) {
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  
  var code = _esp8266WebServerName + '.handleClient();\n';      
  return code;
};

Blockly.Arduino['esp8266_webserver_on'] = function(block) {
  var funcName = block.getFieldValue('FUNCNAME');
  var path = block.getFieldValue('PATH');  
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var code = _esp8266WebServerName + '.on("' + path + '", ' + funcName + ');\n';      
  return code;
};

Blockly.Arduino['esp8266_webserver_send'] = function(block) {
  var statusCode = Blockly.Arduino.valueToCode(
    block, 'STATUS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var mimeType = Blockly.Arduino.valueToCode(block, 'MIMETYPE',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '"text/plain"';
  var content = Blockly.Arduino.valueToCode(block, 'CONTENT',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';

  
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var code = _esp8266WebServerName + '.send(' + 
    statusCode + ', ' + 
    mimeType + ', String(' + 
    content + '));\n';      
  return code;
};

Blockly.Arduino['esp8266_webserver_has_arg'] = function(block) {
  var argName = Blockly.Arduino.valueToCode(block, 'ARGNAME',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = _esp8266WebServerName + '.hasArg(' + argName + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_webserver_arg_by_name'] = function(block) {
  var argName = Blockly.Arduino.valueToCode(block, 'ARGNAME',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = _esp8266WebServerName + '.arg(' + argName + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_webserver_arg_num'] = function(block) {
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = _esp8266WebServerName + '.args()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_webserver_arg_by_num'] = function(block) {
  var num = Blockly.Arduino.valueToCode(
    block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = _esp8266WebServerName + '.arg(' + num + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_webserver_key_by_num'] = function(block) {
  var num = Blockly.Arduino.valueToCode(
    block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = _esp8266WebServerName + '.argName(' + num + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_webserver_on2'] = function(block) {
  var funcName = block.getFieldValue('FUNCNAME');
  if(funcName == '') {
    var func = [];
    func.push('void _NULL_HANDLER() {}');
    funcName = Blockly.Arduino.addFunction(
        '_NULL_HANDLER', func.join('\n'));      
  }
  else {
    funcName = Blockly.Arduino.variableDB_.getName(
      funcName, Blockly.Procedures.NAME_TYPE);
  }
  var _esp8266WebServerName = Blockly.Arduino.variableDB_.getName(
    "_esp8266WebServer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var path = block.getFieldValue('PATH');  
  var code = _esp8266WebServerName + '.on("' + path + '", ' + funcName + ');\n';      
  return code;
};

Blockly.Arduino['esp8266_http_get'] = function(block) {
  var url = Blockly.Arduino.valueToCode(block, 'URL',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var _clientName = Blockly.Arduino.variableDB_.getName(
    "_httpClient",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addVariable('_httpClient', 'FlagHTTPClient ' + _clientName +';', false);
  
  var func = [];
  func.push('int _httpGET(String url) {');
  func.push('  ' + _clientName + '.end();');
  func.push('  ' + _clientName + '.begin(url);');
  func.push('  ' + _clientName + '.setTimeout(30000);');
  func.push('  return ' + _clientName + '.GET();');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
    '_httpGET', func.join('\n'));      

  Blockly.Arduino.addInclude('esp8266_','#include <ESP8266WiFi.h>');
  Blockly.Arduino.addInclude('httpclient','#include <FlagHTTPClient.h>');

  var code = funcName + '(' + url + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_http_get_response'] = function(block) {
  var _clientName = Blockly.Arduino.variableDB_.getName(
    "_httpClient",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var code = _clientName + '.getString()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_urlencode'] = function(block) {
  var content = Blockly.Arduino.valueToCode(
    block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '';

  Blockly.Arduino.addInclude('urlencode','#include <FlagURLEncode.h>');
  var code = 'urlencode(String(' + content + '))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_urldecode'] = function(block) {
  var content = Blockly.Arduino.valueToCode(
    block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '';

  Blockly.Arduino.addInclude('urlencode','#include <FlagURLEncode.h>');
  var code = 'urldecode(String(' + content + '))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp8266_sta_multi'] = function(block) {
  var ssid = Blockly.Arduino.valueToCode(block, 'SSID',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var pinCode = Blockly.Arduino.valueToCode(block, 'PINCODE',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var _wifiMultiName = Blockly.Arduino.variableDB_.getName(
    "_wifiMulti",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addVariable('_wifiMulti', 'ESP8266WiFiMulti ' + _wifiMultiName +';', false);
  var code = _wifiMultiName + '.addAP(' + ssid + ', ' + pinCode + ');\n';
  Blockly.Arduino.addInclude('_wifiMulti', '#include <ESP8266WiFiMulti.h>');
  return code;
};

Blockly.Arduino['esp8266_sta_run'] = function(block) {
  var _wifiMultiName = Blockly.Arduino.variableDB_.getName(
    "_wifiMulti",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  
  var code = _wifiMultiName + '.run();\n';      
  return code;
};
