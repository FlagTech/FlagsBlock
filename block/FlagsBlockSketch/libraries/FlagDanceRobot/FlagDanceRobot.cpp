#include <EEPROM.h>
#include <FlagDanceRobot.h>

//-- 預設的伺服馬達接法
/*
           --------------- 
          |     O   O     |
          |---------------|
右腳 5==> |               | <== 左腳 4
           --------------- 
              ||     ||
右腳掌 7==> -----   ------  <== 左腳掌 6
          |-----   ------|
*/

FlagDanceRobot::FlagDanceRobot() {
  #ifdef ESP8266
  EEPROM.begin(sizeof(int) * 4);
  #endif
}

void FlagDanceRobot::attach(byte footR, byte footL, byte legR, byte legL) {
  servo[0].attach(footR); // 右腳掌
  servo[1].attach(footL); // 左腳掌
  servo[2].attach(legR);  // 右腳
  servo[3].attach(legL);  // 左腳
}

void FlagDanceRobot::attach() {
  attach(7, 6, 5, 4);
}
  
void FlagDanceRobot::detach() {
  for(int i = 0;i <4;i++) {
    servo[i].detach();
  }
}

void FlagDanceRobot::setTrim(int footR, int footL, int legR, int legL) {
  servo[0].SetTrim(footR);
  servo[1].SetTrim(footL);
  servo[2].SetTrim(legR);
  servo[3].SetTrim(legL);
}

void FlagDanceRobot::getTrim(int &footR, int &footL, int &legR, int &legL) {
  footR = servo[0].getTrim();
  footL = servo[1].getTrim();
  legR = servo[2].getTrim();
  legL = servo[3].getTrim();
}

int FlagDanceRobot::getRFTrim() {
  return servo[0].getTrim();
}

int FlagDanceRobot::getLFTrim() {
  return servo[1].getTrim();
}
int FlagDanceRobot::getRLTrim() {
  return servo[2].getTrim();
}
int FlagDanceRobot::getLLTrim() {
  return servo[3].getTrim();
}

void FlagDanceRobot::getSavedTrim(int* trims) {
  int baseAddr = 0;
  int trim = 0;

  for(int i = 0;i < 4;i++) {
    EEPROM.get(baseAddr, trim);
    trims[i] = (trim < 90 && trim > -90) ? trim : 0;
    baseAddr += sizeof(int);
  }
}

void FlagDanceRobot::setPosition(byte footR, byte footL, byte legR, byte legL) {
  if(footR >= 0 && footR <= 180) {
    servo[0].SetPosition(footR);
    oldPosition[0] = footR;
    
  }
  if(footL >= 0 && footL <= 180) {
    servo[1].SetPosition(footL);
    oldPosition[1] = footL;
  }
  if(legR >= 0 && legR <= 180) {
    servo[2].SetPosition(legR);
    oldPosition[2] = legR;
  }
  if(legL >= 0 && legL <= 180) {
    servo[3].SetPosition(legL);
    oldPosition[3] = legL;
  }
}

int FlagDanceRobot::setBPM(int BPM) {
  t = 60 * 1000UL / BPM;
  return t;
}

void FlagDanceRobot::saveTrim() {
  int baseAddr = 0;
  for(int i = 0;i < 4;i++) {
    EEPROM.put(baseAddr, servo[i].getTrim());
    baseAddr += sizeof(int);
  }
  #ifdef ESP8266
  EEPROM.commit();
  #endif
}

void FlagDanceRobot::restoreTrim() {
  int baseAddr = 0;
  int trim = 0;
  for(int i = 0;i < 4;i++) {
    EEPROM.get(baseAddr, trim);
    servo[i].SetTrim(trim);
    baseAddr += sizeof(int);
  }
}

//---以下是工具函式--------------------------
// 以 90° 為中心, 在 T 時間內以 sin 函數圓滑在
// 90- A + 0 ~ 90 + A + O 內漸次變化角度
void FlagDanceRobot::oscillate(int A[], int O[], int T, double phase_diff[]) {
  for (int i = 0;i < 4;i++) {
    servo[i].SetO(O[i]);
    servo[i].SetA(A[i]);
    servo[i].SetT(T);
    servo[i].SetPh(phase_diff[i]);
  }
  double ref = millis();
   for (double x = ref;x < T + ref;x = millis()) {
     for (int i = 0;i < 4;i++){
       servo[i].refresh();
       delay(0);
     }
  }
}

