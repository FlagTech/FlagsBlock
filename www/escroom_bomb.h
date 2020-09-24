//---------這裡是主頁面 ("/")----------------------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1,maximum-scale=1'>
  <title>密室逃脫</title>
  <style type='text/css'>
    body {
      background: rgb(0, 0, 0);
      background: linear-gradient(to right, black , rgb(78, 78, 78), black);
      font-family: Microsoft JhengHei;
      border-top: 20px solid white;
      border-bottom: 20px solid white;
    }

    .button {
      background-color: #919191;
      /* Green */
      border: none;
      font-family: Microsoft JhengHei;
      width: 70px;
      height:40px;
      color: white;
      text-align: center;
      display: inline-block;
      font-size: 15px;

      //margin-top: 200px;
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

    h1 {
      font-size: 35px;
      font-family: Microsoft JhengHei;
      color: rgb(250, 126, 0);
      text-align: center;
      padding-top: 10%;
    }

    p {
      font-size: 20px;
      font-family: Microsoft JhengHei;
      color: white;
      text-align: center;
      padding-top: 35%;
    }

    p.hint{
      font-size: 20px;
      font-family: Microsoft JhengHei;
      color: red;
      text-align: center;
      padding-top: 0%;
    }

    p.notice{
      font-size: 20px;
      font-family: Microsoft JhengHei;
      color: red;
      text-align: center;
      padding-top: 30%;
    }

    input.text{
      font-size: 20px;
      width: 70%;
      height:30px;
    }

    div {
      text-align: center;
    }

  </style>

  <script type='text/javascript'>
    function check(){
      if(document.getElementById('password').value=='FLAGSROOM'){
        hint.innerHTML = '密碼正確';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            location.href = '/setting';
          }
        };
        xhttp.open('GET', '/bombing', true);
        xhttp.send();
      }
      else{
        hint.innerHTML = '密碼錯誤!';
      }
    }
    function init(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
      };
      xhttp.open('GET', '/start', true);
      xhttp.send();
    }
    function enter(){
      if(event.keyCode==13){
        check();
      }
    }

  </script>

</head>
<body  onload='init()' class=preventcopy ondragstart='return false' oncontextmenu='return false' onselectstart='return false'>
<h1>🔥盡速拆除炸彈🔥<br>💣逃離此區💥</h1>
<p>恭喜你成功來到拆彈頁面<br>請輸入正確密碼，方能進入提示頁面</p>
  <div>
    <input class='text' type='text' onkeypress='enter()' id='password' value='*****' />
    <button type='button' class='button' onclick='check()'>確定</button>
  </div>
<p class='hint' id='hint'>&nbsp</p>
<p class='notice'>注意!此時亂動炸藥將直接爆炸</p>
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

//---------這裡是設定頁面 ("/setting")------------------------
static const char settingPage[] PROGMEM= u8R"(
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1">
  <title>提示頁面</title>
  <style type="text/css">
    body {
      /*height: 100vh;*/
      background: rgb(0, 0, 0);
      background: linear-gradient(to right, black , rgb(78, 78, 78), black);
      font-family: Microsoft JhengHei;
      border-top: 20px solid white;
      border-bottom: 20px solid white;
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
      text-align: center;
      padding-top: 50%;
    }
  </style>

  <script type="text/javascript">
  </script>

</head>
<body class=preventcopy ondragstart="return false" oncontextmenu="return false" onselectstart="return false">
<p>拔線前謹慎三思<br>除非相當有把握<br>只能拆除一條線<br>設法逃出此房間</p>
</body>
</html>
)";

//---------勿刪 (讓網頁資料儲存在程式區以節省記憶體)------------
#define WEBPAGE_IN_PROGMEM