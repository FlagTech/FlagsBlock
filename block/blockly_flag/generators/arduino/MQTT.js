/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the ESP8266 WiFi and WebServer blocks.
 *     Arduino Serial library docs: https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html
 *
 * TODO: There are more functions that can be added:
 *       https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html
 */
'use strict';

goog.provide('Blockly.Arduino.MQTT');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['mqtt_setup'] = function(block) {
  var server = Blockly.Arduino.valueToCode(block, 'SERVER',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var port = block.getFieldValue('PORT');

  var code = [];
  code.push("WiFiClient _MQTTWiFiClient;")
  code.push('PubSubClient _MQTTClient('+ server + ', ' + port + ', _MQTTWiFiClient);');
  Blockly.Arduino.addDeclaration('MQTT_', code.join("\n"));
  Blockly.Arduino.addInclude('MQTT_','#include <PubSubClient.h>');

  return '';
};

Blockly.Arduino['mqtt_connect'] = function(block) {
  var name = Blockly.Arduino.valueToCode(block, 'NAME',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var id = Blockly.Arduino.valueToCode(block, 'ID',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var pwd = Blockly.Arduino.valueToCode(block, 'PWD',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var code;
  if(id == "") {
    code = "_MQTTClient.connect(" + name + ")";
  }
  else {
    code = "_MQTTClient.connect(" + name + ", " + id + ", " + pwd + ")";
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mqtt_subscribe'] = function(block) {
  var channel = Blockly.Arduino.valueToCode(block, 'CHANNEL',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  
  return '_MQTTClient.subscribe(' + channel + ');\n';
};

Blockly.Arduino['mqtt_connected'] = function(block) {
  var code = '_MQTTClient.connected()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mqtt_run'] = function(block) {
  return '_MQTTClient.loop();\n';      
};

Blockly.Arduino['mqtt_bind'] = function(block) {
  var funcName = block.getFieldValue('FUNCNAME');
  var func = [];
  func.push("void _MQTT_Callback(char* topic, byte* payload, unsigned int length) {");
  if(funcName == '') {
    func.push("  return;");
  }
  else {
    Blockly.Arduino.addDeclaration('MQTT_VARS', "String _MQTTTopic;\nString _MQTTMsg;\n");
    funcName = Blockly.Arduino.variableDB_.getName(
      funcName, Blockly.Procedures.NAME_TYPE);
    func.push("  _MQTTTopic = topic;");
    func.push('  _MQTTMsg = "";');
    func.push('  for(int i = 0;i < length;i++) {');
    func.push('    _MQTTMsg += (char) payload[i];');
    func.push("  }");
    func.push("  " + funcName + "();")
  }
  func.push("}");
  var stubName = Blockly.Arduino.addFunction(
    '_MQTT_Callback', func.join('\n'));      

  return '_MQTTClient.setCallback(' + stubName + ');\n';
};

Blockly.Arduino['mqtt_topic'] = function(block) {
  return ["_MQTTTopic", Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mqtt_msg'] = function(block) {
  return ["_MQTTMsg", Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mqtt_publish'] = function(block) {
  var topic = Blockly.Arduino.valueToCode(block, 'TOPIC',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var payload = Blockly.Arduino.valueToCode(block, 'PAYLOAD',
    Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';

  var code = "_MQTTClient.publish(" + topic + ", String(" + payload + ").c_str());\n";

  return code;
};
