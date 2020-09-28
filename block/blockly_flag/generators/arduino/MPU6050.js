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

goog.provide('Blockly.Arduino.MPU6050');

goog.require('Blockly.Arduino');

function __initMPU6050(block) {
  var mpu6050DeclareCode = 
    'MPU6050 __flagMPU6050;';
  var mpu6050SetupCode = '__flagMPU6050.initialize();\n';

  Blockly.Arduino.addInclude('MPU6050_flag', 
    '#include <I2Cdev.h>\n' + 
    '#include <MPU6050.h>');
  Blockly.Arduino.addDeclaration('MPU6050_flag', mpu6050DeclareCode);
  Blockly.Arduino.addSetup('MPU6050_flag', mpu6050SetupCode, false);

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

Blockly.Arduino['MPU6050_getacc'] = function(block) {
  var axis = block.getFieldValue("AXIS");
  var code = '(int(__flagMPU6050.getAcceleration' + axis + '() * 2.0 / 32.768))'; 
  __initMPU6050(block);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MPU6050_getrot'] = function(block) {
    var axis = block.getFieldValue("AXIS");
    var code = '(int(__flagMPU6050.getRotation' + axis + '() * 250.0 / 32768))'; 
    __initMPU6050(block);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
  