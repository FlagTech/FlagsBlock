'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg'); 

Blockly.Msg.ARD_PIN = "pin";
Blockly.Msg.ARD_DIGITALREAD_MSG = "read digital %1";
Blockly.Msg.ARD_DIGITALWRITE_MSG = "set digital %1 to %2";
Blockly.Msg.ARD_ANALOGREAD_MSG = "read analog %1";
Blockly.Msg.ARD_ANALOGWRITE_MSG = "set analog %1 to %2";
Blockly.Msg.ARD_PULSEIN_MSG = "read %1 pulse on %2";
Blockly.Msg.ARD_PULSETIMEOUT_MSG = "read %1 pulse on %2 timeout after %3 ms";
Blockly.Msg.ARD_SERIAL_PRINT_MSG = "%1 print %2 %3 add new line";
Blockly.Msg.ARD_FUN_RUN_LOOP_TIP = Blockly.Msg.ARD_FUN_RUN_TIP;
Blockly.Msg.ARD_FUN_RUN_SETUP_TIP = Blockly.Msg.ARD_FUN_RUN_TIP;
Blockly.Msg.ARD_MAP_MSG = "Re-maps %1 from range %2-%3 to %4-%5";

Blockly.Msg.ARD_NOTONE = "Turn off tone on pin #";
Blockly.Msg.ARD_NOTONE_POSTFIX = "";
Blockly.Msg.ARD_NOTONE_PIN = "No tone PIN#";
Blockly.Msg.ARD_NOTONE_PIN_TIP = "Stop generating a tone on a pin";
Blockly.Msg.ARD_NOTONE_TIP = "Turns the tone off on the selected pin";
Blockly.Msg.ARD_SETTONE = "Set tone on pin #";
Blockly.Msg.ARD_SETTONE_POSTFIX = "";
Blockly.Msg.ARD_TONEFREQ = "at frequency";
Blockly.Msg.ARD_TONETIME = "duration (ms):";
Blockly.Msg.ARD_TONE_FREQ = "frequency";
Blockly.Msg.ARD_TONE_PIN = "Tone PIN#";
Blockly.Msg.ARD_TONE_PIN_TIP = "Generate audio tones on a pin";
Blockly.Msg.ARD_TONE_TIP = "Sets tone on pin to specified frequency within range 31 - 65535";
Blockly.Msg.ARD_TONE_WARNING = "Frequency must be in range 31 - 65535";

