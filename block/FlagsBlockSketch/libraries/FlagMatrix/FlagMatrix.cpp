#include "FlagMatrix.h"

//clock:HIGH 時 DATA:HIGH->LOW 表示開始   DATA:LOW->HIGH 表示結束
//clock:LOW 時 DATA才能改變

MLED::MLED(uint8_t _intensity, byte dataPin, byte clockPin)
{
  this->dataPin = dataPin;   //以指標方式存取
  this->clockPin = clockPin; //以指標方式存取

  if (_intensity > 7) //如果亮度設超過7
    intensity = 7;    //則亮度等於7
  else
    intensity = _intensity; //如果 <=7 則用設定直

  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);

  digitalWrite(dataPin, HIGH);  //data : 高
  digitalWrite(clockPin, HIGH); //clock: 高
}

void MLED::begin()
{
  digitalWrite(dataPin, LOW);      //clock:HIGH data:HIGH->LOW   開始信號
  digitalWrite(clockPin, LOW);     //clock:LOW    可以傳送資料
  digitalWrite(clockPin, HIGH);    //clock:HIGH   不可以傳送資料
  digitalWrite(dataPin, HIGH);     //clock:HIGH data:LOW->HIGH   結束信號
  sendCommand(0x88 | (intensity)); //亮度設定皆為10001xxx,後三位 000(0)~ 111(7)
}

void MLED::setIntensity(byte inten)
{
  if (inten >= 7)
  {
    intensity = 7;
  }
  else if (inten <= 0)
  {
    intensity = 0;
  }
  else
  {
    intensity = inten;
  }
}

void MLED::clear()
{
  digitalWrite(dataPin, LOW);
  send(0xC0);
  for (int i = 0; i < 16; i++)
  {
    send(0x00);
  }
  for (int j = 0; j <= 7; j++)
  { //重置disBuffer
    disBuffer_r[j] = 0;
    disBuffer_g[j] = 0;
    row_r[j] = 0;
    row_g[j] = 0;
  }
  
  for (int i=0;i<=7;i++){
  	for(int j=0;j<=7;j++){
  		all[i][j]=0;           //重置表格 
	  }
  } 
  
  digitalWrite(dataPin, HIGH);
}

void MLED::dot(byte color, uint8_t x, uint8_t y, bool draw)
{
  x &= 0x07; //將 x綁定在 0~7之間
  y &= 0x07; //將 y綁定在 0~7之間
 
  if (color == 1)
  {
    if (draw)
    {
      disBuffer_r[y] |= (1 << (7 - x));
      disBuffer_r[y] |= row_r[y];
    }
    else
    {
      disBuffer_r[y] |= row_r[y];
      disBuffer_r[y] &= ~(1 << (7 - x));
    }

    sendData(y, disBuffer_r[y]);
  }
  else if (color == 2)
  {
    if (draw)
    {
      disBuffer_g[y] |= (1 << (7 - x));
      disBuffer_g[y] |= row_g[y];
    }
    else
    {
      disBuffer_g[y] |= row_g[y];
      disBuffer_g[y] &= ~(1 << (7 - x));
    }

    sendData(8 + y, disBuffer_g[y]);
  }

  else if (color == 3)
  {
    if (draw)
    {
      disBuffer_r[y] |= (1 << (7 - x));
      disBuffer_g[y] |= (1 << (7 - x));
      disBuffer_r[y] |= row_r[y];
      disBuffer_g[y] |= row_g[y];
    }
    else
    {
      disBuffer_r[y] |= row_r[y];
      disBuffer_g[y] |= row_g[y];
      disBuffer_r[y] &= ~(1 << (7 - x));
      disBuffer_g[y] &= ~(1 << (7 - x));
    }

    sendData(y, disBuffer_r[y]);
  }
  //

  digitalWrite(dataPin, LOW);
  digitalWrite(clockPin, LOW);
  digitalWrite(clockPin, HIGH);
  digitalWrite(dataPin, HIGH);

  if (color == 3)
  {
    sendData(8 + y, disBuffer_g[y]);

    digitalWrite(dataPin, LOW);
    digitalWrite(clockPin, LOW);
    digitalWrite(clockPin, HIGH);
    digitalWrite(dataPin, HIGH);
  }

  sendCommand(0x88 | (intensity)); //亮度設定皆為10001xxx,後三位 000(0)~ 111(7)
  digitalWrite(dataPin, LOW);
  digitalWrite(clockPin, LOW);
  digitalWrite(clockPin, HIGH);
  digitalWrite(dataPin, HIGH);
}

