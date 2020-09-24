//----------------------這裡是主頁面 (/)--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>心跳測量</title>
  <style>
    div.word {
      margin: auto;
      width: 80%;
      text-align: center;
    }

    div.set {
      margin: auto;
      width: 80%;
      text-align: center;
    }

    div.bar {
      margin: auto;
      width: 100%;
      text-align: center;
    }

    .button {
      border: none;
      padding: 5px 10px;
      margin-left: 0%;
      margin-right: 5%;
      margin-top: auto;
      margin-bottom: 15px;
      font-size: 25px;
      font-family: Microsoft JhengHei;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      background-color: #008CBA;
      border-radius: 10px;
      color: white;
    }

    p {
      font-size: 25px;
      font-family: Microsoft JhengHei;
      margin-top: auto;
      margin-bottom: 5px;
    }

    p1 {
      font-size: 15px;
      font-family: Microsoft JhengHei;
      margin-top: auto;
      margin-bottom: 5px;
      color: rgb(89, 35, 223);
    }

    .loc {
      display: inline-block;
    }

    canvas {
      width: 80%;
      min-height: 300px;
      max-height: 500px;
      margin-left: 10%;
      margin-right: 10%;
    }

    .slidecontainer {
      width: 100%;
    }

    .slider {
      -webkit-appearance: none;
      width: 80%;
      height: 15px;
      border-radius: 5px;
      margin-bottom: 15px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }

    .slider:hover {
      opacity: 1;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4CAF50;
      cursor: pointer;
    }

    .slider::-moz-range-thumb {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #4CAF50;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <canvas id="myCanvas" width="800" height="500" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>
  <div class="word">

  </div>
  <script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#000440";
    ctx.fillRect(0, 0, 800, 500);
    var linex = 0;
    var liney = 300;
    var rowliney = 300;
    var oldliney = 300;
    var isrun = 0;
    var godown = 0;
    var maxdata = 0;
    var scrolly = 3;
    var scrollx = 5;

    function loadXMLDoc() {
      if (isrun) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("hr").innerHTML =
              this.responseText;
          }
        };
        xhttp.open("GET", "/hr", true);
        xhttp.send();
      }
    }

    function heartbeat1() {
      if (Boolean(isrun)) {
        document.getElementById("hearttype").innerHTML =
          "💗";
      }
    }

    function heartbeat2() {
      if (Boolean(isrun)) {
        document.getElementById("hearttype").innerHTML =
          "❤️";
      }
    }

    function drawline() {
      if (Boolean(isrun)) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            rowliney = parseInt(this.responseText);
            scrolly = 10 - parseInt(document.getElementById("scrollydata").value);
            if ((rowliney - maxdata + (scrolly * 400)) < 0 && godown == 0) {
              godown++;
            }
            if (godown > 0) {
              maxdata -= (maxdata / 1000);
              godown++;
              if (godown == 101) {
                godown = 0;
              }
            }
            if (rowliney > maxdata) {
              maxdata = rowliney;
            }
            liney = parseInt((rowliney - maxdata + (scrolly * 400)) / scrolly);
            ctx.clearRect(linex, 0, 50, 500);
            ctx.beginPath();
            ctx.fillStyle = "#000440";
            ctx.fillRect(linex, 0, 50, 500);
            ctx.moveTo(linex, oldliney);
            scrollx = parseInt(document.getElementById("scrollxdata").value);
            linex += scrollx;
            ctx.lineTo(linex, liney);
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#18f500';
            ctx.stroke();
            if (linex >= 800) {
              linex = 0;
            }
            oldliney = liney;
          }
        }
      };
      xhttp.open("GET", "/line", true);
      xhttp.send();
    }

    function start() {
      isrun = 1;
    }

    function stop() {
      isrun = 0;
    }
    window.setInterval(function() {
      heartbeat1();
      setTimeout(heartbeat2, 1000);
    }, 2000);
    window.setInterval(function() {
      loadXMLDoc();
    }, 10000);
    window.setInterval(function() {
      drawline();
    }, 100);
  </script>
  <div class="set">
    <button type="button" class="button loc" onclick='start()'>開始</button>
    <button type="button" class="button loc" onclick='stop()'>停止</button>
    <p class="loc"><span id="hearttype">❤️</span><span id="hr">00</span>次/分</p>
  </div>
  <div class="bar">
    </br><p1>水平</p1><input type="range" min="1" max="20" value="5" class="slider" id="scrollxdata">
    </br><p1>垂直</p1><input type="range" min="0" max="15" value="7" class="slider" id="scrollydata">
  </div>
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
