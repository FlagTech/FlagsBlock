//----------------------這裡是主頁面 (/)--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1,maximum-scale=1'>
  <title>神秘寶箱</title>
  <style type='text/css'>
    p.status {
      font-size: 25px;
      color: white;
      background-color: tomato;
      text-align: right;
      margin-top: 30px;
      position: fixed;
      bottom: 0;
      left: 10px;
      padding: 0px;
    }

    .title {
      height: 200px;
      text-align: center;
    }

    .button {
      border: none;
      padding: 5px 10px;
      font-size: 25px;
      font-family: Microsoft JhengHei;
      text-align: center;
      cursor: pointer;
      background-color: #008CBA;
      border-radius: 10px;
      color: white;
    }

    h1 {
      font-family: Microsoft JhengHei;
      color: rgb(255, 0, 0);
      text-align: center;
    }

    p {
      font-size: 25px;
      font-family: Microsoft JhengHei;
      margin-top: auto;
      margin-bottom: 20px;
      color: rgb(89, 35, 223);
      text-align: center;
    }

    .container {
      background-size: cover;
      background: rgb(226, 226, 226);
      /* Old browsers */
      background: -moz-linear-gradient(top, rgba(226, 226, 226, 1) 0%, rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 60%, rgba(254, 254, 254, 1) 100%);
      /* FF3.6+ */
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(226, 226, 226, 1)), color-stop(50%, rgba(219, 219, 219, 1)), color-stop(60%, rgba(209, 209, 209, 1)), color-stop(100%, rgba(254, 254, 254, 1)));
      /* Chrome,Safari4+ */
      background: -webkit-linear-gradient(top, rgba(226, 226, 226, 1) 0%, rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 60%, rgba(254, 254, 254, 1) 100%);
      /* Chrome10+,Safari5.1+ */
      background: -o-linear-gradient(top, rgba(226, 226, 226, 1) 0%, rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 60%, rgba(254, 254, 254, 1) 100%);
      /* Opera 11.10+ */
      background: -ms-linear-gradient(top, rgba(226, 226, 226, 1) 0%, rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 60%, rgba(254, 254, 254, 1) 100%);
      /* IE10+ */
      background: linear-gradient(to bottom, rgba(226, 226, 226, 1) 0%, rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 60%, rgba(254, 254, 254, 1) 100%);
      /* W3C */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe', GradientType=0);
      /* IE6-9 */
      height: 100%;
    }

    .led-box {
      height: 150px;
      width: 33%;
      margin-top: 0px;
      float: left; //border-top: 2px solid red;
    }

    .led-box p {
      font-size: 20px;
      text-align: center;
      margin: 1em;
    }

    .led-red {
      margin: 0 auto;
      width: 80px;
      height: 80px;
      background-color: rgb(180, 0, 0);
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 0px 10px;
    }

    .led-green {
      margin: 0 auto;
      width: 80px;
      height: 80px;
      background-color: rgb(0, 180, 0);
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, rgba(0, 255, 0, 0.5) 0 0px 10px;
    }

    .led-blue {
      margin: 0 auto;
      width: 80px;
      height: 80px;
      background-color: rgb(0, 125, 180);
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, rgba(0, 200, 255, 0.5) 0 0px 10px;
    }
  </style>

  <script type='text/javascript'>
    var num = 0;
    var i = 180;
    var func;
    var func1;
    var ledtypes = '';
    var duration = 10;
    var ledcolor = '';
    var counts = 0;
    var password = '';

    function start() {
      document.getElementById('myBtn').disabled = true;
      func1 = setInterval(setrandom, 1000);
      status1.innerHTML = '開始記憶...';
    }

    function setrandom() {
      var tmpled = 'led';
      var tmpcolor = '';
      var x = Math.floor((Math.random() * 9)+1);

      if (x == 1 || x == 6 || x == 8) {
        tmpcolor = 'G';
      } else if (x == 2 || x == 4 || x == 9) {
        tmpcolor = 'R';
      } else {
        tmpcolor = 'B';
      }
      tmpled += x.toString();
      password += x.toString();

      blinkLed(tmpled, tmpcolor, 5);
      counts += 1;
      if (counts == 10) {
        clearInterval(func1);
        counts = 0;
        document.getElementById('myBtn').disabled = false;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            status1.innerHTML = 'RST:重新輸入&nbsp&nbsp&nbspEnter:確定';
          }
        };
        xhttp.open('POST', '/start', true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send('password=' + password);
        password = '';
      }
      else{
        status1.innerHTML = '';
      }
    }

    function blinkLed(led, color, dur) {
      duration = dur;
      ledtypes = led;
      ledcolor = color;
      func = setInterval(blinkLed2, duration);
    }

    function blinkLed2() {
      if (ledcolor == 'R') {
        document.getElementById(ledtypes).style.backgroundColor = 'rgb(' + i + ', 0, 0)';
        document.getElementById(ledtypes).style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px ' + ((i - 180) * 20 / 75 + 10) + 'px';
      } else if (ledcolor == 'G') {
        document.getElementById(ledtypes).style.backgroundColor = 'rgb(0, ' + i + ', 0)';
        document.getElementById(ledtypes).style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(0, 255, 0, 0.5) 0 2px ' + ((i - 180) * 20 / 75 + 10) + 'px';
      } else if (ledcolor == 'B') {
        document.getElementById(ledtypes).style.backgroundColor = 'rgb(0, ' + (i - 55) + ', ' + i + ')';
        document.getElementById(ledtypes).style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(0, 200, 255, 0.5) 0 2px ' + ((i - 180) * 20 / 75 + 10) + 'px';
      }
      if (i < 255) {
        i++;
      } else {
        clearInterval(func);
        func = setInterval(blinkLed3, duration);
      }
    }

    function blinkLed3() {
      if (ledcolor == 'R') {
        document.getElementById(ledtypes).style.backgroundColor = 'rgb(' + i + ', 0, 0)';
        document.getElementById(ledtypes).style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(250, 0, 0, 0.5) 0 2px ' + ((i - 180) * 20 / 75 + 10) + 'px';
      } else if (ledcolor == 'G') {
        document.getElementById(ledtypes).style.backgroundColor = 'rgb(0, ' + i + ', 0)';
        document.getElementById(ledtypes).style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(0, 250, 0, 0.5) 0 2px ' + ((i - 180) * 20 / 75 + 10) + 'px';
      } else if (ledcolor == 'B') {
        document.getElementById(ledtypes).style.backgroundColor = 'rgb(0, ' + (i - 55) + ', ' + i + ')';
        document.getElementById(ledtypes).style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(0, 200, 255, 0.5) 0 2px ' + ((i - 180) * 20 / 75 + 10) + 'px';
      }
      if (i > 180) {
        i--;
      } else {
        clearInterval(func);
      }
    }
  </script>