void MLED::setRow(byte color, byte row, byte data)
{
  if (color > 3 || row > 7 || data > 255)
    return;
  if (color == 1 || color == 3)
  {
    row_r[row] = data;
  }
  if (color == 2 || color == 3)
  {
    row_g[row] = data;
  }

  //if(color==1 || color==2){
  //	sendData((8*(color-1)+row),data);    //sendData((8*(color-1)+row),data);
  //}
  if (color == 1)
  {
    sendData(row, data | disBuffer_r[row]);
  }

  else if (color == 2)
  {
    sendData(8 + row, data | disBuffer_g[row]);
  }

  else if (color == 3)
  {
    sendData(row, data | disBuffer_r[row]);
  }

  // necessary for the TM1640
  digitalWrite(dataPin, LOW);
  digitalWrite(clockPin, LOW);
  digitalWrite(clockPin, HIGH);
  digitalWrite(dataPin, HIGH);

  if (color == 3)
  {
    sendData(8 + row, data | disBuffer_g[row]);

    digitalWrite(dataPin, LOW);
    digitalWrite(clockPin, LOW);
    digitalWrite(clockPin, HIGH);
    digitalWrite(dataPin, HIGH);
  }

  sendCommand(0x88 | (intensity)); //亮度設定皆為10001xxx,後三位 000(0)~ 111(7)
  digitalWrite(dataPin, LOW);
  digitalWrite(clockPin, LOW);
  digitalWrite(clockPin, HIGH);
  digitalWrite(dataPin, HIGH);
}

void MLED::newDot(byte color, uint8_t x, uint8_t y)
{
  x &= 0x07; //將 x綁定在 0~7之間
  y &= 0x07; //將 y綁定在 0~7之間
  
  if (color > 3)
    return;
    
  all[y][x]=color;
  for(int i=0;i<=7;i++)
		{
  		for(int j=0;j<=7;j++){
  			redData[i]=redData[i] | ((1 & all[i][j])<<(7-j));
			greenData[i]=greenData[i] | (((2 & all[i][j])>>1)<<(7-j));   
			}
		}
		  
	for(int i=0;i<=7;i++){	  
	  sendData(i, redData[i]); 
	  digitalWrite(dataPin, LOW);
	  digitalWrite(clockPin, LOW);
	  digitalWrite(clockPin, HIGH);
	  digitalWrite(dataPin, HIGH);  
	}
	
	for(int i=0;i<=7;i++){	  
	  sendData(i+8, greenData[i]); 
	  digitalWrite(dataPin, LOW);
	  digitalWrite(clockPin, LOW);
	  digitalWrite(clockPin, HIGH);
	  digitalWrite(dataPin, HIGH);  
	}
	  
  sendCommand(0x88 | (intensity)); //亮度設定皆為10001xxx,後三位 000(0)~ 111(7)
  digitalWrite(dataPin, LOW);
  digitalWrite(clockPin, LOW);
  digitalWrite(clockPin, HIGH);
  digitalWrite(dataPin, HIGH);
  
  for(int i=0;i<=7;i++){
  	redData[i]=0;
  	greenData[i]=0;
  }
}

void MLED::newSetRow(byte color, byte row, byte data)
{
  
  if (color > 3)
    return;
    
  for(int i=0;i<=7;i++){
  	all[row][i]=color*(1 & data>>(7-i));
  }
    for(int i=0;i<=7;i++)
		{
  		for(int j=0;j<=7;j++){
  			redData[i]=redData[i] | ((1 & all[i][j])<<(7-j));
			greenData[i]=greenData[i] | (((2 & all[i][j])>>1)<<(7-j));   
			}
		}
		  
	for(int i=0;i<=7;i++){	  
	  sendData(i, redData[i]); 
	  digitalWrite(dataPin, LOW);
	  digitalWrite(clockPin, LOW);
	  digitalWrite(clockPin, HIGH);
	  digitalWrite(dataPin, HIGH);  
	}
	
	for(int i=0;i<=7;i++){	  
	  sendData(i+8, greenData[i]); 
	  digitalWrite(dataPin, LOW);
	  digitalWrite(clockPin, LOW);
	  digitalWrite(clockPin, HIGH);
	  digitalWrite(dataPin, HIGH);  
	}
	  
  sendCommand(0x88 | (intensity)); //亮度設定皆為10001xxx,後三位 000(0)~ 111(7)
  digitalWrite(dataPin, LOW);
  digitalWrite(clockPin, LOW);
  digitalWrite(clockPin, HIGH);
  digitalWrite(dataPin, HIGH);
  
  for(int i=0;i<=7;i++){
  	redData[i]=0;
  	greenData[i]=0;
  }
}