// added by MEE
Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_MSG = "setup software serial port %1 %2 Rx %3 Tx %4 speed %5";
Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_TIP = "Setup software serial port";
Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_MSG = "print %2 %3 add newline to software serial %1 ";
Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_TIP = "Print text to software serial port";
Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_MSG = "characters available from software serial %1";
Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_TIP = "Get characters available from software serial port";
Blockly.Msg.ARD_SOFTWARESERIAL_READ_MSG = "one characters from software serial %1";
Blockly.Msg.ARD_SOFTWARESERIAL_READ_TIP = "Read one characters from software serial port";
Blockly.Msg.ARD_SERIAL_AVAILABLE_MSG = "characters available from serial %1";
Blockly.Msg.ARD_SERIAL_AVAILABLE_TIP = "Get characters available from software serial port";
Blockly.Msg.ARD_SERIAL_READ_MSG = "one character from serial %1";
Blockly.Msg.ARD_SERIAL_READ_TIP = "Read one characters from software serial port";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SETUP_MSG = "setup LED stripe %1 at %2 with %3 LEDs";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SETUP_TIP = "Setup LED stripe";
Blockly.Msg.ARD_FLAGLEDSTRIPE_LENGTH_MSG = "update stripe %1 to %2 LEDs";
Blockly.Msg.ARD_FLAGLEDSTRIPE_LENGTH_TIP = "update length of stripe";
Blockly.Msg.ARD_FLAGLEDSTRIPE_GETLENGTH_MSG = "length of stripe %1";
Blockly.Msg.ARD_FLAGLEDSTRIPE_GETLENGTH_TIP = "length of stripe";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SETBRIGHTNESS_MSG = "Set stripe %1's brightness to %2";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SETBRIGHTNESS_TIP = "Set stripe's brightness(0~255)";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SHOW_MSG = "light up stripe %1";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SHOW_TIP = "Light up";
Blockly.Msg.ARD_FLAGLEDSTRIPE_CLEAR_MSG = "light off stripe %1";
Blockly.Msg.ARD_FLAGLEDSTRIPE_CLEAR_TIP = "Light off";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SETPIXELCOLOR_MSG = "set %2th LED's color to R(0~255)%3 B(0~255)%4 G(0~255)%5 on stripe %1 ";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SETPIXELCOLOR_TIP = "Set color of specified LED";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SHOWALL_MSG = "light up all LEDs on stripe %1 to R(0~255)%2 G(0~255)%3 B(0~255)%4";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SHOWALL_TIP = "Lightg up all LEDs on stripe to specified color";
Blockly.Msg.ARD_FLAGLEDSTRIPE_BREATHING_MSG = "show breathing lights on stripe %1 with R(0~255)%2 G(0~255)%3 B(0~255)%4";
Blockly.Msg.ARD_FLAGLEDSTRIPE_BREATHING_TIP = "Breathing lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_THEATERCHASE_MSG = "show theater chasing lights on stripe %1 with R(0~255)%2 G(0~255)%3 B(0~255)%4 interval(ms)%5";
Blockly.Msg.ARD_FLAGLEDSTRIPE_THEATERCHASE_TIP = "Theater chasing lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_RUNNINGLIGHTS_MSG = "show running lights on stripe %1 with R(0~255)%2 G(0~255)%3 B(0~255)%4 interval(ms)%5";
Blockly.Msg.ARD_FLAGLEDSTRIPE_RUNNINGLIGHTS_TIP = "Running lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SPARKLE_MSG = "show sparkling lights on stripe %1 with R(0~255)%2 G(0~255)%3 B(0~255)%4 interval(ms)%5";
Blockly.Msg.ARD_FLAGLEDSTRIPE_SPARKLE_TIP = "Sparkling lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_FADEINOUT_MSG = "show fading in/out lights on stripe %1 with R(0~255)%2 G(0~255)%3 B(0~255)%4 interval(ms)%5";
Blockly.Msg.ARD_FLAGLEDSTRIPE_FADEINOUT_TIP = "Fading in/out lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_STROBE_MSG = "show strobe lights on stripe %1 with R(0~255)%2 G(0~255)%3 B(0~255)%4 times %5 interval(ms)%6 pause(ms)%7";
Blockly.Msg.ARD_FLAGLEDSTRIPE_STROBE_TIP = "Strobe lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_METEORLAMP_MSG = "show meteorlamp on stripe %1 with R(0~255)%2 G(0~255)%3 B(0~255)%4 length%5 interval(ms)%6";
Blockly.Msg.ARD_FLAGLEDSTRIPE_METEORLAMP_TIP = "Meteorlamp";
Blockly.Msg.ARD_FLAGLEDSTRIPE_CYLONBOUNCE_MSG = "show cylon bouncing lights on stripe %1 with R(0~255)%2 G(0~255)%3 B(0~255)%4 length%5 interval(ms)%6 pause(ms)%7";
Blockly.Msg.ARD_FLAGLEDSTRIPE_CYLONBOUNCE_TIP = "Cylon bouncing lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_RGBLOOP_MSG = "show RGB looping lights on stripe %1 with interval(ms)%2";
Blockly.Msg.ARD_FLAGLEDSTRIPE_RGBLOOP_TIP = "RGB bouncing lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_THEATERCHASERAINBOW_MSG = "show theater chasing lights in rainbow color on stripe %1 with interval(ms)%2";
Blockly.Msg.ARD_FLAGLEDSTRIPE_THEATERCHASERAINBOW_TIP = "Theater chaisng lights in rainbow color";
Blockly.Msg.ARD_FLAGLEDSTRIPE_RAINBOW_MSG = "show rainbow lights on stripe %1 with interval(ms)%2";
Blockly.Msg.ARD_FLAGLEDSTRIPE_RAINBOW_TIP = "Rainbow lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_RAINBOWCYCLE_MSG = "show cyclic rainbow lights on stripe %1 with interval(ms)%2";
Blockly.Msg.ARD_FLAGLEDSTRIPE_RAINBOWCYCLE_TIP = "Cyclic rainbow lights";
Blockly.Msg.ARD_FLAGLEDSTRIPE_STOP_MSG = "stop any effect on stripe %1";
Blockly.Msg.ARD_FLAGLEDSTRIPE_STOP_TIP = "Stop the effect";
Blockly.Msg.ARD_TEXT_ATOI_MSG = "convert %1 to integer";
Blockly.Msg.ARD_TEXT_ATOI_TIP = "Convert text to integer";
Blockly.Msg.ARD_TEXT_ATOF_MSG = "convert %1 to float";
Blockly.Msg.ARD_TEXT_ATOF_TIP = "Convert text to float";
Blockly.Msg.ARD_TEXT_LF_MSG = "new line(LF/NL)";
Blockly.Msg.ARD_TEXT_LF_TIP = "LF (0x0A)";
Blockly.Msg.ARD_TEXT_CR_MSG = "new line(CR)";
Blockly.Msg.ARD_TEXT_CR_TIP = "CR (0x0D)";
Blockly.Msg.ARD_TEXT_FORMAT_MSG = "convert %1 to %2 characters wide, right-justified string";
Blockly.Msg.ARD_TEXT_FORMAT_TIP = "convert text to specifies the number of characters right-justified string";
Blockly.Msg.ARD_TEXT_CHAR_MSG = "ASCII code %1 character";
Blockly.Msg.ARD_TEXT_CHAR_TIP = "Get the character given by an ASCII number, E.g 223 is ° Degree symbol";
Blockly.Msg.ARD_TEXT_SUBSTRING_MSG = "in text %1 get substring from letter #%2 to letter #%3";
Blockly.Msg.ARD_TEXT_SUBSTRING_TIP = "Returns a specified portion of the text (string indexes start at 0)";
Blockly.Msg.ARD_TEXT_SUBSTRING_END_MSG = "in text %1 get substring from letter #%2 to last letter";
Blockly.Msg.ARD_TEXT_SUBSTRING_END_TIP = "Returns a specified portion of the text (string indexes start at 0)";
Blockly.Msg.ARD_TEXT_FIND_MSG = "in text %1 find first occurrence of text %3 from letter #%2 ";
Blockly.Msg.ARD_TEXT_FIND_TIP = "Returns the index of the first occurrence of the first text in the second text. String indexes start at 0. Returns -1 if text is not found.";
Blockly.Msg.ARD_INPUT_PULLUP_MSG = "enable internal pullup resister at pin %1";
Blockly.Msg.ARD_INPUT_PULLUP_TIP = "enable internal pullup resister at specified pin";
Blockly.Msg.ARD_IO_PIN_NAME_MSG = "name %1 to %2";
Blockly.Msg.ARD_IO_PIN_NAME_TIP = "Specify a resonnable name for specific pin.";
Blockly.Msg.ARD_IO_SET_NAME_MSG = "set %1 for pin %2";
Blockly.Msg.ARD_IO_SET_NAME_TIP = "setting a comprehensable name for specified pin";
Blockly.Msg.ARD_I2CLCD_SETUP_MSG = "enable LCD at address %1";
Blockly.Msg.ARD_I2CLCD_SETUP_TIP = "enable I2C interface LCD. Make sure the I2C address is correct.";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG = "print %2 on row %1 of LCD";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_TIP = "print text on specified line (only alphanumeric, original text would be cleared first)";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG = "move the LCD cursor to the %1 (0~15) row of the %2 (0~1) column";
Blockly.Msg.ARD_I2CLCD_CLEAR_MSG = "clear LCD and reset the cursor back to the upper left corner";
Blockly.Msg.ARD_I2CLCD_PRINT_MSG = "print text %1 at the current position of the cursor";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_MSG = "turn on LCD backlight";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_MSG = "turn off LCD backlight";
Blockly.Msg.ARD_DHT11_READTEMP_MSG = "read celsius temperature from DHT11 module at %1";
Blockly.Msg.ARD_DHT11_READTEMP_TIP = "read celsius temperature, -1 means error";
Blockly.Msg.ARD_DHT11_READHUMI_MSG = "read relative humidity from DHT11 module at %1";
Blockly.Msg.ARD_DHT11_READHUMI_TIP = "read relative humidity, -1 means error";
Blockly.Msg.ARD_DS18B20_READTEMP_MSG = "read celsius temperature from DS18B20 module at %1";
Blockly.Msg.ARD_DS18B20_READTEMP_TIP = "read celsius temperature, -1 means error";
Blockly.Msg.ARD_ADXL345_SETUP_MSG = "enable ADXL345 acceleration module";
Blockly.Msg.ARD_ADXL345_GET_MSG = "ADXL345 acceleration value (mg) from %1 axis";
Blockly.Msg.ARD_SERVO_READ_MSG = "read SERVO from %1";
Blockly.Msg.ARD_SERVO_READ_TIP = "read a Servo angle";
Blockly.Msg.ARD_SERVO_WRITE_MSG = "set SERVO from Pin %1 to %2 (0~180) degrees";
Blockly.Msg.ARD_SERVO_WRITE_TIP = "Set a Servo to an specified angle";
Blockly.Msg.ARD_FLAGPCMASYNC_STARTPLAY_MSG = "Start playback PCM audio";
Blockly.Msg.ARD_FLAGPCMASYNC_STARTPLAY_TIP = "Start playback PCM audio uploaded onto Flag's Block";
Blockly.Msg.ARD_FLAGPCMASYNC_UPDATESOUND_MSG = "Update PCM smaple";
Blockly.Msg.ARD_FLAGPCMASYNC_UPDATESOUND_TIP = "Update PCM sample in 8KHz";
Blockly.Msg.ARD_FLAGPCMASYNC_UPDATEANDCHECKSOUND_MSG = "Update PCM sample and it's last one";
Blockly.Msg.ARD_FLAGPCMASYNC_UPDATEANDCHECKSOUND_TIP = "Update PCM sample in 8KHz and check if it's over?";
Blockly.Msg.ARD_FLAGPCMASYNC_STOPPLAY_MSG = "Stop playback PCM audio";
Blockly.Msg.ARD_FLAGPCMASYNC_STOPPLAY_TIP = "Stop playback PCM audio uploaded onto Flag's Block";
Blockly.Msg.ARD_DANCEROBOT_USE_MSG = "Use robot with RFoot %1 LFoot %2 RLeg %3 LLeg %4";
Blockly.Msg.ARD_DANCEROBOT_USE_TIP = "Use robot with specified pins";
Blockly.Msg.ARD_DANCEROBOT_TRIM_MSG = "Set robot's trim to：RFoot %1 LFoot %2 RLeg %3 LLeg %4";
Blockly.Msg.ARD_DANCEROBOT_TRIM_TIP = "Set robot's trim value";
Blockly.Msg.ARD_DANCEROBOT_GETRFTRIM_MSG = "get right foot correction angle";
Blockly.Msg.ARD_DANCEROBOT_GETLFTRIM_MSG = "get left foot correction angle";
Blockly.Msg.ARD_DANCEROBOT_GETRLTRIM_MSG = "get right leg correction angle";
Blockly.Msg.ARD_DANCEROBOT_GETLLTRIM_MSG = "get left leg correction angle";
Blockly.Msg.ARD_DANCEROBOT_SAVETRIM_MSG = "save correction angle to robot";
Blockly.Msg.ARD_DANCEROBOT_RESTORETRIM_MSG = "correct angle by saved correction angle";
Blockly.Msg.ARD_DANCEROBOT_POS_MSG = "Set robot's position to:RFoot %1 LFoot %2 RLeg %3 LLeg %4";
Blockly.Msg.ARD_DANCEROBOT_POS_TIP = "Set robot to specified position";
Blockly.Msg.ARD_DANCEROBOT_BPM_MSG = "Period per beat of %1 (%2 bits per minute)";
Blockly.Msg.ARD_DANCEROBOT_BPM_TIP = "Period per beat according to beats perminute";
Blockly.Msg.ARD_DANCEROBOT_PRIMERA_PARTE_MSG = "Let robot primera parte";
Blockly.Msg.ARD_DANCEROBOT_PRIMERA_PARTE_TIP = "primera parte";
Blockly.Msg.ARD_DANCEROBOT_LATERAL_FUERTE_MSG = "Let robot lateral fuerte with %1 side for %2 (ms)";
Blockly.Msg.ARD_DANCEROBOT_LATERAL_FUERTE_TIP = "lateral fuerte";
Blockly.Msg.SIDE = [['right','1'],['left','0']];
Blockly.Msg.ARD_DANCEROBOT_CRUSAITO_MSG = "Let robot crusaito for %1 times, %2 beats each time";
Blockly.Msg.ARD_DANCEROBOT_CRUSAITO_TIP = "crusaito";
Blockly.Msg.ARD_DANCEROBOT_SEGUNDA_PARTE_MSG = "Let robot segunda parte";
Blockly.Msg.ARD_DANCEROBOT_SEGUNDA_PARTE_TIP = "segunda parte";
Blockly.Msg.ARD_DANCEROBOT_MOON_WALK_MSG = "Let robot moonwalk to %1 in %3 beats for %2 times";
Blockly.Msg.ARD_DANCEROBOT_MOON_WALK_TIP = "Moon walk toward right";
Blockly.Msg.ARD_DANCEROBOT_FLAPPING_MSG = "Let robot flapping for %1 times, %2 beats each time";
Blockly.Msg.ARD_DANCEROBOT_FLAPPING_TIP = "Flapping";
Blockly.Msg.ARD_DANCEROBOT_GETMSPB_MSG = "the dancing rhythm of robot (ms)";
Blockly.Msg.ARD_DANCEROBOT_SETBPM_MSG = "set dancing rhythm of robot to %1 beats per minute";
Blockly.Msg.ARD_DANCEROBOT_DELAY_MSG = "Let robot pause %1 in %1 beats";
Blockly.Msg.ARD_DANCEROBOT_DRUNK_MSG = "Let robot drunken shake in %1 beats";
Blockly.Msg.ARD_DANCEROBOT_KICK_MSG = "Let robot kick %1 foot in %2 beats";
Blockly.Msg.ARD_DANCEROBOT_WALK_MSG = "%1 steps forward, %2 beats per step";
Blockly.Msg.ARD_DANCEROBOT_BACKYARD_MSG = "%1 steps backward, %2 beats per step";
Blockly.Msg.ARD_DANCEROBOT_RUN_MSG = "run %1 steps, %2 beats per step";
Blockly.Msg.ARD_DANCEROBOT_GOING_UP_MSG = "Let robot going up in %1 beats";
Blockly.Msg.ARD_DANCEROBOT_NO_GRAVITY_MSG = "Let robot no gravity in %1 beats";
Blockly.Msg.ARD_DANCEROBOT_PASITOS_MSG = "Let robot pasitos for %1 times, %2 beats each time";
Blockly.Msg.ARD_DANCEROBOT_PATADA_MSG = "Let robot patada in %1 beats";
Blockly.Msg.ARD_DANCEROBOT_TWIST_MSG = "Let robot twist for %1 times, %2 beats each time";
Blockly.Msg.ARD_DANCEROBOT_UP_DOWN_MSG = "Let robot up down for %1 times, %2 beats each time";
Blockly.Msg.ARD_DANCEROBOT_SALUDO_MSG = "Let robot saludo for %1 times, %2 beats each time";
Blockly.Msg.ARD_DANCEROBOT_SWING_MSG = "Let robot swing for %1 times, %2 beats each time";
Blockly.Msg.ARD_DANCEROBOT_REVERENCIA1_MSG = "Let robot reverencia for %1 times, %2 beats each time";
Blockly.Msg.ARD_DANCEROBOT_REVERENCIA2_MSG = "Let robot reverencia and twist inwards for %1 times, %2 beats each time";

