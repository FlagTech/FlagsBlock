/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic">' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
// '    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops">' +
// '    <block type="arduino_loop"></block>' +
'    <block type="arduino_setup"></block>' +
'    <block type="controls_if"></block>' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_waitUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change2">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_statistics"></block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="arduino_map">' +
'      <value name="FROMLOW">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="FROMHIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">1024</field>' +
'        </block>' +
'      </value>' +
'      <value name="TOLOW">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="TOHIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">1024</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGFFT_fft">' +
'      <field name="SAMPLES">128</field>' +
'      <field name="FREQ">7000</field>' +
'    </block>' +
'    <block type="FLAGFFT_vReal">' +
'      <value name="INDEX">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGFFT_major">' +
'    </block>' +
'    <block type="FLAGFFT_adjMajor">' +
'      <value name="START">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="END">' +
'        <block type="math_number">' +
'          <field name="NUM">25</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +

// added by MEE
'    <block type="text_atoi"></block>' +
'    <block type="text_atof"></block>' +
'    <block type="text_cr"></block>' +
'    <block type="text_lf"></block>' +
'    <block type="text_format">' +
'      <value name="WIDTH">' +
'        <block type="math_number">' +
'          <field name="NUM">8</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="text_char">' +
'      <value name="CHARCODE">' +
'        <block type="math_number">' +
'          <field name="NUM">223</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="text_substring">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="text_substring_end">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="text_find">' +
'      <value name="SUBSTRING">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="text_char_code">' +
'      <value name="TEXT">' +
'        <block type="text">' +
'          <field name="TEXT"></field>' +
'        </block>' +
'      </value>' +
'      <value name="INDEX">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
// ------------
'  </category>' +
'  <sep></sep>' +
'  <category id="catArray" name="Array">' +
'    <block type="array_create_with"></block>' +
'    <block type="array_create_num">' + 
'      <field name="NUM">1</field>' +
'    </block>' +
'    <block type="array_get_index">' +
'      <value name="INDEX">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="array_set_index">' +
'      <value name="INDEX">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="array_2dim_create_with"></block>' +
'    <block type="array_2dim_get_index">' +
'      <value name="INDEX1">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="INDEX2">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="array_2dim_set_index">' +
'      <value name="INDEX1">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="INDEX2">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="io_allpins"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_init"></block>' +
'    <block type="variables_init">' +
'      <value name="VALUE">' +
'        <block type="io_allpins"></block>' +
'      </value>' +
'    </block>' +
// '    <block type="variables_set">' +
// '      <value name="VALUE">' +
// '        <block type="variables_set_type"></block>' +
// '      </value>' +
// '    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
// '  <category id="catInputOutput" name="Input/Output">' +
// '    <block type="io_digitalwrite">' +
// '      <value name="STATE">' +
// '        <block type="io_highlow"></block>' +
// '      </value>' +
// '    </block>' +
// '    <block type="io_digitalwrite_var">' +
// '      <value name="STATE">' +
// '        <block type="io_highlow"></block>' +
// '      </value>' +
// '    </block>' +
// '    <block type="io_digitalread"></block>' +
// '    <block type="io_digitalread_var"></block>' +
// '    <block type="io_builtin_led">' +
// '      <value name="STATE">' +
// '        <block type="io_highlow"></block>' +
// '      </value>' +
// '    </block>' +
// '    <block type="io_analogwrite"></block>' +
// '    <block type="io_analogwrite_var"></block>' +
// '    <block type="io_analogread"></block>' +
// '    <block type="io_pulsein">' +
// '      <value name="PULSETYPE">' +
// '        <shadow type="io_highlow"></shadow>' +
// '      </value>' +
// '    </block>' +
// '    <block type="io_pulsetimeout">' +
// '      <value name="PULSETYPE">' +
// '        <shadow type="io_highlow"></shadow>' +
// '      </value>' +
// '      <value name="TIMEOUT">' +
// '        <block type="math_number"></block>' +
// '      </value>'+
// '    </block>' +
// '    <block type="io_highlow"></block>' +
// '  </category>' +
'  <category id="catOutput" name="Output">' +
// '    <block type="io_digitalwrite">' +
// '      <value name="STATE">' +
// '        <block type="io_highlow"></block>' +
// '      </value>' +
// '    </block>' +
'    <block type="io_digitalwrite_var">' +
'      <value name="PIN">' +
'        <block type="io_allpins">' +
'        </block>' +
'      </value>' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalwrite_var">' +
'      <value name="PIN">' +
'        <block type="variables_get">' +
'        </block>' +
'      </value>' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
// '    <block type="io_analogwrite">' +
// '      <value name="NUM">' +
// '        <block type="math_number">' +
// '          <field name="NUM">0</field>' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
'    <block type="io_analogwrite_var">' +
'      <value name="PIN">' +
'        <block type="io_pwmpins">' +
'        </block>' +
'      </value>' +
'      <value name="NUM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogwrite_var">' +
'      <value name="PIN">' +
'        <block type="variables_get">' +
'        </block>' +
'      </value>' +
'      <value name="NUM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="io_allpins"></block>' +
'    <block type="io_highlow"></block>' +
// '    <block type="io_pin_name">'+
// '      <value name="PIN">' +
// '        <block type="io_allpins">' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catInput" name="Input">' +
// Added by MEE
'    <block type="io_input_pullup"></block>' +
//-------------
// '    <block type="io_digitalread"></block>' +
'    <block type="io_digitalread_var">' +
'      <value name="PIN">' +
'        <block type="io_allpins">' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread_var">' +
'      <value name="PIN">' +
'        <block type="variables_get">' +
'        </block>' +
'      </value>' +
'    </block>' +
//'    <block type="io_analogread"></block>' +
'    <block type="io_analogread_var">' +
'      <value name="PIN">' +
'        <block type="io_analogpins">' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogread_var">' +
'      <value name="PIN">' +
'        <block type="variables_get">' +
'        </block>' +
'      </value>' +
'    </block>' +
// '    <block type="io_pulsein">' +
// '      <value name="PULSETYPE">' +
// '        <shadow type="io_highlow"></shadow>' +
// '      </value>' +
// '    </block>' +
// '    <block type="io_pulsetimeout">' +
// '      <value name="PULSETYPE">' +
// '        <shadow type="io_highlow"></shadow>' +
// '      </value>' +
// '      <value name="TIMEOUT">' +
// '        <block type="math_number"></block>' +
// '      </value>'+
// '    </block>' +
'    <block type="io_pulsetimeout_var">' +
'      <value name="PIN">' +
'        <block type="io_allpins">' +
'        </block>' +
'      </value>' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>'+
'    </block>' +
'    <block type="io_allpins"></block>' +
'    <block type="io_highlow"></block>' +
// '    <block type="io_pin_name">'+
// '      <value name="PIN">' +
// '        <block type="io_allpins">' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">1000000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catAudio" name="Audio">' +
// '    <block type="io_tone">' +
// '      <field name="TONEPIN">0</field>' +
// '      <value name="FREQUENCY">' +
// '        <shadow type="math_number">' +
// '          <field name="NUM">220</field>' +
// '        </shadow>' +
// '      </value>' +
// '    </block>' +
// '    <block type="io_notone"></block>' +
'    <block type="io_tone_var">' +
'      <value name="TONEPIN">' +
'        <block type="io_allpins">' +
'        </block>' +
'      </value>' +
'      <value name="FREQUENCY">' +
'        <block type="math_number">' +
'          <field name="NUM">261</field>' +
'        </block>' +
'      </value>' +
'      <value name="DURATION">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="io_tone_var">' +
'      <value name="TONEPIN">' +
'        <block type="variables_get">' +
'        </block>' +
'      </value>' +
'      <value name="FREQUENCY">' +
'        <block type="math_number">' +
'          <field name="NUM">261</field>' +
'        </block>' +
'      </value>' +
'      <value name="DURATION">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone_var">' +
'      <value name="TONEPIN">' +
'        <block type="io_allpins">' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone_var">' +
'      <value name="TONEPIN">' +
'        <block type="variables_get">' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagpcmasync_startplaybgm">' + 
'      <field name="NUM">1</field>' +
'    </block>' +
'    <block type="flagpcmasync_startplay"></block>' +
'    <block type="flagpcmasync_updatesound"></block>' +
'    <block type="flagpcmasync_updateandchecksound"></block>' +
'    <block type="flagpcmasync_stopplay"></block>' +
'    <block type="io_tone_nummusic">' +
'      <value name="TONEPIN">' +
'        <block type="io_allpins">' +
'        </block>' +
'      </value>' +
'      <value name="TONENUMMUSIC">' +
'        <block type="text">' +
'          <field name="TEXT">1 2 3 4 5 6 7</field>' +
'        </block>' +
'      </value>' +
'      <field name="TEMPOTIME">300</field>' +
'    </block>' +
'    <block type="io_multitone">' +
'      <value name="TONEPIN">' +
'        <block type="io_allpins"></block>' +
'      </value>' +
'      <value name="FREQ">' +
'        <block type="math_number">' +
'          <field name="NUM">261</field>' +
'        </block>' +
'      </value>' +
'      <value name="DURATION">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMotors" name="Motors">' +
'    <block type="servo_use"></block>' +
'    <block type="servo_put">' +
'      <value name="SERVO_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="servo_get"></block>' +
// '    <block type="servo_write">' +
// '      <value name="SERVO_PIN">' +
// '        <block type="io_allpins">' +
// '          <field name="PIN">4</field>' +
// '        </block>' +
// '      </value>' +
// '      <value name="SERVO_ANGLE">' +
// '        <block type="math_number">' +
// '          <field name="NUM">90</field>' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
// '    <block type="servo_read">' +
// '      <value name="SERVO_PIN">' +
// '        <block type="io_allpins">' +
// '          <field name="PIN">4</field>' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
// '    <block type="stepper_config">' +
// '      <field name="STEPPER_PIN1">1</field>' +
// '      <field name="STEPPER_PIN2">2</field>' +
// '      <value name="STEPPER_STEPS">' +
// '        <block type="math_number">' +
// '          <field name="NUM">100</field>' +
// '        </block>' +
// '      </value>' +
// '      <value name="STEPPER_SPEED">' +
// '        <block type="math_number">' +
// '          <field name="NUM">10</field>' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
// '    <block type="stepper_step">' +
// '      <value name="STEPPER_STEPS">' +
// '        <block type="math_number">' +
// '          <field name="NUM">10</field>' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
'    <block type="wemos_motor_move">' +
'      <value name="L_MOTOR">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="R_MOTOR">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="wemos_motor_check_idle"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catSerial" name="Serial">' +
'    <block type="serial_setup">' +
'      <field name="SPEED">9600</field>' +
'    </block>' +
'    <block type="serial_print"></block>' +
'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
//-------------------
// '    <block type="spi_setup"></block>' +
// '    <block type="spi_transfer"></block>' +
// '    <block type="spi_transfer_return"></block>' +
'    <block type="serial_available"></block>' +
'    <block type="serial_read"></block>' +
'  </category>' +
// added by MEE
'  <category id="catSoftwareSerial" name="SoftwareSerial">' +
'    <block type="softwareserial_setup">' +
'      <value name="INPUT_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">7</field>' +
'        </block>' +
'      </value>' +
'      <value name="OUTPUT_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">8</field>' +
'        </block>' +
'      </value>' +
'      <field name="SPEED">19200</field>' +
'    </block>' +
'    <block type="softwareserial_print"></block>' +
'    <block type="softwareserial_available"></block>' +
'    <block type="softwareserial_read"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catESP8266" name="ESP8266">' +
'    <block type="esp8266_sta_setup">' +
'      <value name="SSID">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="PINCODE">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="esp8266_ap_setup">' +
'      <value name="SSID">' +
'        <block type="text">' +
'          <field name="TEXT">ESP8266</field>' +
'        </block>' +
'      </value>' +
'      <value name="PINCODE">' +
'        <block type="text">' +
'          <field name="TEXT"></field>' +
'        </block>' +
'      </value>' +
'      <field name="CHANNEL">1</field>' +
'    </block>' +
'    <block type="esp8266_wifi_ap_sta"></block>' +
'    <block type="esp8266_connected"></block>' +
'    <block type="esp8266_localIP"></block>' +
'    <block type="esp8266_softAPIP"></block>' +
'    <block type="esp8266_localMAC"></block>' +
'    <block type="esp8266_softAPMAC"></block>' +
'    <block type="esp8266_webserver_setup">' +
'      <field name="PORT">80</field>' +
'    </block>' +
'    <block type="esp8266_webserver_secure_setup">' +
'      <field name="PORT">443</field>' +
'    </block>' +
'    <block type="esp8266_webserver_handleclient"></block>' +
'    <block type="esp8266_webserver_on2">' +
'      <field name="PATH">/cmd</field>' +
'    </block>' +
'    <block type="esp8266_webserver_send">' +
'      <value name="STATUS">' +
'        <block type="math_number">' +
'          <field name="NUM">200</field>' +
'        </block>' +
'      </value>' +
'      <value name="MIMETYPE">' +
'        <block type="text">' +
'          <field name="TEXT">text/plain</field>' +
'        </block>' +
'      </value>' +
'      <value name="CONTENT">' +
'        <block type="text">' +
'          <field name="TEXT">OK</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="esp8266_webserver_has_arg">' +
'      <value name="ARGNAME">' +
'        <block type="text">' +
'          <field name="TEXT"></field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="esp8266_webserver_arg_by_name">' +
'      <value name="ARGNAME">' +
'        <block type="text">' +
'          <field name="TEXT"></field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="esp8266_webserver_arg_num"></block>' +
'    <block type="esp8266_webserver_arg_by_num">' +
'      <value name="NUM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="esp8266_webserver_key_by_num">' +
'      <value name="NUM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="esp8266_http_get">' +
'      <value name="URL">' +
'        <block type="text">' +
'          <field name="TEXT"></field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="esp8266_http_get_response"></block>' +
'    <block type="esp8266_urlencode"></block>' +
'    <block type="esp8266_urldecode"></block>' +
'    <block type="tcpclient_setup">' +
'      <value name="IP">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="PORT">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="tcpclient_print"></block>' +
'    <block type="tcpclient_available"></block>' +
'    <block type="tcpclient_read"></block>' +
'    <block type="tcpclient_connected"></block>' +
'    <block type="tcpclient_stop"></block>' +
'    <block type="esp8266_sta_multi">' +
'      <value name="SSID">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="PINCODE">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="esp8266_sta_run"></block>' +
'  </category>' +
'  <category id="catESP8266IOT" name="ESP8266IOT">' +
'    <block type="Blynk_setup">' +
'      <value name="SSID">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="PINCODE">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="AUTH">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="Blynk_run"></block>' +
'    <block type="Blynk_bind"></block>' +
'    <block type="Blynk_bind_get"></block>' +
'    <block type="Blynk_param"></block>' +
'    <block type="mqtt_setup">' +
'      <value name="SERVER">' +
'        <block type="text">' +
'          <field name="TEXT">broker.mqtt-dashboard.com</field>' +
'        </block>' +
'      </value>' +
'      <field name="PORT">1883</field>' +
'    </block>' +
'    <block type="mqtt_connect">' +
'      <value name="NAME">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="ID">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="PWD">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="mqtt_subscribe">' +
'      <value name="CHANNEL">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="mqtt_connected"></block>' +
'    <block type="mqtt_run"></block>' +
'    <block type="mqtt_bind"></block>' +
'    <block type="mqtt_topic"></block>' +
'    <block type="mqtt_msg"></block>' +
'    <block type="mqtt_publish">' +
'      <value name="TOPIC">' +
'        <block type="text">' +
'          <field name="TEXT"></field>' +
'        </block>' +
'      </value>' +
'      <value name="PAYLOAD">' +
'        <block type="text">' +
'          <field name="TEXT"></field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="ifttt_event">' +
'      <value name="NAME">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="APIKEY">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="VALUE1">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="VALUE2">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="VALUE3">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFlagLedStripe" name="FlagLedStripe">' +
'    <block type="flagledstripe_setup">' +
'      <value name="LEDPIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">6</field>' +
'        </block>' +
'      </value>' +
'      <field name="NUM">15</field>' +
'    </block>' +
'    <block type="flagledstripe_length">' +
'      <value name="NUM">' +
'        <block type="math_number">' +
'          <field name="NUM">15</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_getlength">' +
'    </block>' +
'    <block type="flagledstripe_setbrightness">' +
'      <field name="BRIGHTNESS">128</field>' +
'    </block>' +
'    <block type="flagledstripe_show"></block>' +
'    <block type="flagledstripe_clear"></block>' +
'    <block type="flagledstripe_setpixelcolor">' +
'      <value name="NUM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_showall">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_breathing">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_fadeinout">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_theaterchase">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">50</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_runninglights">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">80</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_sparkle">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_strobe">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">50</field>' +
'        </block>' +
'      </value>' +
'      <value name="PAUSE">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_meteorlamp">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="LEN">' +
'        <block type="math_number">' +
'          <field name="NUM">8</field>' +
'        </block>' +
'      </value>' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">35</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_cylonbounce">' +
'      <value name="RED">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">128</field>' +
'        </block>' +
'      </value>' +
'      <value name="EYESIZE">' +
'        <block type="math_number">' +
'          <field name="NUM">2</field>' +
'        </block>' +
'      </value>' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">70</field>' +
'        </block>' +
'      </value>' +
'      <value name="DELAY">' +
'        <block type="math_number">' +
'          <field name="NUM">70</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_rgbloop">' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">5</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_theaterchaserainbow">' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">50</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_rainbow">' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">20</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_rainbowcycle">' +
'      <value name="INTERVAL">' +
'        <block type="math_number">' +
'          <field name="NUM">20</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="flagledstripe_stop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catI2CLCD" name="I2CLCD">' +
'    <block type="I2CLCD_setup">' +
'      <field name="I2C_ADDR">0x3F</field>' +
'    </block>' +
'    <block type="I2CLCD_printLine">' +
'      <field name="ROW">0</field>' +
'    </block>' +
'    <block type="I2CLCD_move">' +
'      <value name="Y">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="X">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="I2CLCD_clear"></block>' +
'    <block type="I2CLCD_print"></block>' +
'    <block type="I2CLCD_backlightOn"></block>' +
'    <block type="I2CLCD_backlightOff"></block>' +
'  </category>' +
'  <category id="catTM1637" name="TM1637">' +
'    <block type="TM1637_setup">' +
'      <value name="CLK_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">2</field>' +
'        </block>' +
'      </value>' +
'      <value name="DIO_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">3</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="TM1637_clear"></block>' +
'    <block type="TM1637_setbrightness">' +
'      <field name="BRIGHTNESS">7</field>' +
'    </block>' +
'    <block type="TM1637_SHOWNUMDEC">' +
'      <value name="POSITION">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="DIGITS">' +
'        <block type="math_number">' +
'          <field name="NUM">4</field>' +
'        </block>' +
'      </value>' +
'      <value name="NUM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="TM1637_DELETE">' +
'      <value name="POSITION">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <category id="catFLAG74HC595" name="FLAG74HC595">' +
'    <block type="FLAG74HC595_setup">' +
'      <value name="SDI_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">D3</field>' +
'        </block>' +
'      </value>' +
'      <value name="SCLK_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">D2</field>' +
'        </block>' +
'      </value>' +
'      <value name="LOAD_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">D1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAG74HC595_clear"></block>' +
'    <block type="FLAG74HC595_print">' +
'      <value name="NUM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAG74HC595_set">' +
'      <value name="DIGIT2">' +
'        <block type="text">' +
'          <field name="TEXT">00010001</field>' +
'        </block>' +
'      </value>' +
'      <value name="DIGIT1">' +
'        <block type="text">' +
'          <field name="TEXT">11101110</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <category id="catFLAGMATRIX" name="FLAGMATRIX">' +
'    <block type="FLAGMATRIX_setup">' +
'      <value name="DATA_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">D7</field>' +
'        </block>' +
'      </value>' +
'      <value name="CLK_PIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">D5</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_clear"></block>' +
'    <block type="FLAGMATRIX_newdot">' +
'      <value name="COLOR">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="X">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="Y">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_newrow">' +
'      <value name="COLOR">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="ROW">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="DATA">' +
'        <block type="math_number">' +
'          <field name="NUM">0b00010001</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_dot">' +
'      <value name="COLOR">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="X">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="Y">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="DRAW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_row">' +
'      <value name="COLOR">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="ROW">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="DATA">' +
'        <block type="math_number">' +
'          <field name="NUM">0b00010001</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_intensity">' +
'      <value name="INTENSITY">' +
'        <block type="math_number">' +
'          <field name="NUM">4</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_sun">' +
'      <value name="DELAY">' +
'        <block type="math_number">' +
'          <field name="NUM">750</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_rain">' +
'      <value name="DELAY">' +
'        <block type="math_number">' +
'          <field name="NUM">250</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_cloud">' +
'      <value name="DELAY">' +
'        <block type="math_number">' +
'          <field name="NUM">300</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_marquee">' +
'      <value name="CONTENT">' +
'        <block type="text">' +
'          <field name="TEXT">HELLO WORLD</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_scroll">' +
'      <value name="DELAY">' +
'        <block type="math_number">' +
'          <field name="NUM">200</field>' +
'        </block>' +
'      </value>' +
'      <value name="COLOR">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="FLAGMATRIX_char">' +
'      <value name="CHAR">' +
'        <block type="text">' +
'          <field name="TEXT">A</field>' +
'        </block>' +
'      </value>' +
'      <value name="COLOR">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catSensors" name="sensors">' +
'    <block type="DHT11_readTemp">' +
'      <value name="DATAPIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">2</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="DHT11_readHumi">' +
'      <value name="DATAPIN">' +
'        <block type="io_allpins">' +
'          <field name="PIN">2</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="DS18B20_readTemp">' +
'      <value name="DATAPIN">' +
'        <block type="io_allpins">' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="ADXL345_get"></block>' +
'    <block type="irremote_send_use"></block>' +
'    <block type="irremote_send_nec">' +
'      <value name="CMD">' +
'        <block type="text">' +
'          <field name="TEXT">0xFFFFFFFF</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="irremote_recv_use"></block>' +
'    <block type="irremote_recv_decoded"></block>' +
'    <block type="irremote_recv_result"></block>' +
'    <block type="irremote_recv_resume"></block>' +
'    <block type="apds9930_use"></block>' +
'    <block type="apds9930_light"></block>' +
'    <block type="apds9930_proximity"></block>' +
// added by Sam
'    <block type="MAX30100_setup"></block>' +
'    <block type="MAX30100_getSpO2"></block>' +
'    <block type="MAX30100_getir"></block>' +
'    <block type="MAX30100_getred"></block>' +
// -------------
'    <block type="TTP229_use">' +
'      <field name="SCL_PIN">D2</field>' +
'      <field name="SDO_PIN">D3</field>' +
'    </block>' +
'    <block type="TTP229_get"></block>' +

