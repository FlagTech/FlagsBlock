/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview General javaScript for Arduino app with material design.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

/** Initialize function for Ardublockly, to be called on page load. */
Ardublockly.init = function() {
  // Lang init must run first for the rest of the page to pick the right msgs
  Ardublockly.initLanguage();

  // Inject Blockly into content_blocks and fetch additional blocks
  Ardublockly.injectBlockly(document.getElementById('content_blocks'),
                            Ardublockly.TOOLBOX_XML, '../blockly/');
  Ardublockly.importExtraBlocks();

  Ardublockly.designJsInit();
  Ardublockly.initialiseIdeButtons();

  Ardublockly.bindDesignEventListeners();
  Ardublockly.bindActionFunctions();
  Ardublockly.bindBlocklyEventListeners();

  // // Check if not running locally
  // if (document.location.hostname != 'localhost') {
  //   Ardublockly.openNotConnectedModal();
  // }
  
  // Ardublockly.bindClick_('logo_title', function() {
  //   location.reload();
  // });

  // 特定語系下隱藏未翻譯好的範例
  if (Ardublockly.LANG == "en") {
    $( "ul.examples-menu" ).children( "li" ).each(function() {
      if ( ! $(this).hasClass("enabled-en")) $(this).remove();
    });   
  }
  
  // 隱藏 Mac 或 Linux 不需安裝驅動程式的功能表項目
  if (isNWjs()){
    var os;
    os = require('os');
    if(os.platform().startsWith('darwin')) { // Ｍac
      $( "ul.driver-menu" ).children( "li" ).each(function() {
        if ( ! $(this).hasClass("enabled-mac")) $(this).remove();
      });   
    }
    else if (os.platform().slice(0,3).toLowerCase() != 'win') { // Linux
      $( "ul.driver-menu" ).children( "li" ).each(function() {
        if ( ! $(this).hasClass("enabled-linux")) $(this).remove();
      });   
    }
  }

  //setTitle();
  if (getURLParameter('nover') != 'y') flagsBlockTitle = "Flag's Block - V" + VERSION;

  checkFirstRun();

  // NWjs 環境下設定頁面不顯示 Arduino 位置的設定項目
  if (!isNWjs()) {
    document.getElementById("div_compiler_location").style.display = '';
  }

  // force document 以便讓快速鍵馬上就可以使用
  window.focus();

  // 因為語系文字載入問題, 需要稍後執行的程式碼
  setTimeout(function(){
      // 載入預設積木
      Ardublockly.workspace.clear();
      Ardublockly.renderContent();
      // 立刻 loadServerXmlFile 的話, 有時候會直接顯示英文語系
      //createNewProject();  // TODO: 無作用 ???
      Ardublockly.replaceBlocksfromXml(defaultProjectXML);
      //restoreBlocks();

      Ardublockly.workspace.clearUndo();

      // default behaviour for Collapsibles
      // Ref: http://stackoverflow.com/questions/31877186/materialize-css-how-to-prevent-default-behaviour-for-collapsibles
      var $panel_headers = $('#right_panel .collapsible').find('> li > .collapsible-header');
      $('#right_panel .collapsible').off('click.collapse', '.collapsible-header');
      $panel_headers.off('click.collapse').css('pointer-events', 'none');

    }, 500);
};

