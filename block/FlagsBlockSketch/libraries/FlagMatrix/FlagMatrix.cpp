#include "FlagMatrix.h"

//clock:HIGH �� DATA:HIGH->LOW ��ܶ}�l   DATA:LOW->HIGH ��ܵ���
//clock:LOW �� DATA�~�����

MLED::MLED(uint8_t _intensity, byte dataPin, byte clockPin)
{
  this->dataPin = dataPin;   //�H���Ф覡�s��
  this->clockPin = clockPin; //�H���Ф覡�s��

  if (_intensity > 7) //�p�G�G�׳]�W�L7
    intensity = 7;    //�h�G�׵���7
  else
    intensity = _intensity; //�p�G <=7 �h�γ]�w��

  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);

  digitalWrite(dataPin, HIGH);  //data : ��
  digitalWrite(clockPin, HIGH); //clock: ��
}

void MLED::begin()
{
  digitalWrite(dataPin, LOW);      //clock:HIGH data:HIGH->LOW   �}�l�H��
  digitalWrite(clockPin, LOW);     //clock:LOW    �i�H�ǰe���
  digitalWrite(clockPin, HIGH);    //clock:HIGH   ���i�H�ǰe���
  digitalWrite(dataPin, HIGH);     //clock:HIGH data:LOW->HIGH   �����H��
  sendCommand(0x88 | (intensity)); //�G�׳]�w�Ҭ�10001xxx,��T�� 000(0)~ 111(7)
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
  { //���mdisBuffer
    disBuffer_r[j] = 0;
    disBuffer_g[j] = 0;
    row_r[j] = 0;
    row_g[j] = 0;
  }
  
  for (int i=0;i<=7;i++){
  	for(int j=0;j<=7;j++){
  		all[i][j]=0;           //���m��� 
	  }
  } 
  
  digitalWrite(dataPin, HIGH);
}

void MLED::dot(byte color, uint8_t x, uint8_t y, bool draw)
{
  x &= 0x07; //�N x�j�w�b 0~7����
  y &= 0x07; //�N y�j�w�b 0~7����
 
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

  sendCommand(0x88 | (intensity)); //�G�׳]�w�Ҭ�10001xxx,��T�� 000(0)~ 111(7)
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

  sendCommand(0x88 | (intensity)); //�G�׳]�w�Ҭ�10001xxx,��T�� 000(0)~ 111(7)
  digitalWrite(dataPin, LOW);
  digitalWrite(clockPin, LOW);
  digitalWrite(clockPin, HIGH);
  digitalWrite(dataPin, HIGH);
}

void MLED::newDot(byte color, uint8_t x, uint8_t y)
{
  x &= 0x07; //�N x�j�w�b 0~7����
  y &= 0x07; //�N y�j�w�b 0~7����
  
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
	  
  sendCommand(0x88 | (intensity)); //�G�׳]�w�Ҭ�10001xxx,��T�� 000(0)~ 111(7)
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
	  
  sendCommand(0x88 | (intensity)); //�G�׳]�w�Ҭ�10001xxx,��T�� 000(0)~ 111(7)
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
    { //�p�Gsun_choose��0
      for (int i = 0; i <= 7; i++)
      {
        newSetRow(3, i, sun_1[i]); //��ܲĤ@�ؤӶ�
      }
    }

    else if (sun_choose == 1)
    {
      for (int i = 0; i <= 7; i++)
      {
        newSetRow(3, i, sun_2[i]);
      }
    }
    sun_choose = !sun_choose; //�󴫤Ӷ����A
    time1 = millis();
  }
}

void MLED::toRain(uint16_t delaytime = 250)
{
  if (millis() - time1 >= delaytime)
  {
    if (rain_down == 0)
    { //����ܫB�n�U���@��
      rain_column = random(8);
    }

    for (int i = 0; i <= 7; i++)
    { //��ܫB��
      newSetRow(1, i, umb[i]);
    }

    if (rain_down >= 1)
    { //�p�G�w�g�U���@���F�A�n���M���W�@��
      dot(2, rain_column, rain_down - 1, 0);
    }
    dot(2, rain_column, rain_down); //��ܫB�w
    rain_down += 1;                 //�U���I�[�@

    if (rain_column == 0 || rain_column == 7)
    {               //�p�G�O�Ĥ@��M�ĤK��
      max_down = 5; //�̤j�U���Ƭ�����
    }
    else if (rain_column == 1 || rain_column == 6)
    {               //�p�G�O�ĤG��M�ĤC��
      max_down = 4; //�̤j�U���Ƭ��|��
    }

    else if (rain_column >= 2 || rain_column <= 5)
    {               //�p�G�O�ĤT���Ĥ���
      max_down = 3; //�̤j�U���Ƭ��T��
    }

    if (rain_down > max_down)
    {                                        //�p�G�U�����Ƥj��̤j�U����
      dot(2, rain_column, rain_down - 1, 0); //�N�̫�@�����
      rain_down = 0;                         //���s�p��U������
    }
    time1 = millis();
  }
}

