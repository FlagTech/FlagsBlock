/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Tone generation
 *     The Arduino function syntax can be found at
 *     https://www.arduino.cc/en/Reference/tone
 *
 */
'use strict';

goog.provide('Blockly.Blocks.tone');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.tone.HUE = 250;

Blockly.Blocks['io_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_SETTONE)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), "TONEPIN");
    this.appendValueInput("FREQUENCY")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_TONEFREQ);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.tone.HUE);
    this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/tone');
  },
  onchange: function() {
    var freq = Blockly.Arduino.valueToCode(this, "FREQUENCY", Blockly.Arduino.ORDER_ATOMIC)
    if (freq < 31 || freq > 65535) {
      this.setWarningText(Blockly.Msg.ARD_TONE_WARNING, 'io_tone');
    } else {
      this.setWarningText(null, 'io_tone');
    }
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_tone_var'] = {
  init: function() {
    this.appendValueInput("TONEPIN")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_SETTONE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_SETTONE_POSTFIX);
    this.appendValueInput("FREQUENCY")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_TONEFREQ);
    this.appendValueInput("DURATION")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_TONETIME);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.tone.HUE);
    this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/tone');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_tone_nummusic'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TONE_MUSIC,
      "args0": [
        {
          "type": "input_value", 
          "name": "TONEPIN", 
        },
        {
          "type": "input_value", 
          "name": "TONENUMMUSIC", 
        },
        {
          "type": "field_number", 
          "name": "TEMPOTIME"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TONE_MUSIC_TIP,
      "colour": Blockly.Blocks.tone.HUE,
      "helpUrl": 'https://zh.wikipedia.org/wiki/%E7%B0%A1%E8%AD%9C'
    });
  }
};

Blockly.Blocks['io_multitone'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MULTITONE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        },
        {
          "type": "input_value", 
          "name": "FREQ", 
          "check": Blockly.Types.DECIMAL.checkList
        },
        {
          "type": "input_value", 
          "name": "DURATION",
          "check": Blockly.Types.DECIMAL.checkList
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TONE_TIP,
      "colour": Blockly.Blocks.tone.HUE,
      "helpUrl": 'https://github.com/bhagman/Tone'
    });
  }
};

Blockly.Blocks['io_notone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_NOTONE)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), "TONEPIN");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.tone.HUE);
    this.setTooltip(Blockly.Msg.ARD_NOTONE_TIP);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/noTone');
  },
    /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_notone_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_NOTONE);
    this.appendValueInput("TONEPIN")
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_NOTONE_POSTFIX);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.tone.HUE);
    this.setTooltip(Blockly.Msg.ARD_NOTONE_TIP);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/noTone');
  },
    /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
