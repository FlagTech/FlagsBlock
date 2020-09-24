//----------------------這裡是主頁面--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <title>AI 心情點播機</title>

 <script>
  var apiLocation = "XXXXXXXXXX";  //刪除 X, 在引號中間輸入端點
  var apiKey = "XXXXXXXXXXXXXXX";  //刪除 X, 在引號中間輸入金鑰
 </script>

 <link href="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.css" rel="stylesheet">
 <style>
  *, *:before, *:after {
   box-sizing: border-box;
   hyphens: auto;
   overflow-wrap: break-word;
  }

  html {
   font-size: 20px;
   min-height: 100%;
  }

  body {
   max-width: 700px;
   min-height: 100%;
   margin: 2em auto;
   padding: 0 0.5em;
   background: linear-gradient(45deg, #fc00ff, #00dbde);
   background-repeat: no-repeat;
   color: #fff;
  }

  h1 {
   text-align: center;
  }

  button, input, select, textarea {
   font-size: inherit;
   color: #fff;
   border: 2px solid rgba(255,255,255,0.5);
   background: transparent;
  }

  .button {
   padding: 0.5em;
   margin: 1em 0;
   height: 70px;
   width: 100%;
   border-radius: 10px;
   border: none;
   background: #3b5998;
   color: #fff;
  }

  .hidden, [hidden] {
   display: none;
  }

  .container {
   background: rgba(255,255,255,0.1);
   border-radius: 10px;
   border: 1px solid rgba(255,255,255,0.2);
   box-shadow: 0px 0px 10px rgba(255,255,255,0.05);
  }

  #video{
   width: 100%;
  }

  /* === Responsive === */
  .container {
   padding: 10px 60px 10px 60px;
  }

  .button {
   padding: 0.5em;
  }

  #personSelectList,
  #personName {
   width:50%;
  }

  @media (max-width: 768px) {
   .container {
    padding: 10px 30px 10px 30px;
   }
  }
  @media (max-width: 576px) {
   .container {
    padding: 5px 15px 5px 15px;
   }

   .button {
    padding: 0.2em;
   }

   #personSelectList {
    width:100%;
   }
  }
 </style>
</head>
<body>
 <div class="page-ui">
  <div class="container">
   <h1>AI 心情點播機</h1>
   <p hidden class="page-error"></p>
   <div class="page-ok">
    <video id="video" autoplay="true"></video>
    <canvas id="photo" style="display: none;"></canvas>
    <div>
     <button type="button" id="button-play" class="button" onclick="playMusic();">AI 心情點播機 - 播放音樂</button>
    </div>
   </div>
  </div>
 </div>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js"></script>
 <script src="https://flagtech.github.io/FM611A/textToSpeech.js"></script>
 <script src="https://flagtech.github.io/FM611A/cameraPhoto.js"></script>
 <script src="https://flagtech.github.io/FM611A/azureEmotion.js"></script>

 <script>
  if (!window.jQuery) {
   pageError("請先連上網路才能使用 AI 功能");
  };
 
  $(document).ready(function(){
   azureEmotion.apiKey = apiKey;
   azureEmotion.apiLocation = apiLocation;
   
   cameraPhoto.video = $("#video")[0];
   cameraPhoto.begin(null, function() {
    pageError("您的瀏覽器不支援影像功能");
   });
   
   Noty.overrideDefaults({
    layout: 'topRight',
    timeout: 3000,
    progressBar: true,
    killer: true,
    visibilityControl: true,
   })
   
   $.ajaxSetup({
    timeout: 15000,
   });
  });

  function pageError(msg) {
   document.querySelector('.page-error').textContent = msg;
   document.querySelector('.page-error').removeAttribute('hidden');
   document.querySelector('.page-ok').setAttribute('hidden', '');
   [].forEach.call(document.querySelectorAll('form button'), function(button) {
    button.setAttribute('disabled', '');
   });
  }

  function speakMsg(words, type){
   if (typeof type === 'undefined') type = "info";
   new Noty({text:words, type:type}).show();
   textToSpeech.say(words);
  }

  function logEvent(string) {
   console.log(string);
  }

  function playMusic() {
   speakMsg('正在使用此畫面判斷您的心情...');
   cameraPhoto.video.pause();

   azureEmotion.detect(emotionDetectDone);
  }

  function emotionDetectDone(data) {
   if (data === 'normal') {
     speakMsg("您看起來心情不好也不壞, 讓我給您播放小星星");
     $.get("/playmusic?mood=normal");
   }
   else if (data === 'happy') {
     speakMsg("您看起來心情很好, 讓我給您播放快樂頌", 'success');
     $.get("/playmusic?mood=good");
   }
   else if (data === 'unhappy') {
    speakMsg("您看起來心情不好, 讓我給您播放傷心的人別聽慢歌", 'error');
     $.get("/playmusic?mood=bad");
   }
   else if (data === null) {
     speakMsg('找不到臉孔', 'error');
   }
   else if (data === false) {
     new Noty({text:'無法連線 AI 服務', type:'error'}).show();
   }
   else {
     new Noty({text:'無法確認 AI 服務回傳結果', type:'error'}).show();
   }

   cameraPhoto.video.play();
  }
 </script>
</body>
</html>
)";

//----------------------這裡是錯誤路徑頁面--------------------
static const char errorPage[] PROGMEM= u8R"(

)";
  
static const char settingPage[] PROGMEM= u8R"(

)";

//---------勿刪 (讓網頁資料儲存在程式區以節省記憶體)------------
#define WEBPAGE_IN_PROGMEM

