#ifndef FLAG_URLRNCODE
#define FLAG_URLENCODE

#if ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

extern String urldecode(String str);
extern String urlencode(String str);

#endif