Blockly.Msg.ARD_TYPE_ULONG = "Unsigned long";
Blockly.Msg.ARD_TYPE_DOUBLE = "Double";
Blockly.Msg.ARD_TYPE_NUMBER = "Integer";


// ------------

Blockly.Msg.COLON = ":";

Blockly.Msg.LOGIC_TERNARY_WARNING = "mismatched return types";

Blockly.Msg.BLOCK_TYPE_WARNING = 'The variable %1 has been first assigned to the "%2" type and this block tries to assign the type "%3"!';
Blockly.Msg.IO_ANALOGWRITE_WARNING = 'The analogue value set must be between 0 and 255';
Blockly.Msg.REFRESHBLOCKFIELDDROPDOWN_WARNING = 'The old pin value %1 is no longer available.';

Blockly.Msg.MATH_CHANGE2_TITLE = "change %1 %2 %3";
Blockly.Msg.MATH_CHANGE2_TOOLTIP = "Add a number to variable '%1'.";
Blockly.Msg.MATH_CHANGE2_ADD = "added by";
Blockly.Msg.MATH_CHANGE2_SUBTRACT = "subtracted by";
Blockly.Msg.MATH_CHANGE2_MULTIPLY = "multiplied by";
Blockly.Msg.MATH_CHANGE2_DIVIDE = "divided by";