void MLED::toSun(uint16_t delaytime = 750)
{
  if (millis() - time1 >= delaytime)
  {
    if (sun_choose == 0)
    { //如果sun_choose為0
      for (int i = 0; i <= 7; i++)
      {
        newSetRow(3, i, sun_1[i]); //選擇第一種太陽
      }
    }

    else if (sun_choose == 1)
    {
      for (int i = 0; i <= 7; i++)
      {
        newSetRow(3, i, sun_2[i]);
      }
    }
    sun_choose = !sun_choose; //更換太陽狀態
    time1 = millis();
  }
}

void MLED::toRain(uint16_t delaytime = 250)
{
  if (millis() - time1 >= delaytime)
  {
    if (rain_down == 0)
    { //先選擇雨要下哪一行
      rain_column = random(8);
    }

    for (int i = 0; i <= 7; i++)
    { //顯示雨傘
      newSetRow(1, i, umb[i]);
    }

    if (rain_down >= 1)
    { //如果已經下降一次了，要先清除上一個
      dot(2, rain_column, rain_down - 1, 0);
    }
    dot(2, rain_column, rain_down); //顯示雨滴
    rain_down += 1;                 //下降點加一

    if (rain_column == 0 || rain_column == 7)
    {               //如果是第一行和第八行
      max_down = 5; //最大下降數為五格
    }
    else if (rain_column == 1 || rain_column == 6)
    {               //如果是第二行和第七行
      max_down = 4; //最大下降數為四格
    }

    else if (rain_column >= 2 || rain_column <= 5)
    {               //如果是第三行到第六行
      max_down = 3; //最大下降數為三格
    }

    if (rain_down > max_down)
    {                                        //如果下降次數大於最大下降數
      dot(2, rain_column, rain_down - 1, 0); //將最後一格取消
      rain_down = 0;                         //重新計算下降次數
    }
    time1 = millis();
  }
}

void MLED::cloudUp(uint16_t delaytime, byte co)
{
  if (millis() - time1 >= delaytime)
  {
    for (int i = 0; i <= 7; i++)
    { //顯示雲
      if (i - displacement > 7)
      {
        newSetRow(co, i, B00000000);
      }

      else if (i - displacement < 0)
      {
        newSetRow(co, i, B00000000);
      }
      else
      {
        newSetRow(co, i, cloud[i - displacement]);
      }
    }
    if (displacement < -5)
    {
      displacement = 8;
      choose = LOW;
    }
    displacement = displacement - 1;
    time1 = millis();
  }
}

void MLED::cloudDown(uint16_t delaytime, byte co)
{
  if (millis() - time1 >= delaytime)
  {
    for (int i = 0; i <= 7; i++)
    { //顯示雲
      if (i + displacement > 7)
      {
        newSetRow(co, i, B00000000);
      }

      else if (i + displacement < 0)
      {
        newSetRow(co, i, B00000000);
      }
      else
      {
        newSetRow(co, i, cloud[i + displacement]);
      }
    }
    if (displacement < -6)
    {
      displacement = 8;
      choose = LOW;
    }
    displacement = displacement - 1;
    time1 = millis();
  }
}

void MLED::cloudLeft(uint16_t delaytime, byte co)
{
  if (millis() - time1 >= delaytime)
  {
    if (displacement >= 0)
    {
      for (int i = 0; i <= 7; i++)
      {
        slide[i] = cloud[i] >> displacement;
      }
    }
    if (displacement < 0)
    {
      for (int i = 0; i <= 7; i++)
      {
        slide[i] = cloud[i] << abs(displacement);
      }
    }

    for (int i = 0; i <= 7; i++)
    { //顯示雲
      newSetRow(co, i, slide[i]);
    }
    if (displacement < -7)
    {
      displacement = 8;
      choose = LOW;
    }

    displacement = displacement - 1;
    time1 = millis();
  }
}

