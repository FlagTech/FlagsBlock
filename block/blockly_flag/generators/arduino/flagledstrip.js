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

goog.provide('Blockly.Arduino.flagledstripe');

goog.require('Blockly.Arduino');


/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['flagledstripe_setbrightness'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var brightness = block.getFieldValue('BRIGHTNESS');

  var code = ledId + '.setBrightness(' + brightness + ');\n';

  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['flagledstripe_setup'] = function(block) {
  var objName = block.getFieldValue('OBJNAME');
  var ledId = Blockly.Arduino.variableDB_.getName(
    objName, 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var numOfPixels = block.getFieldValue('NUM');
  var ledPin = Blockly.Arduino.valueToCode(block, "LEDPIN", Blockly.Arduino.ORDER_ATOMIC);
  var ledVarCode = 'FlagLedStripAsync ' + ledId + '(' + numOfPixels + ',' + ledPin + ');';
  var ledSetupCode = ledId + '.begin();';

  Blockly.Arduino.reservePin(block, ledPin,
        Blockly.Arduino.PinTypes.OUTPUT, 'LED');

  Blockly.Arduino.addInclude('flagledstripe_','#include <Adafruit_NeoPixel.h>\n#include <FlagLedStripAsync.h>');
  Blockly.Arduino.addVariable(objName, ledVarCode, true);
  Blockly.Arduino.addSetup('flagledstripe_' + ledId, ledSetupCode, true);
  var code = '';
  return code;
};

Blockly.Arduino['flagledstripe_length'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.updateLength(' + num + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_getlength'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
      block.getFieldValue('OBJNAME'), Blockly.Variables.NAME_TYPE);
  var code = ledId + '.numPixels()';
  return [code, Blockly.Arduino.ORDER_UNARY_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['flagledstripe_show'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = ledId + '.show();\n';

  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['flagledstripe_clear'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = ledId + '.clear();\n' + ledId + '.show();\n';

  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['flagledstripe_setpixelcolor'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.setPixelColor(' + num + ' - 1, ' + r + ', ' + g + ', ' + b + ');\n';

  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['flagledstripe_showall'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.showAll(' + r + ', ' + g + ', ' + b + ');\n';

  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['flagledstripe_breathing'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.breathing(' + r + ', ' + g + ', ' + b + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_fadeinout'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.fadeInOut(' + r + ', ' + g + ', ' + b + ', ' + interval + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_theaterchase'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.theaterChase(' + r + ', ' + g + ', ' + b + ', ' + interval + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_runninglights'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.runningLights(' + r + ', ' + g + ', ' + b + ', ' + interval + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_sparkle'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.sparkle(' + r + ', ' + g + ', ' + b + ', ' + interval + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_strobe'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);
  var times = Blockly.Arduino.valueToCode(block, 'TIMES', Blockly.Arduino.ORDER_ATOMIC);
  var pause = Blockly.Arduino.valueToCode(block, 'PAUSE', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.strobe(' + r + ', ' + g + ', ' + b + ', ' + times + ', ' + interval + ', ' + pause + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_meteorlamp'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  var len = Blockly.Arduino.valueToCode(block, 'LEN', Blockly.Arduino.ORDER_ATOMIC);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.meteorLamp(' + r + ', ' + g + ', ' + b + ', ' + len + ', ' + interval + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_cylonbounce'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);
  var eyesize = Blockly.Arduino.valueToCode(block, 'EYESIZE', Blockly.Arduino.ORDER_ATOMIC);
  var delay = Blockly.Arduino.valueToCode(block, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.cylonBounce(' + r + ', ' + g + ', ' + b + ', ' + eyesize + ', ' + interval + ', ' + delay + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_rgbloop'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.rgbLoop(' + interval + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_theaterchaserainbow'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.theaterChaseRainbow(' + interval + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_rainbow'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.rainbow(' + interval + ');\n';

  return code;
};

Blockly.Arduino['flagledstripe_rainbowcycle'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

  var code = ledId + '.rainbowCycle(' + interval + ');\n';

  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['flagledstripe_stop'] = function(block) {
  var ledId = Blockly.Arduino.variableDB_.getName(
    block.getFieldValue('OBJNAME'), 
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = ledId + '.stopEffect();\n';

  return code;
};