/** Binds functions to each of the buttons, nav links, and related. */
Ardublockly.bindActionFunctions = function() {
  // Navigation buttons
  Ardublockly.bindClick_('button_undo', undoAction);
  Ardublockly.bindClick_('button_redo', redoAction);
  Ardublockly.bindClick_('button_new', createNewProject);
  Ardublockly.bindClick_('button_load', openUserProject);
  Ardublockly.bindClick_('button_save', saveProject);
  // Ardublockly.bindClick_('button_delete', Ardublockly.discardAllBlocks);

  // Side menu buttons, they also close the side menu
  Ardublockly.bindClick_('menu_undo', function() {
    undoAction();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_redo', function() {
    redoAction();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_new', function() {
    createNewProject();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_load', function() {
    openUserProject();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_save', function() {
    saveProject();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_saveas', function() {
    saveProject(null, true);
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_delete', function() {
    Ardublockly.discardAllBlocks();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_opensketch', function() {
    Ardublockly.ideSendOpen();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_settings', function() {
    Ardublockly.openSettings();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_driver', function() {
    $('.button-collapse').sideNav('hide');
    installDriver();
  });
  Ardublockly.bindClick_('menu_driver_1', function() {
    $('.button-collapse').sideNav('hide');
    installDriver_1();
  });
  Ardublockly.bindClick_('menu_driver_d1', function() {
    $('.button-collapse').sideNav('hide');
    installDriver_1();
  });
  Ardublockly.bindClick_('menu_driver_nano', function() {
    $('.button-collapse').sideNav('hide');
    installDriver_1();
  });
  Ardublockly.bindClick_('menu_about', function() {
    showAboutMsg();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_layout_horizontal', function() {
    changePanelLayout('horizontal');
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_layout_vertical', function() {
    changePanelLayout('vertical');
    $('.button-collapse').sideNav('hide');
  });
  // Ardublockly.bindClick_('menu_example_1', function() {
  //   Ardublockly.loadServerXmlFile('../examples/blink.xml');
  //   $('.button-collapse').sideNav('hide');
  // });
  // Ardublockly.bindClick_('menu_example_2', function() {
  //   Ardublockly.loadServerXmlFile('../examples/serial_print_ascii_.xml');
  //   $('.button-collapse').sideNav('hide');
  // });
  // Ardublockly.bindClick_('menu_example_3', function() {
  //   Ardublockly.loadServerXmlFile('../examples/serial_repeat_game.xml');
  //   $('.button-collapse').sideNav('hide');
  // });
  // Ardublockly.bindClick_('menu_example_4', function() {
  //   Ardublockly.loadServerXmlFile('../examples/servo_knob.xml');
  //   $('.button-collapse').sideNav('hide');
  // });
  // Ardublockly.bindClick_('menu_example_5', function() {
  //   Ardublockly.loadServerXmlFile('../examples/stepper_knob.xml');
  //   $('.button-collapse').sideNav('hide');
  // });

  // ---Added by Mee
  Ardublockly.bindClick_('menu_uploadsound', function() { // 上傳音樂檔
    uploadSound();
    $('.button-collapse').sideNav('hide');
  });
  Ardublockly.bindClick_('menu_uploadHTML', function() { // 上傳音樂檔
    uploadHTML();
    $('.button-collapse').sideNav('hide');
  });
  // ---------------

  // 旗標範例
  var labsmenu = document.getElementsByClassName("labs-menu");
  for (var i = labsmenu.length - 1; i >= 0; --i) {
    var labs = labsmenu[i].getElementsByTagName("li");
    for (var j = labs.length - 1; j >= 0; --j) {
      if(labs[j].id){
        Ardublockly.bindClick_(labs[j].id, function(e) {
          var labId = e.target.parentElement.id.split("_");
          if (labId.length < 3) return;
          var url = "../"+labId[0]+"/"+Ardublockly.LANG+"/"+labId[1]+"/LAB"+labId[2]+".xml";

          $.ajax({
            url: url,
            type: 'HEAD',
            error: function()
            {
              // file not exists
              Ardublockly.shortMessage(Ardublockly.getLocalStr('exampleNotAvaileableInThisLang').replace('%1', Ardublockly.LANGUAGE_NAME[Ardublockly.LANG]));
              url = "../"+labId[0]+"/"+flagsBlockDefaultLang+"/"+labId[1]+"/LAB"+labId[2]+".xml";
              openServerProject(url);
            },
            success: function()
            {
              // file exists
              openServerProject(url);
            },
          });

          $('.button-collapse').sideNav('hide');
        });
      }
    }
  }

  // Floating buttons
  Ardublockly.bindClick_('button_ide_large', function() {
    // Ardublockly.ideButtonLargeAction();
    Ardublockly.ideSendUpload();
  });
  Ardublockly.bindClick_('button_ide_middle', function() {
      Ardublockly.ideButtonMiddleAction();
  });
  Ardublockly.bindClick_('button_ide_left', function() {
    Ardublockly.ideButtonLeftAction();
  });
  Ardublockly.bindClick_('button_load_xml', Ardublockly.XmlTextareaToBlocks);
  Ardublockly.bindClick_('button_toggle_toolbox', Ardublockly.toogleToolbox);

  // 切換版面配置
  Ardublockly.bindClick_('button_max_blockspanel', toggleRightPanelVisible);

  // Settings modal input field listeners
  Ardublockly.bindClick_('settings_compiler_location', function() {
    ArdublocklyServer.requestNewCompilerLocation(
        Ardublockly.setCompilerLocationHtml);
  });
  Ardublockly.bindClick_('settings_sketch_location', function() {
    ArdublocklyServer.requestNewSketchLocation(
        Ardublockly.setSketchLocationHtml);
  });
};

/** Sets the Ardublockly server IDE setting to upload and sends the code. */
Ardublockly.ideSendUpload = function() {
  // Check if this is the currently selected option before edit sever setting
  if (Ardublockly.ideButtonLargeAction !== Ardublockly.ideSendUpload) {
    Ardublockly.showExtraIdeButtons(false);
    Ardublockly.setIdeSettings(null, 'upload');
  }
  Ardublockly.shortMessage(Ardublockly.getLocalStr('uploadingSketch'));
  Ardublockly.resetIdeOutputContent();
  Ardublockly.sendCode();
};

/** Sets the Ardublockly server IDE setting to verify and sends the code. */
Ardublockly.ideSendVerify = function() {
  // Check if this is the currently selected option before edit sever setting
  if (Ardublockly.ideButtonLargeAction !== Ardublockly.ideSendVerify) {
    Ardublockly.showExtraIdeButtons(false);
    Ardublockly.setIdeSettings(null, 'verify');
  }
  Ardublockly.shortMessage(Ardublockly.getLocalStr('verifyingSketch'));
  Ardublockly.resetIdeOutputContent();
  Ardublockly.sendCode();
};

