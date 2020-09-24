/*
Flag's Block.

Copyright (c) 2016 by 旗標科技股份有限公司. All right reserved.

Written by Yu-Hsiung Chiu in July 2016

 */

// Ref: http://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string
String.prototype.replaceAll = function(str1, str2, ignore)
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

// Ref: https://github.com/GoogleChrome/ioweb2015/blob/21d7a80aefd6a76474fcdb700ac9965cd4c7800f/app/scripts/helper/util.js#L142-L200
/**
 * Gets a param from the search part of a URL by name.
 * @param {string} param URL parameter to look for.
 * @return {string|undefined} undefined if the URL parameter does not exist.
 */
function getURLParameter(param) {
  if (!window.location.search) {
    return;
  }
  var m = new RegExp(param + '=([^&]*)').exec(window.location.search.substring(1));
  if (!m) {
    return;
  }
  return decodeURIComponent(m[1]);
}

// http://stackoverflow.com/questions/818576/get-directory-of-a-file-name-in-javascript
function dirName(path) {
  if (!path) return '';

  dir = path.match(/(.*)[\/\\]/);
  if (dir) return dir[1];
  else return '';
}

function baseName(path) {
  if (!path) return '';

  file = path.match(/.*[\/\\](.*)$/);
  if (file) return file[1];
  else return path;
}

// Ref: http://www.hostingadvice.com/how-to/javascript-number/
//      http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
function isNumeric(obj) {
  return !Array.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
}

function removeHighlightText(text){
  return text.replaceAll(
        selectedBlockHighlightTextPrefix, ''
      ).replaceAll(
        selectedBlockHighlightTextPostfix, ''
      );
}

function checkFirstRun(){
  $.get("/FIRSTRUN?_=" + (new Date().getTime())).done(function() {
      Ardublockly.alertMessage(
        Ardublockly.getLocalStr('firstRunTitle'),
        Ardublockly.getLocalStr('firstRunBody'),
        true,
        Ardublockly.openSettings
        )

      // if (confirm("您似乎是第一次執行本軟體, 請設定 Arduino 使用的序列埠號, 才能將程式碼上傳到 Arduino 執行.")) {
      //     Ardublockly.openSettings();
      // }
    });
}

function showAboutMsg(){
  Ardublockly.alertMessage(
    Ardublockly.getLocalStr('aboutTitle'),
    Ardublockly.getLocalStr('aboutBody'),
    false
    )
}

function clearShortMessage() {
  $('.toast').remove();
}

function expandIdeOutput() {
  var outputHeader = document.getElementById('ide_output_collapsible_header');

  clearTimeout(collapseIdeOutputTimer);

  if (!outputHeader.className.match('active')) {
    $(outputHeader).trigger('click');
  }
}

function collapseIdeOutput() {
  var outputHeader = document.getElementById('ide_output_collapsible_header');
  if (outputHeader.className.match('active')) {
    $(outputHeader).trigger('click');
  }
}

function changePanelLayout(newLayout) {
  if (newLayout == "horizontal") {
    panelLayout = "horizontal";
    $('#right_panel').removeClass("l12").addClass("l4");
    $('#left_panel').removeClass("l12").addClass("l8");
  }
  else {
    panelLayout = "vertical";
    $('#right_panel').removeClass("l4").addClass("l12");
    $('#left_panel').removeClass("l8").addClass("l12");
  }

  // 更換圖示 and 觸發 resize 事件
  if ($('#right_panel').is(":visible")){
    toggleRightPanelVisible();
  }
  toggleRightPanelVisible();
}

function toggleRightPanelVisible() {
  if (panelLayout == "horizontal") {
    if ($('#right_panel').is(":visible")) {
      $('#left_panel').removeClass("l8").addClass("l12");
      $('#right_panel').hide();
      $('#button_max_blockspanel i').attr('class','mdi-hardware-keyboard-arrow-left');
    }
    else {
      $('#left_panel').removeClass("l12").addClass("l8");
      $('#right_panel').show();
      $('#button_max_blockspanel i').attr('class','mdi-hardware-keyboard-arrow-right');
    }
  }
  else {
    if ($('#right_panel').is(":visible")) {
      $('#right_panel').hide();
      $('#button_max_blockspanel i').attr('class','mdi-hardware-keyboard-arrow-down');
    }
    else {
      $('#right_panel').show();
      $('#button_max_blockspanel i').attr('class','mdi-hardware-keyboard-arrow-up');
    }
  }

  window.dispatchEvent(new Event('resize'));
}

// added and modified by Mee
// add Mac support 2019/4/9
function runFileByOSVersion(exe32, exe64, exeMac){
  var isSystemSupported = true;
  var os;
  var is64Bit;
  var isMac = false;
  var cmd = 'cmd.exe'; // commnad for Windows;
  var args;

  if (!isNWjs()){
    isSystemSupported = false;
  }
  else{
    os = require('os');
    if(os.platform().startsWith('darwin')) isMac = true;
    else if (os.platform().slice(0,3).toLowerCase() != 'win')
      isSystemSupported = false;
  }

  if (!isSystemSupported){
    Ardublockly.alertMessage(
      Ardublockly.getLocalStr('driverNotSupportedTitle'),
      Ardublockly.getLocalStr('driverNotSupportedBody'),
      false
      );
    return;
  }

  is64Bit = os.arch() === 'x64' || process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432');
  var driverFile;

  if(isMac) {
    cmd = '/usr/bin/open';
    args = [exeMac];
    // driveFile = exeMac;
  }
  else if (is64Bit)
    args = ['/c', exe64];
    // driverFile = exe64;
  else
    args = ['/c', exe32];
    // driverFile = exe32;

  var execFile = require('child_process').execFile, child;
  child = execFile(cmd, args,
    function(error,stdout,stderr) {
      if (error) {
        console.log(error.stack);
        console.log('Error code: '+ error.code);
        console.log('Signal received: '+
               error.signal);
        }
      console.log('Child Process stdout: '+ stdout);
      console.log('Child Process stderr: '+ stderr);
  });
  child.on('exit', function (code) {
    console.log('Child process exited '+
        'with exit code '+ code);
  });
}

function installDriver(){
  runFileByOSVersion(
    '..\\..\\arduino\\drivers\\dpinst-x86.exe',
    '..\\..\\arduino\\drivers\\dpinst-amd64.exe',
    '' /* Mac don't need driver */);
}

function installDriver_1(){
  runFileByOSVersion(
    '..\\..\\flag\\ch341ser\\ch341ser.exe',
    '..\\..\\flag\\ch341ser\\ch341ser.exe',
    '../../flag/CH341SER_MAC/CH34x_Install_V1.4.pkg');
}
//-----------------

