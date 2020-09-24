'use strict';

goog.provide('Blockly.Blocks.misc');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

var commentHUE = 45;

Blockly.Blocks['misc_comment'] = {
  helpUrl: null,
  init: function() {
    this.setColour(commentHUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COMMENT_GROUP + ' ' + 
                     Blockly.Msg.COMMENT_TEXT + Blockly.Msg.COLON)
        .appendField(new Blockly.FieldTextInput(''), 'COMMENT');
    this.appendStatementInput('DO');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
}; 

Blockly.Blocks['misc_comment_single'] = {
  helpUrl: null,
  init: function() {
    this.setColour(commentHUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COMMENT_TEXT + Blockly.Msg.COLON)
        .appendField(new Blockly.FieldTextInput(''), 'COMMENT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
}; 
