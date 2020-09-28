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

goog.provide('Blockly.Arduino.APDS9930');

goog.require('Blockly.Arduino');


Blockly.Arduino['apds9930_use'] = function (block) {
    Blockly.Arduino.addInclude('APDS9930', '#include <APDS9930.h>');
    Blockly.Arduino.addVariable('APDS9930', 'APDS9930 _apds = APDS9930();', false);

    Blockly.Arduino.addSetup('APDS9930_1', '_apds.init();', true);
    Blockly.Arduino.addSetup('APDS9930_2', '_apds.enableLightSensor(false);', true);
    Blockly.Arduino.addSetup('APDS9930_3', '_apds.enableProximitySensor(false);', true);

    var code = '';
    return code;
};

Blockly.Arduino['apds9930_light'] = function(block) {
  var func = [];
  func.push('float _apdsLight() {');
  func.push('  float light;');
  func.push('  _apds.readAmbientLightLux(light);');
  func.push('  return light;');
  func.push('}');

  var stubName = Blockly.Arduino.addFunction(
    '_apdsLight', func.join('\n'));      

    var code = stubName + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['apds9930_proximity'] = function(block) {
  var func = [];
  func.push('int _apdsProximity() {');
  func.push('  uint16_t prox;');
  func.push('  _apds.readProximity(prox);');
  func.push('  return prox;');
  func.push('}');

  var stubName = Blockly.Arduino.addFunction(
    '_apdsProximity', func.join('\n'));      

    var code = stubName + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