</head>

<body class=preventcopy ondragstart='return false' oncontextmenu='return false' onselectstart='return false'>
  <div class='container'>
    <div class='title'>
      <h1>九宮燈</h1>
      <p>按下按鈕後開始</p>
      <button type='button' class='button' onclick='start()' id='myBtn'>START</button>
    </div>
    <div class='led-box'>
      <div class='led-green' id='led1'></div>
      <p>1</p>
    </div>
    <div class='led-box'>
      <div class='led-red' id='led2'></div>
      <p>2</p>
    </div>
    <div class='led-box'>
      <div class='led-blue' id='led3'></div>
      <p>3</p>
    </div>
    <br>
    <div class='led-box'>
      <div class='led-red' id='led4'></div>
      <p>4</p>
    </div>
    <div class='led-box'>
      <div class='led-blue' id='led5'></div>
      <p>5</p>
    </div>
    <div class='led-box'>
      <div class='led-green' id='led6'></div>
      <p>6</p>
    </div>
    <br>
    <div class='led-box'>
      <div class='led-blue' id='led7'></div>
      <p>7</p>
    </div>
    <div class='led-box'>
      <div class='led-green' id='led8'></div>
      <p>8</p>
    </div>
    <div class='led-box'>
      <div class='led-red' id='led9'></div>
      <p>9</p>
    </div>
  </div>
  <p class='status' id='status1'></p>
</body>
</html>
)";

//---------這裡是錯誤路徑頁面----------------------------------
static const char errorPage[] PROGMEM= u8R"(
<!DOCTYPE html>
<html>
<style type='text/css'>
    body{
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
<title>密室逃脫--路徑錯誤</title>
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
