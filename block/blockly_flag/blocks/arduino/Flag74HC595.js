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

goog.provide('Blockly.Blocks.FLAG74HC595');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.FLAG74HC595.HUE = 200;

Blockly.Blocks['FLAG74HC595_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAG74HC595_SETUP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "SDI_PIN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "SCLK_PIN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "LOAD_PIN",
          "check": "Number",
          "align": "RIGHT"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAG74HC595_SETUP_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal',
      "colour": Blockly.Blocks.FLAG74HC595.HUE
    });
  }
};

Blockly.Blocks['FLAG74HC595_clear'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAG74HC595_CLEAR_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAG74HC595.HUE,
      "tooltip": Blockly.Msg.ARD_FLAG74HC595_CLEAR_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAG74HC595_print'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAG74HC595_PRINT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "NUM",
          "check": "Number",
          "align": "RIGHT"
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAG74HC595.HUE,
      "tooltip": Blockly.Msg.ARD_FLAG74HC595_PRINT_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAG74HC595_set'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAG74HC595_SET_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "DIGIT2",
        },        
        {
          "type": "input_value", 
          "name": "DIGIT1",
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAG74HC595.HUE,
      "tooltip": Blockly.Msg.ARD_FLAG74HC595_SET_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};