/** Sets the Ardublockly server IDE setting to open and sends the code. */
Ardublockly.ideSendOpen = function() {
  // Check if this is the currently selected option before edit sever setting
  if (Ardublockly.ideButtonLargeAction !== Ardublockly.ideSendOpen) {
    Ardublockly.showExtraIdeButtons(false);
    Ardublockly.setIdeSettings(null, 'open');
  }
  Ardublockly.shortMessage(Ardublockly.getLocalStr('openingSketch'));
  Ardublockly.resetIdeOutputContent();
  Ardublockly.sendCode();
};

/** Function bound to the left IDE button, to be changed based on settings. */
Ardublockly.ideButtonLargeAction = Ardublockly.ideSendUpload;

/** Function bound to the middle IDE button, to be changed based on settings. */
Ardublockly.ideButtonMiddleAction = Ardublockly.ideSendVerify;

/** Function bound to the large IDE button, to be changed based on settings. */
Ardublockly.ideButtonLeftAction = Ardublockly.ideSendOpen;

/** Initialises the IDE buttons with the default option from the server. */
Ardublockly.initialiseIdeButtons = function() {
  document.getElementById('button_ide_left').title =
      Ardublockly.getLocalStr('openSketch');
  document.getElementById('button_ide_middle').title =
      Ardublockly.getLocalStr('verifySketch');
  document.getElementById('button_ide_large').title =
      Ardublockly.getLocalStr('uploadSketch');
  ArdublocklyServer.requestIdeOptions(function(jsonResponse) {
    if (jsonResponse != null) {
      var parsedJson = JSON.parse(jsonResponse);
      // "response_type" : "settings_board",
      //   "element" : "dropdown",
      //   "options" : [ {"value" : "XXX", "text" : "XXX"}, ...]
      //   "selected": "selected key"}
      Ardublockly.changeIdeButtons(parsedJson.selected);
    } // else Null: Ardublockly server is not running, do nothing
  });
};

/**
 * Changes the IDE launch buttons based on the option indicated in the argument.
 * @param {!string} value One of the 3 possible values from the drop down select
 *     in the settings modal: 'upload', 'verify', or 'open'.
 */
Ardublockly.changeIdeButtons = function(value) {
  var largeButton = document.getElementById('button_ide_large');
  var middleButton = document.getElementById('button_ide_middle');
  var leftButton = document.getElementById('button_ide_left');
  var openTitle = Ardublockly.getLocalStr('openSketch');
  var verifyTitle = Ardublockly.getLocalStr('verifySketch');
  var uploadTitle = Ardublockly.getLocalStr('uploadSketch');
  if (value === 'upload') {
    Ardublockly.changeIdeButtonsDesign(value);
    Ardublockly.ideButtonLeftAction = Ardublockly.ideSendOpen;
    Ardublockly.ideButtonMiddleAction = Ardublockly.ideSendVerify;
    Ardublockly.ideButtonLargeAction = Ardublockly.ideSendUpload;
    leftButton.title = openTitle;
    middleButton.title = verifyTitle;
    largeButton.title = uploadTitle;
  } else if (value === 'verify') {
    Ardublockly.changeIdeButtonsDesign(value);
    Ardublockly.ideButtonLeftAction = Ardublockly.ideSendOpen;
    Ardublockly.ideButtonMiddleAction = Ardublockly.ideSendUpload;
    Ardublockly.ideButtonLargeAction = Ardublockly.ideSendVerify;
    leftButton.title = openTitle;
    middleButton.title = uploadTitle;
    largeButton.title = verifyTitle;
  } else if (value === 'open') {
    Ardublockly.changeIdeButtonsDesign(value);
    Ardublockly.ideButtonLeftAction = Ardublockly.ideSendVerify;
    Ardublockly.ideButtonMiddleAction = Ardublockly.ideSendUpload;
    Ardublockly.ideButtonLargeAction = Ardublockly.ideSendOpen;
    leftButton.title = verifyTitle;
    middleButton.title = uploadTitle;
    largeButton.title = openTitle;
  }
};

/**
 * Loads an XML file from the server and replaces the current blocks into the
 * Blockly workspace.
 * @param {!string} xmlFile Server location of the XML file to load.
 */
Ardublockly.loadServerXmlFile = function(xmlFile) {
  var loadXmlfileAccepted = function() {
    // loadXmlBlockFile loads the file asynchronously and needs a callback
    var loadXmlCb = function(sucess) {
      if (sucess) {
        Ardublockly.renderContent();
        Ardublockly.workspace.clearUndo();
        setAllNewContent();
        flagsBlockProjectDir = '';
        if (xmlFile == '../Labs/default.xml') {
          //Ardublockly.sketchNameSet('');
        }
        else {
          var xmlFileName = xmlFile.split('/');
          var filename = xmlFileName[xmlFileName.length-1].replace(/\.[xX][mM][lL]$/,'');
          Ardublockly.sketchNameSet(filename);
        }
      } else {
        Ardublockly.alertMessage(
            Ardublockly.getLocalStr('invalidXmlTitle'),
            Ardublockly.getLocalStr('invalidXmlBody'),
            false);
      }
    };
    var connectionErrorCb = function() {
      Ardublockly.openNotConnectedModal();
    };
    Ardublockly.loadXmlBlockFile(xmlFile, loadXmlCb, connectionErrorCb);
  };

  //if (Ardublockly.isWorkspaceEmpty()) {
  var blockCount = Ardublockly.workspace.getAllBlocks().length;
  if (blockCount <= 1 || !flagsBlockProjectIsChanged) {
    loadXmlfileAccepted();
  } else {
    Ardublockly.alertMessage(
        Ardublockly.getLocalStr('loadNewBlocksTitle'),
        Ardublockly.getLocalStr('loadNewBlocksBody'),
        true, loadXmlfileAccepted);
  }
};

