//----------------------這裡是主頁面--------------------
static const char mainPage[] PROGMEM = u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <script>
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('status').innerHTML = xhttp.responseText;
      }
    };

    function testGet(cmd) {
      document.getElementById('status').innerHTML = '送出中...';
      xhttp.open('GET', 'dance?type=' + cmd, true);
      xhttp.send();
    }
    </script>
    <title>網站測試主頁</title>
  </head>
  <body>
    <h1>請用 <input type='button' value='跳舞' onclick='testGet("B")'> 或 <input type='button' value='停止' onclick='testGet("0")'> 控制機器人</h1>
    <p id='status'>顯示訊息</p>
  </body>
  </html>
)";

//----------------------這裡是錯誤路徑頁面--------------------
static const char errorPage[] PROGMEM= u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'> 
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>網站路徑錯誤</title>
  </head>
  <body>
  <h1>網址錯誤, 請用 <a href='/dance?type=B'>跳舞</a> 或 <a href='/dance?type=0'>停止</a> 控制機器人</h1>
  </body>
  </html>
)";
  
static const char settingPage[] PROGMEM= u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>設定頁面</title>
  </head>
  <body>
  <h1>不用設定, 請用 <a href='/dance?type=B'>跳舞</a> 或 <a href='/dance?type=0'>停止</a> 控制機器人</h1>
  </body>
  </html>
)";

//---------勿刪 (讓網頁資料儲存在程式區以節省記憶體)------------
#define WEBPAGE_IN_PROGMEM