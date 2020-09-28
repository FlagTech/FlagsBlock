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

goog.provide('Blockly.Blocks.dancerobot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.dancerobot.HUE = 315;

var _PCA9685pins = [
  ['0', '0'],
  ['1', '1'],
  ['2', '2'],
  ['3', '3'],
  ['4', '4'],
  ['5', '5'],
  ['6', '6'],
  ['7', '7'],
  ['8', '8'],
  ['9', '9'],
  ['10', '10'],
  ['11', '11'],
  ['12', '12'],
  ['13', '13'],
  ['14', '14'],
  ['15', '15'],
];

// Modified by Mee
Blockly.Blocks['dancerobot_use'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_USE_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "RFPIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        },        
        {
          "type": "field_dropdown",
          "name": "LFPIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        },        
        {
          "type": "field_dropdown",
          "name": "RLPIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        },        
        {
          "type": "field_dropdown",
          "name": "LLPIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_USE_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
  ,
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'RFPIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'LFPIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'RLPIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'LLPIN', 'digitalPins');
  }
};

Blockly.Blocks['dancerobot_trim'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_TRIM_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "RF_ANGLE",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "LF_ANGLE",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "RL_ANGLE",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "LL_ANGLE",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_TRIM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_getRFtrim'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_GETRFTRIM_MSG,
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_GETRFTRIM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoRead',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['dancerobot_getLFtrim'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_GETLFTRIM_MSG,
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_GETLFTRIM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoRead',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
Blockly.Blocks['dancerobot_getRLtrim'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_GETRLTRIM_MSG,
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_GETRLTRIM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoRead',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
Blockly.Blocks['dancerobot_getLLtrim'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_GETLLTRIM_MSG,
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_GETLLTRIM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoRead',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['dancerobot_savetrim'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_SAVETRIM_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_SAVETRIM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_restoretrim'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_RESTORETRIM_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_RESTORETRIM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_pos'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_POS_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "RF_ANGLE",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "LF_ANGLE",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "RL_ANGLE",
          "check": "Number",
          "align": "RIGHT"
        },        
        {
          "type": "input_value", 
          "name": "LL_ANGLE",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_POS_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_bpm'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_BPM_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "BPM",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_BPM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoRead',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['dancerobot_setbpm'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_SETBPM_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "BPM",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_SETBPM_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_getmspb'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_GETMSPB_MSG,
      "output": Blockly.Types.DECIMAL.output,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_GETMSPB_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoRead',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['dancerobot_delay'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_DELAY_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_DELAY_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_primera_parte'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_PRIMERA_PARTE_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_PRIMERA_PARTE_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_lateral_fuerte'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_LATERAL_FUERTE_MSG,
      "args0": [
        {
          "type": "field_dropdown", 
          "name": "SIDE", 
          "options": Blockly.Msg.SIDE,
          "align":"RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }

      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_LATERAL_FUERTE_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_crusaito'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_CRUSAITO_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_CRUSAITO_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_segunda_parte'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_SEGUNDA_PARTE_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_SEGUNDA_PARTE_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_moonWalk'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_MOON_WALK_MSG,
      "args0": [
        {
          "type": "field_dropdown", 
          "name": "SIDE", 
          "options": Blockly.Msg.SIDE,
          "align":"RIGHT"
        },
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_MOON_WALK_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};


Blockly.Blocks['dancerobot_flapping'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_FLAPPING_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_FLAPPING_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_drunk'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_DRUNK_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_DRUNK_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_kick'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_KICK_MSG,
      "args0": [
        {
          "type": "field_dropdown", 
          "name": "SIDE", 
          "options": Blockly.Msg.SIDE,
          "align":"RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_KICK_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_walk'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_WALK_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_WALK_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_backyard'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_BACKYARD_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_BACKYARD_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_goingUp'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_GOING_UP_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_GOING_UP_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_noGravity'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_NO_GRAVITY_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_NO_GRAVITY_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_pasitos'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_PASITOS_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_PASITOS_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_patada'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_PATADA_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_PATADA_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_twist'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_TWIST_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_TWIST_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_upDown'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_UP_DOWN_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_UP_DOWN_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_saludo'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_SALUDO_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_SALUDO_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_swing'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_SWING_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_SWING_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_reverencia1'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_REVERENCIA1_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_REVERENCIA1_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_reverencia2'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_REVERENCIA2_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_REVERENCIA2_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

Blockly.Blocks['dancerobot_run'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_DANCEROBOT_RUN_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STEPS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value", 
          "name": "TEMPO",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_DANCEROBOT_RUN_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.dancerobot.HUE
    });
  }
};

// Blockly.Blocks['dancerobot_moonWalkRight'] = {
//   /**
//    * Block for setting the speed of the serial connection.
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "message0": Blockly.Msg.ARD_DANCEROBOT_MOON_WALK_RIGHT_MSG,
//       "args0": [
//         {
//           "type": "field_variable",
//           "name": "OBJNAME",
//           "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
//         },
//         {
//           "type": "input_value", 
//           "name": "STEPS",
//           "check": "Number",
//           "align": "RIGHT"
//         },
//         {
//           "type": "input_value", 
//           "name": "TEMPO",
//           "check": "Number",
//           "align": "RIGHT"
//         }
//       ],
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "tooltip": Blockly.Msg.ARD_DANCEROBOT_MOON_WALK_RIGHT_TIP,
//       "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
//       "colour": Blockly.Blocks.dancerobot.HUE
//     });
//   }
// };

// Blockly.Blocks['dancerobot_moonWalkLeft'] = {
//   /**
//    * Block for setting the speed of the serial connection.
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "message0": Blockly.Msg.ARD_DANCEROBOT_MOON_WALK_LEFT_MSG,
//       "args0": [
//         {
//           "type": "field_variable",
//           "name": "OBJNAME",
//           "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
//         },
//         {
//           "type": "input_value", 
//           "name": "STEPS",
//           "check": "Number",
//           "align": "RIGHT"
//         },
//         {
//           "type": "input_value", 
//           "name": "TEMPO",
//           "check": "Number",
//           "align": "RIGHT"
//         }
//       ],
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "tooltip": Blockly.Msg.ARD_DANCEROBOT_MOON_WALK_LEFT_TIP,
//       "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
//       "colour": Blockly.Blocks.dancerobot.HUE
//     });
//   }
// };


// Blockly.Blocks['dancerobot_kickLeft'] = {
//   /**
//    * Block for setting the speed of the serial connection.
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "message0": Blockly.Msg.ARD_DANCEROBOT_KICK_LEFT_MSG,
//       "args0": [
//         {
//           "type": "field_variable",
//           "name": "OBJNAME",
//           "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
//         },
//         {
//           "type": "input_value", 
//           "name": "TEMPO",
//           "check": "Number",
//           "align": "RIGHT"
//         }
//       ],
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "tooltip": Blockly.Msg.ARD_DANCEROBOT_KICK_LEFT_TIP,
//       "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
//       "colour": Blockly.Blocks.dancerobot.HUE
//     });
//   }
// };

// Blockly.Blocks['dancerobot_kickRight'] = {
//   /**
//    * Block for setting the speed of the serial connection.
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "message0": Blockly.Msg.ARD_DANCEROBOT_KICK_RIGHT_MSG,
//       "args0": [
//         {
//           "type": "field_variable",
//           "name": "OBJNAME",
//           "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
//         },
//         {
//           "type": "input_value", 
//           "name": "TEMPO",
//           "check": "Number",
//           "align": "RIGHT"
//         }
//       ],
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "tooltip": Blockly.Msg.ARD_DANCEROBOT_KICK_RIGHT_TIP,
//       "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
//       "colour": Blockly.Blocks.dancerobot.HUE
//     });
//   }
// };