/**
 * Loads an XML file from the users file system and adds the blocks into the
 * Blockly workspace.
 */
Ardublockly.loadUserXmlFile = function() {
  // Create File Reader event listener function
  var parseInputXMLfile = function(e) {
    var xmlFile = e.target.files[0];
    var filePath = '';
    var filename = xmlFile.name;
    // var extensionPosition = filename.lastIndexOf('.');
    // if (extensionPosition !== -1) {
    //   filename = filename.substr(0, extensionPosition);
    // }

    // Another thing is the File object of HTML5's file API, in WebKit the path attribute is hidden so developers will never know the real paths of files. In node-webkit we made it shown so much things are possible now.
    if (xmlFile.hasOwnProperty('path')) {
      filePath = xmlFile.path;
    }

    var reader = new FileReader();
    reader.onload = function() {
      clearShortMessage();

      var success = Ardublockly.replaceBlocksfromXml(reader.result);
      if (success) {
        Ardublockly.renderContent();
        Ardublockly.workspace.clearUndo();
        Ardublockly.sketchNameSet(filename);
        setAllNewContent();
        flagsBlockProjectDir = dirName(filePath);
        flagsBlockProjectFileName = filename;
      } else {
        Ardublockly.alertMessage(
            Ardublockly.getLocalStr('invalidXmlTitle'),
            Ardublockly.getLocalStr('invalidXmlBody'),
            false);
      }

      // Reset value of input after loading because Chrome will not fire
      // a 'change' event if the same file is loaded again.
      document.getElementById('select_file').value = '';
    };
    reader.readAsText(xmlFile);
  };

  // Create once invisible browse button with event listener, and click it
  var selectFile = document.getElementById('select_file');
  if (selectFile === null) {
    var selectFileDom = document.createElement('INPUT');
    selectFileDom.type = 'file';
    selectFileDom.id = 'select_file';
    selectFileDom.accept = '.xml';

    var selectFileWrapperDom = document.createElement('DIV');
    selectFileWrapperDom.id = 'select_file_wrapper';
    selectFileWrapperDom.style.display = 'none';
    selectFileWrapperDom.appendChild(selectFileDom);

    document.body.appendChild(selectFileWrapperDom);
    selectFile = document.getElementById('select_file');
    selectFile.addEventListener('change', parseInputXMLfile, false);
  }

  var blockCount = Ardublockly.workspace.getAllBlocks().length;
  if (blockCount <= 1 || !flagsBlockProjectIsChanged) {
    Ardublockly.shortMessage(Ardublockly.getLocalStr('projectOpening'));
    selectFile.click();
  } else {
    Ardublockly.alertMessage(
        Ardublockly.getLocalStr('loadNewBlocksTitle'),
        Ardublockly.getLocalStr('loadNewBlocksBody'),
        true, function(){
          Ardublockly.shortMessage(Ardublockly.getLocalStr('projectOpening'));
          selectFile.click();
        });
  }
};

/** Added by Mee----------------------------------------------------------
 * Uploading sound data
 */
Ardublockly.uploadSound = function() {
  // Create File Reader event listener function
  var copySoundFile = function(e) {
    var soundFile = e.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
      //Ardublockly.saveTextFileAs("sound.h", reader.result);
      saveSound(reader.result);
      // Reset value of input after loading because Chrome will not fire
      // a 'change' event if the same file is loaded again.
      document.getElementById('select_sound').value = '';
    };
    reader.readAsText(soundFile);
  };

  // Create once invisible browse button with event listener, and click it
  var selectFile = document.getElementById('select_sound');
  if (selectFile === null) {
    var selectFileDom = document.createElement('INPUT');
    selectFileDom.type = 'file';
    selectFileDom.id = 'select_sound';
    selectFileDom.accept = '.h';

    var selectFileWrapperDom = document.createElement('DIV');
    selectFileWrapperDom.id = 'select_soound_wrapper';
    selectFileWrapperDom.style.display = 'none';
    selectFileWrapperDom.appendChild(selectFileDom);

    document.body.appendChild(selectFileWrapperDom);
    selectFile = document.getElementById('select_sound');
    selectFile.addEventListener('change', copySoundFile, false);
  }

  selectFile.click();
};

/** Added by Mee
 * Uploading sound data
 */
