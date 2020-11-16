/*
Flag's Block.

Copyright (c) 2016 by 旗標科技股份有限公司. All right reserved.

Written by Yu-Hsiung Chiu in July 2016

 */

const VERSION = "1.3.7";
var flagsBlockTitle = "Flag's Block"

var debugMode = 0;
var panelLayout = "horizontal";

var flagsBlockDefaultLang = "zh-hant";

var pinRegexp = /^[0-9]+$|^A[0-9]$|^D[0-9]$/;

var flagsBlockProjectDir = "";
var flagsBlockProjectFileName = "";
var flagsBlockProjectLastDirKey = "flagsBlockProjectLastDir";

var collapseIdeOutputTimer;

var flagsBlockProjectIsLoading = true;
var flagsBlockProjectIsChanged = false;

// var isFirstTimeSaveFileDialog = true;

var blocklyArray_NAME_TYPE = 'ARRAY';

var defaultProjectXML = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="arduino_loop" id="EAg)g_/#Sgta~QPPg4@7" x="37" y="35"></block></xml>';

var flagsBlockClipboard = [];

var isSelectedBlockHighlight = false;
var selectedBlockHighlightTextPrefix = '/* START of Highlight */';
var selectedBlockHighlightTextPostfix = '/* END of Highlight */';

var win;  // browser window

// var blocklyArray_NAMES = new Object();
// var blocklyArray_NAME_LIST = [[]];

function isNWjs() {
  try {
    return (typeof require('nw.gui') !== "undefined");
  } catch (e) {
    return false;
  }
}

if (isNWjs()) {
  var win = require('nw.gui').Window.get();

  // added by Meebox 05/12/2020
  // fix:MacOS copy/paste functionality
  var gui = require('nw.gui');
  if (process.platform === "darwin") {
    var mb = new gui.Menu({ type: 'menubar' });
    mb.createMacBuiltin('FlagsBlock', {
      hideEdit: false,
    });
    gui.Window.get().menu = mb;
  }
}