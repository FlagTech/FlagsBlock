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

#include<ESP8266WiFi.h>
#include<ESP8266WifiMulti.h>
#include<ESP8266HTTPClient.h>
#include<FlagIFTTT.h>

ESP8266WiFiMulti wifiMulti;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  wifiMulti.addAP("FLAG-SCHOOL", "12345678");
  wifiMulti.addAP("MEE_MI", "PinkFloyd1969");
  while(wifiMulti.run() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }  

  Serial.println("");
  Serial.println("connected.");
  Serial.println(
    fireIFTTTEvent("too_close", "cDwXIPLoBBRDN_g-swLkJ1",u8"大概是 50 + 80 公分", "", ""));
}

void loop() {
  // put your main code here, to run repeatedly:
  
}