Ardublockly.uploadHTML = function() {
  // Create File Reader event listener function
  var copyHTMLFile = function(e) {
    var HTMLFile = e.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
      //Ardublockly.saveTextFileAs("sound.h", reader.result);
      saveHTML(reader.result);
      // Reset value of input after loading because Chrome will not fire
      // a 'change' event if the same file is loaded again.
      document.getElementById('select_html').value = '';
    };
    reader.readAsText(HTMLFile);
  };

  // Create once invisible browse button with event listener, and click it
  var selectFile = document.getElementById('select_html');
  if (selectFile === null) {
    var selectFileDom = document.createElement('INPUT');
    selectFileDom.type = 'file';
    selectFileDom.id = 'select_html';
    selectFileDom.accept = '.h';

    var selectFileWrapperDom = document.createElement('DIV');
    selectFileWrapperDom.id = 'select_html_wrapper';
    selectFileWrapperDom.style.display = 'none';
    selectFileWrapperDom.appendChild(selectFileDom);

    document.body.appendChild(selectFileWrapperDom);
    selectFile = document.getElementById('select_html');
    selectFile.addEventListener('change', copyHTMLFile, false);
  }

  selectFile.click();
};
//------------------------------------------------------------------------------------------

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Ardublockly.saveXmlFile = function() {
  Ardublockly.saveTextFileAs(
      document.getElementById('sketch_name').value + '.xml',
      Ardublockly.generateXml());
};

/**
 * Creates an Arduino Sketch file containing the Arduino code generated from
 * the Blockly workspace and prompts the users to save it into their local file
 * system.
 */
Ardublockly.saveSketchFile = function() {
  Ardublockly.saveTextFileAs(
      document.getElementById('sketch_name').value + '.ino',
      Ardublockly.generateArduino());
};

/**
 * Creates an text file with the input content and files name, and prompts the
 * users to save it into their local file system.
 * @param {!string} fileName Name for the file to be saved.
 * @param {!string} content Text datd to be saved in to the file.
 */
Ardublockly.saveTextFileAs = function(fileName, content) {
  var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
  saveAs(blob, fileName);
};

/**
 * Retrieves the Settings from ArdublocklyServer to populates the form data
 * and opens the Settings modal dialog.
 */
Ardublockly.openSettings = function() {
  ArdublocklyServer.requestCompilerLocation(
      Ardublockly.setCompilerLocationHtml);
  ArdublocklyServer.requestSketchLocation(Ardublockly.setSketchLocationHtml);
  ArdublocklyServer.requestArduinoBoards(Ardublockly.setArduinoBoardsHtml);
  ArdublocklyServer.requestSerialPorts(Ardublockly.setSerialPortsHtml);
  ArdublocklyServer.requestIdeOptions(Ardublockly.setIdeHtml);
  // Language menu only set on page load within Ardublockly.initLanguage()
  Ardublockly.openSettingsModal();
};

/**
 * Sets the compiler location form data retrieve from an updated element.
 * @param {element} jsonResponse JSON data coming back from the server.
 * @return {undefined} Might exit early if response is null.
 */
Ardublockly.setCompilerLocationHtml = function(jsonResponse) {
  if (jsonResponse === null) return Ardublockly.openNotConnectedModal();
  var newEl = ArdublocklyServer.createElementFromJson(jsonResponse);
  var compLocIp = document.getElementById('settings_compiler_location');
  if (compLocIp != null) {
    compLocIp.value = newEl.value;
  }
};

/**
 * Sets the sketch location form data retrieve from an updated element.
 * @param {element} jsonResponse JSON data coming back from the server.
 * @return {undefined} Might exit early if response is null.
 */
Ardublockly.setSketchLocationHtml = function(jsonResponse) {
  if (jsonResponse === null) return Ardublockly.openNotConnectedModal();
  var newEl = ArdublocklyServer.createElementFromJson(jsonResponse);
  var sketchLocIp = document.getElementById('settings_sketch_location');
  if (sketchLocIp != null) {
    sketchLocIp.value = newEl.value;
  }
};

/**
 * Replaces the Arduino Boards form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialPort' function
 * @param {element} jsonResponse JSON data coming back from the server.
 * @return {undefined} Might exit early if response is null.
 */
Ardublockly.setArduinoBoardsHtml = function(jsonResponse) {
  if (jsonResponse === null) return Ardublockly.openNotConnectedModal();
  var newEl = ArdublocklyServer.createElementFromJson(jsonResponse);
  var boardDropdown = document.getElementById('board');
  if (boardDropdown !== null) {
    // Restarting the select elements built by materialize
    $('select').material_select('destroy');
    newEl.name = 'settings_board';
    newEl.id = 'board';
    newEl.onchange = Ardublockly.setBoard;
    boardDropdown.parentNode.replaceChild(newEl, boardDropdown);
    // Refresh the materialize select menus
    $('select').material_select();
  }
};

/**
 * Sets the Arduino Board type with the selected user input from the drop down.
 */
Ardublockly.setBoard = function() {
  var el = document.getElementById('board');
  var boardValue = el.options[el.selectedIndex].value;
  //TODO: Check how ArdublocklyServer deals with invalid data and sanitise
  ArdublocklyServer.setArduinoBoard(
      boardValue, Ardublockly.setArduinoBoardsHtml);
  Ardublockly.changeBlocklyArduinoBoard(
      boardValue.toLowerCase().replace(/ /g, '_'));
};

/**
 * Replaces the Serial Port form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialPort' function
 * @param {element} jsonResponse JSON data coming back from the server.
 * @return {undefined} Might exit early if response is null.
 */
