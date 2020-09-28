/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the Servo library.
 *     The Arduino Servo functions can be found in
 *     http://arduino.cc/en/reference/servo
 *
 * TODO: Add angle selector instead of block input.
 */

 'use strict';

goog.provide('Blockly.Blocks.APDS9930');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.APDS9930.HUE = 280;

// Modified by Mee
Blockly.Blocks['apds9930_use'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_APDS9930_USE_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_APDS9930_USE_TIP,
      "helpUrl": 'https://github.com/Depau/APDS9930',
      "colour": Blockly.Blocks.APDS9930.HUE
    });
  }
};

Blockly.Blocks['apds9930_light'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_APDS9930_LIGHT_MSG,
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_APDS9930_LIGHT_TIP,
      "helpUrl": 'https://github.com/Depau/APDS9930',
      "colour": Blockly.Blocks.APDS9930.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  }
};

Blockly.Blocks['apds9930_proximity'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_APDS9930_PROXIMITY_MSG,
      "output": Blockly.Types.NUMBER.output,
      "tooltip": Blockly.Msg.ARD_APDS9930_PROXIMITY_TIP,
      "helpUrl": 'https://github.com/Depau/APDS9930',
      "colour": Blockly.Blocks.APDS9930.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