function saveNewProject(event){
  var sketchName = document.getElementById('sketch_name').value;
  if (sketchName == Ardublockly.getLocalStr('projectName')) {
    swal({
      // title: '',
      text: Ardublockly.getLocalStr('inputProjectName'),
      input: 'text',
      // inputValue: '',
      width: 350,
      // showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: Ardublockly.getLocalStr('okay'),
      cancelButtonText: Ardublockly.getLocalStr('cancel'),
      inputValidator: function(value) {
        return new Promise(function(resolve, reject) {
          if (!value) {
            reject(Ardublockly.getLocalStr('emptyValue'));
            return;
          }
          resolve();
        });
      }
    }).then(function(value) {
      Ardublockly.sketchNameSet(value);
      Ardublockly.saveXmlFile();
    }, function(dismiss) {
      // dismiss can be 'cancel', 'overlay', 'close', 'timer'
      if (dismiss === 'cancel') {
      }
    });
  }
  else {
    Ardublockly.saveXmlFile();
  }
}

function saveProject(event, isSaveAs, callback){
  if (typeof isSaveAs == "undefined") isSaveAs = false;

  if (!flagsBlockProjectIsChanged && !isSaveAs) {
    Ardublockly.shortMessage(Ardublockly.getLocalStr('projectNotChanged'));
    return;
  }

  Ardublockly.shortMessage(Ardublockly.getLocalStr('projectSaving'));

  if (isNWjs()) {
    // NWjs 環境
    var saveFile = document.getElementById('save_file');
    if (saveFile === null) {
      var saveFileDom = document.createElement('INPUT');
      saveFileDom.type = 'file';
      saveFileDom.id = 'save_file';
      saveFileDom.accept = '.xml';

      var saveFileWrapperDom = document.createElement('DIV');
      saveFileWrapperDom.id = 'save_file_wrapper';
      saveFileWrapperDom.style.display = 'none';
      saveFileWrapperDom.appendChild(saveFileDom);

      document.body.appendChild(saveFileWrapperDom);
      saveFile = document.getElementById('save_file');
      //saveFile.addEventListener('change', parseInputXMLfile, false);

      saveFile.addEventListener("change", function(e) {
        flagsBlockProjectDir = dirName(this.value);
        flagsBlockProjectFileName = baseName(this.value);
        saveProjectHelper(false, callback);
      }, false);
    }

    if (flagsBlockProjectDir == '' || flagsBlockProjectFileName == '' || isSaveAs) {
      if (flagsBlockProjectFileName == '')
        saveFile.nwsaveas = Ardublockly.getLocalStr('projectName');
      else
        saveFile.nwsaveas = flagsBlockProjectFileName;

      saveFile.nwsaveas = saveFile.nwsaveas.replace(/\.[xX][mM][lL]$/,'');

      var workingDir = flagsBlockProjectDir;
      if (!workingDir && 'localStorage' in window && window.localStorage[flagsBlockProjectLastDirKey])
        workingDir = window.localStorage[flagsBlockProjectLastDirKey];

      // Ref: https://github.com/nwjs/nw.js/issues/3372
      // $('<input type="file" nwworkingdir="C:\\Users\Matthew\\" nwsaveas="C:\\Users\Matthew\\untitled" />').click()
      if (workingDir) {
        var path = require('path');
        workingDir = workingDir.replaceAll('\\', '\\\\');
        saveFile.nwworkingdir = workingDir;
        saveFile.nwsaveas =
          workingDir + path.sep + path.sep + saveFile.nwsaveas;
      }

      // Reset value of input after loading because Chrome will not fire
      // a 'change' event if the same file is loaded again.
      saveFile.value = '';

      saveFile.click();
      // var iii = '<input type="file" nwworkingdir="'+saveFile.nwworkingdir+'" nwsaveas="'+saveFile.nwsaveas+'" />';
      // console.log(iii);
      // $(iii).click();
//$('<input type="file" nwworkingdir="C:\\temp\\p" nwsaveas="C:\\temp\\p\\untitled" />').click();
    }
    else {
      saveProjectHelper(false, callback);
    }
  }
  else {  // 正常的瀏覽器環境
    saveProjectHelper(isSaveAs, callback);
  }
}

function saveProjectHelper (isSaveAs, callback){
  var data = Ardublockly.generateXml();
  var url = 'SaveXML.html';

  var responseHandler = function(jsonResponse) {
    console.log('saveProjectResponse='+jsonResponse);
    var errorId = 1;
    if (jsonResponse) {
      var parsedJson = JSON.parse(jsonResponse);
      if (parsedJson.success) {
        clearShortMessage();
        Ardublockly.shortMessage(Ardublockly.getLocalStr('projectSaved'));
        flagsBlockProjectDir = parsedJson.directory;
        flagsBlockProjectFileName = parsedJson.filename;
        flagsBlockProjectIsChanged = false;
        setTitle(flagsBlockProjectFileName);
        if (typeof callback === 'function') {
          callback();
        }
        return;
      }
      else {
        errorId = parsedJson.error_id;
      }
    }

    // errorId 10 表示使用者取消存檔動作
    if (errorId == 10) return;

    clearShortMessage();
    Ardublockly.shortMessage(
      Ardublockly.getLocalStr('projectSaveFailed').replace('%1', errorId)
    );
  };

  var request = ArdublocklyServer.createAjaxRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'text/xml');

  request.setRequestHeader('Project-Dir', encodeURI(flagsBlockProjectDir));
  request.setRequestHeader('Project-FileName', encodeURI(flagsBlockProjectFileName));
  request.setRequestHeader('Project-isSaveAs', isSaveAs?'yes':'no');
  request.setRequestHeader('Project-Default-Name', encodeURI(Ardublockly.getLocalStr('projectName')));
  request.setRequestHeader('Project-FileType', encodeURI(Ardublockly.getLocalStr('projectFileType')));

  // The data received is JSON, so it needs to be converted into the right
  // format to be displayed in the page.
  request.onreadystatechange = function() {
    // if (isFirstTimeSaveFileDialog && isNWjs()) {
    //   isFirstTimeSaveFileDialog = false;
    //   require('nw.gui').Window.get().restore();
    //   require('nw.gui').Window.get().focus();
    // }

    if (request.readyState == 4) {
      if (request.status == 200) {
        responseHandler(request.responseText);
      } else if (request.status == 405) {
        // return a null element which will be dealt with in the front end
        responseHandler(null);
      }
    }
  };

  // Send the data
  try {
    // if (isFirstTimeSaveFileDialog && isNWjs()) require('nw.gui').Window.get().minimize();
    request.send(data);
  } catch (e) {
    // The request will fail if opening the html directly on a browser, so
    // let's just send the callback nullified and the front end will deal.
    responseHandler(null);
  }
}

