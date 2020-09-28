/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: http://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.WeMosMotorShield');

goog.require('Blockly.Arduino');

Blockly.Arduino['wemos_motor_move'] = function (block) {
  var i2cPins = Blockly.Arduino.Boards.selected.i2cPins.Wire;
  for (var i = 0; i < i2cPins.length; i++) {
    Blockly.Arduino.reservePin(block, i2cPins[i][1],
      Blockly.Arduino.PinTypes.I2C, 'I2C ' + i2cPins[i][0]);
  }
  
  var lSpeed = Blockly.Arduino.valueToCode(
    block, 'L_MOTOR', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var rSpeed = Blockly.Arduino.valueToCode(
    block, 'R_MOTOR', Blockly.Arduino.ORDER_ATOMIC) || '0';

  Blockly.Arduino.addInclude('WeMosMotorShield', '#include <FlagMotor.h>');

  var code = 'flagMotor.move(' + lSpeed + ', ' + rSpeed + ');\n';
  return code;
};

Blockly.Arduino['wemos_motor_check_idle'] = function (block) {
  Blockly.Arduino.addInclude('WeMosMotorShield', '#include <FlagMotor.h>');
  return "flagMotor.checkIdle();\n";
};

