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

goog.provide('Blockly.Blocks.softwareserial');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.softwareserial.HUE = 160;

Blockly.Blocks['softwareserial_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value", 
          "name": "INPUT_PIN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "OUTPUT_PIN",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "field_dropdown", 
          "name": "SPEED", 
          "options": Blockly.Arduino.Boards.selected.serialSpeed,
          "align":"RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerial',
      "colour": Blockly.Blocks.softwareserial.HUE
    });
  }
};

Blockly.Blocks['softwareserial_print'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
        {
          "type": "field_checkbox",
          "name": "NEW_LINE",
          "checked": true
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.serial.HUE,
      "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialPrint'
    }); 
  }  
};

Blockly.Blocks['softwareserial_available'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.serial.HUE,
      "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
}

Blockly.Blocks['softwareserial_read'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_SOFTWARESERIAL_READ_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        }
      ],
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.serial.HUE,
      "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_READ_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}
