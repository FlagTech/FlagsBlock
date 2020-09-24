//----------------------這裡是主頁面 (/)--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>即時體溫計</title>
  <style type="text/css">
    body {
      /*height: 100vh;*/
      background: rgb(55, 215, 218);
      font-family: Microsoft JhengHei;
    }

    button.button {
      background-color: #919191;
      border: none;
      font-family: Microsoft JhengHei;
      color: white;
      width: 130px;
      height:130px;
      padding: 30px 40px;
      text-align: center;
      display: inline-block;
      font-size: 50px;
      margin-top: 0px;
      margin-bottom: 100px;
      margin-right: 50px;
      cursor: pointer;
      border-radius: 100px;
    }

    button.button1{
      background-color: #919191;
      border: none;
      font-family: Microsoft JhengHei;
      color: white;
      padding: 30px;
      padding-top: 0px;
      padding-bottom: 0px;
      text-align: center;
      display: inline-block;
      font-size: 30px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 0px;
      cursor: pointer;
      border-radius: 10px;
    }

    button.button2{
      background-color: #919191;
      border: none;
      font-family: Microsoft JhengHei;
      width: 30%;
      color: white;
      text-align: center;
      display: inline-block;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 0px;
      cursor: pointer;
      border-radius: 10px;
    }

    .preventcopy {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    p {
      font-size: 70px;
      font-family: Microsoft JhengHei;
      color: white;
      margin-bottom: 0px;
      margin-top: 0px;
    }

    .num{
      font-family: Microsoft JhengHei;
      color: rgb(231, 251, 44);
      font-size: 100px;
      margin-bottom: 0px;
    }

    p.face{
      font-size: 50px;
      display: inline-block;
    }

    p.explain{
      color:rgb(228, 94, 8);
      font-size: 20px;
      display: inline-block;
      text-align: left;
    }

    p.status {
      font-size: 15px;
      color: white;
      background-color: tomato;
      text-align: right;
      margin-top: 30px;
      position: fixed;
      bottom: 0;
      left: 5px;
      padding: 3px;
    }

    p.status2 {
      font-size: 15px;
      color: white;
      background-color: rgb(212, 0, 255);
      text-align: right;
      margin-top: 30px;
      margin-left: 250px;
      position: fixed;
      bottom: 0;
      left: 5px;
      padding: 3px;
    }

    p.set {

      margin-bottom: -1px;
      font-size: 13px;
      text-align: left;
      background-color: #009a71;
      color: rgb(240, 240, 240);
      width: 80px;
      padding: 4px;

    }

    input.text1 {
      margin: 5px;
      width: 20%;
      height: 6%;
      border: 0px;
      padding: 5px;
      font-size: 20px;
    }

    div {
      text-align: center;
    }

    div.learnArea {
      border: 1px solid white;
      padding: 0px;
      text-align: center;
      margin-bottom: 50px;
    }

    select {
      margin: auto;
      width: 95%;
      padding: 15px;
      size:9;
    }
  </style>

  <script type="text/javascript">
    var value = 37.0;
    var tmpvalue=0;
    var isrun = 0;
    var rawvalue = 0;
    var choreography;


    function Floor(tmp){
      var tmpvalue=parseInt(tmp*10);
      var value=tmpvalue/10;
      var n = value.toFixed(1)
      return n;
    }

    function initAll() {
      choreography = document.getElementById('choreography');
    }

    function getvalue() {
      if (isrun) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            value = parseFloat(this.responseText);
          }
        };

        value=Floor(value);
        xhttp.open("GET", "/measure", true);
        xhttp.send();
        document.getElementById("snum").innerHTML = value;
        if(value>=38){
          facestate.innerHTML = "🤒";
        }
        else if(value<35){
          facestate.innerHTML = "😰";
        }
        else{
          facestate.innerHTML = "😃";
        }

      }
    }
    function getrawvalue() {
      if (isrun) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            rawvalue = parseInt(this.responseText);
          }
        };
        xhttp.open("GET", "/measureraw", true);
        xhttp.send();
        rawdata.innerHTML = rawvalue;
      }
    }
    function start(){
      if(isrun==0){
        isrun=1;
        document.getElementById("switch").innerHTML = "□";
      }
      else if(isrun==1){
        isrun=0;
        document.getElementById("switch").innerHTML = "▷";
      }
    }

    function learnstart(){
      var learndata="";
      status1.innerHTML = "開始訓練";
      for (var i = 0; i < choreography.options.length-1; i++) {
        learndata += choreography.options[i].value + ':';
      }
      learndata += choreography.options[choreography.options.length-1].value;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          status1.innerHTML = "訓練完成";
        }
        else {
          status1.innerHTML = "訓練中...";
        }
      };
      xhttp.open('POST', 'learn', true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send('learndata=' + learndata);
    }

    function addData() {
      var newData = document.createElement('OPTION');

      newData.text = "原始值:"+ trainraw.value + "，溫度:" +traintmp.value;
      newData.value =trainraw.value/1000 + ',' +traintmp.value/100;
      newData.selected = true;
      choreography.add(newData, choreography.selectedIndex + 1);
    }

    function clearData(){
      while (choreography.length > 0) {
        choreography.remove(0);
      }
      choreography.selectedIndex = 0;
    }

    function removeData(){
      var currIndex = choreography.selectedIndex;
      choreography.remove(currIndex);
      choreography.selectedIndex = (currIndex > 0) ? (currIndex - 1) : 0;
    }

    window.setInterval(function() {
      getvalue();
      getrawvalue();
    }, 100);
  </script>

