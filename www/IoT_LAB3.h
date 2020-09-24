//----------------------這裡是主頁面--------------------
static const char mainPage[] PROGMEM = u8R"(
<!DOCTYPE html>
<html>
<head>
  <title>吹氣燈</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style type='text/css'>
    html, body { 

        color: rgba(255,238,188,0.8); 
        margin: 0; 
        padding: 0; 
        width: 100%; 
        background: rgba(10,10,30,1); 
        text-align: center;
  
    } 
   
    #lampadario {

        text-align: center;

    } 
   /*隱藏toggle*/
    input { 
        position: absolute; 
        width: 90px; 
        height: 70px; 
        top: 150px; 
        margin-left:-45px; 
        opacity: 0; 
        z-index: 1; 
        cursor: pointer; 
    } 
     

 
     
    label { 
        /*position: block;*/
        display: block;
        margin: 50% auto;
        width: 151px; 
        height: 151px; 
        /*top: 164px;*/ 

   /*     margin-left: -64px; */
        -webkit-border-radius: 100%; 
           -moz-border-radius: 100%; 
            -ms-border-radius: 100%; 
             -o-border-radius: 100%; 
                border-radius: 100%; 

    }            


    input[value='off']:checked ~ 
    label { 
        background: rgba(255,255,255,0.03); 
        -webkit-box-shadow: inset 0px 1px 5px rgba(255,255,255,0.1), inset 0px 2px 20px rgba(255,255,255,0.07); 
           -moz-box-shadow: inset 0px 1px 5px rgba(255,255,255,0.1), inset 0px 2px 20px rgba(255,255,255,0.07); 
            -ms-box-shadow: inset 0px 1px 5px rgba(255,255,255,0.1), inset 0px 2px 20px rgba(255,255,255,0.07); 
             -o-box-shadow: inset 0px 1px 5px rgba(255,255,255,0.1), inset 0px 2px 20px rgba(255,255,255,0.07); 
                box-shadow: inset 0px 1px 5px rgba(255,255,255,0.1), inset 0px 2px 20px rgba(255,255,255,0.07); 
    } 
    input[value='on']:checked ~ 
    label { 
        background: rgba(255,238,188,1); 
        -webkit-box-shadow: 0px 0px 10px rgba(255,238,188,0.8), 0px 0px 30px rgba(255,238,188,0.6), 0px 0px 50px rgba(255,238,188,0.6), 0px 0px 70px rgba(255,238,188,0.4); 
           -moz-box-shadow: 0px 0px 10px rgba(255,238,188,0.8), 0px 0px 30px rgba(255,238,188,0.6), 0px 0px 50px rgba(255,238,188,0.6), 0px 0px 70px rgba(255,238,188,0.4); 
            -ms-box-shadow: 0px 0px 10px rgba(255,238,188,0.8), 0px 0px 30px rgba(255,238,188,0.6), 0px 0px 50px rgba(255,238,188,0.6), 0px 0px 70px rgba(255,238,188,0.4); 
             -o-box-shadow: 0px 0px 10px rgba(255,238,188,0.8), 0px 0px 30px rgba(255,238,188,0.6), 0px 0px 50px rgba(255,238,188,0.6), 0px 0px 70px rgba(255,238,188,0.4); 
  
    }

</style>


<script type='text/javascript'>

  function myFun(){

    document.getElementById('ip_1').checked = true;
    
  }

  function myFun_2(){

    document.getElementById('ip_2').checked = true;
    
  }


    var state = 0;
    function xhttpEvt(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          state = this.responseText;
          if(state == 'on')
            document.getElementById('ip_1').checked = true;
          else
            document.getElementById('ip_2').checked = true;
        }
      };
      xhttp.open('GET', '/state', true);
      xhttp.send();
    }


</script>


</head>
<body onload='setInterval(function(){ xhttpEvt(); }, 100)'>
<div id='lampadario'>
  <input id='ip_1' type='radio' name='switch' value='on' />
  <input id='ip_2' type='radio' name='switch' value='off' checked='checked' /> 
  <label for='switch'></label> 
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