Ardublockly.setSerialPortsHtml = function(jsonResponse) {
  if (jsonResponse === null) return Ardublockly.openNotConnectedModal();

  var forceSetting = false;
  var jobj = JSON.parse(jsonResponse);
  jobj.options.sort(function(a,b){
    var numA = parseInt(a.value.substring(4), 10);
    var numB = parseInt(b.value.substring(4), 10);
    if(numA < numB) return -1;
    if(numA > numB) return 1;
    return 0;
  });

  // 若之前未設定, 或設定值是 COM1/COM2. 則自動選擇並設定為最後一個
  if (jobj.selected === null) {
    forceSetting = true;
  }
  else {
    for (var i = jobj.options.length - 1; i >= 0; i--) {
      if ( jobj.options[i].value == jobj.selected &&
              (jobj.options[i].display_text == "COM1" || 
                jobj.options[i].display_text == "COM2")
          ) {
        forceSetting = true;
        break;
      }
    }
  }
  if (forceSetting) {
    // 檢查最後一個不是 COM1/COM2
    if (jobj.options[jobj.options.length - 1].display_text == "COM1" || 
      jobj.options[jobj.options.length - 1].display_text == "COM2") {
      forceSetting = false;
    }
    // 自動選擇並設定為最後一個
    else {
      jobj.selected = jobj.options[jobj.options.length - 1].value;
    }
  }

  jsonResponse = JSON.stringify(jobj);

  var newEl = ArdublocklyServer.createElementFromJson(jsonResponse);
  var serialDropdown = document.getElementById('serial_port');
  if (serialDropdown !== null) {
    // Restarting the select elements built by materialize
    $('select').material_select('destroy');
    newEl.name = 'settings_serial';
    newEl.id = 'serial_port';
    newEl.onchange = Ardublockly.setSerial;
    // newEl.onmousedown = function(){
    //   ArdublocklyServer.requestSerialPorts(Ardublockly.setSerialPortsHtml);
    //   $('select').material_select();
    //   console.log('onMouseDown');
    // };
    // console.log(newEl);
    serialDropdown.parentNode.replaceChild(newEl, serialDropdown);

    // Refresh the materialize select menus
    $('select').material_select();
  }

  if (forceSetting) Ardublockly.setSerial();
};

/** Sets the Serial Port with the selected user input from the drop down. */
Ardublockly.setSerial = function() {
  var el = document.getElementById('serial_port');
  var serialValue = el.options[el.selectedIndex].value;
  //TODO: check how ArdublocklyServer deals with invalid data and sanitise
  ArdublocklyServer.setSerialPort(
      serialValue, Ardublockly.setSerialPortsHtml);
};

/**
 * Replaces IDE options form data with a new HTMl element.
 * Ensures there is a change listener to call 'setIdeSettings' function
 * @param {element} jsonResponse JSON data coming back from the server.
 * @return {undefined} Might exit early if response is null.
 */
Ardublockly.setIdeHtml = function(jsonResponse) {
  if (jsonResponse === null) return Ardublockly.openNotConnectedModal();
  var newEl = ArdublocklyServer.createElementFromJson(jsonResponse);
  var ideDropdown = document.getElementById('ide_settings');
  if (ideDropdown !== null) {
    // Restarting the select elements built by materialize
    $('select').material_select('destroy');
    newEl.name = 'settings_ide';
    newEl.id = 'ide_settings';
    newEl.onchange = Ardublockly.setIdeSettings;
    ideDropdown.parentNode.replaceChild(newEl, ideDropdown);
    // Refresh the materialize select menus
    $('select').material_select();
  }
};

/**
 * Sets the IDE settings data with the selected user input from the drop down.
 * @param {Event} e Event that triggered this function call. Required for link
 *     it to the listeners, but not used.
 * @param {string} preset A value to set the IDE settings bypassing the drop
 *     down selected value. Valid data: 'upload', 'verify', or 'open'.
 */
Ardublockly.setIdeSettings = function(e, preset) {
  if (preset !== undefined) {
    var ideValue = preset;
  } else {
    var el = document.getElementById('ide_settings');
    var ideValue = el.options[el.selectedIndex].value;
  }
  Ardublockly.changeIdeButtons(ideValue);
  //TODO: check how ArdublocklyServer deals with invalid data and sanitise here
  ArdublocklyServer.setIdeOptions(ideValue, Ardublockly.setIdeHtml);
};

/**
 * Send the Arduino Code to the ArdublocklyServer to process.
 * Shows a loader around the button, blocking it (unblocked upon received
 * message from server).
 */
Ardublockly.sendCode = function() {
  expandIdeOutput();

  Ardublockly.largeIdeButtonSpinner(true);

  /**
   * Receives the IDE data back to be displayed and stops spinner.
   * @param {element} jsonResponse JSON data coming back from the server.
   * @return {undefined} Might exit early if response is null.
   */
  var sendCodeReturn = function(jsonResponse) {
    Ardublockly.largeIdeButtonSpinner(false);

    // 讓按鈕永遠是上傳功能
    if (Ardublockly.ideButtonLargeAction !== Ardublockly.ideSendUpload) {
      Ardublockly.showExtraIdeButtons(false);
      Ardublockly.setIdeSettings(null, 'upload');
    }
    Ardublockly.resetIdeOutputContent();

    if (jsonResponse === null) return Ardublockly.openNotConnectedModal();
    var dataBack = ArdublocklyServer.createElementFromJson(jsonResponse);
    Ardublockly.arduinoIdeOutput(dataBack);
  };

  ArdublocklyServer.sendSketchToServer(
      Ardublockly.generateArduino(), sendCodeReturn);
};

