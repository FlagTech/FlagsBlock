
#ifndef _FLAG74HC595_H
#define _FLAG74HC595_H


#if ARDUINO >= 100
 #include "Arduino.h"
#else
 #include "WProgram.h"
#endif

class Flag74HC595
{
	public:
		Flag74HC595(byte dataPin=D3, byte clockPin=D2, byte loadPin=D1);
		void begin();
		void clear();
		void sevenSegWrite(byte digit);
		void custom(byte ten_digits,byte digits);
		volatile uint8_t seven_seg_digits[11]={0x03, 0x9F, 0x25, 0x0D, 0x99, 0x49, 0x41, 0x1F, 0x01, 0x19, 0xFF};
	                                    //¼Æ¦r  0     1      2     3     4     5     6    7      8     9   ªÅ¥Õ
		
	protected:

	    byte dataPin;
	    byte clockPin;
	    byte loadPin;

};


#endif