// 在指定的 time 時間內, 每隔 INTERVALTIME 變化角度, 
// 從 oldPosition[] 變化到 newPosition[] 指定的角度
void FlagDanceRobot::moveServos(int time, int  newPosition[]) {
  for(int i = 0;i < 4;i++)	
    increment[i] = 
      ((newPosition[i]) - oldPosition[i]) / (time / INTERVALTIME);
  
  final_time =  millis() + time; 
  iteration = 1; 
  while(millis() < final_time){ // 還沒到結束時間 
    interval_time = millis() + INTERVALTIME;
    // 控制每一 INTERVALTIME 內只變換 1 次角度
    // 避免萬一真的遇到 millis() 從 unsigned long 最大值變為 0 時
    // 重複變化角度
    oneTime=0; 
    while(millis() < interval_time){	  
      if(oneTime < 1){ 
        for(int i = 0;i < 4;i++) {
          servo[i].SetPosition(
            oldPosition[i] + (iteration * increment[i]));
        }
        iteration++;
        oneTime++;
      }
      delay(0);
    }     
  }   

  for(int i = 0;i < 4;i++){	
    oldPosition[i] = newPosition[i];
  }   
}

// ------- 以下都是舞步 --------------
// 右左右輪流點腳尖重複 3 次再踮腳尖 30°
// 重複上述動作 3 次
// 右左右輪流點腳尖重複 2 次
// 左扭右扭踩腳步 1 次後再踮腳尖 50°
void FlagDanceRobot::primera_parte() {
  unsigned long pause;
  int move1[4] = {60,120,90,90};
  int move2[4] = {90, 90,90,90};
  int move3[4] = {40,140,90,90};

  for(int x = 0; x < 3; x++){
    // 點右腳尖半拍、左腳尖 1/4 拍、右腳尖 1/4 拍, 停 1 拍
    // 總共 3 次
    for(int i = 0; i < 3; i++) {
      lateral_fuerte(1, t / 2);
      lateral_fuerte(0, t / 4);
      lateral_fuerte(1, t / 4);
      delay(t);
    }
  
    pause = millis();
    setPosition(90, 90, 90, 90);
    moveServos(t * 0.4, move1);         // 踮腳 30°
    moveServos(t * 0.4, move2);         // 回到水平
    while(millis() < (pause + t * 2)) { // 等 2 拍
      delay(0);
    } 
  }
  
  // 點右腳尖半拍、左腳尖 1/4 拍、右腳尖 1/4 拍, 停 1 拍
  // 總共 2 次
  for(int i = 0;i < 2;i++){
    lateral_fuerte(1, t / 2);
    lateral_fuerte(0, t / 4);
    lateral_fuerte(1, t / 4);
    delay(t);
  }
    
  pause=millis();
  setPosition(90, 90, 90, 90);
  crusaito(1,t * 1.4);
  moveServos(t * 1, move3); // 踮腳尖 50°
  setPosition(90, 90, 90, 90);
  while(millis() < (pause + t * 4)) {
    delay(0);
  }
}

// 點腳尖
// 依 side：1 (右腳板) 0 (左腳板) 從 90° 往下轉 50°
// 維持 tempo/2 時間後轉回 90°, 停 tempo/2
void FlagDanceRobot::lateral_fuerte(boolean side, int tempo) {
  setPosition(90, 90, 90, 90);
  if(side)
    servo[0].SetPosition(40);
  else
    servo[1].SetPosition(140);
  delay(tempo / 2);
  servo[0].SetPosition(90);
  servo[1].SetPosition(90);
  delay(tempo / 2);
}

// 左扭右扭踩步伐
// 雙腳都在 T 時間內從 120° 圓滑轉到 60° 再圓滑轉回 120°
// 右腳板在 T 時間內從  75° 圓滑轉到 100° 再轉到 50° 再到 75°
// 左腳板在 T 時間內從 128° 圓滑轉到 130° 再轉到 100° 再到 128°
void FlagDanceRobot::crusaito(int steps, int T) {
  int A[4] = { 25, 25, 30, 30};
  int O[4] = {-15, 15,  0,  0};
  double phase_diff[4] = {
    DEG2RAD(0), 
    DEG2RAD(180 + 120), 
    DEG2RAD(90), 
    DEG2RAD(90)
  }; 
  
  for(int i = 0;i < steps;i++) oscillate(A, O, T, phase_diff);
}

