#include "Flag74HC595.h"
 

Flag74HC595::Flag74HC595(byte dataPin, byte clockPin, byte loadPin)
{
	this->dataPin = dataPin;    //�H���Ф覡�s�� 
	this->clockPin = clockPin;  //�H���Ф覡�s�� 
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
  // �e��ƫe�n���� latchPin �Ԧ��C�q��
  digitalWrite(loadPin, LOW);
    
  // �e�X�Ʀr���줸��� (bit pattern)

  shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[digit%10]);

  if(digit/10==0){   //�p�G�Q��Ƭ�0
  shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[10]);   //�Q��Ƥ����
  }
  else{
     shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[digit/10]);  //�Q�����ܬ����Ʀr
    }
  
  // �e����ƫ�n�� latchPin �Ԧ^�����q��
  digitalWrite(loadPin, HIGH);				
}

void Flag74HC595::custom(byte ten_digits,byte digits)
{
  // �e��ƫe�n���� latchPin �Ԧ��C�q��
  digitalWrite(loadPin, LOW);
    
  // �e�X�Ʀr���줸��� (bit pattern)
  shiftOut(dataPin, clockPin, LSBFIRST, ~(digits));  //���ǭӦ�Ʀ�m 
  shiftOut(dataPin, clockPin, LSBFIRST, ~(ten_digits));  //�A�ǤQ��Ʀ�m 
    
  // �e����ƫ�n�� latchPin �Ԧ^�����q��
  digitalWrite(loadPin, HIGH);				
}


