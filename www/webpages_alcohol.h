//----------------------這裡是主頁面 (/)--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>酒測計</title>
  <style type="text/css">
    body {
      background: rgb(55, 215, 218);
      font-family: Microsoft JhengHei;
    }

    .button {
      background-color: #919191;
      border: none;
      font-family: Microsoft JhengHei;
      color: white;
      padding: 120px;
      padding-top: 140px;
      padding-bottom: 140px;
      text-align: center;
      display: inline-block;
      font-size: 50px;
      margin: 150px 100px;
      margin-bottom: 100px;
      cursor: pointer;
      border-radius: 500px;

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
      font-size: 25px;
      font-family: Microsoft JhengHei;
      color: white;
    }

    div {
      text-align: center;
    }
  </style>

  <script type="text/javascript">
    var value = 0;
    var isrun = 0;

    function CancelEvent(e) {
      e.preventDefault();
    }

    function ButtonPressed() {
      document.getElementById("button1").style.backgroundColor = "white";
      document.getElementById("button1").style.color = "gray";
      isrun = 1;
      window.setInterval(function() {
        getvalue();
      }, 10);
    }

    function ButtonReleased() {
      document.getElementById("button1").style.backgroundColor = "gray";
      document.getElementById("button1").style.color = "white";
      isrun = 0;
    }

    function getvalue() {
      if (isrun) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            value = parseInt(this.responseText);
          }
        };
        xhttp.open("GET", "/measure", true);
        xhttp.send();
        if (value < 200) {
          document.getElementById("state").innerHTML = "沒有酒精反應";
          document.body.style.backgroundColor = 'rgb(55, 215, 218)';
        }
        else if (value >= 200 && value < 280) {
          document.getElementById("state").innerHTML = "你有喝點小酒喔";
          document.body.style.backgroundColor = 'rgb(170, 88, 173)';
        }
        else if (value >= 280 && value < 350) {
          document.getElementById("state").innerHTML = "你喝了兩杯以上";
          document.body.style.backgroundColor = 'rgb(241, 17, 104)';
        }
        else if (value >= 350 && value < 450) {
          document.getElementById("state").innerHTML = "你喝太多啦";
          document.body.style.backgroundColor = 'rgb(254, 118, 8)';
        }
        else if (value > 450) {
          document.getElementById("state").innerHTML = "你已經爛醉了";
          document.body.style.backgroundColor = 'rgb(251, 28, 6)';
        }
      }
    }
  </script>

</head>

<body class=preventcopy ondragstart="return false" oncontextmenu="return false" onselectstart="return false">
  <div>
    <button type="button" class="button" id="button1" onmousedown="ButtonPressed(this);" ontouchstart="ButtonPressed(this);" onmouseup="ButtonReleased(this);" onmouseout="ButtonReleased(this);" ontouchend="ButtonReleased(this);" ontouchcancel="ButtonReleased(this);"
      ontouchmove="CancelEvent(event);">量測</button>
    <p><span id=state>沒有酒精反應</span></p>
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
