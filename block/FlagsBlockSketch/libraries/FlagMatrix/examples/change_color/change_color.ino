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
  for(int j=1;j<=3;j++){            //更換顏色
    for(int i=0;i<=7;i++){          //第0列~第7列
      mled.setRow(j,i,B11111111);    //顯示一列 (顏色,列數,資料)
      }
   delay(1000);                    //等待一秒
   mled.clear();                   //清空矩陣
  }
}
