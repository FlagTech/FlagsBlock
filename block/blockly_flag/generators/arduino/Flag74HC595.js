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

goog.provide('Blockly.Arduino.FLAG74HC595');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['FLAG74HC595_setup'] = function(block) {
  var objName = block.getFieldValue('OBJNAME');
  var ledId = Blockly.Arduino.variableDB_.getName(
    objName, 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var sdiPin = Blockly.Arduino.valueToCode(block, "SDI_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var sclkPin = Blockly.Arduino.valueToCode(block, "SCLK_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var loadPin = Blockly.Arduino.valueToCode(block, "LOAD_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var ledVarCode = 'Flag74HC595 ' + ledId + '(' + sdiPin + ',' + sclkPin + ',' + loadPin + ');';

  Blockly.Arduino.reservePin(block, sdiPin,
        Blockly.Arduino.PinTypes.OUTPUT, 'FLAG74HC595');
  Blockly.Arduino.reservePin(block, sclkPin,
        Blockly.Arduino.PinTypes.OUTPUT, 'FLAG74HC595');
  Blockly.Arduino.reservePin(block, loadPin,
        Blockly.Arduino.PinTypes.OUTPUT, 'FLAG74HC595');
  
  Blockly.Arduino.addInclude('FLAG74HC595_','#include <Flag74HC595.h>');
  Blockly.Arduino.addVariable(objName, ledVarCode, true);
  var lcdSetupCode = ledId + '.begin();';
  Blockly.Arduino.addSetup('FLAG74HC595_FLAG', lcdSetupCode, true);

  var code = '';
  return code;
};

Blockly.Arduino['FLAG74HC595_clear'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = ledId + '.clear();\n';

  return code;
};

Blockly.Arduino['FLAG74HC595_print'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.sevenSegWrite(' + num + ');\n';

  return code;
};

// Blockly.Arduino['FLAG74HC595_set'] = function(block) {
//   var ledId = Blockly.Arduino.variableDB_.getName(
//     block.getFieldValue('OBJNAME'), 
//     Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
//   var digit2 = Blockly.Arduino.valueToCode(block, 'DIGIT2', Blockly.Arduino.ORDER_ATOMIC);
//   var digit1 = Blockly.Arduino.valueToCode(block, 'DIGIT1', Blockly.Arduino.ORDER_ATOMIC);
//   digit2 = digit2.substr(3, digit2.length - 4)
//   digit1 = digit1.substr(3, digit1.length - 4)
//   var code = ledId + '.custom(0b' + digit2 + ', 0b' + digit1 + ');\n';

//   return code;
// };

Blockly.Arduino['FLAG74HC595_set'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var digit2 = Blockly.Arduino.valueToCode(block, 'DIGIT2', Blockly.Arduino.ORDER_ATOMIC);
  var digit1 = Blockly.Arduino.valueToCode(block, 'DIGIT1', Blockly.Arduino.ORDER_ATOMIC);
  var func = [];
  func.push('int _bitstrToInt(String s) {');
  func.push('  int r = 0;');
  func.push('  for(int i = 0;i < s.length();i++) {');
  func.push("    r = r * 2 + ((s[i] == '1') ? 1 : 0);");
  func.push('  }');
  func.push('  return r;');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
    '_bitstrToInt', func.join('\n'));      

  func = [];
  func.push('void _custom(String s1, String s2) {');
  func.push('  ' + ledId + '.custom(' + funcName + '(s1), ' + funcName + '(s2));');
  func.push('}');
  func.push('');
  func.push('void _custom(int i1, int i2) {');
  func.push('  ' + ledId + '.custom(i1, i2);');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
    '_custom', func.join('\n'));      
  
  var code = '_custom(' + digit2 + ', ' + digit1 + ');\n';

  return code;
};
