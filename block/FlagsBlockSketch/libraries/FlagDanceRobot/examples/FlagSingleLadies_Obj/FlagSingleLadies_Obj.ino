//----------------------------------------------------------------
//-- OTTO Dance single ladies by Beyonce
//-- Released under a GPL licencse
//-- Originally made for MiniZowi project remake for Otto
//-- Author: brico3d.blogspot.com
//-----------------------------------------------------------------

#include <FlagDanceRobot.h>

//-- 預設的伺服馬達接法
/*
         --------------- 
        |     O   O     |
        |---------------|
右腳 5==> |               | <== 左腳 4
         --------------- 
            ||     ||
右腳掌 7==>   -----   ------  <== 左腳掌 6
         |-----   ------|
*/

int t;

void setup()
{
  flagDanceRobot.attach();
  flagDanceRobot.restoreTrim();
  // 我自己裝歪了, 所以要調回來
  // flagDanceRobot.setTrim(0, 0, 0, 15);
  // -------
  
  flagDanceRobot.setPosition(90, 90, 90, 90);
  t = flagDanceRobot.setBPM(97);
  delay(500);
}

void loop() {
  flagDanceRobot.pasitos(8, t * 2);
  flagDanceRobot.crusaito(1, t);
  flagDanceRobot.patada(t);
  delay(t);
  flagDanceRobot.twist(2, t);
  flagDanceRobot.twist(3, t / 2);
  flagDanceRobot.upDown(1, t * 2);
  flagDanceRobot.patada(t * 2);
  flagDanceRobot.drunk(t * 2);
  flagDanceRobot.flapping(1, t * 2);
  flagDanceRobot.walk(2, t);
  flagDanceRobot.walk(1, t * 2);
  flagDanceRobot.backyard(2, t);
  flagDanceRobot.patada(t * 2);
  flagDanceRobot.flapping(1, t * 2);
  flagDanceRobot.patada(t * 2);
  flagDanceRobot.twist(8, t / 2);
  flagDanceRobot.moonWalkLeft(2, t);
  flagDanceRobot.crusaito(1, t * 2);
  
  for(int i = 0; i < 2 ;i++){
    flagDanceRobot.lateral_fuerte(0, t);
    flagDanceRobot.lateral_fuerte(1, t);
    flagDanceRobot.upDown(1, t * 2);
  }
  
  flagDanceRobot.saludo(1, t * 2);
  flagDanceRobot.saludo(1, t);
  delay(t);
  flagDanceRobot.swing(3, t);
  flagDanceRobot.setPosition(90, 90, 90, 90);
  delay(t);
  
  flagDanceRobot.lateral_fuerte(0, t);
  flagDanceRobot.lateral_fuerte(1, t);
  flagDanceRobot.lateral_fuerte(0, t / 2);
  flagDanceRobot.lateral_fuerte(1, t / 2);
  flagDanceRobot.lateral_fuerte(0, t / 2);
  delay(t/2);
  flagDanceRobot.lateral_fuerte(0, t);
  flagDanceRobot.lateral_fuerte(1, t);
  flagDanceRobot.lateral_fuerte(0, t / 2);
  flagDanceRobot.lateral_fuerte(1, t / 2);
  delay(t);
  
  flagDanceRobot.pasitos(1, t * 2);
  flagDanceRobot.pasitos(1, t);
  delay(t / 2);
  flagDanceRobot.pasitos(1, t * 2);
  flagDanceRobot.pasitos(1, t);
  delay(t / 2);
     
  flagDanceRobot.crusaito(2, t);
  flagDanceRobot.crusaito(1, t * 2);
  flagDanceRobot.crusaito(2, t);
  flagDanceRobot.crusaito(1, t * 2);
  flagDanceRobot.crusaito(2, t);
  flagDanceRobot.crusaito(1, t * 2);
  
  flagDanceRobot.upDown(2, t);
  flagDanceRobot.crusaito(1, t * 2);
  flagDanceRobot.setPosition(90, 90, 90, 90);
  delay(t / 2);
  flagDanceRobot.pasitos(2, t * 2);
  flagDanceRobot.pasitos(2, t);
  flagDanceRobot.flapping(1, t * 2);
  flagDanceRobot.upDown(2, t);
  flagDanceRobot.upDown(1,t * 2);
  
  for (int i = 0; i < 4; i++){
    flagDanceRobot.pasitos(1, t);
    delay(t);
  }
  flagDanceRobot.reverencia1(1,t*4);
  flagDanceRobot.reverencia2(1,t*4);
  flagDanceRobot.upDown(1,t);
  flagDanceRobot.run(2,t/2);
  flagDanceRobot.patada(t*2);

  flagDanceRobot.lateral_fuerte(0,t);
  flagDanceRobot.lateral_fuerte(1,t);
  flagDanceRobot.upDown(2,t);
  flagDanceRobot.lateral_fuerte(0,t);
  flagDanceRobot.lateral_fuerte(1,t);
  flagDanceRobot.upDown(2,t);
  flagDanceRobot.pasitos(4,t);
  flagDanceRobot.lateral_fuerte(0,t);
  flagDanceRobot.lateral_fuerte(1,t);
  flagDanceRobot.upDown(2,t);
  
  flagDanceRobot.patada(t*2);
  flagDanceRobot.pasitos(2,t);
  flagDanceRobot.patada(t*2);
  flagDanceRobot.pasitos(2,t);
  flagDanceRobot.swing(2,t*2);
  flagDanceRobot.pasitos(4,t);
  
  for (int i=0; i<4; i++){
    flagDanceRobot.lateral_fuerte(0, t);
    flagDanceRobot.lateral_fuerte(1, t);
    flagDanceRobot.lateral_fuerte(0, t / 2);
    flagDanceRobot.lateral_fuerte(1, t / 2);
    flagDanceRobot.lateral_fuerte(0, t / 2);
  delay(t / 2);
  }
  
  flagDanceRobot.pasitos(6, t);
  delay(t);
  flagDanceRobot.pasitos(1, t);
  delay(t/2);
  flagDanceRobot.pasitos(3, t);
  delay(t/2);
  flagDanceRobot.swing(4, t);
  
  flagDanceRobot.twist(2, t / 2);
  delay(t/2);
  flagDanceRobot.twist(2, t / 2);
  delay(t/2);
  
  flagDanceRobot.drunk(t * 2);
  flagDanceRobot.drunk(t / 2);
  flagDanceRobot.drunk(t * 2);
  delay(t / 2);
  flagDanceRobot.walk(1, t);
  flagDanceRobot.backyard(1, t);
  
  flagDanceRobot.setPosition(110, -1, -1, -1);
  flagDanceRobot.setPosition(-1, 130, -1, -1);
  delay(t);
  
  flagDanceRobot.crusaito(3, t);
  flagDanceRobot.crusaito(1, 2 * t);
  flagDanceRobot.upDown(1, t * 2);
  flagDanceRobot.upDown(2, t / 2);
  
  flagDanceRobot.kickLeft(t / 2);
  flagDanceRobot.kickRight(t / 2);
  flagDanceRobot.moonWalkLeft(1, t * 2);
  flagDanceRobot.moonWalkLeft(2, t);
  flagDanceRobot.moonWalkRight(1, t * 2);
  flagDanceRobot.moonWalkRight(2, t);
  
  flagDanceRobot.walk(4, t);
  flagDanceRobot.backyard(4, t);
  
  flagDanceRobot.lateral_fuerte(0, t);
  flagDanceRobot.lateral_fuerte(0, t);
  flagDanceRobot.lateral_fuerte(1, t);
  flagDanceRobot.lateral_fuerte(1, t);
  flagDanceRobot.walk(2, t);
  flagDanceRobot.backyard(2, t);
  
  flagDanceRobot.pasitos(6, t * 2);
  flagDanceRobot.swing(1, t);
  flagDanceRobot.upDown(1, t);
  delay(t);
  flagDanceRobot.upDown(6, t);
  delay(t);
  
  for (int i = 0;i < 4;i++){
    flagDanceRobot.lateral_fuerte(0, t);
    flagDanceRobot.lateral_fuerte(1, t);
  }
  
  delay(t);
  for (int i = 0;i < 7;i++){
    flagDanceRobot.pasitos(2, t);
    flagDanceRobot.swing(2, t);
  }
  
  flagDanceRobot.pasitos(1, t);
  flagDanceRobot.crusaito(1, t * 2);
  flagDanceRobot.upDown(1, t);

  flagDanceRobot.setPosition(90, 90, 90, 90);

  delay(2000);
}