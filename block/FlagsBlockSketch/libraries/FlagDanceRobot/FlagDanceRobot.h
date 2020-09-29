#ifndef FLAG_DANCE_ROBOT
#define FLAG_DANCE_ROBOT

#if ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

#include <Oscillator.h>
#define INTERVALTIME 10.0

class FlagDanceRobot
{
private:
  Oscillator servo[4];
  unsigned long final_time;
  unsigned long interval_time;
  int oneTime;
  int iteration;
  float increment[4];
  int oldPosition[4] = {90, 90, 90, 90};
  int t = 495; // 每拍幾毫秒？

public:
  FlagDanceRobot();
  void attach(byte footR, byte footL, byte legR, byte legL);
  void attach();
  int setBPM(int BPM);
  int getMSPerBeat() {return t;};
  void setTrim(int footR, int footL, int legR, int legL);
  void getTrim(int &footR, int &footL, int &legR, int &legL);
  int getRFTrim();
  int getLFTrim();
  int getRLTrim();
  int getLLTrim();
    void getSavedTrim(int* trims);
  void setPosition(byte footR, byte footL, byte legR, byte legL);
  void detach();
  void oscillate(int A[], int O[], int T, double phase_diff[]);
  void moveServos(int time, int newPosition[]);
  void saveTrim();
  void restoreTrim();

  //----舞步-----
  void primera_parte();
  void lateral_fuerte(boolean side, int tempo);
  void crusaito(int steps, int T);
  void segunda_parte();
  void moonWalkRight(int steps, int T);
  void moonWalkLeft(int steps, int T);
  void flapping(int steps, int T);
  void drunk (int tempo);
  void kickLeft(int tempo);
  void kickRight(int tempo);
  void walk(int steps, int T);
  void backyard(int steps, int T);
  void goingUp(int tempo);
  void noGravity(int tempo);
  void pasitos(int steps, int tempo);
  void patada (int tempo);
  void twist(int steps, int tempo);
  void upDown(int steps, int tempo);
  void saludo(int steps, int tempo);
  void swing(int steps, int T);
  void reverencia1 (int steps, int tempo);
  void reverencia2 (int steps, int tempo);
  void run(int steps, int T);
};

extern FlagDanceRobot flagDanceRobot;

#endif