// 左右腳原地左右 10° 轉 3 次, 第 4 次同時左右踮腳 50° 後放下
// 以上重複 7 次
// 再重複 3 次左右腳原地左右轉 10° 同時踮腳 50° 後放下
void FlagDanceRobot::segunda_parte() {
  unsigned long pause;
  int move1[4] = {90,90, 80,100};
  int move2[4] = {90,90,100, 80};
  int move3[4] = {90,90, 80,100};
  int move4[4] = {90,90,100, 80};
    
  int move5[4] = {40,140, 80,100};
  int move6[4] = {40,140,100, 80};
  int move7[4] = {90, 90, 80,100};
  int move8[4] = {90, 90,100, 80};
       
  int move9[4] =  {40,140, 80,100};
  int move10[4] = {40,140,100, 80};
  int move11[4] = {90, 90, 80,100};
  int move12[4] = {90, 90,100, 80};
  
  for(int x = 0;x < 7;x++){ 
    for(int i = 0;i < 3;i++){
      pause = millis();
      moveServos(t * 0.15, move1);
      moveServos(t * 0.15, move2);
      moveServos(t * 0.15, move3);
      moveServos(t * 0.15, move4);
      while(millis() < (pause + t)) {
        delay(0);
      }
    }
    pause = millis();
    moveServos(t * 0.15, move5);
    moveServos(t * 0.15, move6);
    moveServos(t * 0.15, move7);
    moveServos(t * 0.15, move8);
    while(millis() < (pause + t)) {
      delay(0);
    }
  }
 
  for(int i = 0;i < 3; i++){
    pause = millis();
    moveServos(t * 0.15, move9);
    moveServos(t * 0.15, move10);
    moveServos(t * 0.15, move11);
    moveServos(t * 0.15, move12);
    while(millis() < (pause + t)) {
      delay(0);
    }
  }
}

// 月球慢路向右橫移
// 左腳板踮腳尖 (縮腳) 右腳隨後踮腳尖往右伸過去
void FlagDanceRobot::moonWalkRight(int steps, int T) {
  int A[4]= {  25, 25, 0, 0};
  int O[4] = {-15 ,15, 0, 0};
  double phase_diff[4] = {
    DEG2RAD(0), 
    DEG2RAD(180 + 120), 
    DEG2RAD(90), 
    DEG2RAD(90)
  }; 
  
  for(int i = 0;i < steps;i++) oscillate(A, O, T, phase_diff);
}

// 月球漫步向左橫移
// 右腳板踮腳尖 (縮腳) 左腳隨後踮腳尖往左伸過去
void FlagDanceRobot::moonWalkLeft(int steps, int T) {
  int A[4]= {  25, 25, 0, 0};
  int O[4] = {-15, 15, 0, 0};
  double phase_diff[4] = {
    DEG2RAD(0), 
    DEG2RAD(180 - 120), 
    DEG2RAD(90), 
    DEG2RAD(90)
  }; 
  
  for(int i = 0;i < steps;i++) oscillate(A, O, T, phase_diff);
}

// 僵屍跳 (小雀步)
void FlagDanceRobot::flapping(int steps, int T) {
  int A[4]= {15, 15, 8, 8};
  int O[4] = {-A[0], A[1], 0, 0};
  double phase_diff[4] = {
    DEG2RAD(0), 
    DEG2RAD(180), 
    DEG2RAD(90), 
    DEG2RAD(-90)
  };
  
  for(int i = 0;i < steps;i++) oscillate(A, O, T, phase_diff);
}

// 左右搖晃酒醉效果
// 輪流翹左腳尖+踮右腳尖、踮左腳尖+翹右腳尖
void FlagDanceRobot::drunk (int tempo) {
  unsigned long pause;

  pause = millis();
  
  int move1[] = { 60, 70,90,90};
  int move2[] = {110,120,90,90};
  int move3[] = { 60, 70,90,90};
  int move4[] = {110,120,90,90};
  
  moveServos(tempo * 0.235, move1);
  moveServos(tempo * 0.235, move2);
  moveServos(tempo * 0.235, move3);
  moveServos(tempo * 0.235, move4);
  while(millis() < (pause + tempo)) {
    delay(0);
  }
}

