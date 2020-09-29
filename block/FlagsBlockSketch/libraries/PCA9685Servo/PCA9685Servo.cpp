#include <PCA9685Servo.h>

bool Servo::freqSetted = false;
Adafruit_PWMServoDriver Servo::pwm = Adafruit_PWMServoDriver();

Servo::Servo() {
  if(!freqSetted) {
    // pwm = Adafruit_PWMServoDriver();
    pwm.begin();
    pwm.setPWMFreq(50);
    freqSetted = true;
  }
  pinNum = -1;
}

uint8_t Servo::attach(int pin, int min, int max) {
  pinNum = pin;
  maxPulse = max;
  minPulse = min;
}

uint8_t Servo::attach(int pin) {
  attach(pin, MIN_PULSE_WIDTH, MAX_PULSE_WIDTH);
}

void Servo::detach() {
  pinNum = -1;
}

void Servo::write(int value) {
  int pulse;
  if(attached()) {
    pulse = map(value, 0, 180, minPulse, maxPulse);
    writeMicroseconds(pulse);
  }
}

void Servo::writeMicroseconds(int value) {
  int pwmValue;
  if(attached()) {
    pwmValue = map(value, 0, REFRESH_INTERVAL, 0, 4096);
    pwm.setPWM(pinNum, 0, pwmValue);
    microSeconds = value;
    angle = map(value, minPulse, maxPulse, 0, 180);
  }
}

int Servo::read() {return angle;} 
int Servo::readMicroseconds() {return microSeconds;}
bool Servo::attached() {return (pinNum != -1);}
