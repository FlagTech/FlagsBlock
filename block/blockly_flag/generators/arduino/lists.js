/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for list blocks.
 *
 * TODO: A lot of this can be converted to arrays code by creating functions to
 *       replicate this kind of behavior.
 */
'use strict';

goog.provide('Blockly.Arduino.lists');

goog.require('Blockly.Arduino');

//------------------------------------------------------------------
// added by Mee
//
function __checkArray(type, items) {
  if (type == 'char') { // character array
    if (items.match(/^ *('[0-9a-zA-Z]')( *, *('[0-9a-zA-Z]') *)*$/)) {
      return true;
    }
  }
  else if (type == 'int') { // integer array
    if (items.match(/^ *(([0-9]+)|((0[xX])([0-9a-fA-F]+))|((0[bB])([01]+)))( *, *((([0-9]+)|((0[xX])([0-9a-fA-F]+))|((0[bB])([01]+)))) *)*$/)) {
      return true;
    }
  }
  return false;
}
//------------------------------------------------------------------

Blockly.Arduino['array_create_with'] = function(block) {
  var name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), blocklyArray_NAME_TYPE);
  // var nameOrig = block.getFieldValue('NAME')  
  // blocklyArray_NAMES.nameOrig = [nameOrig, name];
  // getArrayNameList();

  var type = block.getFieldValue('TYPE');
  var items = block.getFieldValue('ITEMS');

  var warningTextName = "array_items";
  //----modified by Meebox
  // if (items.match(/^ *([0[xXbB]]{0,1}[0-9]+|'[0-9a-zA-Z]+')( *, *([0-9]+|'[0-9a-zA-Z]+') *)*$/)) {
  if (__checkArray(type, items)) {  
  //----------------------
    block.setWarningText(null, warningTextName); 
  }
  else {
    block.setWarningText(Blockly.Msg.LISTS_CREATE_WITH_ITEMS_WARNING, 
      warningTextName);
  }

  var code = type + ' ' + name + '[] = {' + items + '};\n';
  Blockly.Arduino.definitions_[name] = code;
  return '';
};

Blockly.Arduino['array_create_num'] = function(block) {
  var name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), blocklyArray_NAME_TYPE);
  // var nameOrig = block.getFieldValue('NAME')  
  // blocklyArray_NAMES.nameOrig = [nameOrig, name];
  // getArrayNameList();

  var type = block.getFieldValue('TYPE');
  var num = block.getFieldValue('NUM');

  var code = type + ' ' + name + '[' + num + '];\n';
  Blockly.Arduino.definitions_[name] = code;
  return '';
};

Blockly.Arduino['array_get_index'] = function(block) {
  // var name = block.getFieldValue('NAME');
  var name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), blocklyArray_NAME_TYPE);
  var index = Blockly.Arduino.valueToCode(
      block, 'INDEX', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = name + '[' + index + ']';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['array_set_index'] = function(block) {
  // var name = block.getFieldValue('NAME');
  var name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), blocklyArray_NAME_TYPE);
  var index = Blockly.Arduino.valueToCode(
      block, 'INDEX', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value = Blockly.Arduino.valueToCode(
      block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = name + '[' + index + '] = ' + value + ';\n';
  return code;
};

Blockly.Arduino['array_2dim_create_with'] = function(block) {
  var name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), blocklyArray_NAME_TYPE);
  var type = block.getFieldValue('TYPE');

  var warningTextName = "array_items";
  var warningText = "";
  var row = 0;
  var column = 0;
  var allArray = [];
  for (var i = 0; i < block.itemCount_; i++) {
      var items = block.getFieldValue('ITEMS'+row)

      //--modified by Mee-----
      // if (items.match(/^ *([0-9]+|'[0-9a-zA-Z]+')( *, *([0-9]+|'[0-9a-zA-Z]+') *)*$/)) {
      if (__checkArray(type, items)) {  
      //----------------------
                // block.setWarningText(null, warningTextName); 
      }
      else {
        warningText = Blockly.Msg.LISTS_CREATE_WITH_ITEMS_WARNING;
      }

      var c = items.split(",").length;
      if (c > column) column = c;
      allArray.push('{' + items + '}');
      row++;
  }

  if (warningText) block.setWarningText(warningText, warningTextName); 
  else block.setWarningText(null, warningTextName); 

  var code = type + ' ' + name + '['+row+']['+column+'] = {\n  ' + allArray.join(',\n  ') + '\n};\n';
  Blockly.Arduino.definitions_[name] = code;
  return '';
};

Blockly.Arduino['array_2dim_get_index'] = function(block) {
  var name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), blocklyArray_NAME_TYPE);
  var index1 = Blockly.Arduino.valueToCode(
      block, 'INDEX1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var index2 = Blockly.Arduino.valueToCode(
      block, 'INDEX2', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = name + '[' + index1 + '][' + index2 + ']';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['array_2dim_set_index'] = function(block) {
  var name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), blocklyArray_NAME_TYPE);
  var index1 = Blockly.Arduino.valueToCode(
      block, 'INDEX1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var index2 = Blockly.Arduino.valueToCode(
      block, 'INDEX2', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value = Blockly.Arduino.valueToCode(
      block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = name + '[' + index1 + '][' + index2 + '] = ' + value + ';\n';
  return code;
};

Blockly.Arduino['lists_create_empty'] = Blockly.Arduino.noGeneratorCodeInline;

Blockly.Arduino['lists_create_with'] = Blockly.Arduino.noGeneratorCodeInline;

Blockly.Arduino['lists_repeat'] = Blockly.Arduino.noGeneratorCodeInline;

Blockly.Arduino['lists_length'] = Blockly.Arduino.noGeneratorCodeInline;

Blockly.Arduino['lists_isEmpty'] = Blockly.Arduino.noGeneratorCodeInline;

Blockly.Arduino['lists_indexOf'] = Blockly.Arduino.noGeneratorCodeInline;

Blockly.Arduino['lists_getIndex'] = Blockly.Arduino.noGeneratorCodeInline;

Blockly.Arduino['lists_setIndex'] = Blockly.Arduino.noGeneratorCodeLine;