// Added by Mee
// --------------------------------------------------------
function saveSound(data){
  var url = 'SaveXML.html';

  var responseHandler = function(jsonResponse) {
    console.log('uploadSoundResponse='+jsonResponse);
    var errorId = 1;
    if (jsonResponse) {
      var parsedJson = JSON.parse(jsonResponse);
      if (parsedJson.success) {
        clearShortMessage();
        Ardublockly.shortMessage(Ardublockly.getLocalStr('soundUploaded'));
        return;
      }
      else {
        errorId = parsedJson.error_id;
      }
    }

    // errorId 10 表示使用者取消存檔動作
    if (errorId == 10) return;

    clearShortMessage();
    Ardublockly.shortMessage(
      Ardublockly.getLocalStr('soundUploadFailed').replace('%1', errorId)
    );
  };

  var request = ArdublocklyServer.createAjaxRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'audio/x-wav');

  // The data received is JSON, so it needs to be converted into the right
  // format to be displayed in the page.
  request.onreadystatechange = function() {

    if (request.readyState == 4) {
      if (request.status == 200) {
        responseHandler(request.responseText);
      } else if (request.status == 405) {
        // return a null element which will be dealt with in the front end
        responseHandler(null);
      }
    }
  };

  // Send the data
  try {
    // if (isFirstTimeSaveFileDialog && isNWjs()) require('nw.gui').Window.get().minimize();
    request.send(data);
  } catch (e) {
    // The request will fail if opening the html directly on a browser, so
    // let's just send the callback nullified and the front end will deal.
    responseHandler(null);
  }
}

function saveHTML(data){
  var url = 'SaveXML.html';

  var responseHandler = function(jsonResponse) {
    console.log('uploadSoundResponse='+jsonResponse);
    var errorId = 1;
    if (jsonResponse) {
      var parsedJson = JSON.parse(jsonResponse);
      if (parsedJson.success) {
        clearShortMessage();
        Ardublockly.shortMessage(Ardublockly.getLocalStr('HTMLUploaded'));
        return;
      }
      else {
        errorId = parsedJson.error_id;
      }
    }

    // errorId 10 表示使用者取消存檔動作
    if (errorId == 10) return;

    clearShortMessage();
    Ardublockly.shortMessage(
      Ardublockly.getLocalStr('HTMLUploadFailed').replace('%1', errorId)
    );
  };

  var request = ArdublocklyServer.createAjaxRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'text/html');

  // The data received is JSON, so it needs to be converted into the right
  // format to be displayed in the page.
  request.onreadystatechange = function() {

    if (request.readyState == 4) {
      if (request.status == 200) {
        responseHandler(request.responseText);
      } else if (request.status == 405) {
        // return a null element which will be dealt with in the front end
        responseHandler(null);
      }
    }
  };

  // Send the data
  try {
    // if (isFirstTimeSaveFileDialog && isNWjs()) require('nw.gui').Window.get().minimize();
    request.send(data);
  } catch (e) {
    // The request will fail if opening the html directly on a browser, so
    // let's just send the callback nullified and the front end will deal.
    responseHandler(null);
  }
}

//--------------

function createNewProject(event){
  Ardublockly.discardAllBlocks(event, function() {
    setAllNewContent();
    Ardublockly.sketchNameSet('');
    flagsBlockProjectDir = '';
    flagsBlockProjectFileName = '';
    Ardublockly.workspace.clearUndo();
    // window.localStorage.setItem('flagBlocks', '');
    // window.localStorage.setItem('flagProjectName', '');
  });
}

function openUserProject(){
  Ardublockly.loadUserXmlFile();
}

// added bt Mee
function uploadSound() {
  Ardublockly.uploadSound();
}

function uploadHTML() {
  Ardublockly.uploadHTML();
}
// ------------

function openServerProject(url){
  Ardublockly.loadServerXmlFile(url);
}

function setAllNewContent(){
  Ardublockly.workspace.clearUndo();
  flagsBlockProjectIsLoading = true;
  flagsBlockProjectIsChanged = false;
}

function setTitle(myTitle){
  //更改 Title 在部份電腦無法正常顯示, 所以改用頁面的 input 來顯示
  // if (myTitle) {
  //   if (flagsBlockProjectIsChanged && !flagsBlockProjectIsLoading) {
  //     myTitle = myTitle + '*';
  //   }
  //   window.parent.document.title = myTitle + ' - ' + flagsBlockTitle;
  // }
  // else {
  //   window.parent.document.title = flagsBlockTitle;
  // }

  window.parent.document.title = flagsBlockTitle;

  if (!myTitle) {
      myTitle = flagsBlockProjectFileName || Ardublockly.getLocalStr('projectName');
  }

  myTitle = myTitle.replace(/\.[xX][mM][lL]$/,'');
  if (flagsBlockProjectIsChanged && !flagsBlockProjectIsLoading) {
    myTitle = '*' + myTitle;
  }

  var sketchNameInput = $('#sketch_name');
  sketchNameInput.val(myTitle);
  sketchNameInput.attr('size', myTitle.length+4);

  if ('localStorage' in window && flagsBlockProjectDir &&
      flagsBlockProjectDir != window.localStorage[flagsBlockProjectLastDirKey] ){
    window.localStorage.setItem(flagsBlockProjectLastDirKey, flagsBlockProjectDir);
  }
}

function setProjectName(newName){
  newName = newName || Ardublockly.getLocalStr('projectName');
  if (!newName.match(/\.[xX][mM][lL]$/)) flagsBlockProjectFileName = newName + '.xml';
  setTitle(flagsBlockProjectFileName);
}

function workspaceChangeHandler(event){
  // there is no event when a workspace finishes loading/rendering from xml.
  // 所以用 UI 事件來判斷專案是否載入完畢
  if (event.type == Blockly.Events.UI) {
    flagsBlockProjectIsLoading = false;
  }
  Ardublockly.renderContent();
  setTitle(flagsBlockProjectFileName);
}

function undoAction() {
  flagsBlockProjectIsLoading = false;
  Ardublockly.workspace.undo(false);
  // if (Ardublockly.workspace.undoStack_.length <= 0) {
  //   $('#button_undo').addClass('disabled')
  //   $('#menu_undo').addClass('disabled')
  // }
}

function redoAction() {
  flagsBlockProjectIsLoading = false;
  Ardublockly.workspace.undo(true);
}

function restoreBlocks() {
  if ('localStorage' in window && window.localStorage['flagBlocks']) {
    Ardublockly.workspace.clear();
    var xml = Blockly.Xml.textToDom(window.localStorage['flagBlocks']);
    Blockly.Xml.domToWorkspace(xml, Ardublockly.workspace);

    if (window.localStorage['flagProjectName']) {
      Ardublockly.sketchNameSet(window.localStorage['flagProjectName']);
    }
  }
  else {
    Ardublockly.replaceBlocksfromXml(defaultProjectXML);
  }
}

function backupBlocks() {
  if ('localStorage' in window && Ardublockly.workspace.getAllBlocks().length > 1) {
    var xml = Blockly.Xml.workspaceToDom(Ardublockly.workspace);
    window.localStorage.setItem('flagBlocks', Blockly.Xml.domToText(xml));
    window.localStorage.setItem('flagProjectName', document.getElementById('sketch_name').value);
  }
}

