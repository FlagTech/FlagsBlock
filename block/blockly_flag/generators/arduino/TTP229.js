/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the TTP229 library blocks.
 *     The Arduino TTP229 library docs: https://github.com/arduino12/ttp229-arduino
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.TTP229');

goog.require('Blockly.Arduino');


Blockly.Arduino['TTP229_use'] = function (block) {
    var sclPin = block.getFieldValue('SCL_PIN');
    var sdoPin = block.getFieldValue('SDO_PIN');

    Blockly.Arduino.reservePin(
        block, sclPin, Blockly.Arduino.PinTypes.SERVO, 'TTP229 SCL PIN');
    Blockly.Arduino.reservePin(
      block, sdoPin, Blockly.Arduino.PinTypes.SERVO, 'TTP229 SDO PIN');
  
    var TTP229Id = Blockly.Arduino.variableDB_.getName(
        "__ttp229",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    Blockly.Arduino.addInclude('TTP229', '#include <TTP229.h>');
    Blockly.Arduino.addVariable("__ttp229", 'TTP229 ' + TTP229Id + '(' + sclPin + ', ' +sdoPin + ');', true);

    var code = '';
    return code;
};

Blockly.Arduino['TTP229_get'] = function (block) {
    var TTP229Id = Blockly.Arduino.variableDB_.getName(
        "__ttp229",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = TTP229Id + '.GetKey16()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

