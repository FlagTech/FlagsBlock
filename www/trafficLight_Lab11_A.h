 //----------------------這裡是主頁面--------------------
  static const char mainPage[] PROGMEM = u8R"(
  <!DOCTYPE html>
  <html>
  <head >
      <title>Flag's 跑馬燈</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0 user-scalable=none'>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <script>
      var xhttp = new XMLHttpRequest();
      var colo="2";
      var bright="4";

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById('status').innerHTML = xhttp.responseText;
        }
      };

      function testGet(wstr,tstr) {
        document.getElementById('status').innerHTML = '送出中...';
        xhttp.open('GET', 'call?str=' + encodeURIComponent(wstr) + '&'+ 'col='+ colo +'&'+ 'bri='+ bright +'&'+ 'tim=' + tstr, true);
        xhttp.send(); 
      }

      function getColor(va){
        colo=va;
      }
      
      function getBrightness(va){
        bright=va;
      }

      </script>
      
      <style>
      input[type='button']{padding:5px 15px; background:#ccc; border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px; }
    </style>

  </head>
  <body style=background-color:#DDDDDD>
    <div style="width:100vw;height:100vh;background-color:#DDDDDD;">

      <div style="width:90% ;height:265px;background-color:#DDDDDD;">
        <input class="text1" style="font-size:35px;width:95%;margin:0 auto;height:50px;" type='text' id='want_str' value="HELLO WORLD" ><br>
      <form id="col" style="margin-top:10px">
        1. 請選擇顏色<br>
        <input type="radio" name="str_color" value="2" style="margin-top:10px;margin-left:10px" onclick='getColor(this.value)' checked> 綠色<br>
        <input type="radio" name="str_color" value="1" style="margin-top:10px;margin-left:10px" onclick='getColor(this.value)'> 紅色<br>
        <input type="radio" name="str_color" value="3" style="margin-top:10px;margin-left:10px" onclick='getColor(this.value)'> 橘色<br>
      </form>


        <div style="width:300px;height:23px;background-color:#DDDDDD;margin-top:10px;margin-bottom:10px">
          
          2. 請指定以
          <input class="text1" style="font-size:15px;width:38px;margin-left:5px;text-align:center;" type='text' id='want_tim' value="200" >
          毫秒間隔
          <br>
        </div>
      
        <div style="width:300px;height:23px;background-color:#DDDDDD;margin-bottom:10px">
            <form>
              3. 請選擇亮度(0(最暗)~7(最亮))
              <select name="YourLocation" style="margin-left:5px;height:28px" onchange='getBrightness(this.options[this.selectedIndex].value)'>
            　<option value="0" >亮度: 0</option>
            　<option value="1" >亮度: 1</option>
            　<option value="2" >亮度: 2</option>
            　<option value="3" >亮度: 3</option>
            　<option value="4" selected="true" >亮度: 4</option>
            　<option value="5" >亮度: 5</option>
            　<option value="6" >亮度: 6</option>
            　<option value="7" >亮度: 7</option>
            </select>
            </form>
        </div>

      
      <div style="width:140px;height:50px;background-color:#DDDDDD;margin-top:10px">
        <input type='button' value='設定跑馬燈' onclick='testGet(want_str.value,want_tim.value)' style="width:140px;height:50px; ">
    </div>
    
    <div style="width:70px;height:75px;background-color:#DDDDDD">
        <p Align="center" id='status'>顯示訊息</p> 
      </div>
  </div>
</div>
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