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

goog.provide('Blockly.Arduino.ADXL345');

goog.require('Blockly.Arduino');

function __initADXL345(block) {
  var adxl345DeclareCode = 
    'ADXL345 __flagADXL345 = ADXL345();\n' + 
    'int __ADXL345xyz[3];';
  var adxl345SetupCode = 
    '__flagADXL345.powerOn();\n' +
    '  __flagADXL345.setRangeSetting(16);\n' +
    '  __flagADXL345.setFullResBit(true);\n';

  Blockly.Arduino.addInclude('ADXL345_flag', '#include <SparkFun_ADXL345.h>');
  Blockly.Arduino.addDeclaration('ADXL345_flag', adxl345DeclareCode);
  Blockly.Arduino.addSetup('ADXL345_flag', adxl345SetupCode, false);

  var i2cPins = Blockly.Arduino.Boards.selected.i2cPins.Wire;
  for (var i = 0; i < i2cPins.length; i++) {
    Blockly.Arduino.reservePin(block, i2cPins[i][1],
        Blockly.Arduino.PinTypes.I2C, 'I2C ' + i2cPins[i][0]);
  }
}

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */

Blockly.Arduino['ADXL345_setup'] = function(block) {
  __initADXL345(block);
  return '';
};

Blockly.Arduino['ADXL345_get'] = function(block) {
  var axis = block.getFieldValue("AXIS");
  var func = [];
  func.push('int ' + Blockly.Arduino.DEF_FUNC_NAME + '(int axis) {');
  func.push('  __flagADXL345.readAccel(__ADXL345xyz);');
  func.push('  return (__ADXL345xyz[axis] * 3.9);');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
      '__getAccel', func.join('\n'));

  var code = funcName + '(' + axis + ')'; 
  __initADXL345(block);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ADXL345_offset'] = function(block) {
  var x = Blockly.Arduino.valueToCode(
    block, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y = Blockly.Arduino.valueToCode(
    block, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var z = Blockly.Arduino.valueToCode(
    block, 'Z', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = '__flagADXL345.setAxisOffset(' + x +',' + y + ',' + z + ');\n';
  __initADXL345(block);
  return code;
};
