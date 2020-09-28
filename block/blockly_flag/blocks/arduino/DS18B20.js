'use strict';

goog.provide('Blockly.Blocks.DS18B20');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.DS18B20.HUE = 300;

Blockly.Blocks['DS18B20_readTemp'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DS18B20_READTEMP_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "DATAPIN",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DS18B20_READTEMP_TIP,
      "helpUrl": 'https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806',
      "colour": Blockly.Blocks.DS18B20.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  }
};