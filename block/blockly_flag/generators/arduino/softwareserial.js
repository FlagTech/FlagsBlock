/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino serial blocks.
 *     Arduino Serial library docs: https://www.arduino.cc/en/Reference/Serial
 *
 * TODO: There are more functions that can be added:
 *       http://arduino.cc/en/Reference/Serial
 */
'use strict';

goog.provide('Blockly.Arduino.softwareserial');

goog.require('Blockly.Arduino');


/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['softwareserial_print'] = function(block) {
  var serialId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var content = Blockly.Arduino.valueToCode(
    block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var newline = (block.getFieldValue('NEW_LINE') == 'TRUE');

  var code = newline ? 
    (serialId + '.println(' + content + ');\n') : 
    (serialId + '.print(' + content + ');\n');

  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['softwareserial_setup'] = function(block) {
  var objName = block.getFieldValue('OBJNAME');
  var serialId = Blockly.Arduino.variableDB_.getName(
    objName, 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var serialSpeed = block.getFieldValue('SPEED');
  var inputPin = Blockly.Arduino.valueToCode(block, "INPUT_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var outputPin = Blockly.Arduino.valueToCode(block, "OUTPUT_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var serialVarCode = 'SoftwareSerial ' + serialId + '(' + inputPin + ',' + outputPin + ');';
  var serialSetupCode = serialId + '.begin(' + serialSpeed + ');';

  Blockly.Arduino.reservePin(block, inputPin,
        Blockly.Arduino.PinTypes.SERIAL, 'SOFTWARE SERIAL');
  Blockly.Arduino.reservePin(block, outputPin,
        Blockly.Arduino.PinTypes.SERIAL, 'SOFTWARE SERIAL');

  Blockly.Arduino.addInclude('softwareserial_','#include <SoftwareSerial.h>');
  Blockly.Arduino.addVariable(objName, serialVarCode, true);
  Blockly.Arduino.addSetup('softwareserial_' + serialId, serialSetupCode, true);
  var code = '';
  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['softwareserial_available'] = function(block) {
  var serialId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = serialId + '.available()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['softwareserial_read'] = function(block) {
  var serialId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var func = [];
  func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(SoftwareSerial *serial) {');
  func.push('  String content = "";');
  func.push('  content += (char)serial->read();');
  func.push('  return content;');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
      'getSoftwareSerialChar', func.join('\n'));

  var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_NONE) || '""';
  var code = funcName + '(&' + serialId + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
