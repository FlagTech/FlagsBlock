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

goog.provide('Blockly.Blocks.tcpclient');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.tcpclient.HUE = 188;

Blockly.Blocks['tcpclient_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TCPCLIENT_SETUP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value", 
          "name": "IP",
        },
        {
          "type": "input_value", 
          "name": "PORT",
          "check": "Number",
        }
      ],
      "output": Blockly.Types.BOOLEAN.output,
      "tooltip": Blockly.Msg.ARD_TCPLCIENT_SETUP_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/client-class.html',
      "colour": Blockly.Blocks.tcpclient.HUE
    });
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
};

Blockly.Blocks['tcpclient_print'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TCPCLIENT_PRINT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.tcpclient.HUE,
      "tooltip": Blockly.Msg.ARD_TCPCLIENT_PRINT_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/client-class.html'
    }); 
  }  
};

Blockly.Blocks['tcpclient_available'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TCPCLIENT_AVAILABLE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.tcpclient.HUE,
      "tooltip": Blockly.Msg.ARD_TCPCLIENT_AVAILABLE_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/client-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
}

Blockly.Blocks['tcpclient_read'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TCPCLIENT_READ_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        }
      ],
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.tcpclient.HUE,
      "tooltip": Blockly.Msg.ARD_TCPCLIENT_READ_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/client-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

Blockly.Blocks['tcpclient_connected'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TCPCLIENT_CONNECTED_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        }
      ],
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.tcpclient.HUE,
      "tooltip": Blockly.Msg.ARD_TCPCLIENT_CONNECTED_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/client-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
}

Blockly.Blocks['tcpclient_stop'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TCPCLIENT_STOP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.tcpclient.HUE,
      "tooltip": Blockly.Msg.ARD_TCPCLIENT_STOP_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/client-class.html'
    }); 
  }  
};
