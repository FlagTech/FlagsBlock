// Flag's Block 產生的草稿碼

// setup() 會先被執行且只會執行一次
void setup() {
  pinMode(13, OUTPUT);
}

// loop() 裡面的程式會不斷重複執行
void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);

}