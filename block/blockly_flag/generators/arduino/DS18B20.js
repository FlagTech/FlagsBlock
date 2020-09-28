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

goog.provide('Blockly.Arduino.DS18B20');

goog.require('Blockly.Arduino');

// function __initDHT11() {
//   var dht11DeclareCode = 'dht11 __flagDHT11;\n' + 
//     'unsigned long __lastDHT11Time = 0;';
//   Blockly.Arduino.addInclude('DHT11_flag','#include <OneWire.h>');
//   Blockly.Arduino.addDeclaration('DHT11_flag', dht11DeclareCode);
// }

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['DS18B20_readTemp'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(block, "DATAPIN", Blockly.Arduino.ORDER_ATOMIC);
  
  // var code = 'DS18B20_' + pin + '.getTempCByIndex(0)'; 
  // block.prefixCode = 'DS18B20_' + pin + '.requestTemperatures();\n';

  var func = [];
  func.push('float ' + Blockly.Arduino.DEF_FUNC_NAME + '(void) {');
  func.push('  DS18B20_' + pin + '.requestTemperatures();');
  func.push('  return DS18B20_' + pin + '.getTempCByIndex(0);');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
      '__getDS18B20_' + pin + '_Temp', func.join('\n'));
  
  var code = funcName + '()'; 
  
  Blockly.Arduino.addInclude('DS18B20_OneWire_flag','#include <OneWire.h>');
  Blockly.Arduino.addInclude('DS18B20_DallasT_flag','#include <DallasTemperature.h>');
  Blockly.Arduino.addDeclaration('DS18B20_' + pin, 'OneWire oneWire_' + pin + '('+pin+'); \nDallasTemperature DS18B20_' + pin + '(&oneWire_' + pin + ');');
  Blockly.Arduino.addSetup('DS18B20_' + pin, 'DS18B20_' + pin + '.begin();', false);

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

