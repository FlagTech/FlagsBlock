#include "FlagMotor.h"


FlagMotor::FlagMotor():M1(0x30,_MOTOR_A, 1000), M2(0x30,_MOTOR_B, 1000) {
  ouTimer = millis();
  dirL = dirR = true;
  prevL = prevR = 0;
}

void FlagMotor::move(int movL, int movR)
{
  bool moveDelay = false;

  if (prevL == movL && prevR == movR) {
    if (millis() - ouTimer > 5000){
      M1.setmotor(dirL, (abs(movL)));
      M2.setmotor(dirR, (abs(movR)));       
      ouTimer = millis();
    }
    return;
  }
  dirL = movL >= 0 ? _CW : _CCW;
  dirR = movR >= 0 ? _CW : _CCW;
  if (prevL == 0) {
  } else if (prevL > 0 && movL < 0 || prevL < 0 && movL > 0) {
    M1.setmotor(dirL, 0 );
    moveDelay = true;
  }
  if (prevR == 0) {
  } else if (prevR > 0 && movR < 0 || prevR < 0 && movR > 0) {
    M2.setmotor(dirR, 0 );
    moveDelay = true;
  }
  if (moveDelay) {
    delay(2);
  }
  M1.setmotor( dirL,  (abs(movL)));
  M2.setmotor( dirR, (abs(movR)));  
  ouTimer = millis();
  prevL = movL;
  prevR = movR;
}

void FlagMotor::checkIdle() {
  move(prevL, prevR);
}

FlagMotor flagMotor = FlagMotor();