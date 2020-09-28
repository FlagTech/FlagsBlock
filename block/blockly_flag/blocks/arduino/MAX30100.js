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
 *       https://github.com/oxullo/Arduino-MAX30100/blob/master
 */
'use strict';

goog.provide('Blockly.Blocks.MAX30100');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.MAX30100.HUE = 0;

Blockly.Blocks['MAX30100_setup'] = {
  /**
   * Block for setting the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MAX30100_SETUP,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_MAX30100_SETUP_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.MAX30100.HUE
    });
  }
};

Blockly.Blocks['MAX30100_getSpO2'] = {
  /**
   * Block for getting the value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MAX30100_GETSPO2,
      "output": Blockly.Types.NUMBER.output,
      "tooltip": Blockly.Msg.ARD_MAX30100_GETSPO2_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.MAX30100.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['MAX30100_getir'] = {
  /**
   * Block for getting the ir value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MAX30100_GETIR,
      "output": Blockly.Types.NUMBER.output,
      "tooltip": Blockly.Msg.ARD_MAX30100_GETIR_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.MAX30100.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['MAX30100_getred'] = {
  /**
   * Block for getting the redlight value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MAX30100_GETRED,
      "output": Blockly.Types.NUMBER.output,
      "tooltip": Blockly.Msg.ARD_MAX30100_GETRED_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.MAX30100.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
