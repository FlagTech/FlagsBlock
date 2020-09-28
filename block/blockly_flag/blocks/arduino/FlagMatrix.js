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

goog.provide('Blockly.Blocks.FLAGMATRIX');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.FLAGMATRIX.HUE = 200;

Blockly.Blocks['FLAGMATRIX_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_SETUP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "DATA_PIN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "CLK_PIN",
          "check": "Number",
          "align": "RIGHT"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_SETUP_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal',
      "colour": Blockly.Blocks.FLAGMATRIX.HUE
    });
  }
};

Blockly.Blocks['FLAGMATRIX_clear'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_CLEAR_MSG,
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
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_CLEAR_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_dot'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_DOT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "COLOR",
          "check": "Number",
          "align": "RIGHT"
        },        
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
        },        
        {
          "type": "input_value", 
          "name": "DRAW",
          "check": "Number",
          "align": "RIGHT"
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_DOT_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_newdot'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_NEWDOT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "COLOR",
          "check": "Number",
          "align": "RIGHT"
        },        
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
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_NEWDOT_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_row'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_ROW_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "COLOR",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "ROW",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "DATA",
          "check": "Number",
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_ROW_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_newrow'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_NEWROW_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "COLOR",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "ROW",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "DATA",
          "check": "Number",
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_NEWROW_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_intensity'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_INTENSITY_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "INTENSITY",
          "check": "Number",
          "align": "RIGHT"
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_INTENSITY_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_sun'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_SUN_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "DELAY",
          "check": "Number",
          "align": "RIGHT"
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_SUN_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_rain'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_RAIN_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "DELAY",
          "check": "Number",
          "align": "RIGHT"
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_RAIN_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_cloud'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_CLOUD_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "DELAY",
          "check": "Number",
          "align": "RIGHT"
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_CLOUD_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_marquee'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_MARQUEE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "CONTENT",
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_MARQUEE_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_scroll'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_SCROLL_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "DELAY",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "COLOR",
          "check": "Number",
          "align": "RIGHT"
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_SCROLL_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};

Blockly.Blocks['FLAGMATRIX_char'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGMATRIX_CHAR_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "CHAR",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "COLOR",
          "check": "Number",
          "align": "RIGHT"
        },        
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.FLAGMATRIX.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGMATRIX_CHAR_TIP,
      "helpUrl": 'https://github.com/marcmerlin/NewLiquidCrystal'
    }); 
  }  
};