Blockly.Msg.MATH_STATISTICS_OPERATOR_AVERAGE = "get average of all numbers";
Blockly.Msg.MATH_STATISTICS_OPERATOR_MAX = "get largest of all numbers";
Blockly.Msg.MATH_STATISTICS_OPERATOR_MIN = "get smallest of all numbers";
Blockly.Msg.MATH_STATISTICS_OPERATOR_SUM = "get sum of all numbers";
Blockly.Msg.MATH_STATISTICS_WARNING = "This block needs more than 1 number";

Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = "item";

Blockly.Msg.COMMENT_SIGN = "//";
Blockly.Msg.COMMENT_TEXT = "comment";
Blockly.Msg.COMMENT_GROUP = "group";

Blockly.Msg.LISTS_CREATE_WITH_MSG = "array %1 type %2 {%3}";
Blockly.Msg.LISTS_CREATE_WITH_TITLE = "array";
Blockly.Msg.LISTS_CREATE_WITH_NAME = "name";
Blockly.Msg.LISTS_CREATE_WITH_TYPE = "type";
Blockly.Msg.LISTS_CREATE_WITH_ITEMS_WARNING = "Syntax error in array items.";

Blockly.Msg.LISTS_GET_INDEX_MSG = "get array %1[%2] value";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP = "Returns the item at the specified position in a array. #0 is the first item.";

