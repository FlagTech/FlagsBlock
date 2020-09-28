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

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');
//goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ADXL345.HUE = 280;

Blockly.Blocks['ADXL345_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ADXL345_SETUP_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ADXL345_SETUP_TIP,
      "helpUrl": 'https://learn.adafruit.com/adxl345-digital-accelerometer/assembly-and-wiring',
      "colour": Blockly.Blocks.ADXL345.HUE
    });
  }
};

Blockly.Blocks['ADXL345_offset'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ADXL345_OFFSET_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "X",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "Y",
          "check": "Number",
          "align": "RIGHT"
        }
        ,
        {
          "type": "input_value", 
          "name": "Z",
          "check": "Number",
          "align": "RIGHT"
        }
      ],"inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ADXL345_OFFSET_TIP,
      "helpUrl": 'https://learn.adafruit.com/adxl345-digital-accelerometer/assembly-and-wiring',
      "colour": Blockly.Blocks.ADXL345.HUE
    });
  }
};

Blockly.Blocks['ADXL345_get'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ADXL345_GET_MSG,
      "args0": [
        {
          "type": "field_dropdown", 
          "name": "AXIS", 
          "options": [['X','0'],['Y','1'],['Z','2']],
          "align":"RIGHT"
        }
      ],
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_ADXL345_GET_TIP,
      "helpUrl": 'http://playground.arduino.cc/Main/DHT11Lib',
      "colour": Blockly.Blocks.ADXL345.HUE
    });
  },
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  }

};