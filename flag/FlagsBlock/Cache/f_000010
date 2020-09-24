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

goog.provide('Blockly.Blocks.ESP8266');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ESP8266.HUE = 188;

var _channels = [
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
];

Blockly.Blocks['esp8266_sta_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_STA_SETUP_MSG,
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
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_STA_SETUP_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-class.html'
    });
  }
};

Blockly.Blocks['esp8266_ap_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_AP_SETUP_MSG,
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
          "type": "field_dropdown", 
          "name": "CHANNEL",
          "options": _channels
        },
        {
          "type": "field_checkbox",
          "name": "HIDDEN",
          "checked": false
        }
      ],
      "inputsInline": true,
      "output": Blockly.Types.BOOLEAN.output,
      "tooltip": Blockly.Msg.ARD_ESP8266_AP_SETUP_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/soft-access-point-class.html'
    });
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
};

Blockly.Blocks['esp8266_wifi_ap_sta'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_AP_STA_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_AP_STA_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'http://links2004.github.io/Arduino/d3/d58/class_e_s_p8266_web_server.html'
    });
  }
};

Blockly.Blocks['esp8266_connected'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_CONNECTED_MSG,
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_CONNECTED_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
}

Blockly.Blocks['esp8266_localIP'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_LOCALIP_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_LOCALIP_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

Blockly.Blocks['esp8266_localMAC'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_LOCALMAC_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_LOCALMAC_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

Blockly.Blocks['esp8266_softAPIP'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_SOFTAPIP_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_SOFTAPIP_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

Blockly.Blocks['esp8266_softAPMAC'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_SOFTAPMAC_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_SOFTAPMAC_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

Blockly.Blocks['esp8266_webserver_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_SETUP_MSG,
      "args0": [
        {
          "type": "field_number", 
          "name": "PORT", 
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_SETUP_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'http://links2004.github.io/Arduino/d3/d58/class_e_s_p8266_web_server.html'
    });
  }
};

Blockly.Blocks['esp8266_webserver_secure_setup'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_SECURE_SETUP_MSG,
      "args0": [
        {
          "type": "field_number", 
          "name": "PORT", 
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_SECURE_SETUP_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'http://links2004.github.io/Arduino/d3/d58/class_e_s_p8266_web_server.html'
    });
  }
};

Blockly.Blocks['esp8266_webserver_handleclient'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_HANDLECLIENT_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_HANDLECLIENT_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'http://links2004.github.io/Arduino/d3/d58/class_e_s_p8266_web_server.html'
    });
  }
};

Blockly.Blocks['esp8266_webserver_on'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_ON_MSG,
      "args0": [
        {
          "type": "field_input", 
          "name": "FUNCNAME", 
        },
        {
          "type": "field_input", 
          "name": "PATH", 
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_ON_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'http://links2004.github.io/Arduino/d3/d58/class_e_s_p8266_web_server.html'
    });
  }
};

Blockly.Blocks['esp8266_webserver_send'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_SEND_MSG,
      "args0": [
        {
          "type": "input_value", 
          "name": "STATUS",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "MIMETYPE",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_SEND_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'http://links2004.github.io/Arduino/d3/d58/class_e_s_p8266_web_server.html'
    });
  }
};

Blockly.Blocks['esp8266_webserver_has_arg'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "args0": [
        {
          "type": "input_value", 
          "name": "ARGNAME",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        }
      ],
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_HAS_ARG_MSG,
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_HAS_ARG_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
}

Blockly.Blocks['esp8266_webserver_arg_by_name'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "args0": [
        {
          "type": "input_value", 
          "name": "ARGNAME",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        }
      ],
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_BY_NAME_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_BY_NAME_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

Blockly.Blocks['esp8266_webserver_arg_num'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_NUM_MSG,
      "output": Blockly.Types.DECIMAL.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_NUM_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
}

Blockly.Blocks['esp8266_webserver_arg_by_num'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "args0": [
        {
          "type": "input_value", 
          "name": "NUM",
          "check": "Number",
        }
      ],
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_BY_NUM_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_BY_NUM_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

Blockly.Blocks['esp8266_webserver_key_by_num'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "args0": [
        {
          "type": "input_value", 
          "name": "NUM",
          "check": "Number",
        }
      ],
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_KEY_BY_NUM_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_KEY_BY_NUM_TIP,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-class.html'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

// test
Blockly.Blocks['esp8266_webserver_on2'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_WEBSERVER_ON2_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FUNCNAME",
          "options": function() {
            var funcs = (Blockly.Procedures.allProcedures(Blockly.mainWorkspace)[0]);
            var funcList = [];
            for(var i = 0;i < funcs.length;i++) {
              if(funcs[i][2] == false && funcs[i][1].length == 0) {
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
          "type": "field_input", 
          "name": "PATH", 
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_WEBSERVER_ON2_TIP,
      "helpUrl": 'http://arduino.cc/en/Reference/ServoWrite',
      "colour": Blockly.Blocks.ESP8266.HUE,
    });
  }
  ,
};

Blockly.Blocks['esp8266_http_get'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "args0": [
        {
          "type": "input_value", 
          "name": "URL",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        }
      ],
      "message0": Blockly.Msg.ARD_ESP8266_HTTP_GET_MSG,
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_HTTP_GET_TIP,
      "helpUrl": 'https://github.com/esp8266/Arduino/blob/master/libraries/ESP8266HTTPClient/src/ESP8266HTTPClient.h'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
}

Blockly.Blocks['esp8266_http_get_response'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_HTTP_GET_RESPONSE_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "tooltip": Blockly.Msg.ARD_ESP8266_HTTP_GET_RESPONSE_TIP,
      "helpUrl": 'https://github.com/esp8266/Arduino/blob/master/libraries/ESP8266HTTPClient/src/ESP8266HTTPClient.h'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
}

Blockly.Blocks['esp8266_urlencode'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_URLENCODE_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "CONTENT"
        }
      ],
      "output": Blockly.Types.TEXT.output,
      "tooltip": Blockly.Msg.ARD_ESP8266_URLENCODE_TIP,
      "helpUrl": 'http://playground.arduino.cc/Main/DHT11Lib',
      "colour": Blockly.Blocks.ESP8266.HUE
    });
  },
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
};

Blockly.Blocks['esp8266_urldecode'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_URLDECODE_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "CONTENT"
        }
      ],
      "output": Blockly.Types.TEXT.output,
      "tooltip": Blockly.Msg.ARD_ESP8266_URLDECODE_TIP,
      "helpUrl": 'http://playground.arduino.cc/Main/DHT11Lib',
      "colour": Blockly.Blocks.ESP8266.HUE
    });
  },
  getBlockType: function() {
    return Blockly.Types.TEXT;
  }
};

Blockly.Blocks['esp8266_sta_multi'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_STA_MULTI_MSG,
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
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_STA_MULTI_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-examples.html'
    });
  }
};

Blockly.Blocks['esp8266_sta_run'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_ESP8266_STA_RUN_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_ESP8266_STA_RUN_TIP,
      "colour": Blockly.Blocks.ESP8266.HUE,
      "helpUrl": 'https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/station-examples.html'
    });
  }
};
