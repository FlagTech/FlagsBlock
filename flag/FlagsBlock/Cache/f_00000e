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
// here the "stripe" is typo of "strip"
goog.provide('Blockly.Blocks.flagledstripe');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.flagledstripe.HUE = 180;

Blockly.Blocks['flagledstripe_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_SETUP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "LEDPIN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "field_number", 
          "name": "NUM", 
          "align":"RIGHT",
          "min": 1,
          "value": 15
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_SETUP_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_length'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_LENGTH_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "NUM",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_LENGTH_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_getlength'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_GETLENGTH_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.flagledstripe.HUE,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_GETLENGTH_TIP,
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['flagledstripe_setbrightness'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_SETBRIGHTNESS_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "field_number", 
          "name": "BRIGHTNESS", 
          "align":"RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_SETBRIGHTNESS_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_show'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_SHOW_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_SHOW_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_clear'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_CLEAR_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_CLEAR_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};


Blockly.Blocks['flagledstripe_setpixelcolor'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_SETPIXELCOLOR_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "NUM",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_SETPIXELCOLOR_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_showall'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_SHOWALL_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_SHOWALL_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_breathing'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_BREATHING_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_BREATHING_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_fadeinout'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_FADEINOUT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_FADEINOUT_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_theaterchase'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_THEATERCHASE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_THEATERCHASE_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_runninglights'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_RUNNINGLIGHTS_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_RUNNINGLIGHTS_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_sparkle'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_SPARKLE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_SPARKLE_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_meteorlamp'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_METEORLAMP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "LEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_METEORLAMP_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_strobe'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_STROBE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TIMES",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "PAUSE",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": false,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_STROBE_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_cylonbounce'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_CYLONBOUNCE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "RED",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "GREEN",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "BLUE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "EYESIZE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "DELAY",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": false,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_CYLONBOUNCE_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_rgbloop'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_RGBLOOP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_RGBLOOP_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_theaterchaserainbow'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_THEATERCHASERAINBOW_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_THEATERCHASERAINBOW_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_rainbow'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_RAINBOW_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_RAINBOW_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_rainbowcycle'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_RAINBOWCYCLE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        },
        {
          "type": "input_value", 
          "name": "INTERVAL",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_RAINBOWCYCLE_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

Blockly.Blocks['flagledstripe_stop'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_FLAGLEDSTRIPE_STOP_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": "ledStrip"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_FLAGLEDSTRIPE_STOP_TIP,
      "colour": Blockly.Blocks.flagledstripe.HUE
    });
  }
};