</head>

<body class="preventcopy" ondragstart="return false" oncontextmenu="return false" onselectstart="return false" onload='initAll()'>
  <div>
    <p><span id="snum" class="num">0</span>°C</p>
  </div>
  <div>
    <button type="button" class="button" onclick='start()'><span id="switch">▷</span></button>
    <p class="face" id="facestate">😃<p/>
  </div>
  <p class='set'>訓練神經網路</p>
  <div class="learnArea">
    <p class="explain">原始值</p>
    <input class="text1" type='text' id='trainraw' value="541">
    <p class="explain">溫度</p>
    <input class="text1" type='text' id='traintmp' value="20">
    <p class="explain">°C</p>
    <br>
    <button class="button2" onClick='addData()'>＋ 新增</button>
    <button class="button2" onClick='removeData()'>－ 刪除</button>
    <button class="button2" onClick='clearData()'>× 清除</button>
    <br>
    <select id="choreography" size="4"></select>
    <br>
    <button type="button" class="button1" onclick='learnstart()'>訓練</button>
  </div>
  <p class="status" id="status1">訊息</p>
  <p class="status2" >原始值:<span id="rawdata">0.0</span></p>
</body>
</html>
)";

//----------------------這裡是錯誤路徑頁面--------------------
static const char errorPage[] PROGMEM= u8R"(
<!DOCTYPE html>
<html>
<style type='text/css'>
    body{
        /*height: 100vh;*/
        background: tomato;
        font-family: Microsoft JhengHei;
      }
      div.all{
        border: 5px solid white;
        text-align: center;
        padding: 30px;
        margin-top: 35%;
      }
      h1{
        color: rgb(240,240,240);

      }
    button {
        border: none;
        padding: 13px 15px;
        margin: 4px 2px;
        font-size: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        background-color: #F6EC00;
        border-radius: 4px;
        color: tomato;
        font-weight: 900;
        font-size: 15px;
    }

    button:hover {
        background-color: #555555;
        color: white;
    }

</style>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <script>
    function backToHome() {
      location.href = '/';
    }
  </script>
<title>旗標科技手機遙控跳舞機器人--路徑錯誤</title>
</head>
<body>
  <div class='all'>
    <h1>網址錯了, 我不知道該怎麼處理？</h1>
    <button onClick='backToHome()'>回主頁</button>
  </div>
</body>
</html>
)";

//---------------------這裡是設定頁面 (/setting)
static const char settingPage[] PROGMEM= u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>設定頁面</title>
    <style type="text/css">
      body {
        /*height: 100vh;*/
        background: rgb(55, 215, 218);
        font-family: Microsoft JhengHei;
      }

      .button {
        background-color: #919191;
        /* Green */
        border: none;
        font-family: Microsoft JhengHei;
        width: 160px;
        height:160px;
        color: white;
        padding: 0px;
        padding-top: 40px;
        padding-bottom: 40px;
        text-align: center;
        display: inline-block;
        font-size: 30px;

        margin: 50px;
        cursor: pointer;
        border-radius: 100px;

      }

      p {
        font-size: 40px;
        font-family: Microsoft JhengHei;
        color: white;
      }
      div {
        text-align: center;
      }
    </style>

    <script type="text/javascript">

    </script>

  </head>

  <body>
    <div>
      <p>此程式不需要設定</p>
      <button type="button" class="button" onclick="self.location.href='http://192.168.4.1'">回主頁</button>
    </div>
  </body>
  </html>
)";

//---------以下這一行不要刪除, 這可以讓網頁資料儲存在程式區, 節省記憶體--------------
#define WEBPAGE_IN_PROGMEM
