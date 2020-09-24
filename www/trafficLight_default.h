//----------------------這裡是主頁面-------------------- 
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>

<head>
    <title>Flag's 療癒系迷你紅綠燈</title>

    <meta name='viewport' content='width=device-width, initial-scale=1.0 user-scalable=none'>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script>
        var xhttp = new XMLHttpRequest();
        var sec = "1"
        var semi=0
        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('status').innerHTML = xhttp.responseText;
            }
        };

        function changetime(rcmd, ycmd, gcmd){
            if(isNaN(rcmd) | isNaN(ycmd) | isNaN(gcmd)){
                alert("欄位中請輸入數字");
            }
            else{
            document.getElementById('status').innerHTML = '送出中...';
            xhttp.open('GET', 'settime?rdtime=' + rcmd + '&' + 'ydtime=' + ycmd + '&' + 'gdtime=' + gcmd + '&' + 'secmin=' + sec, true);
            xhttp.send();
            }

        }

        function getColor(va) {
            sec = va;
        }

        function switchMode(rcmd, ycmd, gcmd){
            if(semi==0){
                sec = "60";
                semi=1;
                document.getElementById('time_sec').style.opacity = '0.3';
                document.getElementById('time_min').style.opacity = '1';
                if(isNaN(rcmd) | isNaN(ycmd) | isNaN(gcmd)){
                    alert("欄位中請輸入數字");
                    xhttp.open('GET', 'settime?&LED=LON', true);
                    xhttp.send();
                }
                else{
                document.getElementById('status').innerHTML = '送出中...';
                xhttp.open('GET', 'settime?rdtime=' + rcmd + '&' + 'ydtime=' + ycmd + '&' + 'gdtime=' + gcmd + '&' + 'secmin=' + sec+'&LED=LON', true);
                xhttp.send();
            }
            }
            else if(semi==1){
                sec = "1";
                semi=0; 
                document.getElementById('time_sec').style.opacity = '1';
                document.getElementById('time_min').style.opacity = '0.3';
                if(isNaN(rcmd) | isNaN(ycmd) | isNaN(gcmd)){
                    alert("欄位中請輸入數字");
                    xhttp.open('GET', 'settime?&LED=LOFF', true);
                    xhttp.send();
                }
                else{
                document.getElementById('status').innerHTML = '送出中...';
                xhttp.open('GET', 'settime?rdtime=' + rcmd + '&' + 'ydtime=' + ycmd + '&' + 'gdtime=' + gcmd + '&' + 'secmin=' + sec+'&LED=LOFF', true);
                xhttp.send();
            }   
            }
 
        }


    </script>
    <style>
        input[type='button'] {
            padding: 5px 15px;
            background: #ccc;
            border: 0 none;
            cursor: pointer;
            -webkit-border-radius: 5px;
            border-radius: 5px;
        }
    </style>
    <style type='text/css'>
        body {
            font-family: Microsoft JhengHei;
        }
        
        h1 {
            font-size: 22px;
            color: #834633;
            text-align: center;
            margin-top: 10px;
            margin-bottom: 5;
        }
        
        img.phone {
            opacity: 1;
            filter: alpha(opacity=100);
            /* For IE8 and earlier */
        }
        
        img.flashlight {
            opacity: 0.3;
            filter: alpha(opacity=30);
            /* For IE8 and earlier */
        }

        
        div.center {
            margin: auto;
            width: 80%;
            /*border-top: 2px solid gray;
          border-bottom: 2px solid gray;
          */
            /*padding: 5px;*/
            /*text-align: center;*/
        }
        
        div.setArea {
            padding: 5px;
            border-radius: 20px;
            text-align: center;
            background-color: white;
        }
        
        div.bannerArea {
            padding: 0px;
            text-align: center;
        }
        
        .switch {                 /*整個switch的css*/
            position: relative;
            vertical-align: 50%;
            display: inline-block;
            width: 60px;
            height: 34px;
            margin: 0 10px;
        }
        
        .switch input {
            display: none;
        }
        
        .slider {                     /*切換成左邊的顏色*/
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #484848;
            -webkit-transition: .4s;
            transition: .4s;
        }
        

        .slider:before {             /* 中間的圓圈 */
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }
        
        input:checked+.slider {
            background-color: #2196F3;  /*切換成右邊的顏色*/
        }
        
        input:focus+.slider {
            box-shadow: 0 0 1px #2196F3;
        }
        
        input:checked+.slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
        /* Rounded sliders */
        
        .slider.round {           /*switch 方形到圓形*/
            border-radius: 34px;
        }
        
        .slider.round:before {    /* 中間的圓圈 0~50=方形到圓形 */
            border-radius: 50%;
        }

        /*---------------------------------*/

        .traffic_light{
            background: #DDB44E;
            width: 217px;
            height: 75px;
            margin: 0 auto;
            display: flex;

        }
        .red_light{
            width: 50px;
            height: 50px;
            background: #EA512F;
            border-radius: 50%;
            margin: 11px;
        }

        .yellow_light{
            width: 50px;
            height: 50px;
            background: #FFF33A;
            border-radius: 50%;
            margin: 11px;
        }

        .green_light{
            width: 50px;
            height: 50px;
            background: #4BB355;
            border-radius: 50%;
            margin: 11px;
        }

        .time_input{
            width: 217px;
            display: flex;
            margin: 0 auto;
            justify-content: center;
            margin-top: 10px; 
        }

        .traffic_input{
            font-size:35px;
            width:4rem;
            margin:3px;
            text-align:center;

        }

    @media screen and (max-width:330px){
            .traffic_input{
            font-size:30px;
            width:35px;
            /*margin:10px;*/
            text-align:center;
        }
            
        }
        .switch_box{
            display: flex;
            justify-content: center;
            margin: 10px auto;
        }

        .button_set{
            width: 140px;
            height: 50px;
            background:#DDDDDD; 
            margin: 0  auto;
        }

        .time_txt{
            margin: 5px;
        }

         #time_sec {
        opacity: 1;
        filter: alpha(opacity=100);
        /* For IE8 and earlier */
        }

        #time_min {
        opacity: 0.4;
        filter: alpha(opacity=40);
        /* For IE8 and earlier */
        }
    </style>