Blockly.Msg.LISTS_SET_INDEX_MSG = "set array %1[%2] value as %3";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP = "set the item at the specified position in a array. #0 is the first item.";

Blockly.Msg.LISTS_ROW_NUMBER = "row %1";

Blockly.Msg.LISTS_2DIM_CREATE_WITH_TITLE = "two-dimensional array";
Blockly.Msg.LISTS_2DIM_GET_INDEX_MSG = "get array %1[%2][%3] value";
Blockly.Msg.LISTS_2DIM_SET_INDEX_MSG = "set array %1[%2][%3] value as %4";

Blockly.Msg.CONTROLS_WAITUNTIL_TITLE = "wait until";

Blockly.Msg.PROCEDURES_CALL = "";

Blockly.Msg.COPY_BLOCK_TO_CLIPBOARD = "Copy to Clipboard";
Blockly.Msg.APPEND_BLOCK_TO_CLIPBOARD = "Append to Clipboard";
Blockly.Msg.PASTE_BLOCK_FROM_CLIPBOARD = "Paste from Clipboard";
Blockly.Msg.CLEAR_CLIPBOARD = "Clear Clipboard";
Blockly.Msg.CLIPBOARD_TOTALAMOUNT = "There are %1 copy on Clipboard";

Blockly.Msg.VARIABLES_INIT = "initialize %1 to %2";
Blockly.Msg.VARIABLES_INIT_TOOLTIP = "assign an initial value for a variable.";
Blockly.Msg.VARIABLES_INIT_NOT_IN_SETUP_WARNING = "Warning: This block may only be used within SETUP."; 
Blockly.Msg.VARIABLES_INIT_REDEFINED_WARNING = "Warning: The variable %1 can not be redefined."; 