/** Populate the workspace blocks with the XML written in the XML text area. */
Ardublockly.XmlTextareaToBlocks = function() {
  var success = Ardublockly.replaceBlocksfromXml(
      document.getElementById('content_xml').value);
  if (success) {
    Ardublockly.renderContent();
  } else {
    Ardublockly.alertMessage(
        Ardublockly.getLocalStr('invalidXmlTitle'),
        Ardublockly.getLocalStr('invalidXmlBody'),
        false);
  }
};

/**
 * Private variable to save the previous version of the Arduino Code.
 * @type {!String}
 * @private
 */
Ardublockly.PREV_ARDUINO_CODE_ = 'void setup() {\n\n}\n\n\nvoid loop() {\n\n}';

/**
 * Populate the Arduino Code and Blocks XML panels with content generated from
 * the blocks.
 */
Ardublockly.renderContent = function() {
  // Only regenerate the code if a block is not being dragged
  if (Ardublockly.blocklyIsDragging()) return;

  // Render Arduino Code with latest change highlight and syntax highlighting
  isSelectedBlockHighlight = true;
  var arduinoCodeHighlight = Ardublockly.generateArduino();
  isSelectedBlockHighlight = false;

  var arduinoCodeClean = 
    removeHighlightText(arduinoCodeHighlight).replace(/\n\s+\n/g,'\n\n');
  var arduinoPrevCodeClean = 
    removeHighlightText(Ardublockly.PREV_ARDUINO_CODE_).replace(/\n\s+\n/g,'\n\n');

  if (arduinoCodeClean != arduinoPrevCodeClean && !flagsBlockProjectIsLoading) {
    flagsBlockProjectIsChanged = true;
  }

  if (arduinoCodeHighlight != Ardublockly.PREV_ARDUINO_CODE_) {
    Ardublockly.PREV_ARDUINO_CODE_ = arduinoCodeHighlight;

    // var diff = JsDiff.diffWords(Ardublockly.PREV_ARDUINO_CODE_, arduinoCode);
    // var resultStringArray = [];
    // for (var i = 0; i < diff.length; i++) {
    //   if (!diff[i].removed) {
    //     var escapedCode = diff[i].value.replace(/</g, '&lt;')
    //                                    .replace(/>/g, '&gt;');
    //     if (diff[i].added) {
    //       resultStringArray.push(
    //           '<span class="code_highlight_new">' + escapedCode + '</span>');
    //     } else {
    //       resultStringArray.push(escapedCode);
    //     }
    //   }
    // }
    // document.getElementById('content_arduino').innerHTML =
    //     prettyPrintOne(resultStringArray.join(''), 'cpp', false);

    // 按一下積木會將相對應的程式碼 high light
    arduinoCodeHighlight = arduinoCodeHighlight.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    arduinoCodeHighlight = 
      arduinoCodeHighlight.replaceAll(
        selectedBlockHighlightTextPrefix, '<span class="code_highlight_new">'
      ).replaceAll(
        selectedBlockHighlightTextPostfix, '</span>'
      );
    document.getElementById('content_arduino').innerHTML =
         prettyPrintOne(arduinoCodeHighlight, 'cpp', false);
  }

  // Generate plain XML into element
  document.getElementById('content_xml').value = Ardublockly.generateXml();
};

/**
 * Private variable to indicate if the toolbox is meant to be shown.
 * @type {!boolean}
 * @private
 */
Ardublockly.TOOLBAR_SHOWING_ = true;

/**
 * Toggles the blockly toolbox and the Ardublockly toolbox button On and Off.
 * Uses namespace member variable TOOLBAR_SHOWING_ to toggle state.
 */
Ardublockly.toogleToolbox = function() {
  if (Ardublockly.TOOLBAR_SHOWING_) {
    Ardublockly.blocklyCloseToolbox();
    Ardublockly.displayToolbox(false);
  } else {
    Ardublockly.displayToolbox(true);
  }
  Ardublockly.TOOLBAR_SHOWING_ = !Ardublockly.TOOLBAR_SHOWING_;
};

/** @return {boolean} Indicates if the toolbox is currently visible. */
Ardublockly.isToolboxVisible = function() {
  return Ardublockly.TOOLBAR_SHOWING_;
};

/**
 * Lazy loads the additional block JS files from the ./block directory.
 * Initialises any additional Ardublockly extensions.
 * TODO: Loads the examples into the examples modal
 */
