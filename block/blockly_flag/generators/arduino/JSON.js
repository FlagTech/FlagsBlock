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

goog.provide('Blockly.Arduino.JSON');

goog.require('Blockly.Arduino');

Blockly.Arduino['json_parse'] = function(block) {
  var jsonStr = Blockly.Arduino.valueToCode(block, 'JSON_STR',
    Blockly.Arduino.ORDER_ATOMIC) || '""';

  Blockly.Arduino.addInclude('JSON','#include <ArduinoJson.h>');
  var rootName = Blockly.Arduino.variableDB_.getName(
    "_jsonRoot",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addVariable('JSONROOT', 'JsonVariant ' + rootName +';', false);
  var buffName = Blockly.Arduino.variableDB_.getName(
    "_jsonBuffer",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addVariable('JSONBUFFER', 'DynamicJsonBuffer ' + buffName +';', false);

  var code = [];
  // code.push('DynamicJsonBuffer _jsonBuffer;');
  // code.push(rootName + ' = '+ '_jsonBuffer.parse(' + jsonStr + ");");
  code.push(buffName + '.clear();');
  code.push(rootName + ' = '+ buffName + '.parse(' + jsonStr + ");");
  code.push("");
  
  return code.join("\n");
};

Blockly.Arduino['json_success'] = function(block) {
  var rootName = Blockly.Arduino.variableDB_.getName(
    "_jsonRoot",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = rootName + '.success()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['json_node_str'] = function(block) {
  Blockly.Arduino.addInclude('FLAGJSON','#include <FlagJSON.h>');
  var path = Blockly.Arduino.valueToCode(block, 'PATH',
    Blockly.Arduino.ORDER_ATOMIC) || '""';
  var rootName = Blockly.Arduino.variableDB_.getName(
    "_jsonRoot",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  return ["flagJSON.getJSONDataAsString(" + rootName + ", " + path + ")", Blockly.Arduino.ORDER_ATOMIC];
};
