/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: http://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.IRRemote');

goog.require('Blockly.Arduino');


Blockly.Arduino['irremote_send_use'] = function (block) {
    var pin = block.getFieldValue('PIN');

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'IR send');

    Blockly.Arduino.addInclude('irremote', '#include <IRremoteESP8266.h>');
    Blockly.Arduino.addInclude('irremote_send', '#include <IRsend.h>');

    Blockly.Arduino.addVariable('irremote_send', 'IRsend _irsend(' + pin + ');', true);

    Blockly.Arduino.addSetup('irremote_send', '_irsend.begin();', true);

    var code = '';
    return code;
};

Blockly.Arduino['irremote_send_nec'] = function (block) {
    var hexStrCmd = Blockly.Arduino.valueToCode(
        block, 'CMD', Blockly.Arduino.ORDER_ATOMIC) || '0';
  
    var func = [];
    func.push('uint64_t _hexStr2UINT64(String hexStr) {');
    func.push('  uint64_t val;');
    func.push('  sscanf(hexStr.c_str(), "%x", &val);');
    func.push('  return val;');
    func.push('}');
    var funcName = Blockly.Arduino.addFunction(
      '_hexStr2UINT64', func.join('\n'));
  
    var code = '_irsend.sendNEC(' + funcName + '(' + hexStrCmd + ')' + ');\n';
    return code;
};

Blockly.Arduino['irremote_recv_use'] = function (block) {
  var pin = block.getFieldValue('PIN');

  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'IR recv');

  Blockly.Arduino.addInclude('irremote', '#include <IRremoteESP8266.h>');
  Blockly.Arduino.addInclude('irremote_send', '#include <IRrecv.h>\n#include <IRutils.h>');

  Blockly.Arduino.addVariable('irremote_recv', 'IRrecv _irrecv(' + pin + ');', false);
  Blockly.Arduino.addVariable('irremote_result', 'decode_results _irrecvResult;', false);

  Blockly.Arduino.addSetup('irremote_recv', '_irrecv.enableIRIn();', true);

  var code = '';
  return code;
};

Blockly.Arduino['irremote_recv_decoded'] = function(block) {
  var code = '_irrecv.decode(&_irrecvResult)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['irremote_recv_result'] = function(block) {
  var code = 'uint64ToString(_irrecvResult.value, 16)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['irremote_recv_resume'] = function (block) {

  return '_irrecv.resume();\n';
};
