#ifndef FLAG_LED_STRIP_ASYNC
#define FLAG_LED_STRIP_ASYNC
#if ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

class FlagLedStripAsync:public Adafruit_NeoPixel {
  private:
    bool _stopped = true;
    bool firstRun = true;
    long _runs1= 0;
    long _runs2 = 0;
    int _inc = 1;
    unsigned long _lasttime = 0;
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
    FlagLedStripAsync(unsigned int n, byte p=6, neoPixelType t=NEO_GRB + NEO_KHZ800) : Adafruit_NeoPixel(n,p,t) {      
    }

    void stopEffect() {
      _stopped = true;
      clear();
      show();
      _runs1= 0;
      _runs2 = 0;
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
      if(_stopped) {
        _stopped = false;
        _lasttime = millis();
      }
      float bright = (exp(sin((millis() - _lasttime) / 2000.0 * PI - PI/2.0)) - 0.36787944) * 108.0;
      bright = bright / 255;     // 先除 255, 然後下一行再乘以指定的 3 原色值
      showAll(bright * r, bright * g, bright * b);
    }

    // 漸變特效, 由暗到亮再由亮到暗,每次變化間隔 delayMs 毫秒
    void fadeInOut(int r, int g, int b, unsigned long delayMs) {
      if(_stopped) { // 第一次呼叫
        _runs1= 0;
        _stopped = false;
        _inc == 1;
        showAll(_runs1 * r / 255, _runs1 * g / 255, _runs1 * b / 255); // 將亮度對映到指定的顏色
        _lasttime = millis();
      } 
      else if(millis() - _lasttime >= delayMs)  {
        _runs1 += _inc;
        if(_runs1 == 256) {
          _inc = -1;
          _runs1 = 255;           
        }
        else if(_runs1 == -1) {
          _inc = 1;
          _runs1 = 0;          
        }
        showAll(_runs1 * r / 255, _runs1 * g / 255, _runs1 * b / 255); // 將亮度對映到指定的顏色
        _lasttime = millis();
      }
    }

    // 漸變循環特效
    void rgbLoop(unsigned long wait) {
      if(_stopped) {
        _runs2 = 0;
        fadeInOut(255, 0, 0, wait);
      }
      else if(millis() - _lasttime >= wait){
        _runs2 = (_runs2 == 1535) ? 0:(_runs2 + 1);
        if(_runs2 < 512) 
          fadeInOut(255, 0, 0, wait);
        else if(_runs2 < 1024)
          fadeInOut(0, 255, 0, wait);
         else
          fadeInOut(0, 0, 255, wait);
      }
    }
    
    // 劇院追逐特效
    void theaterChase(int r, int g, int b, unsigned long wait) {
      if(_stopped) {
        _runs1 = 0;
        _stopped = false;
        _lasttime = millis();
      }
      else if(millis() - _lasttime > wait) {
        for (int i = 0; i < numPixels(); i = i + 3) {
          setPixelColor(i + _runs1, 0);
        }
        _runs1 = (_runs1 + 1) % 4;
        for (int i = 0; i < numPixels(); i = i + 3) {
          setPixelColor(i + _runs1, r, g, b);
        }
        show();
        _lasttime = millis();
      }
    }
    
    // 劇院追逐-彩虹色 特效
    void theaterChaseRainbow(unsigned long wait) {
      if(_stopped) {
        _runs1 = 0;
        _runs2 = 0;
        _stopped = false;
        _lasttime = millis();
      }
      else if(millis() - _lasttime > wait) {
        for (int i = 0; i < numPixels(); i = i + 3) {
          setPixelColor(i + _runs1, 0);
        }
        _runs1 = _runs1 + 1;
        if(_runs1 == 4) {
          _runs1 = 0;
          _runs2 = (_runs2 + 1) % 256;
        }
        for (int i = 0; i < numPixels(); i = i + 3) {
          setPixelColor(i + _runs1, Wheel((i + _runs2) & 255));
        }
        show();
        _lasttime = millis();
      }
    }
    
    // 彩虹特效
    void rainbow(unsigned long wait) {
      if(_stopped) {
        _stopped = false;
        _runs1 = 0;
        for (int i = 0; i < numPixels(); i++) {
          setPixelColor(i, Wheel(i & 255));
        }
        show();
        _lasttime = millis();
      }
      else if(millis() - _lasttime > wait) {
        _runs1 = (_runs1 + 1) % 256;   
        for (int i = 0; i < numPixels(); i++) {
          setPixelColor(i, Wheel((_runs1 + i) & 255));
        }
        show();
        _lasttime = millis();
      }
    }
    
