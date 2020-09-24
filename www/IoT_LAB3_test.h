//----------------------這裡是主頁面--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
    <title>吹氣燈</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body>
  <p>LED 開關狀態:</p>
  <p id='SW'>?</p>
    <script type='text/javascript'>
        function request(){
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
              if(this.responseText == 'on')
                document.getElementById('SW').innerHTML = '開啟';
              else
                document.getElementById('SW').innerHTML = '關閉';
            }
          };
          xhttp.open('GET', '/state', true);
          xhttp.send();
        }
        setInterval(request, 1000);

    </script>
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