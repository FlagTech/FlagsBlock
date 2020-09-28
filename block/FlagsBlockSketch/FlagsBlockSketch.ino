// Flag's Block 產生的草稿碼

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <I2Cdev.h>
#include <MPU6050.h>

LiquidCrystal_I2C __flagI2CLCD( 0x3F, 2, 1, 0, 4, 5, 6, 7, 3, POSITIVE);
MPU6050 __flagMPU6050;

String __rightPaddingStr(String content, int width) {
  int len = content.length();
  for(int i = 0;i < (width - len);i++)
    content += " ";
  return content;
}


// setup() 會先被執行且只會執行一次
void setup() {
  __flagI2CLCD.begin(16,2);
  __flagMPU6050.initialize();

  Serial.begin(9600);
}

// loop() 裡面的程式會不斷重複執行
void loop() {
  Serial.println((String((int(__flagMPU6050.getAccelerationX() * 2.0 / 32.768))) + String(u8",") + String((int(__flagMPU6050.getAccelerationY() * 2.0 / 32.768))) + String(u8",") + String((int(__flagMPU6050.getAccelerationZ() * 2.0 / 32.768)))));
  __flagI2CLCD.setCursor(0, 0);
  __flagI2CLCD.print(__rightPaddingStr(String((String((int(__flagMPU6050.getAccelerationX() * 2.0 / 32.768))) + String(u8",") + String((int(__flagMPU6050.getAccelerationY() * 2.0 / 32.768))) + String(u8",") + String((int(__flagMPU6050.getAccelerationZ() * 2.0 / 32.768))))), 16));
  delay(300);

}