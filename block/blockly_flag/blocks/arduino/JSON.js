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

goog.provide('Blockly.Blocks.JSON');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.JSON.HUE = 160;

Blockly.Blocks['json_parse'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_JSON_PARSE_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "JSON_STR",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_JSON_PARSE_TIP,
      "colour": Blockly.Blocks.JSON.HUE,
      "helpUrl": 'https://arduinojson.org/'
    });
  }
};

Blockly.Blocks['json_success'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_JSON_SUCCESS_MSG,
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.JSON.HUE,
      "tooltip": Blockly.Msg.ARD_JSON_SUCCESS_TIP,
      "helpUrl": 'https://arduinojson.org/'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
}

Blockly.Blocks['json_node_str'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_JSON_NODE_STR_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PATH",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
      ],
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.JSON.HUE,
      "tooltip": Blockly.Msg.ARD_JSON_NODE_STR_TIP,
      "helpUrl": 'https://arduinojson.org/'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  },
}