function changesNotSavedAlert () {
  $('#save_changes_title').text(Ardublockly.getLocalStr('changesNotSavedTitle'));
  // 用 append 才能顯示 HTML Tag
  $('#save_changes_body').text('');
  $('#save_changes_body').append(Ardublockly.getLocalStr('changesNotSavedBody'));

  $('#save_changes_yes_link').unbind("click").bind('click', function(){
    saveProject(null, false, function(){win.close(true);});
  });

  $('#save_changes_no_link').unbind("click").bind('click', function(){
    win.close(true);
  });

  $('#save_changes_alert').openModal();
  window.location.hash = '';
};

// window.onbeforeunload  = function (e) {
//   backupBlocks();
// }

function NWjsClose(forceClose) {
console.log("NWjsClose");
  if (!forceClose && flagsBlockProjectIsChanged) {
    changesNotSavedAlert();
  }
  else {
    win.close(true);
  }
}

if (isNWjs()) {
  win.on('close', NWjsClose);

  // win.on('close',function() {
  //    if (window.onbeforeunload) {
  //        var msg = window.onbeforeunload();
  //        // if (msg) {
  //        //     if (!confirm(msg)) {
  //        //        return false;
  //        //     }
  //        // }
  //        win.close(true);
  //    }
  // });
}
else {
  window.onbeforeunload  = function (e) {
    console.log('onbeforeunload event');
    if (flagsBlockProjectIsChanged)
      return Ardublockly.getLocalStr('changesNotSaved');
  }
}

// function blocklyArrayNameRename(text) {
//   // Strip leading and trailing whitespace.  Beyond this, all names are legal.
//   text = text.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');

//   // Ensure two identically-named procedures don't exist.
//   text = blocklyArrayFindLegalName(text, this.sourceBlock_);

//   return text;
// };

// function blocklyArrayFindLegalName(name, block) {
//   // var variableList = Blockly.Variables.allVariables(Blockly.mainWorkspace);
//   // for (var i = 0; i < variableList.length; i++) {
//   //   if (variableList[i] == myName) {
//   //     text = myName+Blockly.Variables.generateUniqueName(Blockly.mainWorkspace);
//   //     break;
//   //   }
//   // }

//   if (block.isInFlyout) {
//     return name;
//   }

//   while (!blocklyArrayIsLegalName(name, block)) {
//     var r = name.match(/^(.*?)(\d+)$/);
//     if (!r) {
//       name += '2';
//     } else {
//       name = r[1] + (parseInt(r[2], 10) + 1);
//     }
//   }

//   return name;
// }

// function blocklyArrayIsLegalName(name, block) {
//   //var blocks = Blockly.mainWorkspace.getAllBlocks();
//   var blocks = block.workspace.getAllBlocks();
//   for (var i = 0; i < blocks.length; i++) {
//     if (blocks[i] == block) {
//       continue;
//     }
//     if (blocks[i].getArrayDef) {
//       var arrayName = blocks[i].getArrayDef();
//       if (Blockly.Names.equals(arrayName[0], name)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function getArrayNameList() {
//   if (!blocklyArray_NAMES.default)
//     blocklyArray_NAMES.default=[Blockly.Msg.LISTS_CREATE_WITH_NAME,Blockly.Msg.LISTS_CREATE_WITH_NAME];

//   blocklyArray_NAME_LIST = [];
//   for (var i in blocklyArray_NAMES) {
//     blocklyArray_NAME_LIST.push(blocklyArray_NAMES[i])
//   }
//   return blocklyArray_NAME_LIST;
// }

// 取得上一個積木
Blockly.Block.prototype.getPrevBlock = function() {
  return this.previousConnection && this.previousConnection.targetBlock();
};

// 取得變數積木的型別
function getVarBlockType(block) {
  var type;
  if (isVarGetBlock(block)) {
    type = Blockly.Arduino.StaticTyping.varTypeDict[block.getVars()[0]];
  }
  else {
    type = false; 
  }
  return type;
}

function isVarGetBlock(block) {
  if (block.type === "variables_get") {
    return true;
  }
  else {
    return false; 
  }

}

// =============================================================
// Overrides of functions on Blockly.Block
// =============================================================

// 命名變數時會檢查是否重複
// 設定新變數名稱的動作從自動命名改為手動命名
//
// @return {null|undefined|string} An acceptable new variable name, or null if
//     change is to be either aborted (cancel button) or has been already
//     handled (rename), or undefined if an existing variable was chosen.
Blockly.FieldVariable.dropdownChange = function(text) {
  function promptName(promptText, defaultText, sourceBlock, callback) {
    Blockly.hideChaff();

    if (defaultText=="變數" || defaultText=="名稱") defaultText = '';

    swal({
      // title: '',
      text: promptText,
      input: 'text',
      inputValue: defaultText,
      width: 350,
      // showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: Ardublockly.getLocalStr('okay'),
      cancelButtonText: Ardublockly.getLocalStr('cancel'),
      inputValidator: function(newVar) {
        return new Promise(function(resolve, reject) {
          if (!newVar) {
            reject(Ardublockly.getLocalStr('emptyValue'));
            return;
          }

          // Merge runs of whitespace.  Strip leading and trailing whitespace.
          // Beyond this, all names are legal.
          newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
          if (newVar == Blockly.Msg.RENAME_VARIABLE ||
              newVar == Blockly.Msg.NEW_VARIABLE) {
            // Ok, not ALL names are legal...
            reject(Ardublockly.getLocalStr('invalidNameBody'));
            return;
          }

          // 檢查重複名稱
          var variableList = Blockly.Variables.allVariables(workspace);
          for (var i = 0; i < variableList.length; i++) {
            if (variableList[i].toLowerCase() == newVar) {
              // This potential name is already used.
              reject(Ardublockly.getLocalStr('invalidNameBody'));
              return;
            }
          }

          resolve();
        });
      }
    }).then(function(newVar) {
      callback(sourceBlock, newVar);
    }, function(dismiss) {
      // dismiss can be 'cancel', 'overlay', 'close', 'timer'
      if (dismiss === 'cancel') {
      }
    });
  }

  var workspace = this.sourceBlock_.workspace;
  var oldVar = this.getText();
  if (text == Blockly.Msg.RENAME_VARIABLE) {
    promptName(Blockly.Msg.RENAME_VARIABLE_TITLE.replace('%1', oldVar),
               oldVar, this.sourceBlock_, function(block, text) {
      if (text) {
        Blockly.Variables.renameVariable(oldVar, text, workspace);
      }
    });
    return null;
  } else if (text == Blockly.Msg.NEW_VARIABLE) {
    promptName(Blockly.Msg.NEW_VARIABLE_TITLE, oldVar, this.sourceBlock_,
                function(block, text) {
      // Since variables are case-insensitive, ensure that if the new variable
      // matches with an existing variable, the new case prevails throughout.
      if (text) {
        Blockly.Variables.renameVariable(text, text, workspace);
        block.renameVar(oldVar,text);
      }
    });
    return null;
  }
  return undefined;

  // function promptName(promptText, defaultText) {
  //   Blockly.hideChaff();
  //   var newVar = window.prompt(promptText, defaultText);
  //   // Merge runs of whitespace.  Strip leading and trailing whitespace.
  //   // Beyond this, all names are legal.
  //   if (newVar) {
  //     newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
  //     if (newVar == Blockly.Msg.RENAME_VARIABLE ||
  //         newVar == Blockly.Msg.NEW_VARIABLE) {
  //       // Ok, not ALL names are legal...
  //       newVar = null;
  //     }
  //   }
  //   var variableList = Blockly.Variables.allVariables(workspace);
  //   for (var i = 0; i < variableList.length; i++) {
  //     if (variableList[i].toLowerCase() == newVar) {
  //       // This potential name is already used.
  //       return false;
  //     }
  //   }
  //   return newVar;
  // }
  // var workspace = this.sourceBlock_.workspace;
  // var oldVar = this.getText();
  // if (text == Blockly.Msg.RENAME_VARIABLE) {
  //   text = promptName(Blockly.Msg.RENAME_VARIABLE_TITLE.replace('%1', oldVar),
  //                     oldVar);
  //   if (text) {
  //     Blockly.Variables.renameVariable(oldVar, text, workspace);
  //   }
  //   else if (text === false) {
  //     Ardublockly.alertMessage(
  //       Ardublockly.getLocalStr('invalidNameTitle'),
  //       Ardublockly.getLocalStr('invalidNameBody'),
  //       false);
  //   }
  //   return null;
  // } else if (text == Blockly.Msg.NEW_VARIABLE) {
  //   text = promptName(Blockly.Msg.NEW_VARIABLE_TITLE, oldVar);
  //   // Since variables are case-insensitive, ensure that if the new variable
  //   // matches with an existing variable, the new case prevails throughout.
  //   if (text) {
  //     Blockly.Variables.renameVariable(text, text, workspace);
  //     //return text;
  //     this.sourceBlock_.renameVar(oldVar,text);
  //     //console.log(this);
  //     return null;
  //   }
  //   else if (text === false) {
  //     Ardublockly.alertMessage(
  //       Ardublockly.getLocalStr('invalidNameTitle'),
  //       Ardublockly.getLocalStr('invalidNameBody'),
  //       false);
  //   }
  //   return null;
  // }
  // return undefined;
};


