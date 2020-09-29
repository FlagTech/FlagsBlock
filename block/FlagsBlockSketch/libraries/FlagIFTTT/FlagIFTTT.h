#ifndef FLAG_IFTTT
#define FLAG_IFTTT

#if ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

extern int fireIFTTTEvent(String name, String key, String val1, String val2, String val3);

#endif