    // 彩虹圓圈特效
    void rainbowCycle(unsigned long wait) {
      unsigned int i, j;
      if(_stopped) {
        _stopped = false;
        _runs1 = 0;
        for (int i = 0; i < numPixels(); i++) {
          setPixelColor(i, Wheel(i & 255));
        }
        show();
        _lasttime = millis();
      }
      else if(millis() - _lasttime > wait) {
        _runs1 = (_runs1 + 1) % 256;   
        for (int i = 0; i < numPixels(); i++) {
          setPixelColor(i, Wheel(((i * 256 / numPixels()) + _runs1) & 255));
        }
        show();
        _lasttime = millis();
      }
    }
    
    // 閃光特效
    void strobe(byte red, byte green, byte blue, 
        int StrobeCount, unsigned long FlashDelay, unsigned long EndPause) {
      //static bool firstRun = true;
      if(_stopped) {
        firstRun = true;
        _stopped = false;
        _runs1 = 0;
        _lasttime = millis();
      }
      else if(firstRun || 
        (_runs1 == 0 && (millis() - _lasttime > EndPause)) ||
        (_runs1 != 0 && (millis() - _lasttime > FlashDelay))) {
        firstRun = false;
        if(_runs1 % 2 == 0)
          showAll(red, green, blue);
        else
          showAll(0,0,0);
        _lasttime = millis();
        _runs1 = (_runs1 + 1) % (StrobeCount * 2);
      }
    }
    
    // 流光特效
    void runningLights(byte red, byte green, byte blue, unsigned long WaveDelay) {
      int pos;
      if(_stopped) {
        _stopped = false;
        _runs1 = 0;
        _lasttime = millis();
      }
      if(millis() - _lasttime > WaveDelay) {
        _runs1 = (_runs1 + 1) % (numPixels() * 2); // = 0;
        for (int i = 0; i < numPixels(); i++) {
          setPixelColor(i, 
            ((sin(i + _runs1) * 127 + 128) / 255)*red,
            ((sin(i + _runs1) * 127 + 128) / 255)*green,
            ((sin(i + _runs1) * 127 + 128) / 255)*blue);
        }
        show();
        _lasttime = millis();
      }
    }
    
    // 賽隆人特效
    void cylonBounce(byte red, byte green, byte blue, 
        int EyeSize, unsigned long SpeedDelay, unsigned long ReturnDelay) {
      static bool turn = false;
      if(_stopped) {
        turn = false;
        _stopped = false;
        _runs1 = 0;
        _inc = 1;
        _lasttime = 0;
      }
      if((turn && (millis() - _lasttime >= ReturnDelay)) ||
        (!turn && (millis() - _lasttime >= SpeedDelay))) {
        showAll(0, 0, 0);
        setPixelColor(_runs1, red / 10, green / 10, blue / 10);
        for (int j = 1; j <= EyeSize; j++) {
          setPixelColor(_runs1 + j, red, green, blue);
        }
        setPixelColor(_runs1 + EyeSize + 1, red / 10, green / 10, blue / 10);
        show();
        _runs1 = _runs1 + _inc;
        turn = false;
        if(_runs1 >= (numPixels() - EyeSize - 2)) {
          turn = true;
          _inc = -1;
        }
        else if(_runs1 == 0){
          turn = true;
          _inc = 1;
        }
        _lasttime = millis();
      }
    }
    
    // 發泡特效
    // void sparkle(byte red, byte green, byte blue, unsigned long SpeedDelay) {
    //   if(_stopped) {
    //     _stopped = false;
    //     _runs1 = 0;
    //     _lasttime = 0;  
    //   }
    //   if(millis() - _lasttime >= SpeedDelay) {
    //     setPixelColor(_runs1, 0, 0, 0);
    //     show();
    //     _runs1 = random(numPixels());
    //     setPixelColor(_runs1, red, green, blue);
    //     show();
    //     _lasttime = millis();
    //   }
    // }

    // 發泡特效
    void sparkle(byte red, byte green, byte blue, unsigned long SpeedDelay) {
      if(_stopped) {
        _stopped = false;
        _runs1 = -1;
        _lasttime = 0;  
      }
      if(_runs1 == -1) {
        _runs1 = random(numPixels());
        setPixelColor(_runs1, red, green, blue);
        show();
      }
      else if(millis() - _lasttime >= SpeedDelay) {
        setPixelColor(_runs1, 0, 0, 0);
        show();
        _runs1 = -1;
        _lasttime = millis();
      }
    }

    // 流星燈特效
    void meteorLamp(int r, int g, int b, int len, unsigned long delayMs) {
      if(_stopped) {
        _stopped = false;
        _lasttime = 0;
        _runs1 = 0 - len;
      }
      if(millis() - _lasttime > delayMs) {
        meteor(r, g, b, _runs1, len);  // 顯示靜態的流星
        if(++_runs1 > numPixels()) _runs1 = 0 - len;
        _lasttime = millis();
      }
    }
};
#endif
