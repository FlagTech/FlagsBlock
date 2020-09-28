/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino TM1637 7-seg LEDs blocks.
 *     TM1637 7-seg LEDs library docs: https://github.com/avishorp/TM1637
 *
 * TODO: There are more functions that can be added:
 *       https://github.com/avishorp/TM1637
 */
'use strict';

goog.provide('Blockly.Arduino.TM1637');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['TM1637_setup'] = function(block) {
  var objName = block.getFieldValue('OBJNAME');
  var ledId = Blockly.Arduino.variableDB_.getName(
    objName, 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var clkPin = Blockly.Arduino.valueToCode(block, "CLK_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var dioPin = Blockly.Arduino.valueToCode(block, "DIO_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var ledVarCode = 'TM1637Display ' + ledId + '(' + clkPin + ',' + dioPin + ');';

  Blockly.Arduino.reservePin(block, clkPin,
        Blockly.Arduino.PinTypes.OUTPUT, 'TM1637');
  Blockly.Arduino.reservePin(block, dioPin,
        Blockly.Arduino.PinTypes.OUTPUT, 'TM1637');

  Blockly.Arduino.addInclude('TM1637_','#include <TM1637Display.h>');
  Blockly.Arduino.addVariable(objName, ledVarCode, true);
  var code = '';
  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['TM1637_clear'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = ledId + '.clear();\n';

  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['TM1637_setbrightness'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var brightness = block.getFieldValue('BRIGHTNESS');

  var code = ledId + '.setBrightness(' + brightness + ');\n';

  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['TM1637_SHOWNUMDEC'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var colon = (block.getFieldValue('COLON') == 'TRUE');
  var padding = (block.getFieldValue('PADDING') == 'TRUE');
  var num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var pos = Blockly.Arduino.valueToCode(block, 'POSITION', Blockly.Arduino.ORDER_ATOMIC);
  var digits = Blockly.Arduino.valueToCode(block, 'DIGITS', Blockly.Arduino.ORDER_ATOMIC);
  var colonShift = '(0x40 << ((' + pos + ') > 1 ? 0 : (' + pos + ')))';
  var code = colon ? 
    (ledId + '.showNumberDecEx(' + num + ', ' + colonShift + ', ' + padding + ', ' + digits + ', ' + pos + ');\n') : 
    (ledId + '.showNumberDec(' + num + ', ' + padding + ', ' + digits + ', ' + pos + ');\n');

  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['TM1637_DELETE'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var pos = Blockly.Arduino.valueToCode(block, 'POSITION', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addVariable('_TM1637_BLANK', "uint8_t _TM1637_BLANK[] = { 0x00 };", true);
  var code = ledId + '.setSegments(_TM1637_BLANK, 1, ' + pos + ');\n';

  return code;
};