Blockly.Msg.ARD_SERVO_READ_MSG = "read %1 the current angle of the servo motor";
Blockly.Msg.ARD_SERVO_READ_TIP = "read the current angle of the servo motor ";
Blockly.Msg.ARD_SERVO_WRITE_MSG = "set %1 the angle of the servo motor to %2 (0~180) degree";
Blockly.Msg.ARD_SERVO_WRITE_TIP = "set the angle of the servo motor";
Blockly.Msg.ARD_SERVO_USE_MSG = "attach %1 servo motor to pin %2";
Blockly.Msg.ARD_SERVO_USE_TIP = "attach the Servo variable to a pin";
Blockly.Msg.ARD_SERVO_GET_MSG = "read %1 the current angle of the servo motor";
Blockly.Msg.ARD_SERVO_GET_TIP = "read the current angle of the servo motor ";
Blockly.Msg.ARD_SERVO_PUT_MSG = "set %1 the angle of the servo motor to %2 (0~180) degree";
Blockly.Msg.ARD_SERVO_PUT_TIP = "set the angle of the servo motor";
Blockly.Msg.ARD_WEMOS_MOTOR_MOVE_MSG = "drive right and left DC motor, left speed:%1 right speed:%2";
Blockly.Msg.ARD_WEMOS_MOTOR_MOVE_TIP = "drive DC motor (a positive number means move forward, a negative number means move backward)";
Blockly.Msg.ARD_WEMOS_MOTOR_CHECK_IDLE_TIP = "avoid DC motor going down with WeMos Motor Shield due to no command received for more than 5 seconds";
Blockly.Msg.ARD_WEMOS_MOTOR_CHECK_IDLE_MSG = "avoid DC motor going down";
Blockly.Msg.ARD_ESP8266_STA_SETUP_MSG = "connect to WiFi network, SSID:%1 password:%2";
Blockly.Msg.ARD_ESP8266_STA_SETUP_TIP = "connect to a WiFi network";
Blockly.Msg.ARD_ESP8266_AP_SETUP_MSG = "set up softAP, SSID:%1 password:%2 channel:%3 (%4 hidden)";
Blockly.Msg.ARD_ESP8266_AP_SETUP_TIP = "set up a soft WiFi access point (If password not specified, the access point will be open for anybody to connect)";
Blockly.Msg.ARD_ESP8266_CONNECTED_MSG = "connected to a WiFi network?";
Blockly.Msg.ARD_ESP8266_CONNECTED_TIP = "return true if this is connected to an access point or false if not.";
Blockly.Msg.ARD_ESP8266_AP_STA_MSG = 'enable AP+STA dual mode'
Blockly.Msg.ARD_ESP8266_AP_STA_TIP = 'enable AP+STA dual mode'
Blockly.Msg.ARD_ESP8266_LOCALIP_MSG = "IP address of WiFi network";
Blockly.Msg.ARD_ESP8266_LOCALIP_TIP = "obtain IP address of WiFi network";
Blockly.Msg.ARD_ESP8266_SOFTAPIP_MSG = " IP address of softAP";
Blockly.Msg.ARD_ESP8266_SOFTAPIP_TIP = "return IP address of the soft access point’s network interface";
Blockly.Msg.ARD_ESP8266_LOCALMAC_MSG = "MAC address";
Blockly.Msg.ARD_ESP8266_LOCALMAC_TIP = "get the MAC address of the ESP8266 station’s interface";
Blockly.Msg.ARD_ESP8266_SOFTAPMAC_MSG = "MAC address of the softAP";
Blockly.Msg.ARD_ESP8266_SOFTAPMAC_TIP = "get the MAC address of the soft access point’s network interface";
Blockly.Msg.ARD_ESP8266_WEBSERVER_SETUP_MSG = "create Web server on port %1";
Blockly.Msg.ARD_ESP8266_WEBSERVER_SETUP_TIP = "create a Web server that listens for incoming connections on the specified port";
Blockly.Msg.ARD_ESP8266_WEBSERVER_SECURE_SETUP_MSG = "create HTTPS Web server on port %1";
Blockly.Msg.ARD_ESP8266_WEBSERVER_SECURE_SETUP_TIP = "create a HTTPS Web server that listens for incoming connections on the specified port";
Blockly.Msg.ARD_ESP8266_WEBSERVER_HANDLECLIENT_MSG = "handles HTTP request";
Blockly.Msg.ARD_ESP8266_WEBSERVER_HANDLECLIENT_TIP = "Web server handles HTTP request from clients";
Blockly.Msg.ARD_ESP8266_WEBSERVER_ON_MSG = "routes request path %2 to %1 function";
Blockly.Msg.ARD_ESP8266_WEBSERVER_SEND_MSG = "sends response with HTTP status %1 MIME %2 data %3";
Blockly.Msg.ARD_ESP8266_WEBSERVER_HAS_ARG_MSG = "argument %1 existed?";
Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_BY_NAME_MSG = "value of the argument %1";
Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_NUM_MSG = "number of the arguments";
Blockly.Msg.ARD_ESP8266_WEBSERVER_ARG_BY_NUM_MSG = "value of (#%1)th argument";
Blockly.Msg.ARD_ESP8266_WEBSERVER_KEY_BY_NUM_MSG = "name of (#%1)th argument";
Blockly.Msg.ARD_ESP8266_WEBSERVER_ON2_MSG = "routes request path %2 to %1 function";
Blockly.Msg.ARD_ESP8266_WEBSERVER_NO_HANDLER_MSG = "no available function";
Blockly.Msg.ARD_BLYNK_SETUP_MSG = "Enable Blynk with AUTH:%3 and WiFi SSID:%1 password:%2";
Blockly.Msg.ARD_BLYNK_SETUP_TIP = "Connect to specified WiFi network and Blynk services";
Blockly.Msg.ARD_BLYNK_RUN_MSG = "handle Blynk requests";
Blockly.Msg.ARD_BLYNK_RUN_TIP = "Handle requests from Blynk";
Blockly.Msg.ARD_BLYNK_BIND_MSG = "set %1 as callback to serve data to %2 Blynk's virtual pin";
Blockly.Msg.ARD_BLYNK_BIND_TIP = "Specify function for serving data to Blynk's cirtain virtual pin";
Blockly.Msg.ARD_MQTT_SETUP_MSG = "set MQTT server:%1 port:%2";
Blockly.Msg.ARD_MQTT_SETUP_TIP = "Set the host and port of MQTT server";
Blockly.Msg.ARD_MQTT_CONNECT_MSG = "connect to MQTT server with client ID:%1 user name：%2 password：%3";
Blockly.Msg.ARD_MQTT_CONNECT_TIP = "Connect to MQTT server (leave user name and password empty if not required)";
Blockly.Msg.ARD_MQTT_RUN_MSG = "handle MQTT requests";
Blockly.Msg.ARD_MQTT_RUN_TIP = "Handle requests from MQTT server";
Blockly.Msg.ARD_MQTT_CONNECTED_MSG = "MQTT server connected?";
Blockly.Msg.ARD_MQTT_CONNECTED_TIP = "Check if connected to MQTT server?";
Blockly.Msg.ARD_MQTT_SUBSCRIBE_MSG = "subscribe MQTT topic: %1";
Blockly.Msg.ARD_MQTT_SUBSCRIBE_TIP = "Subscribe specified MQTT topic";
Blockly.Msg.ARD_MQTT_BIND_MSG = "set %1 as callback to get MQTT messages";
Blockly.Msg.ARD_MQTT_BIND_TIP = "Specify function to accept MQTT messages";
Blockly.Msg.ARD_IRREMOTE_SEND_USE_MSG = "enable IR sender at pin %1";
Blockly.Msg.ARD_IRREMOTE_SEND_USE_TIP = "Enable IR sender module";
Blockly.Msg.ARD_IRREMOTE_SEND_NEC_MSG = "send NEC format command:%1";
Blockly.Msg.ARD_IRREMOTE_SEND_NEC_TIP = "Send NEC IR remote controller command";





