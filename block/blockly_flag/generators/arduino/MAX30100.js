/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino serial blocks.
 *     Arduino Serial library docs: https://www.arduino.cc/en/Reference/Serial
 *
 * TODO: There are more functions that can be added:
 *       https://github.com/oxullo/Arduino-MAX30100/blob/master
 */
'use strict';

goog.provide('Blockly.Arduino.MAX30100');

goog.require('Blockly.Arduino');



/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */

Blockly.Arduino['MAX30100_setup'] = function(block) {
  Blockly.Arduino.addInclude('MAX30100_setup', '#include <MAX30100_PulseOximeter.h>');

  Blockly.Arduino.addVariable('MAX30100_setup', 'PulseOximeter _pox;', true);

  Blockly.Arduino.addSetup('MAX30100_setup', 'while(!_pox.begin());', true);

  var code = '_pox.update();\n';
  return code;
};

Blockly.Arduino['MAX30100_getSpO2'] = function(block) {
  var code = '_pox.getSpO2()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MAX30100_getir'] = function(block) {
  var code = '_pox.getRawIR()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MAX30100_getred'] = function(block) {
  var code = '_pox.getRawRed()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
