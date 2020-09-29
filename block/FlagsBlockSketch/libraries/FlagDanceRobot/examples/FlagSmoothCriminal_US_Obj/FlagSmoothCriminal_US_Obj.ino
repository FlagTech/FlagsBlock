//----------------------------------------------------------------
//-- OTTO Dance smooth criminal by Michael Jackson
//-- Released under a GPL licencse
//-- Originally made for Zowi project remake for Otto
//-- Authors:  Javier Isabel:  javier.isabel@bq.com
//--           Juan Gonzalez (obijuan): juan.gonzalez@bq.com
// Nicu FLORICA (niq_ro) add ultrasonic sensor for activate dance
// and deactivate servo in standby (ver1b)
// http://www.arduinotehniq.com & nicu.florica@gmail.com
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
  t = flagDanceRobot.setBPM(121);
  delay(500);
}

void loop()
{
  dance();
  delay(500); 
  flagDanceRobot.setPosition(90, 90, 90, 90);
  t = flagDanceRobot.setBPM(121); // 設定每秒 121 拍並取得每拍時間長度 (ms)
  delay(3000);
}

void dance(){
  flagDanceRobot.primera_parte();
  flagDanceRobot.segunda_parte();
  flagDanceRobot.moonWalkLeft(4, t * 2);
  flagDanceRobot.moonWalkRight(4, t * 2);
  flagDanceRobot.moonWalkLeft(4, t * 2);
  flagDanceRobot.moonWalkRight(4, t * 2);
  flagDanceRobot.primera_parte(); 
  flagDanceRobot.crusaito(1, t * 8);
  flagDanceRobot.crusaito(1, t * 7);

  for (int i = 0;i < 16;i++){
    flagDanceRobot.flapping(1, t / 4);
    delay(3 * t / 4);
  }

  flagDanceRobot.moonWalkRight(4, t * 2);
  flagDanceRobot.moonWalkLeft(4, t * 2);
  flagDanceRobot.moonWalkRight(4, t * 2);
  flagDanceRobot.moonWalkLeft(4, t * 2);

  flagDanceRobot.drunk(t * 4);
  flagDanceRobot.drunk(t * 4);
  flagDanceRobot.drunk(t * 4);
  flagDanceRobot.drunk(t * 4);
  flagDanceRobot.kickLeft(t);
  flagDanceRobot.kickRight(t);
  flagDanceRobot.drunk(t * 8);
  flagDanceRobot.drunk(t * 4);
  flagDanceRobot.drunk(t / 2);
  delay(t * 4); 

  flagDanceRobot.drunk(t / 2);

  delay(t * 4); 
  flagDanceRobot.walk(2, t * 2);
  flagDanceRobot.backyard(2, t * 2);
  flagDanceRobot.goingUp(t * 2);    // 每 2 拍漸次踮腳尖向上
  flagDanceRobot.goingUp(t * 1);    // 每 1 拍漸次踮腳尖向上
  flagDanceRobot.noGravity(t * 2);
  flagDanceRobot.crusaito(1, t * 2);
  flagDanceRobot.crusaito(1, t * 8);
  flagDanceRobot.crusaito(1, t * 2);
  flagDanceRobot.crusaito(1, t * 8);
  flagDanceRobot.crusaito(1, t * 2);
  flagDanceRobot.crusaito(1, t * 3);

  delay(t);
  flagDanceRobot.primera_parte();
  for (int i = 0;i < 32;i++){
    flagDanceRobot.flapping(1, t / 2);
    delay(t / 2);
  }
  
  flagDanceRobot.setPosition(90, 90, 90, 90);
}

