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

goog.provide('Blockly.Arduino.IFTTT');

goog.require('Blockly.Arduino');

Blockly.Arduino['ifttt_event'] = function(block) {
  var name = Blockly.Arduino.valueToCode(block, 'NAME',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var apiKey = Blockly.Arduino.valueToCode(block, 'APIKEY',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var val1 = Blockly.Arduino.valueToCode(block, 'VALUE1',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var val2 = Blockly.Arduino.valueToCode(block, 'VALUE2',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var val3 = Blockly.Arduino.valueToCode(block, 'VALUE3',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';

  Blockly.Arduino.addInclude('ifttt','#include <FlagIFTTT.h>');

  var code = "(fireIFTTTEvent(" + name + ", " + apiKey + 
    ", String(" + val1 + 
    "), String(" + val2 + 
    "), String(" + val3 +  ")) == 200)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

