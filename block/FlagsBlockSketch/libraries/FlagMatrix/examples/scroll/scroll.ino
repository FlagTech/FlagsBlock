////////////////////////////////////////////////////////////跑馬燈//////////////////////////////////////////////////////////

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

MLED mled(7);  //設定亮度 0~7

byte chinese[2][8]={{B00100010,B01110111,B10101010,B00000000,B11101110,B01010110,B01001010,B11110101},     //筑
                  {B00010000,B01111100,B01010100,B01111100,B00010000,B01010100,B10101010,B00111100}     //忠
                 };

String s = u8"HELLO WORLD";     //目前字串

int new_letter=0;      //位移量
 
byte first_letter[8]={0,0,0,0,0,0,0,0};      //放置第一個字母的矩陣
byte second_letter[8]={0,0,0,0,0,0,0,0};     //放置第二個字母的矩陣

byte p[2]={0,0};   // 儲存 {第一個字元,第二個字元}

int we=0;    //目前變換次數 (第二個字母變成第一個字母的次數)

unsigned long time1=millis();

unsigned char fonts3[95][8] = {                                                            
    { B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000},  // (space) 
    { B00011000,B00011000,B00011000,B00011000,B00011000,B00000000,B00011000,B00011000},  // ! 
    { B00010100,B00010100,B00010100,B00000000,B00000000,B00000000,B00000000,B00000000},  // " 
    { B00000000,B00101000,B01111100,B00101000,B00101000,B01111100,B00101000,B00000000},  // # 
    { B00001000,B00011100,B00101000,B00011100,B00001010,B00101010,B00011100,B00001000},  // $ 
    { B00100000,B01010010,B00100100,B00001000,B00010000,B00100100,B01001010,B00000100},  // % 
    { B00000000,B00110000,B01001000,B01001000,B00110010,B01001100,B01001000,B00110110},  // & 
    { B00010000,B00010000,B00010000,B00000000,B00000000,B00000000,B00000000,B00000000},  // ' 
    { B00000100,B00001000,B00010000,B00010000,B00010000,B00010000,B00001000,B00000100},  // ( 
    { B00100000,B00010000,B00001000,B00001000,B00001000,B00001000,B00010000,B00100000},  // ) 
    { B00000000,B00001000,B00101010,B00011100,B00001000,B00011100,B00101010,B00001000},  // * 
    { B00000000,B00011000,B00011000,B01111110,B01111110,B00011000,B00011000,B00000000},  // + 
    { B00000000,B00000000,B00000000,B00111000,B00111000,B00111000,B00001000,B00110000},  // , 
    { B00000000,B00000000,B00000000,B01111110,B01111110,B00000000,B00000000,B00000000},  // - 
    { B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B00011000,B00011000},  // . 
    { B00000000,B00000010,B00000100,B00001000,B00010000,B00100000,B01000000,B00000000},  // / 
    { B00000000,B00011000,B00100100,B00100100,B00100100,B00100100,B00100100,B00011000},  // 0 
    { B00000000,B00001000,B00011000,B00101000,B00001000,B00001000,B00001000,B00111110},  // 1 
    { B00000000,B00011100,B00100010,B00000010,B00000100,B00001000,B00010000,B00111110},  // 2 
    { B00000000,B00011100,B00100010,B00000010,B00011100,B00000010,B00100010,B00011100},  // 3 
    { B00000000,B00000100,B00001100,B00010100,B00100100,B00111110,B00000100,B00000100},  // 4 
    { B00000000,B00111100,B00100000,B00100000,B00111000,B00000100,B00100100,B00011000},  // 5 
    { B00000000,B00011000,B00100100,B00100000,B00111000,B00100100,B00100100,B00011000},  // 6 
    { B00000000,B00111100,B00100100,B00100100,B00000100,B00000100,B00000100,B00000100},  // 7 
    { B00000000,B00011000,B00100100,B00100100,B00011000,B00100100,B00100100,B00011000},  // 8 
    { B00000000,B00011000,B00100100,B00100100,B00011100,B00000100,B00001000,B00010000},  // 9 
    { B00000000,B00011000,B00011000,B00000000,B00011000,B00011000,B00000000,B00000000},  // : 
    { B00000000,B00011000,B00011000,B00000000,B00011000,B00011000,B00001000,B00010000},  // ; 
    { B00000000,B00000100,B00001000,B00010000,B00100000,B00010000,B00001000,B00000100},  // < 
    { B00000000,B00000000,B00111110,B00000000,B00111110,B00000000,B00000000,B00000000},  // = 
    { B00000000,B00100000,B00010000,B00001000,B00000100,B00001000,B00010000,B00100000},  // > 
    { B00000000,B00111000,B01000100,B00000100,B00001000,B00010000,B00000000,B00010000},  // ? 
    { B00111100,B01000010,B10011001,B10100101,B10100101,B10011111,B01000000,B00111110},  // @ 
    { B00011000,B00111100,B01100110,B01100110,B01111110,B01111110,B01100110,B01100110},  // A 
    { B01111000,B01000100,B01000100,B01111000,B01111000,B01000100,B01000100,B01111000},  // B 
    { B00111100,B01111110,B01100010,B01100000,B01100000,B01100010,B01111110,B00111100},  // C 
    { B01111000,B01111100,B01100110,B01100110,B01100110,B01100110,B01111100,B01111000},  // D 
    { B01111110,B01111110,B01100000,B01111100,B01111100,B01100000,B01111110,B01111110},  // E 
    { B01111110,B01111110,B01100000,B01111100,B01111100,B01100000,B01100000,B01100000},  // F 
    { B00111100,B01111110,B01100000,B01101110,B01101110,B01100010,B01111110,B00111100},  // G 
    { B01100110,B01100110,B01100110,B01111110,B01111110,B01100110,B01100110,B01100110},  // H 
    { B01111110,B01111110,B00011000,B00011000,B00011000,B00011000,B01111110,B01111110},  // I 
    { B01111110,B01111110,B00001100,B00001100,B01101100,B01101100,B01111100,B00111000},  // J 
    { B01100110,B01101100,B01111000,B01110000,B01110000,B01111000,B01101100,B01100110},  // K 
    { B00110000,B00110000,B00110000,B00110000,B00110000,B00110000,B00111110,B00111110},  // L 
    { B01000010,B01100110,B01111110,B01011010,B01000010,B01000010,B01000010,B01000010},  // M 
    { B00000000,B01000010,B01100010,B01110010,B01011010,B01001110,B01000110,B01000010},  // N 
    { B00011000,B00111100,B01100110,B01100110,B01100110,B01100110,B00111100,B00011000},  // O 
    { B01111100,B01111110,B01100110,B01100110,B01111100,B01111000,B01100000,B01100000},  // P 
    { B00111000,B01000100,B01000100,B01000100,B01000100,B01001100,B01000100,B00111010},  // Q 
    { B01111100,B01111110,B01100110,B01100110,B01111100,B01111000,B01101100,B01100110},  // R 
    { B00111100,B01111110,B01100000,B01111100,B00111110,B00000110,B01111110,B00111100},  // S 
    { B01111110,B01111110,B00011000,B00011000,B00011000,B00011000,B00011000,B00011000},  // T 
    { B01100110,B01100110,B01100110,B01100110,B01100110,B01100110,B01111110,B00111100},  // U 
    { B01100110,B01100110,B01100110,B01100110,B01100110,B01100110,B00111100,B00011000},  // V 
    { B01000100,B01000100,B01000100,B01000100,B01010100,B01010100,B01101100,B01000100},  // W 
    { B00000000,B01000010,B01100110,B00111100,B00011000,B00111100,B01100110,B01000010},  // X 
    { B01100110,B01100110,B01100110,B00111100,B00011000,B00011000,B00011000,B00011000},  // Y 
    { B00000000,B01111110,B01111110,B00001100,B00011000,B00110000,B01111110,B01111110},  // Z 
    { B00011100,B00010000,B00010000,B00010000,B00010000,B00010000,B00010000,B00011100},  // [ 
    { B00000000,B01000000,B00100000,B00010000,B00001000,B00000100,B00000010,B00000000},  // "\" 
    { B00111000,B00001000,B00001000,B00001000,B00001000,B00001000,B00001000,B00111000},  // ] 
    { B00001000,B00010100,B00100010,B00000000,B00000000,B00000000,B00000000,B00000000},  // ^ 
    { B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000,B00111100},  // _ 
    { B00010000,B00001000,B00000000,B00000000,B00000000,B00000000,B00000000,B00000000},  // ` 
    { B00000000,B00000000,B00111000,B01000100,B00111100,B01000100,B01000100,B00111110},  // a 
    { B00000000,B00100000,B00100000,B00100000,B00111000,B00100100,B00100100,B00111000},  // b 
    { B00000000,B00000000,B00011100,B00100010,B00100000,B00100000,B00100010,B00011100},  // c 
    { B00000000,B00000100,B00000100,B00000100,B00011100,B00100100,B00100100,B00011100},  // d 
    { B00000000,B00000000,B00000000,B00011000,B00100100,B00111100,B00100000,B00011100},  // e 
    { B00000000,B00001000,B00010100,B00010000,B00111100,B00010000,B00010000,B00010000},  // f 
    { B00000000,B00011000,B00100100,B00100100,B00011100,B00000100,B00100100,B00011000},  // g 
    { B00000000,B00100000,B00100000,B00100000,B00111000,B00100100,B00100100,B00100100},  // h 
    { B00000000,B00001000,B00000000,B00001000,B00001000,B00001000,B00001000,B00001000},  // i 
    { B00000000,B00001000,B00000000,B00001000,B00001000,B00001000,B00101000,B00010000},  // j 
    { B00000000,B00100000,B00100000,B00101000,B00110000,B00110000,B00101000,B00100100},  // k 
    { B00000000,B00001000,B00001000,B00001000,B00001000,B00001000,B00001000,B00001000},  // l 
    { B00000000,B00000000,B00000000,B01010100,B01101010,B01001010,B01001010,B01001010},  // m 
    { B00000000,B00000000,B00000000,B00101000,B00110100,B00100100,B00100100,B00100100},  // n 
    { B00000000,B00000000,B00000000,B00011000,B00100100,B00100100,B00100100,B00011000},  // o 
    { B00000000,B00000000,B00111000,B00100100,B00100100,B00111000,B00100000,B00100000},  // p 
    { B00000000,B00000000,B00011100,B00100100,B00100100,B00011100,B00000100,B00000100},  // q 
    { B00000000,B00000000,B00000000,B00101100,B00110000,B00100000,B00100000,B00100000},  // r 
    { B00000000,B00011000,B00100100,B00100000,B00011000,B00000100,B00100100,B00011000},  // s 
    { B00000000,B00000000,B00010000,B00111100,B00010000,B00010000,B00010100,B00011000},  // t 
    { B00000000,B00000000,B00000000,B00000000,B00100100,B00100100,B00100100,B00011010},  // u 
    { B00000000,B00000000,B00000000,B00000000,B01000100,B01000100,B00101000,B00010000},  // v 
    { B00000000,B00000000,B00000000,B00000000,B01000100,B01010100,B01010100,B00101000},  // w 
    { B00000000,B00000000,B00000000,B00000000,B00100100,B00011000,B00011000,B00100100},  // x 
    { B00000000,B00000000,B00000000,B00100010,B00010100,B00001000,B00010000,B00100000},  // y 
    { B00000000,B00000000,B00000000,B00000000,B00111100,B00001000,B00010000,B00111100},  // z 
    { B00000000,B00001100,B00010000,B00010000,B00100000,B00010000,B00010000,B00001100},  // { 
    { B00000000,B00010000,B00010000,B00010000,B00010000,B00010000,B00010000,B00010000},  // | 
    { B00000000,B00110000,B00001000,B00001000,B00000100,B00001000,B00001000,B00110000},  // } 
    { B00000000,B00000000,B00000000,B00110000,B01001001,B00000110,B00000000,B00000000}   // ~
};


