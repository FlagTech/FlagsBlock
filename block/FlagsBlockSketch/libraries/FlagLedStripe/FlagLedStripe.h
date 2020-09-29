#ifndef FLAG_LED_STRIPE
#define FLAG_LED_STRIPE
#if ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

class FlagLedStripe:public Adafruit_NeoPixel {
  private:
    bool _stopped = true;

    // 有關彩虹的特效中, 產生漸變顏色值的函式
    unsigned long Wheel(byte WheelPos) {
      WheelPos = 255 - WheelPos;
      if (WheelPos < 85) {
        return Color(255 - WheelPos * 3, 0, WheelPos * 3);
      }
      if (WheelPos < 170) {
        WheelPos -= 85;
        return Color(0, WheelPos * 3, 255 - WheelPos * 3);
      }
      WheelPos -= 170;
      return Color(WheelPos * 3, 255 - WheelPos * 3, 0);
    }

    // 流星燈特效顯示目前位置的輔助函式
    void meteor(int r, int g, int b, int pos, int len) {
      int n     = 255 / ((1+len)*len/2);      // 算出梯形的 n
      int bright= 255 % ((1+len)*len/2);      // 算出餘數做為初始亮度
      int cnt = 1;                            // 計數 (由第 1*n 開始計算增量)
      clear();                                // 先清為全暗
      for (int i = pos; i < pos+len; i++) {   // 由最暗到最亮
        bright += cnt*n;                      // 計算新亮度 (= 原亮度+增量)
        cnt++;                                // 將計數加 1
        if(i >= 0 && i < (int)numPixels()) {  // 位置在燈條的範圍內才點亮
          setPixelColor(i,                    // 點亮目前位置的 LED
            map(bright, 0, 255, 0, r),        // 利用 map() 做紅色的範圍對映
            map(bright, 0, 255, 0, g),        // 利用 map() 做綠色的範圍對映 
            map(bright, 0, 255, 0, b));       // 利用 map() 做藍色的範圍對映
        }
      }
      show();  // 將設定實際顯示出來
    }

  public:
    // Constructor: number of LEDs, pin number, LED type
    FlagLedStripe(unsigned int n, byte p=6, neoPixelType t=NEO_GRB + NEO_KHZ800) : Adafruit_NeoPixel(n,p,t) {      
    }

    void stopEffect() {
      _stopped = true;
    }

    // 點亮所有 LED, 並顯示出來
    void showAll(int r, int g, int b) {
      for (int i = 0; i < numPixels(); i++) {
        setPixelColor(i, r, g, b);
      }
      show();    // 讓燈條顯示出來
    }

    // 曲線型變化的呼吸特效
    void breathing(int r, int g, int b) {
      _stopped = false;
      unsigned long now = millis();
      while(!_stopped) {
        float bright = (exp(sin((millis() - now) / 2000.0 * PI)) - 0.36787944) * 108.0;
        bright = bright / 255;     // 先除 255, 然後下一行再乘以指定的 3 原色值
        showAll(bright * r, bright * g, bright * b);
      }
    }

    // 漸變特效, 由暗到亮再由亮到暗,每次變化間隔 delayMs 毫秒
    void fadeInOut(int r, int g, int b, unsigned long delayMs) {
      _stopped = false;
      for (long k = 0; k <= 255; k++) {     // 由最暗到最亮
        showAll(k*r/255, k*g/255, k*b/255); // 將亮度對映到指定的顏色
        if(_stopped) return;
        delay(delayMs);                     // 暫停指定的時間
      }
      for (long k = 255; k >= 0; k--) {     // 由最亮到最暗
        showAll(k*r/255, k*g/255, k*b/255); // 同上個迴圈
        if(_stopped) return;
        delay(delayMs);                     // 同上個迴圈
      }
    }

    // 漸變循環特效
    void rgbLoop(unsigned long wait) {
      for (int j = 0; j < 3; j++ ) {
        switch(j) {
          case 0: fadeInOut(255, 0, 0, wait); break;
          case 1: fadeInOut(0, 255, 0, wait); break;
          case 2: fadeInOut(0, 0, 255, wait); break;
        }
        if (_stopped) return;  // 是否強制停止
      }
    }
    
    // 劇院追逐特效
    void theaterChase(unsigned long c, unsigned long wait) {
      _stopped = false;
      for (int j = 0; j < 10; j++) {
        for (int q = 0; q < 3; q++) {
          for (int i = 0; i < numPixels(); i = i + 3) {
            setPixelColor(i + q, c);
          }
          show();
    
          delay(wait);
    
          for (int i = 0; i < numPixels(); i = i + 3) {
            setPixelColor(i + q, 0);
          }
          if (_stopped) return;  // 是否強制停止
        }
      }
    }
    