// 踮左腳尖後點兩下腳尖
void FlagDanceRobot::kickLeft(int tempo) {
  setPosition(90, 90, 90, 90);
  delay(tempo);
  // 踮右腳尖, 微翹左腳尖 (像是三七步)
  servo[0].SetPosition(50); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo);

  // 點一下右腳尖
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo / 4);
  servo[0].SetPosition(30); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo / 4);

  // 再點一下右腳尖
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo / 4);
  servo[0].SetPosition(30); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo / 4);

  // 回復姿勢
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo);
}

// 踮右腳尖後點兩下腳尖
void FlagDanceRobot::kickRight(int tempo) {
  setPosition(90, 90, 90, 90);
  delay(tempo);

  // 踮左腳尖, 微翹右腳尖 (像是三七步)
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(130); //pie izquiero
  delay(tempo);

  // 點一下左腳尖
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(100); //pie izquiero
  delay(tempo / 4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(150); //pie izquiero
  delay(tempo / 4);

  // 再點一下左腳尖
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(80); //pie izquiero
  delay(tempo / 4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(150); //pie izquiero
  delay(tempo / 4);

  // 回復姿勢
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(100); //pie izquiero
  delay(tempo);
}

// 左扭右扭往前走
// 踮腳尖時腳往外扭
void FlagDanceRobot::walk(int steps, int T) {
  int A[4] = {15, 15, 30, 30};
  int O[4] = { 0,  0,  0,  0};
  double phase_diff[4] = {
    DEG2RAD(0), 
    DEG2RAD(0), 
    DEG2RAD(90), 
    DEG2RAD(90)
  };
  
  for(int i = 0;i < steps;i++) oscillate(A, O, T, phase_diff);
}

// 左扭右扭倒退步
// 踮腳尖時腳往內扭
void FlagDanceRobot::backyard(int steps, int T) {
  int A[4] = {15, 15, 30, 30};
  int O[4] = { 0,  0,  0,  0};
  double phase_diff[4] = {
    DEG2RAD(0), 
    DEG2RAD(0), 
    DEG2RAD(-90), 
    DEG2RAD(-90)
  }; 
  
  for(int i = 0;i < steps;i++) oscillate(A, O, T, phase_diff);
}

// 漸次踮腳尖升高身體
// 每隔 tempo 時間腳板往下轉 10° 踮腳尖, 共轉 6 次, 最後停 8 拍
void FlagDanceRobot::goingUp(int tempo) {
  unsigned long pause;

  pause = millis();
  setPosition(90, 90, 90, 90);
  delay(tempo);
  servo[0].SetPosition(80);
  servo[1].SetPosition(100);
  delay(tempo);
  servo[0].SetPosition(70);
  servo[1].SetPosition(110);
  delay(tempo);
  servo[0].SetPosition(60);
  servo[1].SetPosition(120);
  delay(tempo);
  servo[0].SetPosition(50);
  servo[1].SetPosition(130);
  delay(tempo);
  servo[0].SetPosition(40);
  servo[1].SetPosition(140);
  delay(tempo);
  servo[0].SetPosition(30);
  servo[1].SetPosition(150);
  delay(tempo);
  servo[0].SetPosition(20);
  servo[1].SetPosition(160);
  delay(tempo);
  
  while(millis() < pause + 8 * t) {
    delay(0);
  }
}

// 無重力效果
// 漸漸踮左腳尖、翹右腳尖, 會變成單獨右腳撐地效果, 
// 再回到兩腳板都踩平
void FlagDanceRobot::noGravity(int tempo) {
  int move1[4] = {120,140,90,90};
  int move2[4] = {140,140,90,90};
  int move3[4] = {120,140,90,90};
  int move4[4] = { 90, 90,90,90};
  
  setPosition(90, 90, 90, 90);
  moveServos(tempo * 2, move1);
  moveServos(tempo * 2, move2);
  delay(tempo * 2);
  moveServos(tempo * 2, move3);
  moveServos(tempo * 2, move4);
}

// Single ladies 才會用到的舞步
void FlagDanceRobot::pasitos(int steps, int tempo) {
  unsigned long pause;  
  int move1[4] = {90, 120,  60,  60};
  int move2[4] = {90,  90,  90,  90};
  int move3[4] = {60,  90, 120, 120};
  int move4[4] = {90,  90,  90,  90};
  
  for(int i = 0; i < steps; i++) {
    pause = millis();
    moveServos(tempo * 0.25, move1);
    moveServos(tempo * 0.25, move2);
    moveServos(tempo * 0.25, move3);
    moveServos(tempo * 0.25, move4);
    while(millis() < (pause + t)) {
      delay(0);
    }
  }
}

void FlagDanceRobot::patada (int tempo) {
  setPosition(90, 90, 90, 90);
  servo[0].SetPosition(115);
  servo[1].SetPosition(120);
  delay(tempo / 4);
  servo[0].SetPosition(115);
  servo[1].SetPosition(70);
  delay(tempo / 4);
  servo[0].SetPosition(100);
  servo[1].SetPosition(80);
  delay(tempo / 4);
  servo[0].SetPosition(90);
  servo[1].SetPosition(90);
  delay(tempo / 4);
}

void FlagDanceRobot::twist(int steps, int tempo) {
  unsigned long pause;
  int move1[4] = {90, 90, 50, 130};
  int move2[4] = {90, 90, 90,  90};
    
  for(int x = 0;x < steps;x++){ 
      pause=millis();
      moveServos(tempo * 0.1, move1);
      moveServos(tempo * 0.1, move2);
      while(millis() < (pause + tempo)) {
        delay(0);
      }
  }
}

void FlagDanceRobot::upDown(int steps, int tempo) {
  unsigned long pause;
  int move1[4] = {50, 130, 90, 90};
  int move2[4] = {90,  90, 90, 90};
    
  for(int x = 0; x < steps; x++){ 
      pause = millis();
      moveServos(tempo * 0.2, move1);
      delay(tempo * 0.4);
      moveServos(tempo * 0.2, move2);
      while(millis() < (pause + tempo)) {
        delay(0);
      }
  }
}

void FlagDanceRobot::saludo(int steps, int tempo) {
  unsigned pause;
  int move1[4] = { 60, 60, 90, 90};
  int move2[4] = {120, 60, 90, 90};
    
  for(int x = 0; x < steps; x++){ 
      pause = millis();
      setPosition(90, 90, 90, 90);
      moveServos(tempo * 0.25, move1);
      moveServos(tempo * 0.25, move2);
      moveServos(tempo * 0.25, move1);
      moveServos(tempo * 0.25, move2);
      while(millis() < (pause + tempo)) {
        delay(0);
      }
  }
}

void FlagDanceRobot::swing(int steps, int T) {
  int A[4]= {  25, 25, 0, 0};
  int O[4] = {-15, 15, 0, 0};
  double phase_diff[4] = {
    DEG2RAD(0), 
    DEG2RAD(0), 
    DEG2RAD(90), 
    DEG2RAD(90)
  };
  
  for(int i = 0;i < steps;i++)
    oscillate(A, O, T, phase_diff);
}

void FlagDanceRobot::reverencia1 (int steps, int tempo) {
  unsigned long pause;
  int move1[4] = {130, 50, 90, 90};
  int move2[4] = { 90, 90, 90, 90};
    
  for(int x = 0; x < steps; x++){ 
      pause = millis();
      setPosition(90, 90, 90, 90);
      moveServos(tempo * 0.3, move1);
      delay(tempo * 0.2);
      moveServos(tempo * 0.3, move2);
      while(millis() < (pause + tempo)) {
        delay(0);
      }
  }
}

void FlagDanceRobot::reverencia2 (int steps, int tempo) {
  unsigned long pause;
  int move1[4] = {130, 50, 90,  90};
  int move2[4] = {130, 50, 60, 120};
  int move3[4] = { 90, 90, 90,  90};
    
  for(int x = 0; x < steps; x++){ 
      pause = millis();
      setPosition(90, 90, 90, 90);
      delay(tempo * 0.2);
      moveServos(tempo * 0.05, move1);
      moveServos(tempo * 0.05, move2);
      moveServos(tempo * 0.05, move1);
      moveServos(tempo * 0.05, move2);
      delay(tempo * 0.2);
      moveServos(tempo * 0.1, move3);
      while(millis()< (pause + tempo)) {
        delay(0);
      }
  }
}

void FlagDanceRobot::run(int steps, int T) {
  int A[4]= {10, 10, 10, 10};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {
    DEG2RAD( 0), 
    DEG2RAD( 0), 
    DEG2RAD(90), 
    DEG2RAD(90)}; 
  
  for(int i = 0;i < steps;i++)
    oscillate(A, O, T, phase_diff);
}

FlagDanceRobot flagDanceRobot = FlagDanceRobot();