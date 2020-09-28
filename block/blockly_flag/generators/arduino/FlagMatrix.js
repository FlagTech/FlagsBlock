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

goog.provide('Blockly.Arduino.FLAGMATRIX');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['FLAGMATRIX_setup'] = function(block) {
  var objName = block.getFieldValue('OBJNAME');
  var ledId = Blockly.Arduino.variableDB_.getName(
    objName, 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var dataPin = Blockly.Arduino.valueToCode(block, "DATA_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var clkPin = Blockly.Arduino.valueToCode(block, "CLK_PIN", Blockly.Arduino.ORDER_ATOMIC);
  var ledVarCode = 'MLED ' + ledId + '(4, ' + dataPin + ',' + clkPin + ');';

  Blockly.Arduino.reservePin(block, dataPin,
        Blockly.Arduino.PinTypes.OUTPUT, 'FLAGMATRIX');
  Blockly.Arduino.reservePin(block, clkPin,
        Blockly.Arduino.PinTypes.OUTPUT, 'FLAGMATRIX');
  
  Blockly.Arduino.addInclude('FLAGMATRIX_','#include <FlagMatrix.h>');
  Blockly.Arduino.addVariable(objName, ledVarCode, true);
  var lcdSetupCode = ledId + '.begin();';
  Blockly.Arduino.addSetup('FLAGMATRIX_FLAG', lcdSetupCode, true);

  var code = '';
  return code;
};

Blockly.Arduino['FLAGMATRIX_clear'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = ledId + '.clear();\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_newdot'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
  var x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.newDot(' + color + ', ' + x + ', ' + y + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_newrow'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
  var row = Blockly.Arduino.valueToCode(block, 'ROW', Blockly.Arduino.ORDER_ATOMIC);
  var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
  var code = ledId + '.newSetRow(' + color + ',' + row + ', ' + data + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_dot'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
  var x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var draw = Blockly.Arduino.valueToCode(block, 'DRAW', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.dot(' + color + ', ' + x + ', ' + y + ', ' + draw + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_row'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
  var row = Blockly.Arduino.valueToCode(block, 'ROW', Blockly.Arduino.ORDER_ATOMIC);
  var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
  // data = data.substr(3, data.length - 4)
  var code = ledId + '.setRow(' + color + ',' + row + ', ' + data + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_intensity'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var intensity = Blockly.Arduino.valueToCode(block, 'INTENSITY', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.setIntensity(' + intensity + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_sun'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var delay = Blockly.Arduino.valueToCode(block, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.toSun(' + delay + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_rain'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var delay = Blockly.Arduino.valueToCode(block, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.toRain(' + delay + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_cloud'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var delay = Blockly.Arduino.valueToCode(block, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.toCloud(' + delay + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_marquee'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var content = Blockly.Arduino.valueToCode(block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.changeStr(String(' + content + '));\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_scroll'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var delay = Blockly.Arduino.valueToCode(block, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
  var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.scroll(' + delay + ', ' + color + ');\n';

  return code;
};

Blockly.Arduino['FLAGMATRIX_char'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var content = Blockly.Arduino.valueToCode(block, 'CHAR', Blockly.Arduino.ORDER_ATOMIC);
  var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = ledId + '.oneChar((String(' + content + ')).charAt(0), ' + color + ');\n';

  return code;
};
