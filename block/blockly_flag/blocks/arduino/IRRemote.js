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

goog.provide('Blockly.Blocks.IRRemote');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.IRRemote.HUE = 280;

// Modified by Mee
Blockly.Blocks['irremote_send_use'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IRREMOTE_SEND_USE_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_IRREMOTE_SEND_USE_TIP,
      "helpUrl": 'https://github.com/markszabo/IRremoteESP8266',
      "colour": Blockly.Blocks.IRRemote.HUE
    });
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['irremote_send_nec'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IRREMOTE_SEND_NEC_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "CMD",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_IRREMOTE_SEND_NEC_TIP,
      "helpUrl": 'https://github.com/markszabo/IRremoteESP8266',
      "colour": Blockly.Blocks.IRRemote.HUE
    });
  }
};

Blockly.Blocks['irremote_recv_use'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IRREMOTE_RECV_USE_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_IRREMOTE_RECV_USE_TIP,
      "helpUrl": 'https://github.com/markszabo/IRremoteESP8266',
      "colour": Blockly.Blocks.IRRemote.HUE
    });
  },
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['irremote_recv_decoded'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IRREMOTE_RECV_DECODED_MSG,
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.IRRemote.HUE,
      "tooltip": Blockly.Msg.ARD_IRREMOTE_RECV_DECODED_TIP,
      "helpUrl": 'https://github.com/markszabo/IRremoteESP8266',
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
}

Blockly.Blocks['irremote_recv_result'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IRREMOTE_RECV_RESULT_MSG,
      "output": Blockly.Types.TEXT.output,
      "tooltip": Blockly.Msg.ARD_IRREMOTE_RECV_RESULT_TIP,
      "helpUrl": 'https://github.com/markszabo/IRremoteESP8266',
      "colour": Blockly.Blocks.IRRemote.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
};

Blockly.Blocks['irremote_recv_resume'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IRREMOTE_RECV_RESUME_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_IRREMOTE_RECV_RESUME_TIP,
      "helpUrl": 'https://github.com/markszabo/IRremoteESP8266',
      "colour": Blockly.Blocks.IRRemote.HUE
    });
  }
};
