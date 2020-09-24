//----------------------這裡是主頁面--------------------
static const char mainPage[] PROGMEM = u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>防遺失鑰匙圈</title>
    <style type='text/css'>
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      body {
          background-color: #b3ffe0;
      }
      .switch input {display:none;}

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
      }

      .slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }



      input:checked + .slider {
        background-color: #ff99bb;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #ff99bb;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }
      div{
       text-align: center;
       padding: 35%;
      }
      p{
        text-align: center;
      }
  </style>
  <script type='text/javascript'>
  var counter = 0;
  var state = 'ON';
  function myFun(){
      counter++;
      if(counter % 2 != 0)
      {
        state = 'ON';
      }
      else
      {
        state = 'OFF';
      }
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
              
          }
      };
      xhttp.open('GET', '/call?buzzer=' + state, true);
      xhttp.send();
  }

  </script>

  </head>
  <body>
        <div>
          <label class='switch'>
          <input type='checkbox' onclick='myFun()'>
          <span class='slider round'></span>
          </label>
          <p id='test'>呼叫開關</p>

        </div>
        <p>你好，這是王陽明遺失的物品</p>
        <p>撿到請聯絡電話:0911123456，謝謝</p> 
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