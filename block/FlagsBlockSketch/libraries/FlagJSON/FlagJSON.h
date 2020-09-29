#ifndef FLAG_JSON
#define FLAG_JSON
#include <ArduinoJson.h>

#if ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

class FlagJSON {
	public:
		FlagJSON();
    String getJSONDataAsString(JsonVariant &root, String path);
};

extern FlagJSON flagJSON;
#endif