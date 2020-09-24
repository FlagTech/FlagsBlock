//----------------------這裡是主頁面 (/)--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>測謊儀</title>
  <style>
    body {
      margin: 0px;
      padding: 0px;
    }
  </style>
</head>
<body>
  <canvas id="myCanvas" width="1000" height="500" style="border:1px solid #d3d3d3;"></canvas>
  <script>
    function canvas_arrow(context, fromx, fromy, tox, toy) {
      var headlen = 250; // length of head in pixels
      var angle = Math.atan2(toy - fromy, tox - fromx);
      context.beginPath();
      context.moveTo(fromx, fromy);
      context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 76), toy - headlen * Math.sin(angle - Math.PI / 76));
      context.lineTo(tox, toy);
      context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 76), toy - headlen * Math.sin(angle + Math.PI / 76));
      context.lineTo(fromx, fromy);
      context.closePath();
      context.lineWidth = 3;
      context.fillStyle = 'white';
      context.fill();
      context.beginPath();
      context.moveTo(fromx, fromy+5);
      context.arc(fromx, fromy+5, 20, degreesToRadians(180), degreesToRadians(360), false);
      context.closePath();
      context.lineWidth = 5;
      context.fillStyle = '#fbec28';
      context.fill();
    }
    function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
    }
    function circley(circlex,a,b,r) {
      return b-Math.sqrt((r*r)-((circlex-a)*(circlex-a)));
    }
    function harmonicX(r,t,h){
      return r*Math.cos(degreesToRadians(t))+h;
    }
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var centerX = 500;
    var centerY = 350;
    var radius = 300;
    var arrowX=180;
    var data=180;
    var grd=ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");
    function inipanel(){
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, degreesToRadians(180), degreesToRadians(240), false);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.fillStyle = 'rgb(83, 221, 14)';
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, degreesToRadians(240), degreesToRadians(300), false);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.fillStyle = 'rgb(13, 133, 180)';
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, degreesToRadians(300), degreesToRadians(360), false);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.fillStyle = 'rgb(245, 50, 50)';
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, degreesToRadians(180), degreesToRadians(360), false);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgb(47, 46, 46)';
      ctx.stroke();
    }
    inipanel();
    function drawarrow() {
      inipanel();
      if(arrowX<data){
        arrowX++;
      }
      else if(arrowX>data){
        arrowX--;
      }
      canvas_arrow(ctx, centerX, centerY, harmonicX(250,arrowX,centerX), circley(harmonicX(250,arrowX,centerX),centerX,centerY,radius-50));
    }
    function loadXMLDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data=parseInt(this.responseText);
        }
      };
      xhttp.open("GET", "/lie", true);
      xhttp.send();
      //data=360;
    }
    window.setInterval(function() {
      drawarrow();
    }, 1);
    window.setInterval(function() {
      loadXMLDoc();
    }, 10);
    ctx.font="30px Microsoft JhengHei";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("實話", 150, 350);
    ctx.font="30px Microsoft JhengHei";
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.fillText("謊話", 850, 350);
  </script>
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