Ardublockly.importExtraBlocks = function() {
  /**
   * Parses the JSON data to find the block and languages js files.
   * @param {jsonDataObj} jsonDataObj JSON in JavaScript object format, null
   *     indicates an error occurred.
   * @return {undefined} Might exit early if response is null.
   */
  var jsonDataCb = function(jsonDataObj) {
    if (jsonDataObj === null) return Ardublockly.openNotConnectedModal();
    if (jsonDataObj.categories !== undefined) {
      var head = document.getElementsByTagName('head')[0];
      for (var catDir in jsonDataObj.categories) {
        var blocksJsLoad = document.createElement('script');
        blocksJsLoad.src = '../blocks/' + catDir + '/blocks.js';
        head.appendChild(blocksJsLoad);

        var blocksLangJsLoad = document.createElement('script');
        blocksLangJsLoad.src = '../blocks/' + catDir + '/msg/' + 'messages.js';
            //'lang/' + Ardublockly.LANG + '.js';
        head.appendChild(blocksLangJsLoad);

        var blocksGeneratorJsLoad = document.createElement('script');
        blocksGeneratorJsLoad.src = '../blocks/' + catDir +
            '/generator_arduino.js';
        head.appendChild(blocksGeneratorJsLoad);

        // Check if the blocks add additional Ardublockly functionality
        var extensions = jsonDataObj.categories[catDir].extensions;
        if (extensions) {
          for (var i = 0; i < extensions.length; i++) {
            var blockExtensionJsLoad = document.createElement('script');
            blockExtensionJsLoad.src = '../blocks/' + catDir + '/extensions.js';
            head.appendChild(blockExtensionJsLoad);
            // Add function to scheduler as lazy loading has to complete first
            setTimeout(function(category, extension) {
              var extensionNamespaces = extension.split('.');
              var extensionCall = window;
              var invalidFunc = false;
              for (var j = 0; j < extensionNamespaces.length; j++) {
                extensionCall = extensionCall[extensionNamespaces[j]];
                if (extensionCall === undefined) {
                  invalidFunc = true;
                  break;
                }
              }
              if (typeof extensionCall != 'function') {
                invalidFunc = true;
              }
              if (invalidFunc) {
                throw 'Blocks ' + category.categoryName + ' extension "' +
                      extension + '" is not a valid function.';
              } else {
                extensionCall();
              }
            }, 800, jsonDataObj.categories[catDir], extensions[i]);
          }
        }
      }
    }
  };
  // Reads the JSON data containing all block categories from ./blocks directory
  // TODO: Now reading a local file, to be replaced by server generated JSON
  //Ardublockly.getJsonData('../blocks/blocks_data.json', jsonDataCb);
};

/** Opens a modal with a list of categories to add or remove to the toolbox */
Ardublockly.openExtraCategoriesSelect = function() {
  /**
   * Parses the JSON data from the server into a list of additional categories.
   * @param {jsonDataObj} jsonDataObj JSON in JavaScript object format, null
   *     indicates an error occurred.
   * @return {undefined} Might exit early if response is null.
   */
  var jsonDataCb = function(jsonDataObj) {
    if (jsonDataObj === null) return Ardublockly.openNotConnectedModal();
    var htmlContent = document.createElement('div');
    if (jsonDataObj.categories !== undefined) {
      for (var catDir in jsonDataObj.categories) {
        // Function required to maintain each loop variable scope separated
        (function(cat) {
          var clickBind = function(tickValue) {
            if (tickValue) {
              var catDom = (new DOMParser()).parseFromString(
                  cat.toolbox.join(''), 'text/xml').firstChild;
              Ardublockly.addToolboxCategory(cat.toolboxName, catDom);
            } else {
              Ardublockly.removeToolboxCategory(cat.toolboxName);
            }
          };
          htmlContent.appendChild(Ardublockly.createExtraBlocksCatHtml(
              cat.categoryName, cat.description, clickBind));
        })(jsonDataObj.categories[catDir]);
      }
    }
    Ardublockly.openAdditionalBlocksModal(htmlContent);
  };
  // Reads the JSON data containing all block categories from ./blocks directory
  // TODO: Now reading a local file, to be replaced by server generated JSON
  Ardublockly.getJsonData('../blocks/blocks_data.json', jsonDataCb);
};

/** Informs the user that the selected function is not yet implemented. */
Ardublockly.functionNotImplemented = function() {
  Ardublockly.shortMessage('Function not yet implemented');
};

/**
 * Interface to display messages with a possible action.
 * @param {!string} title HTML to include in title.
 * @param {!element} body HTML to include in body.
 * @param {boolean=} confirm Indicates if the user is shown a single option (ok)
 *     or an option to cancel, with an action applied to the "ok".
 * @param {string=|function=} callback If confirm option is selected this would
 *     be the function called when clicked 'OK'.
 */
Ardublockly.alertMessage = function(title, body, confirm, callback) {
  Ardublockly.materialAlert(title, body, confirm, callback);
};

/**
 * Interface to displays a short message, which disappears after a time out.
 * @param {!string} message Text to be temporarily displayed.
 */
Ardublockly.shortMessage = function(message) {
  Ardublockly.MaterialToast(message);
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!function} func Event handler to bind.
 * @private
 */
Ardublockly.bindClick_ = function(el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  // Need to ensure both, touch and click, events don't fire for the same thing
  var propagateOnce = function(e) {
    e.stopPropagation();
    e.preventDefault();
    func(e);
  };
  el.addEventListener('ontouchend', propagateOnce);
  el.addEventListener('click', propagateOnce);
};
