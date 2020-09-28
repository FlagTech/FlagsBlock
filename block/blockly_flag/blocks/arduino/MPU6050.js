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

goog.provide('Blockly.Blocks.MPU6050');

goog.require('Blockly.Blocks');
//goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.MPU6050.HUE = 280;

Blockly.Blocks['MPU6050_getacc'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MPU6050_GETACC_MSG,
      "args0": [
        {
          "type": "field_dropdown", 
          "name": "AXIS", 
          "options": [['X','X'],['Y','Y'],['Z','Z']],
          "align":"RIGHT"
        }
      ],
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_MPU6050_GETACC_TIP,
      "helpUrl": 'https://playground.arduino.cc/Main/MPU-6050/',
      "colour": Blockly.Blocks.MPU6050.HUE
    });
  },
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  }

};

Blockly.Blocks['MPU6050_getrot'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "message0": Blockly.Msg.ARD_MPU6050_GETROT_MSG,
        "args0": [
          {
            "type": "field_dropdown", 
            "name": "AXIS", 
            "options": [['X','X'],['Y','Y'],['Z','Z']],
            "align":"RIGHT"
          }
        ],
        "output": Blockly.Types.DECIMAL.output,
        "tooltip": Blockly.Msg.ARD_MPU6050_GETROT_TIP,
        "helpUrl": 'https://playground.arduino.cc/Main/MPU-6050/',
        "colour": Blockly.Blocks.MPU6050.HUE
      });
    },
    getBlockType: function() {
      return Blockly.Types.DECIMAL;
    }
  
  };