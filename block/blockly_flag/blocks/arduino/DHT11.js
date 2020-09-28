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

goog.provide('Blockly.Blocks.DHT11');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.DHT11.HUE = 300;

Blockly.Blocks['DHT11_readTemp'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DHT11_READTEMP_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "DATAPIN",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DHT11_READTEMP_TIP,
      "helpUrl": 'http://playground.arduino.cc/Main/DHT11Lib',
      "colour": Blockly.Blocks.DHT11.HUE
    });
  }
};

Blockly.Blocks['DHT11_readHumi'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DHT11_READHUMI_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "DATAPIN",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DHT11_READTEMP_TIP,
      "helpUrl": 'http://playground.arduino.cc/Main/DHT11Lib',
      "colour": Blockly.Blocks.DHT11.HUE
    });
  }
};