// 1.變數積木停用後不要在最前面定義
// 2.修正函式積木收合後, 裡面的變數不會在最前面定義
Blockly.Arduino.StaticTyping.collectVarsWithTypes = function(workspace) {
  this.varTypeDict = Object.create(null);
  this.pendingVarTypeDict = Object.create(null);

  // var blocks = Blockly.StaticTyping.getAllStatementsOrdered(workspace);
  var blocks = workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].disabled ||
          (blocks[i].parentBlock_ && blocks[i].parentBlock_.disabled)) continue;

    //blocks[i].select();  // for step debugging, highlights block in workspace
    // Each statement block iterates through its input children collecting vars
    var blockVarAndTypes = Blockly.StaticTyping.getBlockVars(blocks[i]);
    for (var j = 0; j < blockVarAndTypes.length; j++) {
      var variableName = blockVarAndTypes[j][0];
      var variableType = blockVarAndTypes[j][1];
      // If the type comes from a variable, so it's not directly defined, it
      // returns an Array<String(block type), String(source variable name)>
      if (goog.isArray(variableType)) {
        if (this.varTypeDict[variableType[1]]) {
          variableType = this.varTypeDict[variableType[1]];
        } else {
          // Dependant variable undefined, add this var to the pending list
          if (!goog.isArray(this.pendingVarTypeDict[variableType[1]])) {
            this.pendingVarTypeDict[variableType[1]] = [variableName];
          } else {
            this.pendingVarTypeDict[variableType[1]].push(variableName);
          }
          variableType = Blockly.Types.UNDEF;
        }
      }
      this.assignTypeToVars(blocks[i], variableName, variableType);

      // 函式的參數變數要不要在 global 定義？
      // if (typeof blocks[i].getProcedureDef === 'function')
      // else
    }
  }

  return this.varTypeDict;
};

// 若 ChildBlock 是變數積木, 則查詢其型別
Blockly.Types.getChildBlockType = function(block) {
  var blockType = null;
  var nextBlock = block;
  var varType = null;
  // Only checks first input block, so it decides the type. Incoherences amongst
  // multiple inputs dealt at a per-block level with their own block warnings
  while (nextBlock && (nextBlock.getBlockType === undefined) &&
         (nextBlock.inputList.length > 0)) {
    nextBlock = nextBlock.inputList[0].connection.targetBlock();
  }
  if (nextBlock === block) {
    // Set variable block is empty, so no type yet
    blockType = Blockly.Types.CHILD_BLOCK_MISSING;
  } else if (nextBlock === null) {
    // Null return from targetBlock indicates no block connected
    blockType = Blockly.Types.CHILD_BLOCK_MISSING;
  } else {
    varType = getVarBlockType(nextBlock);
    if (varType) {
      blockType = varType;
    }
    else{
      var func = nextBlock.getBlockType;
      if (func) {
        blockType = nextBlock.getBlockType();
      } else {
        // Most inner block, supposed to define a type, is missing getBlockType()
        blockType = Blockly.Types.NULL;
      }
    }
  }

  return blockType;
};

// 若新舊兩種型別是相容的, 就不顯示警告訊息
Blockly.StaticTyping.prototype.setBlockTypeWarning =
    function(block, blockType, varName) {
  var warningLabel = 'varType';
  if ((blockType == Blockly.Types.CHILD_BLOCK_MISSING) ||
      (this.varTypeDict[varName] == Blockly.Types.CHILD_BLOCK_MISSING)) {
    // User still has to attach a block to this variable or its first
    // declaration, so for now do not display any warning
    block.setWarningText(null, warningLabel);
  } else if (this.varTypeDict[varName].checkList.indexOf(blockType.typeId) != -1) {
    block.setWarningText(null, warningLabel);
  } else if ((this.varTypeDict[varName] !== blockType) &&
             (blockType !== Blockly.Types.UNDEF)) {
    // block.setWarningText('The variable ' + varName + ' has been first ' +
    //     'assigned to the "' + this.varTypeDict[varName].typeName + '" type\n' +
    //     'and this block tries to assign the type "' + blockType.typeName + '"!',
    //     warningLabel);
    block.setWarningText(
      Blockly.Msg.BLOCK_TYPE_WARNING.replace('%1', varName)
          .replace('%2', this.varTypeDict[varName].typeName)
          .replace('%3', blockType.typeName),
        warningLabel);
  } else {
    block.setWarningText(null, warningLabel);
  }
};