</head>

<body style=background-color:#DDDDDD>
    <div class="traffic_light">
        <div class="red_light"></div>
        <div class="yellow_light"></div>
        <div class="green_light"></div>
    </div>
    <div class="time_input">
        <input class="traffic_input" type='text' maxlength='2' id='trainraw_r' value="4"  onchange='changetime(trainraw_r.value,trainraw_y.value,trainraw_g.value)'>
        <input class="traffic_input" type='text' maxlength='2' id='trainraw_y' value="2"  onchange='changetime(trainraw_r.value,trainraw_y.value,trainraw_g.value)'>
        <input class="traffic_input" type='text' maxlength='2' id='trainraw_g' value="20" onchange='changetime(trainraw_r.value,trainraw_y.value,trainraw_g.value)'>
    </div>

    <div class="center">

        <div class="switch_box">
    
                    <div class="time_txt" id="time_sec">秒數</div>
              
                    <label class="switch">
                        <input type="checkbox" id='carModeSwitch' onchange='switchMode(trainraw_r.value,trainraw_y.value,trainraw_g.value)'>
                        <span class="slider round"></span>
                </label>
              
                    <div class="time_txt" id="time_min">分鐘</div>
         

        </div>
        <!--
        <div class="button_set">
            <input type='button' value='設定時間' onclick='testGet(trainraw_r.value,trainraw_y.value,trainraw_g.value)' style="width:140px;height:50px;" Align="center">

        </div>
-->
        <div class="message_show">
            <p Align="center" id='status'>上面欄位可以填入紅、黃、綠燈的倒數時間, 也可以選擇時間單位</p>
        </div>
        
    </div>

 
</body>

</html>
)"; //----------------------這裡是錯誤路徑頁面-------------------- 
static const char errorPage[] PROGMEM= u8R"( )";

static const char settingPage[] PROGMEM= u8R"( )"; 

//---------勿刪 (讓網頁資料儲存在程式區以節省記憶體)------------ 
#define WEBPAGE_IN_PROGMEM