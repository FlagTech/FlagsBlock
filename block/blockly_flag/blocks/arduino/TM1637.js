/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the TM1637 7-Segmemt LEDs.
 *     The libraries can be found at:
 *     https://github.com/avishorp/TM1637
 *
 */
'use strict';

goog.provide('Blockly.Blocks.TM1637');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.TM1637.HUE = 200;

Blockly.Blocks['TM1637_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TM1637_SETUP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "CLK_PIN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "DIO_PIN",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TM1637_SETUP_TIP,
      "helpUrl": 'https://github.com/avishorp/TM1637',
      "colour": Blockly.Blocks.TM1637.HUE
    });
  }
};

Blockly.Blocks['TM1637_clear'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TM1637_CLEAR_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TM1637_CLEAR_TIP,
      "colour": Blockly.Blocks.TM1637.HUE
    });
  }
};

Blockly.Blocks['TM1637_setbrightness'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TM1637_SETBRIGHTNESS_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "field_number", 
          "name": "BRIGHTNESS", 
          "min": 0,
          "max": 7,
          "align":"RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TM1637_SETBRIGHTNESS_TIP,
      "colour": Blockly.Blocks.TM1637.HUE
    });
  }
};

Blockly.Blocks['TM1637_SHOWNUMDEC'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TM1637_SHOWNUMDEC_MSG,
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
        {
          "type": "input_value", 
          "name": "DIGITS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "POSITION",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "field_checkbox",
          "name": "PADDING",
          "checked": true
        },
        {
          "type": "field_checkbox",
          "name": "COLON",
          "checked": true
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.TM1637.HUE,
      "tooltip": Blockly.Msg.ARD_TM1637_SHOWNUMDEC_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialPrint'
    }); 
  }  
};

Blockly.Blocks['TM1637_DELETE'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TM1637_DELETE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "POSITION",
          "check": "Number",
          "align": "RIGHT"
        },
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.TM1637.HUE,
      "tooltip": Blockly.Msg.ARD_TM1637_DELETE_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialPrint'
    }); 
  }  
};
