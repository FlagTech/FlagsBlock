#include<arduinoFFT.h>

class FlagFFT: public arduinoFFT {
  public:
    double AdjustMajorPeak(double* vD, uint16_t samples, double samplingFrequency, int start, int end)
    {
      double maxY = 0;
      uint16_t IndexOfMaxY = 0;
      //If sampling_frequency = 2 * max_frequency in signal,
      //value would be stored at position samples/2

      for (uint16_t i = start; i < end; i++) {
        if ((vD[i - 1] < vD[i]) && (vD[i] > vD[i + 1])) {
          if (vD[i] > maxY) {
            maxY = vD[i];
            IndexOfMaxY = i;
          }

        }
      }
      double delta = 0.5 * ((vD[IndexOfMaxY - 1] - vD[IndexOfMaxY + 1]) / (vD[IndexOfMaxY - 1] - (2.0 * vD[IndexOfMaxY]) + vD[IndexOfMaxY + 1]));
      double interpolatedX = ((IndexOfMaxY + delta) * samplingFrequency) / (samples - 1);
      if (IndexOfMaxY == (samples >> 1)) //To improve calculation on edge values
        interpolatedX = ((IndexOfMaxY + delta) * samplingFrequency) / (samples);
      // returned value: interpolated frequency peak apex
      return (interpolatedX);
    }

    void fft(int pin, double* vR, double* vI, int samples, int freq) {
      unsigned int samplingPeriod = round(1000000l * (1.0 / freq)); //Period;
      unsigned long microseconds = micros();
      for (int i = 0; i < samples; i++)
      {
        vR[i] = analogRead(pin); //傅立葉實數等於測量值
        vI[i] = 0; //虛數為零
        while (micros() - microseconds < samplingPeriod) {
          //empty loop 讓採樣頻率與運算的頻率要求相等
        }
        microseconds += samplingPeriod;
      }
      Windowing(vR, samples, FFT_WIN_TYP_HAMMING, FFT_FORWARD);  //窗函數
      Compute(vR, vI, samples, FFT_FORWARD);   //正傅立葉轉換
      ComplexToMagnitude(vR, vI, samples);
    }

};

FlagFFT FFT = FlagFFT();   //創建 FFT 物件
