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
 *       http://arduino.cc/en/Reference/Serial
 */
'use strict';

goog.provide('Blockly.Blocks.IFTTT');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.IFTTT.HUE = 188;

Blockly.Blocks['ifttt_event'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IFTTT_EVENT_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "NAME",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "input_value",
          "name": "APIKEY",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "input_value",
          "name": "VALUE1",
        },
        {
          "type": "input_value",
          "name": "VALUE2",
        },
        {
          "type": "input_value",
          "name": "VALUE3",
        },
      ],
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.IFTTT.HUE,
      "tooltip": Blockly.Msg.ARD_IFTTT_EVENT_TIP,
      "helpUrl": ''
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
};
