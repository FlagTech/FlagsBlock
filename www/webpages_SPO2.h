//----------------------這裡是主頁面 (/)--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>血氧濃度計</title>
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
      padding: 50px;
      padding-top: 40px;
      padding-bottom: 40px;
      text-align: center;
      display: inline-block;
      font-size: 50px;

      margin-bottom: 100px;
      cursor: pointer;
      border-radius: 100px;

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
      font-size: 40px;
      font-family: Microsoft JhengHei;
      color: white;
    }

    .num{
      font-family: Microsoft JhengHei;
      color: rgb(231, 251, 44);
      font-size: 150px;
    }
    .ruler1{
      font-family: Microsoft JhengHei;
      color: red;
      font-size: 40px;
    }

    .ruler2{
      font-family: Microsoft JhengHei;
      color: white;
      font-size: 40px;
    }
    div {
      text-align: center;
    }
  </style>

  <script type="text/javascript">
    var value = 50;
    var isrun = 0;

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
        document.getElementById("snum").innerHTML = value;
        if(value==0){
          document.getElementById("r1").innerHTML = "▁ ";
          document.getElementById("r2").innerHTML = "▂ ▃ ▅ ▆ ▇";
        }
        else if(value>0 && value<=20){
          document.getElementById("r1").innerHTML = "▁ ▂ ";
          document.getElementById("r2").innerHTML = "▃ ▅ ▆ ▇";
        }
        else if(value>20 && value<=40){
          document.getElementById("r1").innerHTML = "▁ ▂ ▃ ";
          document.getElementById("r2").innerHTML = "▅ ▆ ▇";
        }
        else if(value>40 && value<=60){
          document.getElementById("r1").innerHTML = "▁ ▂ ▃ ▅ ";
          document.getElementById("r2").innerHTML = "▆ ▇";
        }
        else if(value>60 && value<=80){
          document.getElementById("r1").innerHTML = "▁ ▂ ▃ ▅ ▆ ";
          document.getElementById("r2").innerHTML = "▇";
        }
        else if(value>80 && value<=100){
          document.getElementById("r1").innerHTML = "▁ ▂ ▃ ▅ ▆ ▇";
          document.getElementById("r2").innerHTML = "";
        }
      }
    }
    function start(){
      if(isrun==0){
        isrun=1;
        document.getElementById("switch").innerHTML = "⬜";
      }
      else if(isrun==1){
        isrun=0;
        document.getElementById("switch").innerHTML = "▷";
      }
    }
    window.setInterval(function() {
      getvalue();
    }, 100);
  </script>

</head>

<body class=preventcopy ondragstart="return false" oncontextmenu="return false" onselectstart="return false">
  <div>
    <p><span id=snum class=num>0</span>%SPO2</p>
    <p><span id=r1 class=ruler1>▁ </span><span id=r2 class=ruler2>▂ ▃ ▅ ▆ ▇</span><p/>
    <button type="button" class="button" onclick='start()'><span id=switch>▷</span></button>

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