'  </category>' +
'  <sep></sep>' +
'  <category id="catDanceRobot" name="DanceRobot">' +
'    <block type="dancerobot_use">' +
'      <field name="RFPIN">D1</field>' +
'      <field name="LFPIN">D2</field>' +
'      <field name="RLPIN">D3</field>' +
'      <field name="LLPIN">D4</field>' +
'    </block>' +
'    <block type="dancerobot_trim">' +
'      <value name="RF_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="LF_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="RL_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="LL_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_getRFtrim"></block>' +
'    <block type="dancerobot_getLFtrim"></block>' +
'    <block type="dancerobot_getRLtrim"></block>' +
'    <block type="dancerobot_getLLtrim"></block>' +
'    <block type="dancerobot_pos">' +
'      <value name="RF_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'      <value name="LF_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'      <value name="RL_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'      <value name="LL_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_setbpm">' +
'      <value name="BPM">' +
'        <block type="math_number">' +
'          <field name="NUM">121</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_getmspb">' +
'    </block>' +
'    <block type="dancerobot_delay">' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_primera_parte">' +
'    </block>' +
'    <block type="dancerobot_lateral_fuerte">' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_crusaito">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_segunda_parte">' +
'    </block>' +
'    <block type="dancerobot_moonWalk">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_flapping">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_drunk">' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_kick">' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_walk">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_backyard">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_goingUp">' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_noGravity">' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_pasitos">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_patada">' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_twist">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_upDown">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_saludo">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_swing">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_reverencia1">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_reverencia2">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_run">' +
'      <value name="STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TEMPO">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="dancerobot_savetrim">' +
'    </block>' +
'    <block type="dancerobot_restoretrim">' +
'    </block>' +
'  </category>' +
// added by Sam
'  <category id="catAI" name="AI">' +
'    <block type="onn_use"></block>' +
'    <block type="tnn_use"></block>' +
'    <block type="rnn_use">' +
'      <value name="RNN_weight">' +
'        <block type="math_number">' +
'          <field name="NUM">0.8</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="onn_initran"></block>' +
'    <block type="tnn_initran"></block>' +
'    <block type="ann_set">' +
'      <value name="NNVARNUM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="ann_get"></block>' +
'    <block type="onn_train">' +
'      <value name="TDATA">' +
'        <block type="text">' +
'          <field name="TEXT">0,0:0,0</field>' +
'        </block>' +
'      </value>' +
'      <value name="LRATE">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="LTIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="tnn_train">' +
'      <value name="TDATA">' +
'        <block type="text">' +
'          <field name="TEXT">0,0:0,0</field>' +
'        </block>' +
'      </value>' +
'      <value name="LRATE">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="LTIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="onn_getoutput">' +
'      <value name="INPUT">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="tnn_getoutput">' +
'      <value name="INPUT">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="rnn_getoutput">' +
'      <value name="INPUT">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
// -------------
'  <category id="catData" name="Data">' +
'    <block type="json_parse">' +
'      <value name="JSON_STR">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="json_success"></block>' +
'    <block type="json_node_str">' +
'      <value name="PATH">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'  </category>' +
// -------------
'  <category id="catMisc" name="Misc">' +
'    <block type="misc_comment_single"></block>' +
'    <block type="misc_comment"></block>' +
'  </category>' +
'</xml>';
