#ifndef FLAG_TONEPLAYMUSIC
#define FLAG_TONEPLAYMUSIC

#if defined(ARDUINO) && ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

extern void FlagTonePlayMusic(int speakerPin, String notes, int tempo);

#endif