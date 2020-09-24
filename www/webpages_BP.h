//----------------------這裡是主頁面 (/)--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>即時血壓計</title>
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
      font-size: 30px;
      font-family: Microsoft JhengHei;
      color: white;
      margin-top: 0;
    }
    p1{
      font-size: 60px;
      margin-bottom: 0;
    }
    .num{
      font-family: Microsoft JhengHei;
      color: rgb(231, 251, 44);
      font-size: 70px;
    }
    .rainbow1{
      font-family: Microsoft JhengHei;
      color: green;
      font-size: 30px;
    }
    .rainbow2{
      font-family: Microsoft JhengHei;
      color: yellow;
      font-size: 30px;
    }
    .rainbow3{
      font-family: Microsoft JhengHei;
      color: orange;
      font-size: 30px;
    }
    .rainbow4{
      font-family: Microsoft JhengHei;
      color: red;
      font-size: 30px;
    }

    div {
      text-align: center;
    }
    .heart{
      font-size: 60px;
    }
  </style>

  <script type="text/javascript">
    var bp = 115;
    var hr = 70;
    var isrun = 0;

    function getbp() {
      if (isrun) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            bp = parseInt(this.responseText);
          }
        };
        xhttp.open("GET", "/bp", true);
        xhttp.send();
        document.getElementById("snum").innerHTML = bp;
        if(bp<=120){
          document.getElementById("pin").innerHTML = "🔽&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
        }
        else if(bp>120&&bp<130){
          document.getElementById("pin").innerHTML = "🔽&nbsp&nbsp&nbsp&nbsp&nbsp";
        }
        else if(bp>130&&bp<140){
          document.getElementById("pin").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp🔽";
        }
        else if(bp>140){
          document.getElementById("pin").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp🔽";
        }
      }
    }
    function gethr() {
      if (isrun) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            hr = parseInt(this.responseText);
          }
        };
        xhttp.open("GET", "/hr", true);
        xhttp.send();
        document.getElementById("snum2").innerHTML = hr;
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
      getbp();
      gethr();
    }, 100);
  </script>

</head>

<body class=preventcopy ondragstart="return false" oncontextmenu="return false" onselectstart="return false">
  <div>
    <p>收縮壓&nbsp<span id=snum class=num>00</span>mmHg</p>
    <p><span class="heart">❤&nbsp&nbsp</span><span id=snum2 class=num>00</span>次/分</p>
    <p1><span id="pin">🔽&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</sapn></p1>
    <p><span class="rainbow1">▅▅▅</span><span class="rainbow2">▅▅▅</span><span class="rainbow3">▅▅▅</span><span class="rainbow4">▅▅▅</span><p/>
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
