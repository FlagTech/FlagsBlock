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
    <a href='call?buzzer=ON'>呼叫蜂鳴器</a> 
    <br><br>
    <a href='call?buzzer=OFF'>關閉蜂鳴器</a> 
    <p>你好，這是王小明遺失的物品，撿到請聯絡電話:0911123456，謝謝</p>
  </body>
  </html>
)";

//----------------------這裡是錯誤路徑頁面--------------------
static const char errorPage[] PROGMEM= u8R"(

)";
  
static const char settingPage[] PROGMEM= u8R"(

)";

//---------勿刪 (讓網頁資料儲存在程式區以節省記憶體)------------
#define WEBPAGE_IN_PROGMEM

