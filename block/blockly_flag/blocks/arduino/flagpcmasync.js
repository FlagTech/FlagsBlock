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

goog.provide('Blockly.Blocks.flagpcmasync');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.flagpcmasync.HUE = 250;

Blockly.Blocks['flagpcmasync_startplay'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGPCMASYNC_STARTPLAY_MSG,
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "tooltip": Blockly.Msg.ARD_FLAGPCMASYNC_STARTPLAY_TIP,
      "helpUrl": 'https://github.com/damellis/PCM',
      "colour": Blockly.Blocks.flagpcmasync.HUE
    });
  },
};

Blockly.Blocks['flagpcmasync_updatesound'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGPCMASYNC_UPDATESOUND_MSG,
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "tooltip": Blockly.Msg.ARD_FLAGPCMASYNC_UPDATESOUND_TIP,
      "helpUrl": 'https://github.com/damellis/PCM',
      "colour": Blockly.Blocks.flagpcmasync.HUE
    });
  },
};

Blockly.Blocks['flagpcmasync_updateandchecksound'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGPCMASYNC_UPDATEANDCHECKSOUND_MSG,
      "output": Blockly.Types.BOOLEAN.output,
      "tooltip": Blockly.Msg.ARD_FLAGPCMASYNC_UPDATEANDCHECKSOUND_TIP,
      "helpUrl": 'https://github.com/damellis/PCM',
      "colour": Blockly.Blocks.flagpcmasync.HUE
    });
  }
};

Blockly.Blocks['flagpcmasync_stopplay'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGPCMASYNC_STOPPLAY_MSG,
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "tooltip": Blockly.Msg.ARD_FLAGPCMASYNC_STOPPLAY_TIP,
      "helpUrl": 'https://github.com/damellis/PCM',
      "colour": Blockly.Blocks.flagpcmasync.HUE
    });
  },
};

Blockly.Blocks['flagpcmasync_startplaybgm'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGPCMASYNC_STARTPLAYBGM_MSG,
      "args0": [
        {
          "type": "field_dropdown", 
          "name": "NUM", 
          "options": [['1','1'],['2','2'],['3','3']],
          "align":"RIGHT"
        },
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "tooltip": Blockly.Msg.ARD_FLAGPCMASYNC_STARTPLAYBGM_TIP,
      "helpUrl": 'https://github.com/damellis/PCM',
      "colour": Blockly.Blocks.flagpcmasync.HUE
    });
  },
};
