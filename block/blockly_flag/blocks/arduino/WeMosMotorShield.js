/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the Arduino serial communication functions.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: There are more function that can be added:
 *       https://learn.adafruit.com/adxl345-digital-accelerometer/assembly-and-wiring
 */
'use strict';

goog.provide('Blockly.Blocks.WeMosMotorShield');

goog.require('Blockly.Blocks');
//goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.WeMosMotorShield.HUE = 60;

Blockly.Blocks['wemos_motor_move'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_WEMOS_MOTOR_MOVE_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "L_MOTOR",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "R_MOTOR",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_WEMOS_MOTOR_MOVE_TIP,
      "helpUrl": 'https://wiki.wemos.cc/products:d1_mini_shields:motor_shield',
      "colour": Blockly.Blocks.WeMosMotorShield.HUE
    });
  }
};

Blockly.Blocks['wemos_motor_check_idle'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_WEMOS_MOTOR_CHECK_IDLE_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_WEMOS_MOTOR_CHECK_IDLE_TIP,
      "helpUrl": 'https://wiki.wemos.cc/products:d1_mini_shields:motor_shield',
      "colour": Blockly.Blocks.WeMosMotorShield.HUE
    });
  }
};
