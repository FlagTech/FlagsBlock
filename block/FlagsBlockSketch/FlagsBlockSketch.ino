// Flag's Block 產生的草稿碼

#include <I2Cdev.h>
#include <MPU6050.h>

MPU6050 __flagMPU6050;

// setup() 會先被執行且只會執行一次
void setup() {
  Serial.begin(9600);
  __flagMPU6050.initialize();

}

// loop() 裡面的程式會不斷重複執行
void loop() {
  Serial.print((int(__flagMPU6050.getAccelerationX() * 2.0 / 32.768)));
  Serial.print(String(char(9)));
  Serial.print((int(__flagMPU6050.getAccelerationY() * 2.0 / 32.768)));
  Serial.print(String(char(9)));
  Serial.print((int(__flagMPU6050.getAccelerationZ() * 2.0 / 32.768)));
  Serial.print(String(char(9)));
  Serial.print((int(__flagMPU6050.getRotationX() * 250.0 / 32768)));
  Serial.print(String(char(9)));
  Serial.print((int(__flagMPU6050.getRotationY() * 250.0 / 32768)));
  Serial.print(String(char(9)));
  Serial.println((int(__flagMPU6050.getRotationZ() * 250.0 / 32768)));

}