void MLED::cloudUp(uint16_t delaytime, byte co)
{
  if (millis() - time1 >= delaytime)
  {
    for (int i = 0; i <= 7; i++)
    { //��ܶ�
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
    { //��ܶ�
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
    { //��ܶ�
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
    { //��ܶ�
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
    cloud_choose = random(4); //���ƪ���V
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
  { //�C200�@���@����

    if (color != l_col)
    {          //�p�G�C���
      clear(); //�M�ůx�}�A�קK�e�@���C�⪺�r�d�b�x�}�W
    }

    if (we == 0)
    {                      //�p�G�O���Y�}�l
      p[0] = 32;           //�Ĥ@�Ӧr�]�w���ťաA32�O�]�������n��32
      p[1] = s.charAt(we); //�ĤG�r�]�w���r�ꪺ�Ĥ@�Ӧr
    }
    else
    {
      p[0] = s.charAt(we - 1); //���`���p�U:�|�ѫe�@�Ӧr�� �Ĥ@�Ӧr
      if (we == s.length())
      {            //�p�G�ثe�ܴ����Ƶ���r����סA��ܭn�����F
        p[1] = 32; //�ĤG�Ӧr�]�w���ťաA32�O�]�������n��32
      }
      else
      {
        p[1] = s.charAt(we); //���`���p�U:�|�Ѳ{�b�o�@�Ӧr�� �ĤG�Ӧr
      }
    }

    byte *z = fonts3[p[0] - 32]; //p[0]�|�OASC���ȡAEX: a����97  �A�Ӵ32���n�|�O fonts3 �}�C�� a ����m(fonts3[65])
    byte *q = fonts3[p[1] - 32]; //p[1]�|�OASC���ȡAEX: c����99  �A�Ӵ32���n�|�O fonts3 �}�C�� a ����m(fonts3[67])

    for (int a = 0; a <= 7; a++)
    { //�x�s�첾�᪺��m�� first_letter,second_letter
      first_letter[a] = z[a] << (new_letter);
      second_letter[a] = q[a] >> (7 - new_letter); //8    //7�N���O�ۤ@�}�l�n�첾�h���A�p�G�첾�V����ܦr��r�������Z�V�j
    }

    new_letter = new_letter + 1; //�첾�q�W�[�@��

    if (new_letter >= 7)
    {                 //�p�G�첾�q����@�}�l���첾�Z���A�N��ĤG�Ӧr�n�ഫ���Ĥ@�Ӧr�F
      new_letter = 0; //���m�첾�q
      we = we + 1;    //�ܴ����ƥ[�@
    }

    if (we >= s.length() + 1)
    {         //�p�G�ܴ����Ƶ���r�ꪺ�`�M�[�@  (�[�@�O�]���[�@�Ӫť�)
      we = 0; //�������m
    }

    for (int i = 0; i <= 7; i++)
    {                                                       //�Ĥ@�C��ĤC�C
      setRow(color, i, first_letter[i] | second_letter[i]); //�]�w�C�@�C
    }
    l_col = color;    //�x�s�{�b���C���l_col
    time1 = millis(); //�N�{�b�ɶ��O����time1
  }
}

void MLED::changeStr(String st)
{
  s = st;
}


void MLED::oneChar(uint16_t num=97,byte color=3)
{
      for(int i=0;i<=7;i++){            //�Ĥ@�C��ĤC�C
        newSetRow(color,i,fonts3[num-32][i]);       //�]�w�C�@�C
      }	
}





void MLED::sendCommand(byte cmd)
{
  digitalWrite(dataPin, LOW); //clock:HIGH data:HIGH->LOW   �}�l�H��
  send(cmd);
  digitalWrite(dataPin, HIGH);
}

void MLED::sendData(byte address, byte data)
{
  sendCommand(0x44); //�T�w�a�}
  digitalWrite(dataPin, LOW);
  send(0xC0 | address); //�ǰe��}
  send(data);           //�ǰe���
  digitalWrite(dataPin, HIGH);
}

void MLED::send(byte data)
{
  for (int i = 0; i < 8; i++)
  {
    digitalWrite(clockPin, LOW); //clock�C�q��:�i���data
    digitalWrite(dataPin, data & 1 ? HIGH : LOW);
    data >>= 1;
    digitalWrite(clockPin, HIGH);
  }
}
