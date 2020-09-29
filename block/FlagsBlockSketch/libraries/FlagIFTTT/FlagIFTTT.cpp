/*
 ESP8266 Hello World urlencode by Steve Nelson
 URLEncoding is used all the time with internet urls. This is how urls handle funny characters
 in a URL. For example a space is: %20

 These functions simplify the process of encoding and decoding the urlencoded format.
  
 It has been tested on an esp12e (NodeMCU development board)
 This example code is in the public domain, use it however you want. 

  Prerequisite Examples:
  https://github.com/zenmanenergy/ESP8266-Arduino-Examples/tree/master/helloworld_serial
*/

#include <FlagURLEncode.h>
#include <ESP8266HTTPClient.h>
#include "FlagIFTTT.h"

HTTPClient __cli;

int fireIFTTTEvent(String name, String key, String val1, String val2, String val3) {
  String url = "http://maker.ifttt.com/trigger/";
  int args = 0;
  int result;

  url += name;
  url += "/with/key/";
  url += key;
  url += "?";

  if(val1.length() > 0) {
    url += "value1=" + urlencode(val1);
    args++;
  }
  if(val2.length() > 0) {
    if(args > 0) url += "&";
    url += "value2=" + urlencode(val2);
    args++;
  }
  if(val3.length() > 0) {
    if(args > 0) url += "&";
    url += "value3=" + urlencode(val3);
  }
  Serial.println(url);
  __cli.begin(url);
  result = __cli.GET();
  __cli.end();
  return result;
}
