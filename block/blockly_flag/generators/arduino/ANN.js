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

goog.provide('Blockly.Arduino.ann');

goog.require('Blockly.Arduino');


Blockly.Arduino['onn_use'] = function (block) {
    var afunc = block.getFieldValue('AFUNC');
    var onnName = block.getFieldValue('OBJNAME');
    var onnId = Blockly.Arduino.variableDB_.getName(
        onnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    Blockly.Arduino.addInclude('ann', '#include <NNforduino.h>');
    Blockly.Arduino.addVariable(onnName, 'NNforduino ' + onnId + ';', true);

    var code = onnId+'.OnelayerNN('+ afunc + ');\n';
    return code;
};

Blockly.Arduino['tnn_use'] = function (block) {
    var afunc1 = block.getFieldValue('AFUNC1');
    var afunc2 = block.getFieldValue('AFUNC2');
    var tnnName = block.getFieldValue('OBJNAME');
    var tnnId = Blockly.Arduino.variableDB_.getName(
        tnnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    Blockly.Arduino.addInclude('ann', '#include <NNforduino.h>');
    Blockly.Arduino.addVariable(tnnName, 'NNforduino ' + tnnId + ';', true);

    var code = tnnId+'.TwolayerNN('+ afunc1 + ',' + afunc2 +');\n';
    return code;
};

Blockly.Arduino['rnn_use'] = function (block) {
    var rnnName = block.getFieldValue('OBJNAME');
    var rnnId = Blockly.Arduino.variableDB_.getName(
        rnnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var rnn_w = Blockly.Arduino.valueToCode(
        block, 'RNN_weight', Blockly.Arduino.ORDER_ATOMIC) || '0.8';

    Blockly.Arduino.addInclude('ann', '#include <NNforduino.h>');
    Blockly.Arduino.addVariable(rnnName, 'NNforduino ' + rnnId + ';', true);

    var code = rnnId+'.RNN('+ rnn_w + ');\n';
    return code;
};

Blockly.Arduino['onn_initran'] = function (block) {
    var onnName = block.getFieldValue('OBJNAME');
    var onnId = Blockly.Arduino.variableDB_.getName(
        onnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = onnId+'.InitONN(RAN);\n';
    return code;
};

Blockly.Arduino['tnn_initran'] = function (block) {
    var tnnName = block.getFieldValue('OBJNAME');
    var tnnId = Blockly.Arduino.variableDB_.getName(
        tnnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = tnnId+'.InitTNN(RAN);\n';
    return code;
};

Blockly.Arduino['ann_set'] = function (block) {
    var annName = block.getFieldValue('OBJNAME');
    var nnvar = block.getFieldValue('NNVAR');
    var nnvarnum = Blockly.Arduino.valueToCode(
        block, 'NNVARNUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var annId = Blockly.Arduino.variableDB_.getName(
        annName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = annId+'.'+nnvar+'='+nnvarnum+';\n';
    return code;
};

Blockly.Arduino['ann_get'] = function (block) {
    var annName = block.getFieldValue('OBJNAME');
    var nnvar = block.getFieldValue('NNVAR');
    var annId = Blockly.Arduino.variableDB_.getName(
        annName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = annId + '.' + nnvar;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['onn_train'] = function (block) {
    var onnName = block.getFieldValue('OBJNAME');
    var tdata = Blockly.Arduino.valueToCode(
        block, 'TDATA', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var lrate = Blockly.Arduino.valueToCode(
        block, 'LRATE', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var ltimes = Blockly.Arduino.valueToCode(
        block, 'LTIMES', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var onnId = Blockly.Arduino.variableDB_.getName(
        onnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = onnId + '.LearnONN('+tdata+','+lrate+','+ltimes+');\n';
    return code;
};

Blockly.Arduino['tnn_train'] = function (block) {
    var tnnName = block.getFieldValue('OBJNAME');
    var tdata = Blockly.Arduino.valueToCode(
        block, 'TDATA', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var lrate = Blockly.Arduino.valueToCode(
        block, 'LRATE', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var ltimes = Blockly.Arduino.valueToCode(
        block, 'LTIMES', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var tnnId = Blockly.Arduino.variableDB_.getName(
        tnnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = tnnId + '.LearnTNN('+tdata+','+lrate+','+ltimes+');\n';
    return code;
};

Blockly.Arduino['onn_getoutput'] = function (block) {
    var onnName = block.getFieldValue('OBJNAME');
    var input = Blockly.Arduino.valueToCode(
        block, 'INPUT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var onnId = Blockly.Arduino.variableDB_.getName(
        onnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = onnId + '.OutONN('+input+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tnn_getoutput'] = function (block) {
    var tnnName = block.getFieldValue('OBJNAME');
    var input = Blockly.Arduino.valueToCode(
        block, 'INPUT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var tnnId = Blockly.Arduino.variableDB_.getName(
        tnnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = tnnId + '.OutTNN('+input+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['rnn_getoutput'] = function (block) {
    var rnnName = block.getFieldValue('OBJNAME');
    var input = Blockly.Arduino.valueToCode(
        block, 'INPUT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var rnnId = Blockly.Arduino.variableDB_.getName(
        rnnName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = rnnId + '.OutRNN('+input+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
