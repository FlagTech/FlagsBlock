'use strict';

goog.provide('Blockly.Blocks.FLAGFFT');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.FLAGFFT.HUE = 250;

Blockly.Blocks['FLAGFFT_fft'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGFFT_FFT_MSG,
      "args0": [
        {
          "type": "field_number", 
          "name": "SAMPLES", 
          "check": Blockly.Types.DECIMAL.checkList
        },
        {
          "type": "field_number", 
          "name": "FREQ", 
          "check": Blockly.Types.DECIMAL.checkList
        },
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.analogPins
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "tooltip": Blockly.Msg.ARD_FLAGFFT_FFT_TIP,
      "helpUrl": 'https://github.com/kosme/arduinoFFT',
      "colour": Blockly.Blocks.FLAGFFT.HUE
    });
  }
};

Blockly.Blocks['FLAGFFT_major'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGFFT_MAJOR_MSG,
      "output": Blockly.Types.DOUBLE.output,
      "tooltip": Blockly.Msg.ARD_FLAGFFT_MAJOR_TIP,
      "helpUrl": 'https://github.com/kosme/arduinoFFT',
      "colour": Blockly.Blocks.FLAGFFT.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DOUBLE;
  }
};

Blockly.Blocks['FLAGFFT_adjMajor'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGFFT_ADJMAJOR_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "START",
          "check": Blockly.Types.DECIMAL.checkList,
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "END",
          "check": Blockly.Types.DECIMAL.checkList,
          "align": "RIGHT"
        },
      ],
      "output": Blockly.Types.DOUBLE.output,
      "tooltip": Blockly.Msg.ARD_FLAGFFT_ADJMAJOR_TIP,
      "helpUrl": 'https://github.com/kosme/arduinoFFT',
      "colour": Blockly.Blocks.FLAGFFT.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DOUBLE;
  }
};

Blockly.Blocks['FLAGFFT_vReal'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGFFT_VREAL_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX",
          "check": Blockly.Types.DECIMAL.checkList,
          "align": "RIGHT"
        },
      ],
      "output": Blockly.Types.DOUBLE.output,
      "tooltip": Blockly.Msg.ARD_FLAGFFT_VREAL_TIP,
      "helpUrl": 'https://github.com/kosme/arduinoFFT',
      "colour": Blockly.Blocks.FLAGFFT.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DOUBLE;
  }
};