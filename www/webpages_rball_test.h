//----------------------這裡是主頁面--------------------
static const char mainPage[] PROGMEM = u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>網站測試主頁</title>
  </head>
  <body>
  <h1 align="center"><font size="3">旗標科技 R-Ball 球型機器人</br></br></h1>
  <div align="center"><font size="20">
    <a href='/Race?output=L'>↶左轉彎↶</a> </br></br>
    <a href='/Race?output=S'>●停止●</a> </br></br>
    <a href='/Race?output=R'>↷右轉彎↷</a> </br></br>
  </div>
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
  <h1 align="center">網址錯誤, <a href='/'>請點此跳回主頁</a></h1>
  </body>
  </html>
)";
//----------------------這裡是設定路徑頁面--------------------
static const char settingPage[] PROGMEM= u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>設定頁面</title>
  </head>
  <body>
  <h1 align="center">不用設定, <a href='/'>請點此跳回主頁</a></h1>
  </body>
  </html>
)";
//---------勿刪 (讓網頁資料儲存在程式區以節省記憶體)------------
#define WEBPAGE_IN_PROGMEM
