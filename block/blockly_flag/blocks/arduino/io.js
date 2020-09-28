/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
'use strict';

goog.provide('Blockly.Blocks.io');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.io.HUE = 250;

Blockly.Blocks['io_digitalwrite'] = {
  /**
   * Block for creating a 'set pin' to a state.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DIGITALWRITE_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        },
        {
          "type": "input_value",
          "name": "STATE",
          "check": ["Boolean", "Number"]
        }
      ],
      "inputsInline": false,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_DIGITALWRITE_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/DigitalWrite'
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

Blockly.Blocks['io_digitalwrite_var'] = {
  /**
   * Block for creating a 'set pin' to a state.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DIGITALWRITE_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "STATE",
          "check": Blockly.Types.NUMBER.checkList
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_DIGITALWRITE_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/DigitalWrite'
    });
  }
};

Blockly.Blocks['io_digitalread'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DIGITALREAD_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }
      ],
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_DIGITALREAD_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/DigitalRead'
    });
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.BOOLEAN;
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

Blockly.Blocks['io_digitalread_var'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DIGITALREAD_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_DIGITALREAD_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/DigitalRead'
    });
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.BOOLEAN;
  }
};

Blockly.Blocks['io_builtin_led'] = {
  /**
   * Block for setting built-in LED to a state.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendValueInput('STATE')
      .appendField(Blockly.Msg.ARD_BUILTIN_LED)
      .appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.selected.builtinLed), 'BUILT_IN_LED')
      .appendField(Blockly.Msg.ARD_WRITE_TO)
      .setCheck(["Boolean", "Number", Blockly.Types.DECIMAL.output]);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_BUILTIN_LED_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'BUILT_IN_LED', 'builtinLed');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.BOOLEAN;
  },
};

Blockly.Blocks['io_analogwrite'] = {
  /**
   * Block for creating a 'set pin' to an analogue value.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ANALOGWRITE_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.pwmPins
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": Blockly.Types.NUMBER.output
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_ANALOGWRITE_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/AnalogWrite'
    });
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'pwmPins');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  },
};

Blockly.Blocks['io_analogwrite_var'] = {
  /**
   * Block for creating a 'set pin' to an analogue value.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ANALOGWRITE_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": Blockly.Types.NUMBER.checkList
        }
      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_ANALOGWRITE_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/AnalogWrite'
    });
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_analogread'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ANALOGREAD_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.analogPins
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_ANALOGREAD_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/AnalogRead'
    });
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};

Blockly.Blocks['io_analogread_var'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ANALOGREAD_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_ANALOGREAD_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/AnalogRead'
    });
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_highlow'] = {
  /**
   * Block for creating a pin state.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl('http://arduino.cc/en/Reference/Constants');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
      .appendField(
      new Blockly.FieldDropdown([[Blockly.Msg.ARD_HIGH, 'HIGH'], [Blockly.Msg.ARD_LOW, 'LOW']]),
      'STATE');
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip(Blockly.Msg.ARD_HIGHLOW_TIP);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.BOOLEAN;
  }
};

Blockly.Blocks['io_pulsein'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_PULSEIN_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PULSETYPE",
          "check": ["Boolean", "Number"]
        },
        {
          "type": "field_dropdown",
          "name": "PULSEPIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }
      ],
      "output": 'Number',
      "inputsInline": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_PULSE_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/PulseIn'
    });
    // this.appendDummyInput()
    //     .appendField(Blockly.Msg.ARD_PULSEREAD);
    // this.appendValueInput("PULSETYPE")
    //     .setCheck(["Boolean", "Number"]);
    // this.appendDummyInput()
    //     .appendField(Blockly.Msg.ARD_PULSEON)
    //     .appendField(new Blockly.FieldDropdown(
    //         Blockly.Arduino.Boards.selected.digitalPins), "PULSEPIN");
    // this.setOutput(true);
    // this.setInputsInline(true);
    // this.setColour(Blockly.Blocks.io.HUE);
    // this.setTooltip(Blockly.Msg.ARD_PULSE_TIP);
    // this.setHelpUrl('https://www.arduino.cc/en/Reference/PulseIn');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_pulsetimeout'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_PULSETIMEOUT_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PULSETYPE",
          "check": ["Boolean", "Number"]
        },
        {
          "type": "field_dropdown",
          "name": "PULSEPIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        },
        {
          "type": "input_value",
          "name": "TIMEOUT",
          "check": Blockly.Types.NUMBER.output
        },
      ],
      "output": 'Number',
      "inputsInline": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_PULSETIMEOUT_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/PulseIn'
    });
    // this.appendDummyInput()
    //     .appendField(Blockly.Msg.ARD_PULSEREAD);
    // this.appendValueInput("PULSETYPE")
    //     .setCheck(["Boolean", "Number"]);
    // this.appendDummyInput()
    //     .appendField(Blockly.Msg.ARD_PULSEON)
    //     .appendField(new Blockly.FieldDropdown(
    //         Blockly.Arduino.Boards.selected.digitalPins), "PULSEPIN");
    // this.appendDummyInput()
    //     .appendField(Blockly.Msg.ARD_PULSETIMEOUT);
    // this.appendValueInput('TIMEOUT')
    //     .setCheck(Blockly.Types.NUMBER.output);
    // this.appendDummyInput()
    //     .appendField(Blockly.Msg.ARD_PULSETIMEOUT_MS);
    // this.setOutput(true);
    // this.setInputsInline(true);
    // this.setColour(Blockly.Blocks.io.HUE);
    // this.setTooltip(Blockly.Msg.ARD_PULSETIMEOUT_TIP);
    // this.setHelpUrl('https://www.arduino.cc/en/Reference/PulseIn');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_pulsetimeout_var'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_PULSETIMEOUT_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PULSETYPE",
          "check": ["Boolean", "Number"]
        },
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "TIMEOUT",
          "check": Blockly.Types.NUMBER.output
        },
      ],
      "output": 'Number',
      "inputsInline": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_PULSETIMEOUT_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/PulseIn'
    });
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_allpins'] = {
  init: function () {
    this.setHelpUrl('http://www.arduino.cc/en/reference/board');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_PIN)
      .appendField(
      new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins),
      'PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip('');
  },
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['io_pwmpins'] = {
  init: function () {
    this.setHelpUrl('http://www.arduino.cc/en/reference/board');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_PIN)
      .appendField(
      new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins),
      'PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip('');
  },
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'pwmPins');
  }
};

Blockly.Blocks['io_analogpins'] = {
  init: function () {
    this.setHelpUrl('http://www.arduino.cc/en/reference/board');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_PIN)
      .appendField(
      new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins),
      'PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip('');
  },
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};


//------------------------------------------------------------
// added by Mee
//------------------------------------------------------------

Blockly.Blocks['io_input_pullup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_INPUT_PULLUP_MSG,
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
      "tooltip": Blockly.Msg.ARD_INPUT_PUTTUP_TIP,
      "colour": Blockly.Blocks.io.HUE
    });
  },
  getVarType: function () {
    return Blockly.Types.ARRAY;
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

Blockly.Blocks['io_pin_name'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IO_PIN_NAME_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "field_variable",
          "name": "PIN_NAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_IO_PIN_NAME_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerial',
      "colour": Blockly.Blocks.io.HUE
    });
  }
  ,
  getVarType: function () {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['io_set_name'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_IO_SET_NAME_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "PIN_NAME",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_IO_SET_NAME_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerial',
      "colour": Blockly.Blocks.io.HUE
    });
  }
  ,
  getVarType: function () {
    return Blockly.Types.ARRAY;
  }
};
