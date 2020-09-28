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

goog.provide('Blockly.Blocks.Blynk');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.Blynk.HUE = 188;

var _vPins = [];
for(var i = 0;i < 32;i++) {
  _vPins.push(['V' + i, "V" + i]);
}

var _paramNums = [];
for(var i = 0;i <= 30;i++) {
  _paramNums.push(['' + i, "" + i]);
}

Blockly.Blocks['Blynk_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_BLYNK_SETUP_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "SSID",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "input_value",
          "name": "PINCODE",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "input_value",
          "name": "AUTH",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_BLYNK_SETUP_TIP,
      "colour": Blockly.Blocks.Blynk.HUE,
      "helpUrl": 'https://github.com/blynkkk/blynk-library'
    });
  }
};

Blockly.Blocks['Blynk_run'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_BLYNK_RUN_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_BLYNK_RUN_TIP,
      "colour": Blockly.Blocks.Blynk.HUE,
      "helpUrl": 'https://github.com/blynkkk/blynk-library'
    });
  }
};

Blockly.Blocks['Blynk_bind'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_BLYNK_BIND_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FUNCNAME",
          "options": function() {
            var funcs = (Blockly.Procedures.allProcedures(Blockly.mainWorkspace)[1]);
            var funcList = [];
            for(var i = 0;i < funcs.length;i++) {
              if(funcs[i][2] == true && funcs[i][1].length == 0) {
                funcList.push([
                  funcs[i][0], 
                  funcs[i][0]
                ]);
              }
            }
            if(funcList.length == 0) {
              return [[Blockly.Msg.ARD_ESP8266_WEBSERVER_NO_HANDLER_MSG, '']];
            }
            return funcList;
          }
        },
        {
          "type": "field_dropdown",
          "name": "VPIN",
          "options": _vPins
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_BLYNK_BIND_TIP,
      "helpUrl": 'https://github.com/blynkkk/blynk-library',
      "colour": Blockly.Blocks.Blynk.HUE,
    });
  }
};

Blockly.Blocks['Blynk_bind_get'] = {
  helpUrl: null,
  init: function() {
    this.setColour(Blockly.Blocks.Blynk.HUE);
    this.appendDummyInput()
    .appendField('Blynk ')
    .appendField(new Blockly.FieldDropdown(_vPins), 'VPIN')
    .appendField(Blockly.Msg.ARD_BLYNK_BIND_GET_MSG + Blockly.Msg.COLON);
    this.appendStatementInput('DO');
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.ARD_BLYNK_BIND_GET_TIP);
  }
}; 

Blockly.Blocks['Blynk_param'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_BLYNK_PARAM_MSG,
      "args0": [
        {
          "type": "field_dropdown", 
          "name": "NUM",
          "options": _paramNums,
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "tooltip": Blockly.Msg.ARD_BLYNK_PARAM_TIP,
      "helpUrl": 'https://github.com/blynkkk/blynk-library',
      "colour": Blockly.Blocks.Blynk.HUE
    });
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }

};