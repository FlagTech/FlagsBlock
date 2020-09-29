#include <FlagTempHumi.h>

void setup() {
  // put your setup code here, to run once:
  Serial.begin(19200);
  FlagTH.begin(A0,A1);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.print("Temp:");
  Serial.print(FlagTH.readTemperature());
  Serial.print("\tHumi:");
  Serial.println(FlagTH.readHumidity());
  delay(3000);
}
