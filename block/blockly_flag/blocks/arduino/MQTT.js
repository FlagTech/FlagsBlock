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

goog.provide('Blockly.Blocks.MQTT');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.MQTT.HUE = 188;

Blockly.Blocks['mqtt_setup'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_SETUP_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "SERVER",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "field_number", 
          "name": "PORT", 
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_MQTT_SETUP_TIP,
      "colour": Blockly.Blocks.MQTT.HUE,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#PubSubClient2'
    });
  }
};

Blockly.Blocks['mqtt_connect'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_CONNECT_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "NAME",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "input_value",
          "name": "ID",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "input_value",
          "name": "PWD",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
      ],
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.MQTT.HUE,
      "tooltip": Blockly.Msg.ARD_MQTT_CONNECT_TIP,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#connect3'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
}

Blockly.Blocks['mqtt_subscribe'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_SUBSCRIBE_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_MQTT_SUBSCRIBE_TIP,
      "colour": Blockly.Blocks.MQTT.HUE,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#subscribe'
    });
  }
};

Blockly.Blocks['mqtt_run'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_RUN_MSG,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_MQTT_RUN_TIP,
      "colour": Blockly.Blocks.MQTT.HUE,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#loop'
    });
  }
};

Blockly.Blocks['mqtt_connected'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_CONNECTED_MSG,
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.MQTT.HUE,
      "tooltip": Blockly.Msg.ARD_MQTT_CONNECTED_TIP,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#connected'
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
}

Blockly.Blocks['mqtt_bind'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_BIND_MSG,
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
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_MQTT_BIND_TIP,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#callback',
      "colour": Blockly.Blocks.MQTT.HUE,
    });
  }
};

Blockly.Blocks['mqtt_topic'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_TOPIC_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.MQTT.HUE,
      "tooltip": Blockly.Msg.ARD_MQTT_TOPIC_TIP,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#callback',
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  },
}

Blockly.Blocks['mqtt_msg'] = {
  /**
   * Block for creating a write to serial com function.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_MSG_MSG,
      "output": Blockly.Types.TEXT.output,
      "colour": Blockly.Blocks.MQTT.HUE,
      "tooltip": Blockly.Msg.ARD_MQTT_MSG_TIP,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#callback',
    }); 
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function() {
    return Blockly.Types.TEXT;
  },
}

Blockly.Blocks['mqtt_publish'] = {
  /**
   * Block for setting the speed of the serial connection.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARD_MQTT_PUBLISH_MSG,
      "args0": [
        {
          "type": "input_value",
          "name": "TOPIC",
          "check": Blockly.Types.TEXT.checkList.concat('Array'),
        },
        {
          "type": "input_value", 
          "name": "PAYLOAD", 
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": Blockly.Msg.ARD_MQTT_PUBLISH_TIP,
      "colour": Blockly.Blocks.MQTT.HUE,
      "helpUrl": 'https://pubsubclient.knolleary.net/api.html#publish1'
    });
  }
};