// 新增 unsigned long
/** Large integer number. */
Blockly.Types.UNSIGNED_LARGE_NUMBER = new Blockly.Type({
  typeId: 'Unsigned Large Number',
  typeMsgName: 'ARD_TYPE_ULONG',
  compatibleTypes: []    // Circular dependencies, add after all declarations
});

// 新增 double
/** double number. */
Blockly.Types.DOUBLE = new Blockly.Type({
  typeId: 'DOUBLE',
  typeMsgName: 'ARD_TYPE_DOUBLE',
  compatibleTypes: []    // Circular dependencies, add after all declarations
});

Blockly.Types.UNSIGNED_LARGE_NUMBER.addCompatibleTypes([
    Blockly.Types.BOOLEAN,
    Blockly.Types.NUMBER,
    Blockly.Types.DECIMAL,
    Blockly.Types.SHORT_NUMBER,
    Blockly.Types.LARGE_NUMBER,
    Blockly.Types.DOUBLE]);

Blockly.Types.DOUBLE.addCompatibleTypes([
    Blockly.Types.BOOLEAN,
    Blockly.Types.NUMBER,
    Blockly.Types.DECIMAL,
    Blockly.Types.SHORT_NUMBER,
    Blockly.Types.LARGE_NUMBER,
    Blockly.Types.UNSIGNED_LARGE_NUMBER]);

Blockly.Types.NUMBER.addCompatibleTypes([
    Blockly.Types.UNSIGNED_LARGE_NUMBER,
    Blockly.Types.DOUBLE]);

Blockly.Types.SHORT_NUMBER.addCompatibleTypes([
    Blockly.Types.UNSIGNED_LARGE_NUMBER,
    Blockly.Types.DOUBLE]);

Blockly.Types.LARGE_NUMBER.addCompatibleTypes([
    Blockly.Types.UNSIGNED_LARGE_NUMBER,
    Blockly.Types.DOUBLE]);

/**
 * Generates Arduino Types from a Blockly Type.
 * @param {!Blockly.Type} typeBlockly The Blockly type to be converted.
 * @return {string} Arduino type for the respective Blockly input type, in a
 *     string format.
 * @private
 */
Blockly.Arduino.getArduinoType_ = function(typeBlockly) {
  switch (typeBlockly.typeId) {
    case Blockly.Types.TEXT.typeId:
      return 'String';
    case Blockly.Types.CHARACTER.typeId:
      return 'char';
    case Blockly.Types.BOOLEAN.typeId:
      return 'boolean';
    case Blockly.Types.NUMBER.typeId:
      return 'int';
    case Blockly.Types.DECIMAL.typeId:
      return 'float';
    case Blockly.Types.SHORT_NUMBER.typeId:
      return 'short';
    case Blockly.Types.LARGE_NUMBER.typeId:
      return 'long';
    case Blockly.Types.UNSIGNED_LARGE_NUMBER.typeId:
      return 'unsigned long';
    case Blockly.Types.DOUBLE.typeId:
      return 'double';
    case Blockly.Types.NULL.typeId:
      return 'void';
    case Blockly.Types.UNDEF.typeId:
      return 'undefined';
    case Blockly.Types.CHILD_BLOCK_MISSING.typeId:
      // If no block connected default to int, change for easier debugging
      //return 'ChildBlockMissing';
      return 'int';
    default:
      return 'Invalid Blockly Type';
    }
};

function copyBlockToClipboard (block, isAppend) {

  // Save the clipboard.
  var clipboardXml = Blockly.clipboardXml_;
  var clipboardSource = Blockly.clipboardSource_;

  Blockly.copy_(block);

  if (isAppend === true) {
    flagsBlockClipboard.push(Blockly.clipboardXml_);
  }
  else {
    flagsBlockClipboard = [Blockly.clipboardXml_];
  }

  Ardublockly.shortMessage(Blockly.Msg.CLIPBOARD_TOTALAMOUNT.replace('%1', flagsBlockClipboard.length));

  // Restore the clipboard.
  Blockly.clipboardXml_ = clipboardXml;
  Blockly.clipboardSource_ = clipboardSource;
}

//新增：複製到暫存區, 附加至暫存區, 清除暫存區
//移除：加入註解, 說明
/**
 * Show the context menu for this block.
 * @param {!Event} e Mouse event.
 * @private
 */
