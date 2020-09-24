/**
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.lists');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.lists.HUE = 260;

function getArrayTypeList() {
  return  [
    [Blockly.Msg.ARD_TYPE_CHAR, 'char'],
    [Blockly.Msg.ARD_TYPE_NUMBER, 'int'],
  ];
} 

Blockly.Blocks['array_create_with'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_CREATE_WITH_MSG,
      "args0": [
        {
          // "type": "field_input",
          // "name": "NAME",
          // "text": Blockly.Msg.LISTS_CREATE_WITH_NAME,
          // "spellcheck": false,
          "type": "field_variable", 
          "name": "NAME", 
          "variable": Blockly.Msg.LISTS_CREATE_WITH_NAME
        },
        {
          "type": "field_dropdown", 
          "name": "TYPE", 
          "options": getArrayTypeList(),
        },
        {
          "type": "field_input",
          "name": "ITEMS",
          "text": "0,0,0",
          "spellcheck": false,
        }
      ],
      "inputsInline": true,
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/Array'
    });

    // var nameField = new Blockly.FieldTextInput(
    //     Blockly.Msg.LISTS_CREATE_WITH_NAME,
    //     blocklyArrayNameRename);
    // nameField.setSpellcheck(false);
    // var dropdown_type = new Blockly.FieldDropdown(getArrayTypeList());
    // this.appendDummyInput()
    //     .appendField(Blockly.Msg.LISTS_CREATE_WITH_TITLE)
    //     .appendField(nameField, 'NAME');
    // this.appendDummyInput()
    //     .appendField(' '+Blockly.Msg.LISTS_CREATE_WITH_TYPE)
    //     .appendField(dropdown_type, 'TYPE')
    //     .appendField(' {')
    //     .appendField(new Blockly.FieldTextInput('0,0,0'), "ITEMS")
    //     .appendField('}');
    // this.setInputsInline(true);
    // this.setColour(Blockly.Blocks.lists.HUE);
    // this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    // this.setHelpUrl('https://www.arduino.cc/en/Reference/Array');
  },
  // validate: function () {
  //   var myName = this.getFieldValue('NAME');
  //   this.setFieldValue(Blockly.Procedures.findLegalName(myName, this), 'NAME');
  // }
  getArrayDef: function() {
    return [this.getFieldValue('NAME'), this.getFieldValue('TYPE'), this.getFieldValue('ITEMS')];
  },
//   validate: function () {
//     if (!this.isInFlyout) {
//       var variableList = Blockly.Variables.allVariables(Blockly.mainWorkspace);
// //?????????
// console.log(variableList);
//       var myName = this.getFieldValue('NAME');
//       for (var i = 0; i < variableList.length; i++) {
//         if (variableList[i] == myName) {
//           this.setFieldValue(
//             myName+Blockly.Variables.generateUniqueName(Blockly.mainWorkspace), 
//             'NAME');
//           break;
//         }
//       }
//     }
//   },
  getVarType: function() {
    // var type = this.getFieldValue('TYPE');
    // if (type == 'char')  return Blockly.Types.CHARACTER;
    // else if (type == 'int') return Blockly.Types.NUMBER;
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['array_create_num'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_CREATE_NUM_MSG,
      "args0": [
        {
          "type": "field_variable", 
          "name": "NAME", 
          "variable": Blockly.Msg.LISTS_CREATE_WITH_NAME
        },
        {
          "type": "field_dropdown", 
          "name": "TYPE", 
          "options": getArrayTypeList(),
        },
        {
          "type": "field_input",
          "name": "NUM",
        }
      ],
      "inputsInline": true,
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_CREATE_NUM_TOOLTIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/Array'
    });
  },
  getArrayDef: function() {
    return [this.getFieldValue('NAME'), this.getFieldValue('TYPE'), this.getFieldValue('ITEMS')];
  },
  getVarType: function() {
    // var type = this.getFieldValue('TYPE');
    // if (type == 'char')  return Blockly.Types.CHARACTER;
    // else if (type == 'int') return Blockly.Types.NUMBER;
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['array_get_index'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_GET_INDEX_MSG,
      "args0": [
        {
          // "type": "field_input",
          // "name": "NAME",
          // "text": Blockly.Msg.LISTS_CREATE_WITH_NAME,
          // "spellcheck": false,
          "type": "field_variable", 
          "name": "NAME", 
          "variable": Blockly.Msg.LISTS_CREATE_WITH_NAME
        },
        {
          "type": "input_value",
          "name": "INDEX",
          "check": "Number"
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_GET_INDEX_TOOLTIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/Array'
    });
  },
  getVarType: function() {
    // var type = this.getFieldValue('TYPE');
    // if (type == 'char')  return Blockly.Types.CHARACTER;
    // else if (type == 'int') return Blockly.Types.NUMBER;
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['array_set_index'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_SET_INDEX_MSG,
      "args0": [
        {
          // "type": "field_input",
          // "name": "NAME",
          // "text": Blockly.Msg.LISTS_CREATE_WITH_NAME,
          // "spellcheck": false,
          "type": "field_variable", 
          "name": "NAME", 
          "variable": Blockly.Msg.LISTS_CREATE_WITH_NAME
        },
        {
          "type": "input_value",
          "name": "INDEX",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        }

      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_SET_INDEX_TOOLTIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/Array'
    });
  },
  getVarType: function() {
    // var type = this.getFieldValue('TYPE');
    // if (type == 'char')  return Blockly.Types.CHARACTER;
    // else if (type == 'int') return Blockly.Types.NUMBER;
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['array_2dim_create_with'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.itemCount_ = 2;
    this.updateShape_();
    // this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['array_2dim_create_with_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('array_2dim_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('array_2dim_create_with_item');
      itemBlock.initSvg();
      if (i<2) itemBlock.setMovable(false);
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // // Disconnect any children that don't belong.
    // for (var i = 0; i < this.itemCount_; i++) {
    //   var connection = this.getInput('ADD' + i).connection.targetConnection;
    //   if (connection && connections.indexOf(connection) == -1) {
    //     connection.disconnect();
    //   }
    // }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    // var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // var i = 0;
    // while (itemBlock) {
    //   var input = this.getInput('ADD' + i);
    //   itemBlock.valueConnection_ = input && input.connection.targetConnection;
    //   i++;
    //   itemBlock = itemBlock.nextConnection &&
    //       itemBlock.nextConnection.targetBlock();
    // }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    }

    if (!this.itemCount_ && this.getInput('HEADER')) {
      this.removeInput('HEADER');
    } else if (this.itemCount_ && !this.getInput('HEADER')) {
      var dropdown_type = new Blockly.FieldDropdown(getArrayTypeList());
      this.appendDummyInput('HEADER')
          .appendField(Blockly.Msg.LISTS_2DIM_CREATE_WITH_TITLE)
          .appendField(new Blockly.FieldVariable(Blockly.Msg.LISTS_CREATE_WITH_NAME), 'NAME')
          .appendField(' '+Blockly.Msg.LISTS_CREATE_WITH_TYPE)
          .appendField(dropdown_type, 'TYPE');
    }

    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        //var input = this.appendValueInput('ADD' + i);
        // if (i == 0) {
        //   input.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
        // }
        var input = 
          this.appendDummyInput('ADD' + i)
              .appendField(Blockly.Msg.LISTS_ROW_NUMBER.replace('%1',i)+': {')
              .appendField(new Blockly.FieldTextInput('0,0,0'), 'ITEMS' + i)
              .appendField('}');
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  },
  getVarType: function() {
    // var type = this.getFieldValue('TYPE');
    // if (type == 'char')  return Blockly.Types.CHARACTER;
    // else if (type == 'int') return Blockly.Types.NUMBER;
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['array_2dim_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['array_2dim_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['array_2dim_get_index'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_2DIM_GET_INDEX_MSG,
      "args0": [
        {
          "type": "field_variable", 
          "name": "NAME", 
          "variable": Blockly.Msg.LISTS_CREATE_WITH_NAME
        },
        {
          "type": "input_value",
          "name": "INDEX1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "INDEX2",
          "check": "Number"
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_GET_INDEX_TOOLTIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/Array'
    });
  },
  getVarType: function() {
    // var type = this.getFieldValue('TYPE');
    // if (type == 'char')  return Blockly.Types.CHARACTER;
    // else if (type == 'int') return Blockly.Types.NUMBER;
    return Blockly.Types.ARRAY;
  }
};

Blockly.Blocks['array_2dim_set_index'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_2DIM_SET_INDEX_MSG,
      "args0": [
        {
          "type": "field_variable", 
          "name": "NAME", 
          "variable": Blockly.Msg.LISTS_CREATE_WITH_NAME
        },
        {
          "type": "input_value",
          "name": "INDEX1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "INDEX2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        }

      ],
      "inputsInline": true,
      "previousStatement": true,
      "nextStatement": true,
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_SET_INDEX_TOOLTIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/Array'
    });
  },
  getVarType: function() {
    // var type = this.getFieldValue('TYPE');
    // if (type == 'char')  return Blockly.Types.CHARACTER;
    // else if (type == 'int') return Blockly.Types.NUMBER;
    return Blockly.Types.ARRAY;
  }
};