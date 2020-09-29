#include <Adafruit_NeoPixel.h>
#include <FlagLedStripe.h>

// 建立燈條 (燈環) 物件, 參數為：共 15 顆 LED, 資料線接在 Pin6
FlagLedStripe stripe = FlagLedStripe(15, 6);

const byte buttonPin = 3;       // 按鈕接在 Pin 3

int buttonState = LOW;          // 儲存按鈕的狀態
unsigned long lastTime = 0;     // 儲存中斷觸發的時間
int n = 0;                      // 儲存目前執行哪一個特效

void setup() {
  pinMode(buttonPin, INPUT);  // 將按鈕腳位設為數位輸入腳位

  // 指定 1 號中斷發生 RISING (電位由低變高) 時,
  // 呼叫自訂的函式 myISR
  attachInterrupt(1, myISR, RISING);

  stripe.begin();              // 將燈條物件初始化, 並設為全暗
  stripe.setBrightness(32);    // 將整體亮度降為 1/8
  stripe.show();               // 讓燈條顯示出所設定的狀態
}

void loop() {
  byte rr=255, gg=255, bb=255;  // 設定特效要使用的顏色

  // 依照 n 值來判斷應該執行哪一個特效
  switch (n) {
    case 0: 
      stripe.rgbLoop(5);  // 漸變循環
      break;
    case 1: 
      stripe.theaterChase(stripe.Color(rr, gg, bb), 50);  // 劇院追逐
      break;
    case 2: 
      stripe.theaterChaseRainbow(50);  // 劇院追逐-彩虹色
      break;
    case 3: 
      stripe.rainbow(20);  // 彩虹
      break;
    case 4: 
      stripe.rainbowCycle(20);  // 彩虹圓圈
      break;
    case 5: 
      stripe.strobe(rr, gg, bb, 10, 50, 1000);  // 閃光
      break;
    case 6: 
      stripe.runningLights(rr, gg, bb, 80);  // 流光
      break;
    case 7: 
      stripe.cylonBounce(rr, gg, bb, 2, 70, 70);  // 賽隆人
      break;
    case 8: 
      stripe.sparkle(rr, gg, bb, 0);  // 發泡
      break;
    case 9:
      stripe.meteorLamp(255,255,255,8,35); // 流星燈
      delay(random(300,3000));
      break;
    case 10:
      stripe.breathing(0,255,0);
      break;
    default: 
      stripe.clear();
      stripe.show();  // 關閉 LED
      break;
  }
}

//  自訂的中斷處理函式
void myISR() {
  // 不同的按壓開關硬體, 可能需使用不同的時間間隔來消除彈跳, 
  // 若測試按鈕時發現異常, 請嘗試調整時間間隔
  if (millis() - lastTime > 200) { // 距上次中斷已超過一段時間
    n = (n + 1) % 11;  // 每按一次鈕則 n 值加 1, n 值會在 0~8 之間循環
    stripe.stopEffect();
    lastTime = millis();  // 記錄本次中斷的時間
  } 
}

