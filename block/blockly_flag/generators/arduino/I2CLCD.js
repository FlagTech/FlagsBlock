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

goog.provide('Blockly.Arduino.I2CLCD');

goog.require('Blockly.Arduino');

function __initI2CLCD(block, i2cAddr, replace) {
  var i2cLCDDeclareCode = 
    'LiquidCrystal_I2C __flagI2CLCD( ' + 
    i2cAddr + 
    ', 2, 1, 0, 4, 5, 6, 7, 3, POSITIVE);';
  var i2cLCDSetupCode = '__flagI2CLCD.begin(16,2);';

  Blockly.Arduino.addInclude('I2CLCD_flag','#include <Wire.h>\n#include <LiquidCrystal_I2C.h>');

  if (replace === true && Blockly.Arduino.definitions_['I2CLCD_flag'] !== undefined) {
    // addDeclaration() 無法取代之前的定義，所以手動處理
    Blockly.Arduino.definitions_['I2CLCD_flag'] = i2cLCDDeclareCode;
  }
  else {
    Blockly.Arduino.addDeclaration('I2CLCD_flag', i2cLCDDeclareCode);
  }

  Blockly.Arduino.addSetup('I2CLCD_flag', i2cLCDSetupCode, replace);

  var i2cPins = Blockly.Arduino.Boards.selected.i2cPins.Wire;
  for (var i = 0; i < i2cPins.length; i++) {
    Blockly.Arduino.reservePin(block, i2cPins[i][1],
        Blockly.Arduino.PinTypes.I2C, 'I2C ' + i2cPins[i][0]);
  }
}

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['I2CLCD_setup'] = function(block) {
  var i2cAddr = block.getFieldValue('I2C_ADDR');
  __initI2CLCD(block, i2cAddr, true);
  var code = '';
  return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2CLCD_printLine'] = function(block) {
  var content = Blockly.Arduino.valueToCode(
    block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var row = block.getFieldValue('ROW');

  var func = [];
  func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(String content, int width) {');
  func.push('  int len = content.length();');
  func.push('  for(int i = 0;i < (width - len);i++)');
  func.push('    content += " ";');
  func.push('  return content;');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
      '__rightPaddingStr', func.join('\n'));

  var code = 
    '__flagI2CLCD.setCursor(0, ' + row + ');\n' + 
    '__flagI2CLCD.print(__rightPaddingStr(String(' + content + '), 16));\n';
  __initI2CLCD(block, 0x3F, false);
  return code;
};

Blockly.Arduino['I2CLCD_move'] = function(block) {
  var x = Blockly.Arduino.valueToCode(
    block, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y = Blockly.Arduino.valueToCode(
    block, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = '__flagI2CLCD.setCursor(' + x + ', ' + y + ');\n'
  __initI2CLCD(block, 0x3F,false);
  return code;
};

Blockly.Arduino['I2CLCD_clear'] = function(block) {

  var code = '__flagI2CLCD.clear();\n'
  __initI2CLCD(block, 0x3F,false);
  return code;
};

Blockly.Arduino['I2CLCD_print'] = function(block) {
  var content = Blockly.Arduino.valueToCode(
    block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = '__flagI2CLCD.print(' + content + ');\n'
  __initI2CLCD(block, 0x3F, false);
  return code;
};

Blockly.Arduino['I2CLCD_backlightOn'] = function(block) {
  var code = '__flagI2CLCD.backlight();\n';
  __initI2CLCD(block, 0x3F, false);
  return code;
};

Blockly.Arduino['I2CLCD_backlightOff'] = function(block) {
  var code = '__flagI2CLCD.noBacklight();\n';
  __initI2CLCD(block, 0x3F, false);
  return code;
};