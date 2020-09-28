/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino serial blocks.
 *     Arduino Serial library docs: https://www.arduino.cc/en/Reference/Serial
 *
 * TODO: There are more functions that can be added:
 *       http://arduino.cc/en/Reference/Serial
 */
'use strict';

goog.provide('Blockly.Arduino.tcpclient');

goog.require('Blockly.Arduino');


/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['tcpclient_print'] = function(block) {
  var tcpId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var content = Blockly.Arduino.valueToCode(
    block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = tcpId + '.print(' + content + ');\n';

  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['tcpclient_setup'] = function(block) {
  var objName = block.getFieldValue('OBJNAME');
  var tcpId = Blockly.Arduino.variableDB_.getName(
    objName, 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var ip = Blockly.Arduino.valueToCode(block, "IP", Blockly.Arduino.ORDER_ATOMIC);
  var port = Blockly.Arduino.valueToCode(block, "PORT", Blockly.Arduino.ORDER_ATOMIC);
  var tcpVarCode = 'WiFiClient ' + tcpId + ';';
  var code = tcpId + '.connect(' + ip + ',' + port + ')';

  Blockly.Arduino.addVariable(objName, tcpVarCode, true);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['tcpclient_available'] = function(block) {
  var tcpId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = tcpId + '.available()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tcpclient_read'] = function(block) {
  var tcpId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var func = [];
  func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(WiFiClient *clt) {');
  func.push('  String content = "";');
  func.push('  content += (char)clt->read();');
  func.push('  return content;');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
      'getTCPClientChar', func.join('\n'));

  var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_NONE) || '""';
  var code = funcName + '(&' + tcpId + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tcpclient_connected'] = function(block) {
  var tcpId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = tcpId + '.connected()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tcpclient_stop'] = function(block) {
  var tcpId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = tcpId + '.stop();\n';

  return code;
};