void MLED::cloudRight(uint16_t delaytime, byte co)
{
  if (millis() - time1 >= delaytime)
  {
    if (displacement >= 0)
    {
      for (int i = 0; i <= 7; i++)
      {
        slide[i] = cloud[i] << displacement;
      }
    }
    if (displacement < 0)
    {
      for (int i = 0; i <= 7; i++)
      {
        slide[i] = cloud[i] >> abs(displacement);
      }
    }

    for (int i = 0; i <= 7; i++)
    { //顯示雲
      newSetRow(co, i, slide[i]);
    }
    if (displacement < -7)
    {
      displacement = 8;
      choose = LOW;
    }

    displacement = displacement - 1;
    time1 = millis();
  }
}

void MLED::toCloud(uint16_t delaytime = 300)
{
  if (choose == LOW)
  {
    cloud_choose = random(4); //雲飄的方向
    choose = HIGH;
  }

  if (cloud_choose == 0)
  {
    cloudUp(delaytime, 2);
  }
  else if (cloud_choose == 1)
  {
    cloudDown(delaytime, 2);
  }
  else if (cloud_choose == 2)
  {
    cloudLeft(delaytime, 2);
  }
  else if (cloud_choose == 3)
  {
    cloudRight(delaytime, 2);
  }
}

void MLED::scroll(uint16_t delaytime = 200, byte color = 3)
{
  if (millis() - time1 >= delaytime)
  { //每200毫秒換一次圖

    if (color != l_col)
    {          //如果顏色更換
      clear(); //清空矩陣，避免前一個顏色的字留在矩陣上
    }

    if (we == 0)
    {                      //如果是重頭開始
      p[0] = 32;           //第一個字設定為空白，32是因為等等要減32
      p[1] = s.charAt(we); //第二字設定為字串的第一個字
    }
    else
    {
      p[0] = s.charAt(we - 1); //正常情況下:會由前一個字當 第一個字
      if (we == s.length())
      {            //如果目前變換次數等於字串長度，表示要結束了
        p[1] = 32; //第二個字設定為空白，32是因為等等要減32
      }
      else
      {
        p[1] = s.charAt(we); //正常情況下:會由現在這一個字當 第二個字
      }
    }

    byte *z = fonts3[p[0] - 32]; //p[0]會是ASCⅡ值，EX: a等於97  ，而減掉32正好會是 fonts3 陣列中 a 的位置(fonts3[65])
    byte *q = fonts3[p[1] - 32]; //p[1]會是ASCⅡ值，EX: c等於99  ，而減掉32正好會是 fonts3 陣列中 a 的位置(fonts3[67])

    for (int a = 0; a <= 7; a++)
    { //儲存位移後的位置到 first_letter,second_letter
      first_letter[a] = z[a] << (new_letter);
      second_letter[a] = q[a] >> (7 - new_letter); //8    //7代表的是自一開始要位移多遠，如果位移越遠表示字跟字之間間距越大
    }

    new_letter = new_letter + 1; //位移量增加一格

    if (new_letter >= 7)
    {                 //如果位移量等於一開始的位移距離，代表第二個字要轉換成第一個字了
      new_letter = 0; //重置位移量
      we = we + 1;    //變換次數加一
    }

    if (we >= s.length() + 1)
    {         //如果變換次數等於字串的總和加一  (加一是因為加一個空白)
      we = 0; //全部重置
    }

    for (int i = 0; i <= 7; i++)
    {                                                       //第一列到第七列
      setRow(color, i, first_letter[i] | second_letter[i]); //設定每一列
    }
    l_col = color;    //儲存現在的顏色到l_col
    time1 = millis(); //將現在時間記錄到time1
  }
}

void MLED::changeStr(String st)
{
  s = st;
}


void MLED::oneChar(uint16_t num=97,byte color=3)
{
      for(int i=0;i<=7;i++){            //第一列到第七列
        newSetRow(color,i,fonts3[num-32][i]);       //設定每一列
      }	
}





void MLED::sendCommand(byte cmd)
{
  digitalWrite(dataPin, LOW); //clock:HIGH data:HIGH->LOW   開始信號
  send(cmd);
  digitalWrite(dataPin, HIGH);
}

void MLED::sendData(byte address, byte data)
{
  sendCommand(0x44); //固定地址
  digitalWrite(dataPin, LOW);
  send(0xC0 | address); //傳送位址
  send(data);           //傳送資料
  digitalWrite(dataPin, HIGH);
}

void MLED::send(byte data)
{
  for (int i = 0; i < 8; i++)
  {
    digitalWrite(clockPin, LOW); //clock低電位:可更改data
    digitalWrite(dataPin, data & 1 ? HIGH : LOW);
    data >>= 1;
    digitalWrite(clockPin, HIGH);
  }
}
