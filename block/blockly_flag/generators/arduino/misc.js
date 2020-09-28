'use strict';

goog.require('Blockly.Arduino');

Blockly.Arduino['misc_comment'] = function(block) {
  var indentSpaceSize = 2;

  var statement = Blockly.Arduino.statementToCode(block, 'DO').replace(/^\s\s/, '').replace(/\n\s\s/g, '\n') || '  \n';
  var comment = block.getFieldValue('COMMENT');
  var code = '// ' + comment + '\n' + statement +'\n';
  return code;
}; 

Blockly.Arduino['misc_comment_single'] = function(block) {
  var comment = block.getFieldValue('COMMENT');
  var code = '// ' + comment + '\n';
  return code;
}; 