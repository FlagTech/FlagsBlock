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

goog.provide('Blockly.Blocks.I2CLCD');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.I2CLCD.HUE = 200;

Blockly.Blocks['I2CLCD_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_I2CLCD_SETUP_MSG,
      "args0": [
        {
          "type": "field_number", 
          "name": "I2C_ADDR", 
          "align":"RIGHT",
          "value": 39
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_I2CLCD_SETUP_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal',
      "colour": Blockly.Blocks.I2CLCD.HUE
    });
  }
};

Blockly.Blocks['I2CLCD_printLine'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG,
      "args0": [
        {
          "type": "field_dropdown", 
          "name": "ROW", 
          "options": [['0','0'],['1','1']],
          "align":"RIGHT"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.I2CLCD.HUE,
      "tooltip": Blockly.Msg.ARD_I2CLCD_PRINTLINE_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['I2CLCD_move'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_I2CLCD_MOVE_MSG,
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
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.I2CLCD.HUE,
      "tooltip": Blockly.Msg.ARD_I2CLCD_MOVE_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['I2CLCD_clear'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_I2CLCD_CLEAR_MSG,
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.I2CLCD.HUE,
      "tooltip": Blockly.Msg.ARD_I2CLCD_CLEAR_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['I2CLCD_print'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_I2CLCD_PRINT_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "CONTENT"
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.I2CLCD.HUE,
      "tooltip": Blockly.Msg.ARD_I2CLCD_PRINT_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['I2CLCD_backlightOn'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_MSG,
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.I2CLCD.HUE,
      "tooltip": Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['I2CLCD_backlightOff'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_MSG,
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.I2CLCD.HUE,
      "tooltip": Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};
