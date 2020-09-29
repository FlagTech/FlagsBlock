#include <Adafruit_NeoPixel.h>
#include <FlagLedStripAsync.h>

// 建立燈條 (燈環) 物件, 參數為：共 15 顆 LED, 資料線接在 Pin6
FlagLedStripAsync strip = FlagLedStripAsync(15, 6);

const byte buttonPin = 3;       // 按鈕接在 Pin 3
const byte numEffects = 11;     // 特效種類數
int buttonState = LOW;          // 儲存按鈕的狀態
int n = 0;                      // 儲存目前執行哪一個特效

void setup() {
  pinMode(buttonPin, INPUT);  // 將按鈕腳位設為數位輸入腳位
  strip.begin();              // 將燈條物件初始化, 並設為全暗
  strip.setBrightness(32);    // 將整體亮度降為 1/8
  strip.show();               // 讓燈條顯示出所設定的狀態
}

void loop() {
  byte rr=255, gg=255, bb=255;  // 設定特效要使用的顏色
  if(buttonState == LOW && digitalRead(buttonPin) == HIGH) { // 按下按鈕
    strip.stopEffect();        // 停止特效
    n = (n + 1) % numEffects;   // 更換特效
  }
  buttonState = digitalRead(buttonPin); // 記錄目前按鈕狀態
  
  // 依照 n 值來判斷應該執行哪一個特效
  switch (n) {
    case 0: 
      strip.rgbLoop(5);  // 漸變循環
      break;
    case 1: 
      strip.theaterChase(rr, gg, bb, 50);  // 劇院追逐
      break;
    case 2: 
      strip.theaterChaseRainbow(50);  // 劇院追逐-彩虹色
      break;
    case 3: 
      strip.rainbow(20);  // 彩虹
      break;
    case 4: 
      strip.rainbowCycle(20);  // 彩虹圓圈
      break;
    case 5: 
      strip.strobe(rr, gg, bb, 10, 50, 1000);  // 閃光
      break;
    case 6: 
      strip.runningLights(rr, gg, bb, 80);  // 流光
      break;
    case 7: 
      strip.cylonBounce(rr, gg, bb, 2, 70, 70);  // 賽隆人
      break;
    case 8: 
      strip.sparkle(rr, gg, bb, 0);  // 發泡
      break;
    case 9:
      strip.meteorLamp(255,255,255,8,35); // 流星燈
      break;
    case 10:
      strip.breathing(0,255,0);
      break;
  }
}

