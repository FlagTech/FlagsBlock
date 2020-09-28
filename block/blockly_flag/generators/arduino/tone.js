/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.tone');

goog.require('Blockly.Arduino');


/**
 * Function for turning the tone library on on a given pin (X).
 * Arduino code: setup { pinMode(X, OUTPUT) }
 *               loop  { tone(X, frequency) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */

Blockly.Arduino['io_tone'] = function(block) {
  var pin = block.getFieldValue('TONEPIN');
  var freq = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'tone(' + pin + ',' + freq + ');\n';
  return code;
};

Blockly.Arduino['io_tone_var'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(
      block, 'TONEPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var freq = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC || '0');
  var duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC || '0');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

  var code = 'tone(' + pin + ',' + freq + ',' + duration + ');\n';

  pin = removeHighlightText(pin);
  if (pin.match(pinRegexp)) {
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    block.prefixCode = '';
  }
  else {
    block.prefixCode = 'pinMode('+pin+', OUTPUT);\n';
  }

  return code;
};

Blockly.Arduino['io_notone'] = function(block) {
  var pin = block.getFieldValue("TONEPIN");
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');
  
  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'noTone(' + pin + ');\n';
  return code;
};

Blockly.Arduino['io_notone_var'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(
      block, 'TONEPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');
  
  var code = 'noTone(' + pin + ');\n';

  pin = removeHighlightText(pin);
  if (pin.match(pinRegexp)) {
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    block.prefixCode = '';
  }
  else {
    block.prefixCode = 'pinMode('+pin+', OUTPUT);\n';
  }

  return code;
};

Blockly.Arduino['io_tone_nummusic'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(
      block, 'TONEPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var notes = Blockly.Arduino.valueToCode(block, 'TONENUMMUSIC', Blockly.Arduino.ORDER_ATOMIC || '0');
  var tempo = block.getFieldValue('TEMPOTIME');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

  Blockly.Arduino.addInclude('FlagTonePlayMusic','#include <FlagTonePlayMusic.h>');
  var code = 'FlagTonePlayMusic(' + pin + ', ' + notes + ', ' + tempo + ');\n';

  pin = removeHighlightText(pin);
  if (pin.match(pinRegexp)) {
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    block.prefixCode = '';
  }
  else {
    block.prefixCode = 'pinMode('+pin+', OUTPUT);\n';
  }

  return code;
};

Blockly.Arduino['io_multitone'] = function(block) {
  var pin = block.getFieldValue("PIN");
  var freq = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC || '0');
  var duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC || '0');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'MultiTone Pin');

  var toneName = "miltitone_" + pin;
  var toneId = Blockly.Arduino.variableDB_.getName(
    toneName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addVariable(toneName, 'Tone ' + toneId + ';', false);
  Blockly.Arduino.addSetup(toneName, toneId + '.begin(' + pin + ');', false);

  var code = toneId + '.play(' + freq + ',' + duration + ');\n';

  Blockly.Arduino.addInclude('MULTITONE','#include <Tone.h>');
  return code;
};