    // 劇院追逐-彩虹色 特效
    void theaterChaseRainbow(unsigned long wait) {
      _stopped = false;
      for (int j = 0; j < 256; j++) {
        for (int q = 0; q < 3; q++) {
          for (int i = 0; i < numPixels(); i = i + 3) {
            setPixelColor(i + q, Wheel( (i + j) % 255));
          }
          show();
    
          delay(wait);
    
          for (int i = 0; i < numPixels(); i = i + 3) {
            setPixelColor(i + q, 0);
          }
          if (_stopped) return;  // 是否強制停止
        }
      }
    }
    
    // 彩虹特效
    void rainbow(unsigned long wait) {
      unsigned int i, j;
    
      _stopped = false;
      for (j = 0; j < 256; j++) {
        for (i = 0; i < numPixels(); i++) {
          setPixelColor(i, Wheel((i + j) & 255));
        }
        show();
        delay(wait);
        if (_stopped) return;  // 是否強制停止
      }
    }
    
    // 彩虹圓圈特效
    void rainbowCycle(unsigned long wait) {
      unsigned int i, j;
    
      _stopped = false;
      for (j = 0; j < 256 * 5; j++) {
        for (i = 0; i < numPixels(); i++) {
          setPixelColor(i, Wheel(((i * 256 / numPixels()) + j) & 255));
        }
        show();
        delay(wait);
        if (_stopped) return;  // 是否強制停止
      }
    }
    
    // 閃光特效
    void strobe(byte red, byte green, byte blue, 
        int StrobeCount, unsigned long FlashDelay, unsigned long EndPause) {
      _stopped = false;
      for (int j = 0; j < StrobeCount; j++) {
        showAll(red, green, blue);
        delay(FlashDelay);
        showAll(0, 0, 0);
        delay(FlashDelay);
        if (_stopped) return;  // 是否強制停止
      }
      delay(EndPause);
    }
    
    // 流光特效
    void runningLights(byte red, byte green, byte blue, unsigned long WaveDelay) {
      int pos;

      _stopped = false;
      while (true) {
        pos = 0;
        for (int i = 0; i < numPixels() * 2; i++)
        {
          pos++; // = 0; //pos + Rate;
          for (int i = 0; i < numPixels(); i++) {
            setPixelColor(i, 
              ((sin(i + pos) * 127 + 128) / 255)*red,
              ((sin(i + pos) * 127 + 128) / 255)*green,
              ((sin(i + pos) * 127 + 128) / 255)*blue);
          }
          show();
          delay(WaveDelay);
          if (_stopped) return;  // 是否強制停止
        }
      }
    }
    
    // 賽隆人特效
    void cylonBounce(byte red, byte green, byte blue, 
        int EyeSize, unsigned long SpeedDelay, unsigned long ReturnDelay) {
      _stopped = false;
      while (true) {
        for (int i = 0; i < numPixels() - EyeSize - 2; i++) {
          showAll(0, 0, 0);
          setPixelColor(i, red / 10, green / 10, blue / 10);
          for (int j = 1; j <= EyeSize; j++) {
            setPixelColor(i + j, red, green, blue);
          }
          setPixelColor(i + EyeSize + 1, red / 10, green / 10, blue / 10);
          show();
          delay(SpeedDelay);
        }
        delay(ReturnDelay);
        if (_stopped) return;  // 是否強制停止
    
        for (int i = numPixels() - EyeSize - 2; i > 0; i--) {
          showAll(0, 0, 0);
          for (int j = 1; j <= EyeSize; j++) {
            setPixelColor(i + j, red, green, blue);
          }
          setPixelColor(i + EyeSize + 1, red / 10, green / 10, blue / 10);
          show();
          delay(SpeedDelay);
        }
        delay(ReturnDelay);
        if (_stopped) return;  // 是否強制停止
      }
    }
    
    // 發泡特效
    void sparkle(byte red, byte green, byte blue, unsigned long SpeedDelay) {
      _stopped = false;
      while (true) {
        int px = random(numPixels());
        setPixelColor(px, red, green, blue);
        show();
        delay(SpeedDelay);
        setPixelColor(px, 0, 0, 0);
        show();
    
        if (_stopped) return;  // 是否強制停止
      }
    }

    // 流星燈特效
    void meteorLamp(int r, int g, int b, int len, unsigned long delayMs) {
      _stopped = false;
      for(int i = (0-len); i <= (int)numPixels(); i++) {
        meteor(r, g, b, i, len);  // 顯示靜態的流星
        if(_stopped) return;
        delay(delayMs);           // 暫停指定的毫秒
      }
    }
};
#endif
