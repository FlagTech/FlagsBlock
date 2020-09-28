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

goog.provide('Blockly.Blocks.ANN');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ANN.HUE = 0;

// Modified by SAM
Blockly.Blocks['onn_use'] = {
  /**
   * Block for setting the onelayer neural network.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ONN_USE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.ONN_DEFAULT_NAME
        },
        {
          "type": "field_dropdown",
          "name": "AFUNC",
          "options": [['NONE','NONE'],['RELU','RELU'],['CROSSIN','CROSSIN']]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ONN_USE_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /**
   * @this Blockly.Block
   */
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['tnn_use'] = {
  /**
   * Block for setting the onelayer neural network.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TNN_USE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.TNN_DEFAULT_NAME
        },
        {
          "type": "field_dropdown",
          "name": "AFUNC1",
          "options": [['NONE','NONE'],['RELU','RELU'],['CROSSIN','CROSSIN']]
        },
        {
          "type": "field_dropdown",
          "name": "AFUNC2",
          "options": [['NONE','NONE'],['RELU','RELU'],['CROSSIN','CROSSIN']]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TNN_USE_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /**
   * @this Blockly.Block
   */
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['rnn_use'] = {
  /**
   * Block for setting the onelayer neural network.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_RNN_USE_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.RNN_DEFAULT_NAME
        },
        {
          "type": "input_value",
          "name": "RNN_weight",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_RNN_USE_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /**
   * @this Blockly.Block
   */
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['onn_initran'] = {
  /**
   * Block for setting the onelayer neural network.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ONN_INITRAN_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.ONN_DEFAULT_NAME
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ONN_INITRAN_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /**
   * @this Blockly.Block
   */
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['tnn_initran'] = {
  /**
   * Block for setting the onelayer neural network.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TNN_INITRAN_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.TNN_DEFAULT_NAME
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TNN_INITRAN_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /**
   * @this Blockly.Block
   */
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['ann_set'] = {
  /**
   * Block for setting the onelayer neural network.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ANN_SET_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.ONN_DEFAULT_NAME
        },
        {
          "type": "field_dropdown",
          "name": "NNVAR",
          "options": Blockly.Msg.ANN_VAR
        },
        {
          "type": "input_value",
          "name": "NNVARNUM",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ANN_SET_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /**
   * @this Blockly.Block
   */
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['ann_get'] = {
  /**
   * Block for getting the redlight value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ANN_GET_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.ONN_DEFAULT_NAME
        },
        {
          "type": "field_dropdown",
          "name": "NNVAR",
          "options": Blockly.Msg.ANN_VAR
        }
      ],
      "output": Blockly.Types.DOUBLE.output,
      "tooltip": Blockly.Msg.ARD_ANN_GET,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DOUBLE;
  },
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['onn_train'] = {
  /**
   * Block for getting the redlight value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ONN_TRAIN_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.ONN_DEFAULT_NAME
        }
      ],
      "message1": Blockly.Msg.ARD_ONN_TRAINDATA_MSG,
      "args1": [
        {
          "type": "input_value",
          "name": "TDATA",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
          "align": "RIGHT"
        }
      ],
      "message2": Blockly.Msg.ARD_ONN_TRAINLEARN_MSG,
      "args2": [
        {
          "type": "input_value",
          "name": "LRATE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "LTIMES",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ONN_TRAIN_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['tnn_train'] = {
  /**
   * Block for getting the redlight value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TNN_TRAIN_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.TNN_DEFAULT_NAME
        }
      ],
      "message1": Blockly.Msg.ARD_TNN_TRAINDATA_MSG,
      "args1": [
        {
          "type": "input_value",
          "name": "TDATA",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
          "align": "RIGHT"
        }
      ],
      "message2": Blockly.Msg.ARD_TNN_TRAINLEARN_MSG,
      "args2": [
        {
          "type": "input_value",
          "name": "LRATE",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "LTIMES",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_TNN_TRAIN_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['onn_getoutput'] = {
  /**
   * Block for getting the redlight value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ONN_GETOUTPUT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.ONN_DEFAULT_NAME
        }
      ],
      "message1": Blockly.Msg.ARD_ANN_GETOUTPUTIN_MSG,
      "args1": [
        {
          "type": "input_value",
          "name": "INPUT",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "output": Blockly.Types.DOUBLE.output,
      "tooltip": Blockly.Msg.ARD_ONN_GETOUTPUT_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DOUBLE;
  },
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['tnn_getoutput'] = {
  /**
   * Block for getting the redlight value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_TNN_GETOUTPUT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.TNN_DEFAULT_NAME
        }
      ],
      "message1": Blockly.Msg.ARD_ANN_GETOUTPUTIN_MSG,
      "args1": [
        {
          "type": "input_value",
          "name": "INPUT",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "output": Blockly.Types.DOUBLE.output,
      "tooltip": Blockly.Msg.ARD_TNN_GETOUTPUT_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DOUBLE;
  },
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['rnn_getoutput'] = {
  /**
   * Block for getting the redlight value of the PulseOximeter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_RNN_GETOUTPUT_MSG,
      "args0": [
        {
          "type": "field_variable",
          "name": "OBJNAME",
          "variable": Blockly.Msg.RNN_DEFAULT_NAME
        }
      ],
      "message1": Blockly.Msg.ARD_ANN_GETOUTPUTIN_MSG,
      "args1": [
        {
          "type": "input_value",
          "name": "INPUT",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "output": Blockly.Types.DOUBLE.output,
      "tooltip": Blockly.Msg.ARD_RNN_GETOUTPUT_TIP,
      "helpUrl": '',
      "colour": Blockly.Blocks.ANN.HUE
    });
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DOUBLE;
  },
  getVarType: function() {
    return Blockly.Types.ARRAY;
  }
};
