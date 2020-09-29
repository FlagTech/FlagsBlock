#include "Flag74HC595.h"
 

Flag74HC595::Flag74HC595(byte dataPin, byte clockPin, byte loadPin)
{
	this->dataPin = dataPin;    //以指標方式存取 
	this->clockPin = clockPin;  //以指標方式存取 
	this->loadPin = loadPin;

	pinMode(dataPin, OUTPUT);
	pinMode(clockPin, OUTPUT);
	pinMode(loadPin, OUTPUT);

}

void Flag74HC595::begin()
{
   digitalWrite(loadPin, LOW);
    shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[10]);
    shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[10]);
   digitalWrite(loadPin, HIGH);
}

void Flag74HC595::clear()
{
   digitalWrite(loadPin, LOW);
    shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[10]);
    shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[10]);
   digitalWrite(loadPin, HIGH);
}


void Flag74HC595::sevenSegWrite(byte digit)
{
  // 送資料前要先把 latchPin 拉成低電位
  digitalWrite(loadPin, LOW);
    
  // 送出數字的位元資料 (bit pattern)

  shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[digit%10]);

  if(digit/10==0){   //如果十位數為0
  shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[10]);   //十位數不顯示
  }
  else{
     shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[digit/10]);  //十位數顯示相應數字
    }
  
  // 送完資料後要把 latchPin 拉回成高電位
  digitalWrite(loadPin, HIGH);				
}

void Flag74HC595::custom(byte ten_digits,byte digits)
{
  // 送資料前要先把 latchPin 拉成低電位
  digitalWrite(loadPin, LOW);
    
  // 送出數字的位元資料 (bit pattern)
  shiftOut(dataPin, clockPin, LSBFIRST, ~(digits));  //先傳個位數位置 
  shiftOut(dataPin, clockPin, LSBFIRST, ~(ten_digits));  //再傳十位數位置 
    
  // 送完資料後要把 latchPin 拉回成高電位
  digitalWrite(loadPin, HIGH);				
}


