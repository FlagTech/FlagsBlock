/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the TTP229 library.
 *     The Arduino TTP229 functions can be found in
 *     https://github.com/arduino12/ttp229-arduino
 *
 * TODO: Add angle selector instead of block input.
 */
'use strict';

goog.provide('Blockly.Blocks.TTP229');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.TTP229.HUE = 300;

Blockly.Blocks['TTP229_use'] = {
  /**
   * Block for setting TTP229 pins.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TTP229_USE_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SCL_PIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        },
        {
          "type": "field_dropdown",
          "name": "SDO_PIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TTP229_USE_TIP,
      "helpUrl": 'https://github.com/arduino12/ttp229-arduino',
      "colour": Blockly.Blocks.TTP229.HUE
    });
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'SCL_PIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'SDO_PIN', 'digitalPins');
    },
};

Blockly.Blocks['TTP229_get'] = {
  /**
   * Block for setting the touched key of the TTP229 modulw.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TTP229_GET_MSG,
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_TTP229_GET_TIP,
      "helpUrl": 'https://github.com/arduino12/ttp229-arduino',
      "colour": Blockly.Blocks.TTP229.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

