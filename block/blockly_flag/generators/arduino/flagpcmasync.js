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

goog.provide('Blockly.Arduino.flagpcmasync');

goog.require('Blockly.Arduino');

function __initPCM() {
  Blockly.Arduino.addInclude('flagpcmasync_flag','#include<FlagPCMAsync.h>\n#include "data/sound.h"');
}

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['flagpcmasync_startplaybgm'] = function(block) {
  Blockly.Arduino.addInclude('flagpcmasync_flag','#include<FlagPCM.h>\n#include "data/sound.h"');

  var num = block.getFieldValue('NUM');
  var code = 'startPlayback(__bgm' + num + ', sizeof(__bgm' + num + '));\n';
  return code;
};

 Blockly.Arduino['flagpcmasync_startplay'] = function(block) {
  __initPCM();
  var code = 'startPlayback(__sample, sizeof(__sample));\n';
  return code;
};

Blockly.Arduino['flagpcmasync_updatesound'] = function(block) {
  __initPCM();
  var code = 'updatePlayback();\n';
  return code;
};

Blockly.Arduino['flagpcmasync_updateandchecksound'] = function(block) {
  __initPCM();
  var code = 'updatePlayback()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['flagpcmasync_stopplay'] = function(block) {
  __initPCM();
  var code = 'stopPlayback();\n';
  return code;
};
