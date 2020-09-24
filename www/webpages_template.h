//---------這裡是主頁面 ("/")----------------------------------
static const char mainPage[] PROGMEM = u8R"(
  這裡可填入網頁內容
)";

//---------這裡是錯誤路徑頁面----------------------------------
static const char errorPage[] PROGMEM= u8R"(
  這裡可填入網頁內容
)";

//---------這裡是設定頁面 ("/setting")------------------------
static const char settingPage[] PROGMEM= u8R"(
  這裡可填入網頁內容
)";

//---------勿刪 (讓網頁資料儲存在程式區以節省記憶體)------------
#define WEBPAGE_IN_PROGMEM