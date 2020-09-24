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

goog.provide('Blockly.Arduino.dancerobot');

goog.require('Blockly.Arduino');


Blockly.Arduino['dancerobot_use'] = function (block) {
    var rfPin = block.getFieldValue('RFPIN');
    var lfPin = block.getFieldValue('LFPIN');
    var rlPin = block.getFieldValue('RLPIN');
    var llPin = block.getFieldValue('LLPIN');
    
    // Blockly.Arduino.reservePin(
    //   block, rfPin, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');
    // Blockly.Arduino.reservePin(
    //   block, lfPin, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');
    // Blockly.Arduino.reservePin(
    //   block, rlPin, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');
    // Blockly.Arduino.reservePin(
    //   block, llPin, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');
  

    // var robotName = block.getFieldValue('OBJNAME');
    // var robotId = Blockly.Arduino.variableDB_.getName(
    //     robotName,
    //     Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    Blockly.Arduino.addInclude('robot', '#include <FlagDanceRobot.h>');
    // Blockly.Arduino.addVariable(robotName, 'FlagDanceRobot ' + robotId + ';', true);

    var setupCode = 'flagDanceRobot.attach(' + rfPin + ',' +  lfPin + ',' +  rlPin + ',' +  llPin + ');';
    Blockly.Arduino.addSetup('FlagDanceRobot', setupCode, true);

    var code = '';
    return code;
};

Blockly.Arduino['dancerobot_trim'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var rfAngle = Blockly.Arduino.valueToCode(
    block, 'RF_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var lfAngle = Blockly.Arduino.valueToCode(
    block, 'LF_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var rlAngle = Blockly.Arduino.valueToCode(
    block, 'RL_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var llAngle = Blockly.Arduino.valueToCode(
    block, 'LL_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.setTrim(' + rfAngle + ', ' + lfAngle + ', ' + rlAngle + ', ' + llAngle + ');\n';
  return code;
};

Blockly.Arduino['dancerobot_getRFtrim'] = function (block) {
  var code = 'flagDanceRobot.getRFTrim()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dancerobot_getLFtrim'] = function (block) {
  var code = 'flagDanceRobot.getLFTrim()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dancerobot_getRLtrim'] = function (block) {
  var code = 'flagDanceRobot.getRLTrim()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dancerobot_getLLtrim'] = function (block) {
  var code = 'flagDanceRobot.getLLTrim()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dancerobot_savetrim'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
            
  var code = 'flagDanceRobot.saveTrim();\n';
  return code;
};

Blockly.Arduino['dancerobot_restoretrim'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
            
  var code = 'flagDanceRobot.restoreTrim();\n';
  return code;
};

Blockly.Arduino['dancerobot_pos'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var rfAngle = Blockly.Arduino.valueToCode(
    block, 'RF_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var lfAngle = Blockly.Arduino.valueToCode(
    block, 'LF_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var rlAngle = Blockly.Arduino.valueToCode(
    block, 'RL_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var llAngle = Blockly.Arduino.valueToCode(
    block, 'LL_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.setPosition(' + rfAngle + ', ' + lfAngle + ', ' + rlAngle + ', ' + llAngle + ');\n';
  return code;
};

Blockly.Arduino['dancerobot_bpm'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //     robotName,
  //     Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var bpm = Blockly.Arduino.valueToCode(
    block, 'BPM', Blockly.Arduino.ORDER_ATOMIC) || '0';
    
  var code = 'flagDanceRobot.setBPM(' + bpm + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dancerobot_setbpm'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
            
  var bpm = Blockly.Arduino.valueToCode(
    block, 'BPM', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'flagDanceRobot.setBPM(' + bpm + ');';
  return code;
};

Blockly.Arduino['dancerobot_getmspb'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //     robotName,
  //     Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    
  var code = 'flagDanceRobot.getMSPerBeat()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dancerobot_delay'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'delay((' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_primera_parte'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
            
  var code = 'flagDanceRobot.primera_parte();\n';
  return code;
};

Blockly.Arduino['dancerobot_lateral_fuerte'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var side = block.getFieldValue("SIDE");
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.lateral_fuerte(' + side + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_crusaito'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
  
  var code = 'flagDanceRobot.crusaito(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_segunda_parte'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
            
  var code = 'flagDanceRobot.segunda_parte();\n';
  return code;
};

Blockly.Arduino['dancerobot_moonWalk'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var side = block.getFieldValue("SIDE");
  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
  
  var code = (side == 1) ? 
    ('flagDanceRobot.moonWalkRight(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n') :
    ('flagDanceRobot.moonWalkLeft(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n');
  return code;
};

Blockly.Arduino['dancerobot_flapping'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.flapping(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_drunk'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.drunk((' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_kick'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var side = block.getFieldValue("SIDE");
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = (side == 1) ? 
    ('flagDanceRobot.kickRight((' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n') :
    ('flagDanceRobot.kickLeft((' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n');
  return code;
};


Blockly.Arduino['dancerobot_walk'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.walk(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_backyard'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.backyard(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_goingUp'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';

            
  var code = 'flagDanceRobot.goingUp((' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_noGravity'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.noGravity((' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_pasitos'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
           
  var code = 'flagDanceRobot.pasitos(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_patada'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = 'flagDanceRobot.patada((' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_twist'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = 'flagDanceRobot.twist(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_upDown'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = 'flagDanceRobot.upDown(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_saludo'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.saludo(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_swing'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = 'flagDanceRobot.swing(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_reverencia1'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = 'flagDanceRobot.reverencia1(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_reverencia2'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';
            
  var code = 'flagDanceRobot.reverencia2(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

Blockly.Arduino['dancerobot_run'] = function (block) {
  // var robotName = block.getFieldValue('OBJNAME');
  // var robotId = Blockly.Arduino.variableDB_.getName(
  //   robotName,
  //   Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  var steps = Blockly.Arduino.valueToCode(
    block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var tempo = Blockly.Arduino.valueToCode(
    block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = 'flagDanceRobot.run(' + steps + ', (' + tempo + ') * ' + 'flagDanceRobot.getMSPerBeat());\n';
  return code;
};

