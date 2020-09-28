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

goog.provide('Blockly.Arduino.FLAGFFT');

goog.require('Blockly.Arduino');

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['FLAGFFT_fft'] = function(block) {
  var pin = block.getFieldValue("PIN");
  var samples = block.getFieldValue('SAMPLES');
  var freq = block.getFieldValue('FREQ');

  Blockly.Arduino.addInclude('FLAGFFT_LIB_flag','#include <FlagFFT.h>');
  Blockly.Arduino.addInclude('FLAGFFT_SAMPLES_flag','#define FLAG_FFT_SAMPLES ' + samples);
  Blockly.Arduino.addInclude('FLAGFFT_FREQ_flag','#define FLAG_FFT_FREQ ' + freq);

  var realName = "flagFFT_vReal";
  var imagName = "flagFFT_vImag";
  var realId = Blockly.Arduino.variableDB_.getName(
    realName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var imagId = Blockly.Arduino.variableDB_.getName(
    imagName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    
  Blockly.Arduino.addVariable(realName, 'double ' + realId + '[FLAG_FFT_SAMPLES];', true);
  Blockly.Arduino.addVariable(imagName, 'double ' + imagId + '[FLAG_FFT_SAMPLES];', true);

  var code = 'FFT.fft(' + pin + ', ' + realId + ', ' + imagId + ', FLAG_FFT_SAMPLES, FLAG_FFT_FREQ);\n';

  return code;
};

Blockly.Arduino['FLAGFFT_major'] = function(block) {
  var realName = "flagFFT_vReal";
  var imagName = "flagFFT_vImag";
  var realId = Blockly.Arduino.variableDB_.getName(
    realName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var imagId = Blockly.Arduino.variableDB_.getName(
    imagName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = 'FFT.MajorPeak(' + realId + ', FLAG_FFT_SAMPLES, FLAG_FFT_FREQ)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['FLAGFFT_adjMajor'] = function(block) {
  var start = Blockly.Arduino.valueToCode(
    block, 'START', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var end = Blockly.Arduino.valueToCode(
    block, 'END', Blockly.Arduino.ORDER_ATOMIC) || '25';
  var realName = "flagFFT_vReal";
  var imagName = "flagFFT_vImag";
  var realId = Blockly.Arduino.variableDB_.getName(
    realName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var imagId = Blockly.Arduino.variableDB_.getName(
    imagName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = 'FFT.AdjustMajorPeak(' + realId + ', FLAG_FFT_SAMPLES, FLAG_FFT_FREQ, (' + start + '), (' + end + '))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['FLAGFFT_vReal'] = function(block) {
  var idx = Blockly.Arduino.valueToCode(
    block, 'INDEX', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var realName = "flagFFT_vReal";
  var realId = Blockly.Arduino.variableDB_.getName(
    realName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = realId + '[' + idx + ']';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
