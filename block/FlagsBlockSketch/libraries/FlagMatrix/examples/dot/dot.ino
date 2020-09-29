////////////////////////////////////////////////////////////////
//              0  1  2  3  4  5  6  7
//              →
//        0  ↓ o  o  o  o  o  o  o  o
//        1     o  o  o  o  o  o  o  o
//        2     o  o  o  o  o  o  o  o
//        3     o  o  o  o  o  o  o  o
//        4     o  o  o  o  o  o  o  o
//        5     o  o  o  o  o  o  o  o
//        6     o  o  o  o  o  o  o  o
//        7     o  o  o  o  o  o  o  o              接線朝上
//
//        顏色選擇  綠色:1 , 紅色:2 , 雙色:3
//        亮度選擇  0 ~ 7 (數字越大表示越亮)
//
////////////////////////////////////////////////////////////////
#include<FlagMatrix.h>

MLED mled(1);  //設定亮度 0~7

void setup() {
mled.begin();              //8*8矩陣初始化
mled.clear();              //清空8*8矩陣
}

void loop() {
  for(int j=0;j<=7;j++){
    for(int i=0;i<=7;i++){
    mled.dot(1,i,j);    //點亮Led燈  mled.dot(顏色,x軸,y軸,是否點亮)   是否點亮默認為 1:點亮 
    delay(100);
    mled.dot(1,i,j,0);  //熄滅Led燈  
    }
  }
}
