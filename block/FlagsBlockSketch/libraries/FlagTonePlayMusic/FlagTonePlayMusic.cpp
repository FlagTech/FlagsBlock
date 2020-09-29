#if defined(ARDUINO) && ARDUINO >= 100
#include "Arduino.h"
#else
#include "WProgram.h"
#endif

void FlagTonePlayMusic(int speakerPin, String notes, int tempo) {
  // 決定一拍多長 (單位 ms)
  // int tempo = 300;

  int length = 0; 
  char note;
  float beat = 1;
  int levelHighLow = 0;

  // 簡譜定義: http://tw.everyonepiano.com/Article-129-%E5%AD%B8%E6%9C%83%E7%9C%8B%E7%B0%A1%E8%AD%9C-%E7%B0%A1%E8%AD%9C%E8%A8%98%E8%AD%9C%E6%96%B9%E6%B3%95.html
  // 1^ 是高音 Do, 1. 是低音 Do
  // 1- 是二拍 Do, 1--- 是四拍 Do, 1_ 是半拍 Do, 1__ 是1/4拍 Do, 1___ 是1/8拍 Do
  // 高低音要先於音長短, 例如 2^--
  // 0 是休止符, 空白沒有意義可以拿來分組
  // 不支援附點音符
  // switch (num) {
  //   case 1:
  //     notes =  "3 3 4 5  5 4 3 2  1 1 2 3 3- 2_ 2";  //快樂頌
  //     break;
  //   case 2:
  //     notes =  "1 1 5 5 6 6 5- 4 4 3 3 2 2 1-";  //小星星
  //     break;
  //   case 3:
  //     notes =  "6_6_6 5_3_5 3_2_3 2_1_21_6. 2_3_2_3_1_3._7._6.";  //傷心的人別聽慢歌
  //     break;
  //   case 4:
  //     notes =  "5_6_1^_7_6 0 3^_3^_3^_3^_2^ 2^_62^-1^__2^__1^--";
  //     break;
  //   default:
  //     notes =  "3 3 4 5  5 4 3 2  1 1 2 3 3- 2_ 2";
  // }

  length = notes.length(); 
  int i;
  for (i = 0; i < length; i++) {
    note = notes[i];
    if (note == ' ') continue;
    
    levelHighLow = 0;
    if (notes[i+1] == '^') {
      while (notes[i+1] == '^') {
        levelHighLow = 1;
        i++;
      }
    }
    else if (notes[i+1] == '.') {
      while (notes[i+1] == '.') {
        levelHighLow = -1;
        i++;
      }
    }
    if (note == '0') note = 0;
    else note = note + 14 + levelHighLow * 7 - '0';

    beat = 1;
    if (notes[i+1] == '-') {
      while (notes[i+1] == '-') {
        beat++;
        i++;
      }
    }
    else if (notes[i+1] == '_') {
      while (notes[i+1] == '_') {
        beat = beat / 2;
        i++;
      }
    }

    // Serial.print("note:");
    // Serial.print(note, DEC);
    // Serial.print(", beat:");
    // Serial.println(beat);

    // FlagPlayTone(speakerPin, note, beat * tempo);
  unsigned long duration = beat * tempo;
  char num = note;
  int tones[] = {0, 131, 147, 165, 175, 196, 220, 247, 
                    262, 294, 330, 349, 392, 440, 494,        // 低音
                    523, 587, 659, 698, 784, 880, 988,        // 中音
                    1047, 1175, 1319, 1397, 1568, 1760, 1976, // 高音
                    2093, 2349, 2637, 2794, 3136, 3520, 3951
                };
  // 播放音符對應的頻率
  tone(speakerPin, tones[num], duration);
  //下方的 delay() 及 noTone ()，測試過後一定要有這兩行，整體的撥放出來的東西才不會亂掉，可能是因為 Arduino 送出tone () 頻率後會馬上接著執行下個指令，不會等聲音播完，導致撥出的聲音混合而亂掉
  delay(duration);
  noTone(speakerPin);

    // 每個音符之間的間隔，這邊設定的長短會有連音 or 斷音的效果
    delay(tempo/10); 
  }
}

// void FlagPlayTone(int speakerPin, char num, unsigned long duration) {
//   int tones[] = {0, 261, 294, 330, 349, 392, 440, 494,        // 低音
//                     523, 587, 659, 698, 784, 880, 988,        // 中音
//                     1047, 1175, 1319, 1397, 1568, 1760, 1976  // 高音
//                 };
//   // 播放音符對應的頻率
//   tone(speakerPin, tones[num], duration);
//   //下方的 delay() 及 noTone ()，測試過後一定要有這兩行，整體的撥放出來的東西才不會亂掉，可能是因為 Arduino 送出tone () 頻率後會馬上接著執行下個指令，不會等聲音播完，導致撥出的聲音混合而亂掉
//   delay(duration);
//   noTone(speakerPin);
// }