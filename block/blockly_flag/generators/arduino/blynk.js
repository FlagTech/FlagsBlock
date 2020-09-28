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

goog.provide('Blockly.Arduino.Blynk');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['Blynk_setup'] = function(block) {
  var ssid = Blockly.Arduino.valueToCode(block, 'SSID',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var pinCode = Blockly.Arduino.valueToCode(block, 'PINCODE',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var authToken = Blockly.Arduino.valueToCode(block, 'AUTH',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var code = 'Blynk.begin(' + authToken + ', ' + ssid + ', ' + pinCode + ');\n';

  Blockly.Arduino.addInclude('blynk_','#include <BlynkSimpleEsp8266.h>');
  return code;
};

Blockly.Arduino['Blynk_run'] = function(block) {
  return 'Blynk.run();\n';      
};

Blockly.Arduino['Blynk_bind'] = function(block) {
  var funcName = block.getFieldValue('FUNCNAME');
  var vPin = block.getFieldValue('VPIN');
  var func = [];
  func.push('BLYNK_READ(' + vPin + ') {');
  if(funcName == '') {
    func.push('  Blynk.virtualWrite(' + vPin +', ' + '0);');
  }
  else {
    funcName = Blockly.Arduino.variableDB_.getName(
      funcName, Blockly.Procedures.NAME_TYPE);
    func.push('  Blynk.virtualWrite(' + vPin +', ' + funcName + '());');
  }
  func.push('}')

  Blockly.Arduino.addDeclaration('Blynk_' + vPin, func.join('\n'));

  return '';
};

Blockly.Arduino['Blynk_bind_get'] = function(block) {
  var indentSpaceSize = 2;

  var statement = Blockly.Arduino.statementToCode(block, 'DO');//.replace(/^\s\s/, '').replace(/\n\s\s/g, '\n') || '  \n';
  var vPin = block.getFieldValue('VPIN');
  var code = 'BLYNK_WRITE(' + vPin + ') {' + '\n' + statement +'}\n';
  Blockly.Arduino.addDeclaration('Blynk_' + vPin, code);
  return '';
}; 

Blockly.Arduino['Blynk_param'] = function(block) {
  var num = block.getFieldValue("NUM");
  var code = 'param[' + num + '].asInt()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