//------------------------------------------------
//               第一個字    第二個字
//                     ←         ←
//             o  o  o  o  o  o  o  o
//             o  o  o  o  o  o  o  o
//             o  o  o  o  o  o  o  o
//             o  o  o  o  o  o  o  o
//             o  o  o  o  o  o  o  o
//             o  o  o  o  o  o  o  o
//             o  o  o  o  o  o  o  o
//             o  o  o  o  o  o  o  o              
//------------------------------------------------

void scroll_long(int color=2){
  
if(we==0){              //如果是重頭開始
  p[0]=32;              //第一個字設定為空白，32是因為等等要減32
  p[1]=s.charAt(we);     //第二字設定為字串的第一個字
}
else{
  p[0]=s.charAt(we-1);   //正常情況下:會由前一個字當 第一個字
  if(we==s.length()){    //如果目前變換次數等於字串長度，表示要結束了
    p[1]=32;           //第二個字設定為空白，32是因為等等要減32
    }
    else{
  p[1]=s.charAt(we);     //正常情況下:會由現在這一個字當 第二個字
    } 
  }

  byte *z=fonts3[p[0]-32];     //p[0]會是ASCⅡ值，EX: a等於97  ，而減掉32正好會是 fonts3 陣列中 a 的位置(fonts3[65])
  byte *q=fonts3[p[1]-32];     //p[1]會是ASCⅡ值，EX: c等於99  ，而減掉32正好會是 fonts3 陣列中 a 的位置(fonts3[67])

  for (int a=0;a<=7;a++){                //儲存位移後的位置到 first_letter,second_letter
    first_letter[a]=z[a]<<(new_letter);    
    second_letter[a]=q[a]>>(7-new_letter);   //8    //7代表的是自一開始要位移多遠，如果位移越遠表示字跟字之間間距越大
  }
  
  new_letter=new_letter+1;      //位移量增加一格
  
  if(new_letter>=7){   //如果位移量等於一開始的位移距離，代表第二個字要轉換成第一個字了
    new_letter=0;     //重置位移量
    we=we+1;         //變換次數加一
    }

  if(we>=s.length()+1){      //如果變換次數等於字串的總和加一  (加一是因為加一個空白)
    we=0;                  //全部重置
    }

  for(int i=0;i<=7;i++){            //第一列到第七列
    mled.setRow(color,i,first_letter[i] | second_letter[i]);       //設定每一列
    }

}

void setup() {
mled.begin();              //8*8矩陣初始化
mled.clear();              //清空8*8矩陣
}

void loop() {      
                  
if(millis()-time1>=200){    //每200毫秒換一次圖
  scroll_long(3);          //參數為顏色
  time1=millis();          //將現在時間記錄到time1
  }
}