Blockly.BlockSvg.prototype.showContextMenu_ = function(e) {
  if (this.workspace.options.readOnly || !this.contextMenu) {
    return;
  }
  // Save the current block in a variable for use in closures.
  var block = this;
  var menuOptions = [];

  if (this.isDeletable() && this.isMovable() && !block.isInFlyout) {
    // Option to duplicate this block.
    var duplicateOption = {
      text: Blockly.Msg.DUPLICATE_BLOCK,
      enabled: true,
      callback: function() {
        Blockly.duplicate_(block);
      }
    };
    if (this.getDescendants().length > this.workspace.remainingCapacity()) {
      duplicateOption.enabled = false;
    }
    menuOptions.push(duplicateOption);

    // 複製, 附加, 清除
    var copyToClipboardOption = {
      text: Blockly.Msg.COPY_BLOCK_TO_CLIPBOARD,
      enabled: true,
      callback: function() {
        copyBlockToClipboard(block, false);
      }
    };
    if (this.getDescendants().length > this.workspace.remainingCapacity()) {
      copyToClipboardOption.enabled = false;
    }
    menuOptions.push(copyToClipboardOption);

    var appendToClipboardOption = {
      text: Blockly.Msg.APPEND_BLOCK_TO_CLIPBOARD,
      enabled: true,
      callback: function() {
        copyBlockToClipboard(block, true);
      }
    };
    if (this.getDescendants().length > this.workspace.remainingCapacity()) {
      appendToClipboardOption.enabled = false;
    }
    menuOptions.push(appendToClipboardOption);

    var clearClipboardOption = {
      text: Blockly.Msg.CLEAR_CLIPBOARD,
      enabled: false,
      callback: function() {
        flagsBlockClipboard = [];
      }
    };
    if (flagsBlockClipboard.length > 0) {
      clearClipboardOption.enabled = true;
      clearClipboardOption.text = clearClipboardOption.text + ' (' + flagsBlockClipboard.length + ')';
    }
    menuOptions.push(clearClipboardOption);

    if (this.isEditable() && !this.collapsed_ &&
        this.workspace.options.comments) {
      // Option to add/remove a comment.
      var commentOption = {enabled: !goog.userAgent.IE};
      if (this.comment) {
        commentOption.text = Blockly.Msg.REMOVE_COMMENT;
        commentOption.callback = function() {
          block.setCommentText(null);
        };
      } else {
        commentOption.text = Blockly.Msg.ADD_COMMENT;
        commentOption.callback = function() {
          block.setCommentText('');
        };
      }
      // menuOptions.push(commentOption);
    }

    // Option to make block inline.
    if (!this.collapsed_) {
      for (var i = 1; i < this.inputList.length; i++) {
        if (this.inputList[i - 1].type != Blockly.NEXT_STATEMENT &&
            this.inputList[i].type != Blockly.NEXT_STATEMENT) {
          // Only display this option if there are two value or dummy inputs
          // next to each other.
          var inlineOption = {enabled: true};
          var isInline = this.getInputsInline();
          inlineOption.text = isInline ?
              Blockly.Msg.EXTERNAL_INPUTS : Blockly.Msg.INLINE_INPUTS;
          inlineOption.callback = function() {
            block.setInputsInline(!isInline);
          };
          menuOptions.push(inlineOption);
          break;
        }
      }
    }

    if (this.workspace.options.collapse) {
      // Option to collapse/expand block.
      if (this.collapsed_) {
        var expandOption = {enabled: true};
        expandOption.text = Blockly.Msg.EXPAND_BLOCK;
        expandOption.callback = function() {
          block.setCollapsed(false);
        };
        menuOptions.push(expandOption);
      } else {
        var collapseOption = {enabled: true};
        collapseOption.text = Blockly.Msg.COLLAPSE_BLOCK;
        collapseOption.callback = function() {
          block.setCollapsed(true);
        };
        menuOptions.push(collapseOption);
      }
    }

    if (this.workspace.options.disable) {
      // Option to disable/enable block.
      var disableOption = {
        text: this.disabled ?
            Blockly.Msg.ENABLE_BLOCK : Blockly.Msg.DISABLE_BLOCK,
        enabled: !this.getInheritedDisabled(),
        callback: function() {
          block.setDisabled(!block.disabled);
        }
      };
      menuOptions.push(disableOption);
    }

    // Option to delete this block.
    // Count the number of blocks that are nested in this block.
    var descendantCount = this.getDescendants().length;
    var nextBlock = this.getNextBlock();
    if (nextBlock) {
      // Blocks in the current stack would survive this block's deletion.
      descendantCount -= nextBlock.getDescendants().length;
    }
    var deleteOption = {
      text: descendantCount == 1 ? Blockly.Msg.DELETE_BLOCK :
          Blockly.Msg.DELETE_X_BLOCKS.replace('%1', String(descendantCount)),
      enabled: true,
      callback: function() {
        Blockly.Events.setGroup(true);
        block.dispose(true, true);
        Blockly.Events.setGroup(false);
      }
    };
    menuOptions.push(deleteOption);
  }

  // Option to get help.
  var url = goog.isFunction(this.helpUrl) ? this.helpUrl() : this.helpUrl;
  var helpOption = {enabled: !!url};
  helpOption.text = Blockly.Msg.HELP;
  helpOption.callback = function() {
    block.showHelp_();
  };
  // menuOptions.push(helpOption);

  // Allow the block to add or modify menuOptions.
  if (this.customContextMenu && !block.isInFlyout) {
    this.customContextMenu(menuOptions);
  }

  Blockly.ContextMenu.show(e, menuOptions, this.RTL);
  Blockly.ContextMenu.currentBlock = this;
};

//從暫存區貼上
/**
 * Show the context menu for the workspace.
 * @param {!Event} e Mouse event.
 * @private
 */
Blockly.WorkspaceSvg.prototype.showContextMenu_ = function(e) {
  if (this.options.readOnly || this.isFlyout) {
    return;
  }
  var menuOptions = [];
  var topBlocks = this.getTopBlocks(true);
  var eventGroup = Blockly.genUid();

  // Options to undo/redo previous action.
  var undoOption = {};
  undoOption.text = Blockly.Msg.UNDO;
  undoOption.enabled = this.undoStack_.length > 0;
  undoOption.callback = this.undo.bind(this, false);
  menuOptions.push(undoOption);
  var redoOption = {};
  redoOption.text = Blockly.Msg.REDO;
  redoOption.enabled = this.redoStack_.length > 0;
  redoOption.callback = this.undo.bind(this, true);
  menuOptions.push(redoOption);

  // 貼上
  var pasteOption = {};
  pasteOption.text = Blockly.Msg.PASTE_BLOCK_FROM_CLIPBOARD;
  pasteOption.enabled = false;
  pasteOption.callback = function() {
    flagsBlockProjectIsLoading = false;
    for (var i = 0; i < flagsBlockClipboard.length; i++) {
      Ardublockly.workspace.paste(flagsBlockClipboard[i]);
    }
  };
  if (flagsBlockClipboard.length > 0) {
    pasteOption.enabled = true;
    pasteOption.text = pasteOption.text + ' (' + flagsBlockClipboard.length + ')';
  }
  menuOptions.push(pasteOption);

  // Option to clean up blocks.
  if (this.scrollbar) {
    var cleanOption = {};
    cleanOption.text = Blockly.Msg.CLEAN_UP;
    cleanOption.enabled = topBlocks.length > 1;
    cleanOption.callback = this.cleanUp_.bind(this);
    menuOptions.push(cleanOption);
  }

  // Add a little animation to collapsing and expanding.
  var DELAY = 10;
  if (this.options.collapse) {
    var hasCollapsedBlocks = false;
    var hasExpandedBlocks = false;
    for (var i = 0; i < topBlocks.length; i++) {
      var block = topBlocks[i];
      while (block) {
        if (block.isCollapsed()) {
          hasCollapsedBlocks = true;
        } else {
          hasExpandedBlocks = true;
        }
        block = block.getNextBlock();
      }
    }

    /**
     * Option to collapse or expand top blocks.
     * @param {boolean} shouldCollapse Whether a block should collapse.
     * @private
     */
    var toggleOption = function(shouldCollapse) {
      var ms = 0;
      for (var i = 0; i < topBlocks.length; i++) {
        var block = topBlocks[i];
        while (block) {
          setTimeout(block.setCollapsed.bind(block, shouldCollapse), ms);
          block = block.getNextBlock();
          ms += DELAY;
        }
      }
    };

    // Option to collapse top blocks.
    var collapseOption = {enabled: hasExpandedBlocks};
    collapseOption.text = Blockly.Msg.COLLAPSE_ALL;
    collapseOption.callback = function() {
      toggleOption(true);
    };
    menuOptions.push(collapseOption);

    // Option to expand top blocks.
    var expandOption = {enabled: hasCollapsedBlocks};
    expandOption.text = Blockly.Msg.EXPAND_ALL;
    expandOption.callback = function() {
      toggleOption(false);
    };
    menuOptions.push(expandOption);
  }

  // Option to delete all blocks.
  // Count the number of blocks that are deletable.
  var deleteList = [];
  function addDeletableBlocks(block) {
    if (block.isDeletable()) {
      deleteList = deleteList.concat(block.getDescendants());
    } else {
      var children = block.getChildren();
      for (var i = 0; i < children.length; i++) {
        addDeletableBlocks(children[i]);
      }
    }
  }
  for (var i = 0; i < topBlocks.length; i++) {
    addDeletableBlocks(topBlocks[i]);
  }
  var deleteOption = {
    text: deleteList.length == 1 ? Blockly.Msg.DELETE_BLOCK :
        Blockly.Msg.DELETE_X_BLOCKS.replace('%1', String(deleteList.length)),
    enabled: deleteList.length > 0,
    callback: function() {
      if (deleteList.length < 2 ||
          window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1',
          String(deleteList.length)))) {
        deleteNext();
      }
    }
  };
  function deleteNext() {
    Blockly.Events.setGroup(eventGroup);
    var block = deleteList.shift();
    if (block) {
      if (block.workspace) {
        block.dispose(false, true);
        setTimeout(deleteNext, DELAY);
      } else {
        deleteNext();
      }
    }
    Blockly.Events.setGroup(false);
  }
  menuOptions.push(deleteOption);

  Blockly.ContextMenu.show(e, menuOptions, this.RTL);
};


