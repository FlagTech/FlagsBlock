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
  int trims[4];

  Serial.begin(9600);

  flagDanceRobot.attach();
  flagDanceRobot.setPosition(90, 90, 90, 90);
  
  Serial.print("Current saved trim values: ");
  flagDanceRobot.getSavedTrim(trims);
  for(int i = 0;i < 4;i++) {
    Serial.print(trims[i]);
    Serial.print(" ");
  }
  Serial.println("");
  Serial.println("Using keyboard to adjust angles of R/L foot and R/L legs");
  Serial.println("q/z:R foot  w/x:L foot  e/c:R leg  r/v:L leg  s:Save");
}

char cmd;
int trim[] = {0, 0, 0, 0};
void loop()
{
  if(Serial.available() > 0) {
    cmd = Serial.read();
    switch(cmd) {
      case 'q':
      case 'Q':
        trim[0]++;
        break;
      case 'z':
      case 'Z':
        trim[0]--;
        break;
      case 'w':
      case 'W':
        trim[1]--;
        break;
      case 'x':
      case 'X':
        trim[1]++;
        break;
      case 'e':
      case 'E':
        trim[2]++;
        break;
      case 'c':
      case 'C':
        trim[2]--;
        break;
      case 'r':
      case 'R':
        trim[3]--;
        break;
      case 'v':
      case 'V':
        trim[3]++;
        break;
      case 's':
      case 'S':
        flagDanceRobot.setTrim(
          trim[0],
          trim[1],
          trim[2],
          trim[3]
        );
        flagDanceRobot.saveTrim();
        Serial.println("Trim saved.");
        while(true) {delay(0);}
        break;
      default:
        return;
    }
    flagDanceRobot.setPosition(
      90 + trim[0],
      90 + trim[1],
      90 + trim[2],
      90 + trim[3]
    );
    Serial.print("R foot:");
    Serial.print(trim[0]);
    Serial.print("  L foot:");
    Serial.print(trim[1]);
    Serial.print("  R leg:");
    Serial.print(trim[2]);
    Serial.print("  L leg:");
    Serial.println(trim[3]);
  }
}