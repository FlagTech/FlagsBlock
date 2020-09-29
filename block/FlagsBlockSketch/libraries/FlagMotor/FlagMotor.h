#ifndef FLAG_MOTOR
#define FLAG_MOTOR
#include "WEMOS_Motor.h"

#if ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

class FlagMotor {
	private:
		Motor M1;//Motor A
		Motor M2;//Motor B
		unsigned long ouTimer;
		int prevL;
		int prevR;
		boolean dirL;
		boolean dirR;

	public:
		FlagMotor();
		void move(int movL, int movR);
		void checkIdle();
};

extern FlagMotor flagMotor;
#endif