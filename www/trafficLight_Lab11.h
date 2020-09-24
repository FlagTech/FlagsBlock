//----------------------這裡是主頁面--------------------
static const char mainPage[] PROGMEM = u8R"(
  <!DOCTYPE html>
  <html>
  <head>
      <title>ESP8266</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>
  <body>
    <a href='light?color=red'>紅燈</a> 
    <br><br>
    <a href='light?color=yellow'>黃燈</a>
    <br><br>
    <a href='light?color=green'>綠燈</a> 
    <p>請選擇燈號</p>
  </body>
  </html>
)";

//----------------------這裡是錯誤路徑頁面--------------------
static const char errorPage[] PROGMEM= u8R"(

)";
//----------------------這裡是設定路徑頁面--------------------  
static const char settingPage[] PROGMEM= u8R"(

)";

//---------勿刪 (讓網頁資料儲存在程式區以節省記憶體)------------
#define WEBPAGE_IN_PROGMEM

