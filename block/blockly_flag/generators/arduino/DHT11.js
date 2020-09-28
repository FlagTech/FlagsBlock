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

goog.provide('Blockly.Arduino.DHT11');

goog.require('Blockly.Arduino');

function __initDHT11() {
  var dht11DeclareCode = 'dht11 __flagDHT11;\n' + 
    'unsigned long __lastDHT11Time = 0;';
  Blockly.Arduino.addInclude('DHT11_flag','#include <dht11.h>');
  Blockly.Arduino.addDeclaration('DHT11_flag', dht11DeclareCode);
}

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['DHT11_readTemp'] = function(block) {
  var dataPin = Blockly.Arduino.valueToCode(block, "DATAPIN", Blockly.Arduino.ORDER_ATOMIC);
  
  var func = [];
  func.push('int ' + Blockly.Arduino.DEF_FUNC_NAME + '(int dataPin) {');
  func.push('  if((millis() - __lastDHT11Time <= 150) && __lastDHT11Time > 0)');
  func.push('    return __flagDHT11.temperature;');
  func.push('  if(__flagDHT11.read(dataPin) == DHTLIB_OK) {');
  func.push('    __lastDHT11Time = millis();');
  func.push('    return __flagDHT11.temperature;');
  func.push('  } else');
  func.push('    return -1;');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
      '__getDHT11Temp', func.join('\n'));

  var code = funcName + '(' + dataPin + ')'; 

  __initDHT11();

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['DHT11_readHumi'] = function(block) {
  var dataPin = Blockly.Arduino.valueToCode(block, "DATAPIN", Blockly.Arduino.ORDER_ATOMIC);
  
  var func = [];
  func.push('int ' + Blockly.Arduino.DEF_FUNC_NAME + '(int dataPin) {');
  func.push('  if((millis() - __lastDHT11Time <= 150) && __lastDHT11Time > 0)');
  func.push('    return __flagDHT11.humidity;');
  func.push('  if(__flagDHT11.read(dataPin) == DHTLIB_OK) {');
  func.push('    __lastDHT11Time = millis();');
  func.push('    return __flagDHT11.humidity;');
  func.push('  } else');
  func.push('    return -1;');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
      '__getDHT11Humi', func.join('\n'));

  var code = funcName + '(' + dataPin + ')'; 

  __initDHT11();
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
