//----------------------這裡是主頁面 (/)--------------------
static const char mainPage[] PROGMEM = u8R"=(
  <!doctype html>
  <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1">
    <title>MAGIC</title>
    <style type="text/css">
  body {
  	height: 100vh;
  	background: black;
  	font-family: Microsoft JhengHei;
  }
  button.card {
  	background-color: white;
  	border: none;
  	padding: 5px;
  	font-family: Microsoft JhengHei;
  	width: 220px;
  	height: 100%;
  	color: black;
  	font-size: 80px;
  	border-radius: 20px;
  	text-align: center;
  }
  .type1 {
    font-size: 60px;
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
  	font-size: 90px;
  	font-family: Microsoft JhengHei;
  	color: black;
  	display: inline-block;
  	text-align: left;
  }
  p.signal {
  	font-size: 4px;
  	font-family: Microsoft JhengHei;
  	color: white;
  	display: inline-block;
  	text-align: left;
  }
  p.time {
  	font-size: 10px;
  	font-family: Microsoft JhengHei;
  	color: white;
  	display: inline-block;
  	text-align: right;
  }
  div.div1 {
  	text-align: left;
  	width: 49%;
  	display: inline-block;
  }
  div.div2 {
  	text-align: right;
  	width: 49%;
  	display: inline-block;
  }
  div.div3 {
  	background-color: black;
  	width: 220px;
  	height: 350px;
  	position: absolute;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	left: 0;
  	margin: auto;
  }
  div.gap {
  	height: 20%;
  }
  </style>
    <script type="text/javascript">
      var s = 1;
      var sig = 0;
      var plus = true;
      var run = false;
      var run2 = false;

      function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var ss = today.getSeconds();
        var ts = "";
        m = checkTime(m);
        ss = checkTime(ss);
        if (h < 13) {
          document.getElementById("apm").innerHTML = "AM";
        } else {
          h -= 12;
          document.getElementById("apm").innerHTML = "PM";
        }
        h = checkTime(h);
        s += 1;
        if (s > 13) {
          s = 1;
        }
        ts = checkTime(s);
        if (run2) {
          document.getElementById("txt").innerHTML =
            h + ":" + m + ":" + ts;
        } else {
          document.getElementById("txt").innerHTML =
            h + ":" + m + ":" + ss;
        }
        setTimeout(startTime, 1000);
      }

      function checkTime(i) {
        if (i < 10) {
          i = "0" + i
        }; // add zero in front of numbers < 10
        return i;
      }

      function setsignal() {
        if (run) {
          if (sig < 3 && plus == true) {
            sig++;
          } else if (sig >= 3) {
            plus = false;
          }
          if (plus == false && sig > 0) {
            sig--;
          } else if (sig <= 0) {
            plus = true;
          }
          switch (sig) {
            case 0:
              document.getElementById("signal1").innerHTML = "▁";
              break;
            case 1:
              document.getElementById("signal1").innerHTML = "▁ ▂";
              break;
            case 2:
              document.getElementById("signal1").innerHTML = "▁ ▂ ▃";
              break;
            case 3:
              document.getElementById("signal1").innerHTML = "▁ ▂ ▃ ▅";
              break;
          }
        }

      }

      function start() {
        if (!run2 && run == true) {
          run = false;
          run2 = true;
          s = 1;
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {}
          };
          xhttp.open("GET", "/access", true);
          xhttp.send();
        } else if (run2) {
          var trues = s;
          var truesig = sig;
          if (trues == 1) {
            document.getElementById("num").innerHTML = "A";
          } else if (trues == 11) {
            document.getElementById("num").innerHTML = "J";
          } else if (trues == 12) {
            document.getElementById("num").innerHTML = "Q";
          } else if (trues == 13) {
            document.getElementById("num").innerHTML = "K";
          } else {
            document.getElementById("num").innerHTML = trues;
          }

          switch (truesig) {
            case 0:
              document.getElementById("type").style.color = "black";
              document.getElementById("type").innerHTML = "♠️";
              break;
            case 1:
              document.getElementById("type").style.color = "black";
              document.getElementById("type").innerHTML = "♣️";
              break;
            case 2:
              document.getElementById("type").style.color = "red";
              document.getElementById("type").innerHTML = "♥️";
              break;
            case 3:
              document.getElementById("type").style.color = "red";
              document.getElementById("type").innerHTML = "♦️";
              break;
          }
          run2 = false;
        }
      }

      function magic() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "1" && !run2) {
              run = true;
            }
          }
        };
        xhttp.open("GET", "/checkok", true);
        xhttp.send();
      }

      window.setInterval(function() {
        setsignal();
      }, 1000);

      window.setInterval(function() {
        magic();
      }, 10);
    </script>
    </head>

    <body class="preventcopy" ondragstart="return false" oncontextmenu="return false" onselectstart="return false" onload="startTime()">
  <div class="div1">
      <p class="signal"><span id="signal1">▁ ▂ ▃ ▅</span></p>
    </div>
  <div class="div2">
      <p class="time"><span id="apm">AM</span> <span id="txt">08:00:13</span></p>
    </div>
  <div class="div3">
      <button class="card" onclick="start()"><span id="type" class="type1"></span><span id="num"></span></button>
    </div>
  </body>
  </html>
)=";

//----------------------這裡是錯誤路徑頁面--------------------
static const char errorPage[] PROGMEM= u8R"=(
<!DOCTYPE html>
<html>
<style type="text/css">
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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>
    function backToHome() {
      location.href = "/";
    }
  </script>
<title>路徑錯誤</title>
</head>
<body>
  <div class="all">
    <h1>網址錯了, 我不知道該怎麼處理？</h1>
    <button onClick="backToHome()">回主頁</button>
  </div>
</body>
</html>
)=";

//---------------------這裡是設定頁面 (/setting)
static const char settingPage[] PROGMEM= u8R"=(
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
      <button type="button" class="button" onclick="self.location.href='/'">回主頁</button>
    </div>
  </body>
  </html>
)=";

//---------以下這一行不要刪除, 這可以讓網頁資料儲存在程式區, 節省記憶體--------------
#define WEBPAGE_IN_PROGMEM