// 增加快速鍵
/**
 * Handle a key-down on SVG drawing surface.
 * @param {!Event} e Key down event.
 * @private
 */
Blockly.onKeyDown_ = function(e) {
  if (Blockly.mainWorkspace.options.readOnly || Blockly.isTargetInput_(e)) {
    // No key actions on readonly workspaces.
    // When focused on an HTML text input widget, don't trap any keys.
    return;
  }
  var deleteBlock = false;
  var debugModeKey = false;
  if (e.keyCode == 27) {
    // Pressing esc closes the context menu.
    Blockly.hideChaff();
  } else if (e.keyCode == 8 || e.keyCode == 46) {
    // Delete or backspace.
    // Stop the browser from going back to the previous page.
    // Do this first to prevent an error in the delete code from resulting in
    // data loss.
    e.preventDefault();
    if (Blockly.selected && Blockly.selected.isDeletable()) {
      deleteBlock = true;
    }
  } else if (e.altKey || e.ctrlKey || e.metaKey) {
    if (Blockly.selected &&
        Blockly.selected.isDeletable() && Blockly.selected.isMovable()) {
      if (e.keyCode == 67) {
        // 'c' for copy.
        Blockly.hideChaff();
        Blockly.copy_(Blockly.selected);
      } else if (e.keyCode == 88) {
        // 'x' for cut.
        Blockly.copy_(Blockly.selected);
        deleteBlock = true;
      }
    }
    if (e.keyCode == 86) {
      // 'v' for paste.
      if (Blockly.clipboardXml_) {
        Blockly.clipboardSource_.paste(Blockly.clipboardXml_);
      }
    }
    else if (e.keyCode == 90) {
      // 'z' for undo 'Z' is for redo.
      Blockly.hideChaff();
      Blockly.mainWorkspace.undo(e.shiftKey);
    }
    else if (e.keyCode == 107) {
      // '+' for zoom in.
      Blockly.mainWorkspace.zoomCenter(1);
    }
    else if (e.keyCode == 109) {
      // '-' for zoom out.
      Blockly.mainWorkspace.zoomCenter(-1);
    }
    else if (e.keyCode == 68) {
      // 'd' for debug mode.
      debugModeKey = true;
      debugMode += 1;   // 連按 2 次讓 debugMode >=2 才算進入 debug mode

      if (debugMode >= 3) {  // 連按 3 次開啟開發者工具
        if (isNWjs()) win.showDevTools();
        //???????????????????
        debugMode = 0;
      }
    }
    else if (e.keyCode == 78) {
      // 'n' for new project.
      createNewProject();
    }
    else if (e.keyCode == 79) {
      // 'o' for open project.
      Ardublockly.loadUserXmlFile();
    }
    else if (e.keyCode == 81) {
      // 'q'  (debug mode)
      if (debugMode >= 2) {  // 進入 debug mode 才能使用
        if (isNWjs()) NWjsClose();
      }
    }
    else if (e.keyCode == 82) {
      // 'r' for reload page without using cache. (debug mode)
      if (debugMode >= 2) {  // 進入 debug mode 才能使用
        if (isNWjs()) win.reloadIgnoringCache();
      }
    }
    else if (e.keyCode == 83) {
      // 's' for save project.
      saveProject();
    }
    else if (e.keyCode == 89) {
      // 'y' for redo.
      redoAction();
    }

  }
  if (deleteBlock) {
    // Common code for delete and cut.
    Blockly.Events.setGroup(true);
    Blockly.hideChaff();
    var heal = Blockly.dragMode_ != Blockly.DRAG_FREE;
    Blockly.selected.dispose(heal, true);
    if (Blockly.highlightedConnection_) {
      Blockly.highlightedConnection_.unhighlight();
      Blockly.highlightedConnection_ = null;
    }
    Blockly.Events.setGroup(false);
  }

  if (debugModeKey === false) debugMode = 0;

};

// 讓浮點數、整數、布林等型別相容
/**
 * Is this connection compatible with another connection with respect to the
 * value type system.  E.g. square_root("Hello") is not compatible.
 * @param {!Blockly.Connection} otherConnection Connection to compare against.
 * @return {boolean} True if the connections share a type.
 * @private
 */
Blockly.Connection.prototype.checkType_ = function(otherConnection) {
  if (!this.check_ || !otherConnection.check_) {
    // One or both sides are promiscuous enough that anything will fit.
    return true;
  }
  // Find any intersection in the check lists.
  for (var i = 0; i < this.check_.length; i++) {
    if (otherConnection.check_.indexOf(this.check_[i]) != -1) {
      return true;
    }
  }

  var numberTypeList = [Blockly.Types.BOOLEAN.output,
                        Blockly.Types.SHORT_NUMBER.output,
                        Blockly.Types.NUMBER.output,
                        Blockly.Types.LARGE_NUMBER.output,
                        Blockly.Types.DECIMAL.output,
                        Blockly.Types.DOUBLE.output];
  if (numberTypeList.indexOf(this.check_[0]) != -1 &&
      numberTypeList.indexOf(otherConnection.check_[0]) != -1) {
    return true;
  }

  // No intersection.
  return false;
};


//--- added by Mee
// 讓數值積木可以接受浮點數

Blockly.FieldTextInput.numberValidator = function(text) {
  // console.log(text);
  if (text === null) {
    return null;
  }
  text = String(text);
  // TODO: Handle cases like 'ten', '1.203,14', etc.
  // 'O' is sometimes mistaken for '0' by inexperienced users.
  text = text.replace(/O/ig, '0');
  // Strip out thousands separators.
  text = text.replace(/,/g, '');
  var n = parseFloat(text || 0);

  //-- modified by Mee
  // 保留浮點數原始數值文字內容, 避免像是 1.0 被正規化成整數 1
  // return isNaN(n) ? null : String(n);
  return isNaN(n) ? null : text;
};
