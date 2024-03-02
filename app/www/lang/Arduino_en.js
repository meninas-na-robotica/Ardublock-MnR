'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.ledstrip_WS2811B_nameR = "Addressable led strip WS2811";
Blockly.Msg.Hardware_monitor = "Hardware Monitor - Read!";
Blockly.Msg.com1 = "Select USB port";
Blockly.Msg.com2 = "Select USB please" ;
Blockly.Msg.check = "Check...";
Blockly.Msg.upload = "Upload...";
Blockly.Msg.error = "ERROR: Blocks not connected";
Blockly.Msg.verif = "Check the code first ";
Blockly.Msg.save = "Save as format";
//Blockly.Msg.update = "Update";
//Blockly.Msg.new_update = "A new version is available, do you want to download and install it now?" ;
Blockly.Msg.yes = "yes";
Blockly.Msg.no = "no";
//Blockly.Msg.uptodate = "Version is up to date!" ;
//Blockly.Msg.download = "Download completed, the application will install and restart ...";
// common to all blocks
//Blockly.Msg.HELPURL = " ";  
Blockly.Msg.pin = "pin";
Blockly.Msg._AT = "at";
Blockly.Msg.AV = "forward";
Blockly.Msg.AR = "backward";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "right";
Blockly.Msg.left = "left";
Blockly.Msg.LetR = "right & left";
Blockly.Msg.direction = "direction";
Blockly.Msg.vitesse = "speed ";
// categories (menu)
Blockly.Msg.CAT_MNR= "Miniprojetos"
Blockly.Msg.CAT_FLORES= "1) Copo de Flores"; //CATEGORIA DO MINI PROJETO COPO DE FLORES
Blockly.Msg.CAT_NIVEL_AGUA= "2) Nível de Água"; //CATEGORIA DO MINI PROJETO NIVEL DE AGUA
Blockly.Msg.CAT_UMIDADE= "3) Umidade"; //CATEGORIA DO MINI PROJETO UMIDADE DA TERRA
Blockly.Msg.CAT_VENTILADOR= "4) Ventilador"; //CATEGORIA DO MINI PROJETO VENTILADOR
Blockly.Msg.CAT_CAR_BLUETOOTH= "5) Carro Bluetooth"; //CATEGORIA DO MINI PROJETO CARRINHO BLUETOOTH
Blockly.Msg.CAT_LIXEIRA= "6) Lixeira"; //CATEGORIA DO MINI PROJETO LIXEIRA ULTRASSONICA
Blockly.Msg.CAT_CAR_ULTRASSOM= "7) Carro Ultrassônico"; //CATEGORIA DO MINI PROJETO CARRINHO ULTRASSONICO
Blockly.Msg.CAT_HORTA= "8) Horta Automatizada"; //CATEGORIA DO MINI PROJETO DE HORTA AUTOMATIZADA
Blockly.Msg.CAT_STOCKAGE = "Storage";
Blockly.Msg.CAT_numerique = "- Digital";
Blockly.Msg.CAT_analogique = "~ Analog";
Blockly.Msg.CAT_wifi = "Web";
Blockly.Msg.CAT_TAB = "Array";
Blockly.Msg.CAT_VARIABLESN = "Variable";
Blockly.Msg.CAT_list = "List";
Blockly.Msg.CAT_servo = "↷ Servo";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "Logic";
Blockly.Msg.CAT_MATH = "Math";
Blockly.Msg.CAT_TEXT = "Text";
Blockly.Msg.CAT_VARIABLES = "Simple";
Blockly.Msg.CAT_FUNCTIONS = "Function";
Blockly.Msg.CAT_ARDUINO = "Structure";
Blockly.Msg.CAT_ARDUINO_IN = "Input/Output";
Blockly.Msg.CAT_ARDUINO_OUT = "Exit";
Blockly.Msg.CAT_ARDUINO_TIME = "Time";
Blockly.Msg.CAT_actionneur = "Motor";
Blockly.Msg.CAT_com = "Communication";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "Serial COM";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- Soft Serial";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Motor Stepper";
Blockly.Msg.CAT_ultrason = "⇣ Sensor";
Blockly.Msg.CAT_bluetooth = "☏ Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ LED Mouth";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ LED Eyes";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ LCD Screen";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "♫ Audio";
Blockly.Msg.CAT_OTTO = "⊟ Otto";
Blockly.Msg.CAT_OTTOH = "⊟ Humanoid";
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
Blockly.Msg.CAT_NEOPIXEL = "☄ NeoPixel";


Blockly.Msg.CAT_MODEMX = "Communication";
Blockly.Msg.CAT_BITEPROM = "Flash memory";
Blockly.Msg.CAT_MOTORI = "Motors";
Blockly.Msg.CAT_SENSOROUTP = "Input sensors";
Blockly.Msg.CAT_SENSORINPT = "Output sensors";
Blockly.Msg.CAT_SENSORDRUGIE = "Other sensors";
Blockly.Msg.CAT_SENSORRECORD = "Audio modules";
Blockly.Msg.CAT_INDIKATORI = "Indicators";
Blockly.Msg.CAT_DISPLAYU = "Display LCD s";
Blockly.Msg.CAT_TFTDISPLAYU = "TFT Display";
Blockly.Msg.CAT_LEONARDO = "Leonardo";
Blockly.Msg.CYCLESAR = "Cycles";
Blockly.Msg.ESPWEB = "ESP 8266 12F";
//Wireless
//Blockly.Msg.esp8266_init_tooltip = "initialization of the wifi module and connection with the indicated parameters";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "key";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "gateway";
Blockly.Msg.esp8266_6 = "mask";
Blockly.Msg.esp8266_7 = [["client", "client"], ["server", "server"]];
Blockly.Msg.esp8266_8 = "port";
Blockly.Msg.esp8266_9 = [["dynamic", "dynamic"], ["static", "static"]];
Blockly.Msg.esp8266_10 = "address";
//Blockly.Msg.esp8266_recept_tooltip = "reception";
//Blockly.Msg.esp8266_url = " ";// do not translate
//Blockly.Msg.esp8266_html_tooltip = "";
//Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "send HTML page";
//Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "start server";
//Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "if in the query we find";
Blockly.Msg.esp8266_request_container = "we find";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interrupt: when a';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "disable interrupt on pin";
//Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Specifies an action to take when an external interrupt (4 possible modes) occurs on pin 2 or 3";
//Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Disable the previously specified external interrupt";
Blockly.Msg.LKL_MODE = 'is detected on the pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]]; // do not translate
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["slowly", "1000"], ["fast", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["seconds", "s"], ["milliseconds", "m"], ["microseconds", "u"]];
Blockly.Msg.time = [["seconds", "s"], ["milliseconds", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(high state)", Blockly.Msg.high], ["0(low state)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["UP", Blockly.Msg.high], ["DOWN", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["turn on", Blockly.Msg.high], ["turn off", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['rising edge', 'RISING'], ['falling edge', 'FALLING'], ['changing state', 'CHANGE'], ['low state', Blockly. Msg.low]];
Blockly.Msg.irq = [['rising edge', 'Pin.IRQ_RISING'], ['falling edge', 'Pin.IRQ_FALLING'], ['high state', 'Pin.IRQ_HIGH_LEVEL'], ["low state "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["humidity", "h"], ["temperature", "t"]];
Blockly.Msg.couleur = [["blue", "blue"], ["yellow", "yellow"], ["red", "red"], ["green", "green"]];
Blockly.Msg.sens = [["forward", "a"], ["turn right", "d"], ["turn left", "g"]];
//sensor
Blockly.Msg.VL53L0X="Laser distance sensor";
//Blockly.Msg.VL53L0X_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="distance measured by laser";
//Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nreturn Distance measured by laser in mm";
Blockly.Msg.bme280="Atmospheric pressure sensor";
//Blockly.Msg.bme280_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="atmospheric pressure";
//Blockly.Msg.bme280_pressure_tooltip="BME280 :\nreturn atmospheric pressure in hPa";
Blockly.Msg.inter="switch is";
//Blockly.Msg.inter_tooltip="returns true (false) if the switch is (is not) at the indicated position";
Blockly.Msg.mc005="presence detected on the pin";
//Blockly.Msg.mc005_tooltip="MC005:\nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.bp = "button pressed on the pin";
//Blockly.Msg.bp_tooltip = "returns true (false) if a pushbutton is (is not) pressed";
Blockly.Msg.dht11_tooltip="DHT11 :\nreturns the humidity of the air (from 20 to 80%) or \n the temperature (from 2 to 50�C)";
//Blockly.Msg.dht22_tooltip = "DHT22: \nreturns the humidity of the air (from 0 to 100%) or \n the temperature (from -40 to 80 � C)";
Blockly.Msg.suiveur_ligne = "black line detected on the pin";
//Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \nreturns true (false) if a black line is (is not) detected";
Blockly.Msg.light = "brightness on the pin";
//Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.hum = "soil moisture on the pin";
//Blockly.Msg.hum_tooltip = "CAP 615: \nreturns soil moisture from 0 to 100%";
//Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.grove_ldr = "brightness on the pin";
//Blockly.Msg.grove_ldr_tooltip = "returns the measured brightness \n0: no light \n100: very intense light";
Blockly.Msg.potar = "cursor position on the pin";
//Blockly.Msg.potar_tooltip = "returns a value based on the cursor position \n0: cursor left \n255: cursor right";
Blockly.Msg.lm35 = "temperature on the pin";
//Blockly.Msg.lm35_tooltip = "LM35: \nreturns the measured temperature in degrees celcius (from 0 to 80 �)";
Blockly.Msg.ultrason_1 = "distance < limit";
Blockly.Msg.ultrason_2 = "returns a High state if the measured distance is less than the limit";
Blockly.Msg.ultrason_distance1 = "distance measured by ultrasound";
//Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSound sensor that allows to make distance measurements (of 3 cm and 4 m) \nindicate the pins of the Arduino to which will be connected TRIG and ECHO";
Blockly.Msg.ultrason = "ultrasound pins";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \nreturns the distance measured in cm by the ultrasonic detector";
//Blockly.Msg.ultrason_helpurl = " "; // do not translate
Blockly.Msg.pir = "motion detected ";
Blockly.Msg.feu = "flame detected ";
Blockly.Msg.presence = "obstacle detected ";
Blockly.Msg.appui = "touch ";
//Blockly.Msg.pir_tooltip = "HC-SR501: \nreturns true (false) if a presence is (is not) detected";
//Blockly.Msg.feu_tooltip = "CAP168: \nreturns true (false) if a flame is (is not) detected";
//Blockly.Msg.presence_tooltip = "CAP711: \nreturns true (false) if a contact has (did not) take place";
//Blockly.Msg.appui_tooltip = "CAP831: \nreturns true (false) if a support is (is not) detected";
// bluetooth
Blockly.Msg.bluetooth1 = "if the data received by bluetooth";
//Blockly.Msg.bluetooth1_tooltip = "bluetooth data reception \nconnecting module HC-06 to pins 0 and 1 \net cross Rx and Tx pins";
Blockly.Msg.bluetooth2 = "send by bluetooth";
//Blockly.Msg.bluetooth2_tooltip = "sends data via bluetooth \nconnecting module HC-06 to pins 0 and 1 \net cross pins Rx and Tx";
//Blockly.Msg.bluetooth_init_tooltip = "";
//Blockly.Msg.bluetooth_helpurl = " "; // do not translate
//LCD screen
Blockly.Msg.lcd_fond = "bottom";
Blockly.Msg.LCD = "LCD screen";
//Blockly.Msg.LCDi2c_tooltip = "initializes the 2-line, 16-character I2C LCD with RGB backlight. \n Displayer <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
//Blockly.Msg.LCD_tooltip = "initializes the LCD, 2 lines and 16 characters, indicating the pins to connect";
//Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = " ";// do not translate
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "show on LCD";
//Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "display the text in the specified location";
//Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "write the text (s) on the LCD screen";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "line 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "line 2";
Blockly.Msg.LCD_line = "line";
Blockly.Msg.LCD_col = "column";
Blockly.Msg.LCD_raz = "erase the LCD screen";
//Blockly.Msg.LCD_raz_tooltip = "clear screen";
Blockly.Msg.lcd_aff_symbole = "display the symbol";
//Blockly.Msg.lcd_aff_symbole_tooltip = "show the symbol that has been defined before";
Blockly.Msg.lcd_symbole = "define the symbol";
//Blockly.Msg.lcd_symbole_tooltip = "definition of a character for the LCD: \n 0 turns off a pixel \n 1 lights a pixel";
// structure
Blockly.Msg.loop = "Loop";
Blockly.Msg.init = "Setup";
//Blockly.Msg.base_setup_loop = "The initialization function: \nIt is used to initialize the variables, the direction of the pins ... \nIt is executed only once \nThe loop function: \nThis is the main part of the program, all the blocks placed here will run in loop and indefinitely (several thousand times per second) ";
//Blockly.Msg.loop_tooltip = "all blocks placed here will run in a loop and indefinitely (several thousand times per second)";
//Blockly.Msg.begin_tooltip = "this block is used to define the order in which the program should execute";
Blockly.Msg.begin = "START";
Blockly.Msg.def = "Declaration";
//Blockly.Msg.def_tooltip = "all the blocks placed here will only be executed once, this is where the different sensors or actuators are configured";
Blockly.Msg.END = "END";
//Blockly.Msg.END_tooltip = "Stop the program, blocks placed afterwards will be ignored";
//Blockly.Msg.code_tooltip = "Type an instruction here that is not in blocks";
//matrix
Blockly.Msg.matriceLC = "LED X";
Blockly.Msg.matrice_create_aff = "Create block 'display symbol %1'";
Blockly.Msg.matrice_create_symbole = "Create the block 'set the symbol %1'";
Blockly.Msg.matrice = "matrix";
Blockly.Msg.matrice8x8_tooltip = "Initialisation of the matrix to 64 LEDs, it is necessary to indicate the pins of the arduino to which will be connected DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "define the symbol";
Blockly.Msg.matrice8x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turn off an LED \n 1 turn on an LED";
Blockly.Msg.matrice8x8_efface = "erase the matrix";
Blockly.Msg.matrice8x8_aff = "display the symbol";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice8x8_del_tooltip = "Turns on (off) an LED in the array indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice8x8_efface_tooltip = "Turn off all LEDs in the matrix";
//Blockly.Msg.matrice8x8_helpurl = " ";// do not translate
Blockly.Msg.matrice16x8_tooltip = "Initialization of the array to 128 LEDs. \nMatrix <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "define the symbol";
Blockly.Msg.matrice16x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turns off an LED \n 1 turns on an LED";
Blockly.Msg.matrice16x8_efface = "turn off the LEDs of the matrix";
Blockly.Msg.matrice16x8_aff = "display the symbol";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice16x8_del_tooltip = "Turns on (off) an LED in the matrix indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice16x8_efface_tooltip = "Turn off all LEDs in the matrix";
//Blockly.Msg.matrice16x8_helpurl = "";
//time
Blockly.Msg.millis ="time elapsed in";
Blockly.Msg.millis_start="start a timekeeping in";
//Blockly.Msg.millis_tooltip="";
//Blockly.Msg.millis_start_tooltip="";
//Blockly.Msg.ARDUINO_INOUT_Pulsein = "returns the duration in microseconds of a UP or DOWN pulse applied to a pin.If the parameter value is HIGH, the block waits for the pin to go HIGH, starts then the timing, waits for the pin to go back to the LOW level and then stop the timing ";
Blockly.Msg.ARDUINO_BASE_DELAY = "Delay";
//Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Specify the wait time in seconds, milliseconds or microseconds. \nThe program does nothing else during this time";
Blockly.Msg.millis1 = "duration in";
Blockly.Msg.millis2 = "from the beginning";
//Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "returns the duration in milliseconds, seconds or microseconds since the program started";
Blockly.Msg.ARDUINO_PULSEIN = "state duration";
//Blockly.Msg.tempo_helpurl = " ";// do not translate
//Blockly.Msg.tempo_tooltip = "This block checks if the indicated time has arrived, if it is the case then it executes the blocks placed inside .. Unlike the block 'to wait' this one is not blocking." ;
Blockly.Msg.tempo1 = "all";
//OLED
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="
// LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "the LED on the board";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Turn off or turn on the LED on the Arduino board";
Blockly.Msg.blink = "blink the board LED";
Blockly.Msg.blink_tooltip = "The board LED flashes 1 or 10 times per second";
Blockly.Msg.del = "the LED in pin";
Blockly.Msg.del_tooltip = "turns on (off) the LED connected to the indicated pin";
Blockly.Msg.bargraphe = "bargraph";
Blockly.Msg.bargraphe_allume="turn on LEDs to";
Blockly.Msg.bargraphe_allume_tooltip="0 lights no LEDs \n2,5 lights up the first 2 LEDs and the 3rd half turns on \n10 turns on all LEDs";
Blockly.Msg.bargraphe_tooltip = "bargraph module composed of 10 LEDs (8 green, 1 yellow and 1 red), it is necessary to indicate the pins of the arduino on which will be connected DCKI and DI";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="indicate the PWM pins to connect to the RGB LED";
Blockly.Msg.rvb_set="show color";
Blockly.Msg.rvb_set_tooltip="displays a color indicating a value for the three components (red, green, blue)";
Blockly.Msg.pixel1 = "NeoPixel";
Blockly.Msg.pixel2 = "show pixels";
Blockly.Msg.pixel3 = "color";
Blockly.Msg.pixel4 = "# of pixels";
Blockly.Msg.pixel5 = "set pixels brightness";
Blockly.Msg.pixel6 = "pixel #";
Blockly.Msg.pixel1_tooltip="neopixel RGB module indicate the pin to be connected and the number of pixels";
Blockly.Msg.pixel2_tooltip="show changes made";
Blockly.Msg.pixel5_tooltip="adjusts pixel brightness (from 0 to 255)";
Blockly.Msg.pixel3_tooltip="choose the pixel to light and its color \ nCaution the numbering starts at 0";
// output
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "Digital Output - Pin";
//Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "write a 0 or 1 logical state to a specific output";
Blockly.Msg.toggle = "toggle the state of the pin";
//Blockly.Msg.toggle_tooltip = "Toggle: \n write a logical state 0 if before there was a state 1 (and vice versa) on the specified output";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "Analog Output - PWM Pin";
//Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output";
// input
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "Digital Input - Pin";
Blockly.Msg.in_pullup = "R MK Invert signal";
//Blockly.Msg.in_pullup_tooltip = "returns the logical state (0 or 1) of the indicated pin \nreturns 1 (high state) by default if pull-up enabled";
//Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "read logical state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "Analog Input - Pin";
//Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023";
// audio
Blockly.Msg.play = "play";
Blockly.Msg.play_tooltip = "play the note";
//Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "beep on the pin";
Blockly.Msg.beep_TOOLTIP = "beeps (at 440Hz for 1s) on the selected pin";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emit a sound on the pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "frequency (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "duration (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emit a sound on the selected pin, at the desired frequency and for the desired duration";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stop the sound on the pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "stop the sound on the selected pin";
//Blockly.Msg.lp2i_mp3_helpurl = " ";// do not translate
Blockly.Msg.lp2i_mp3_Volume = "volume [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay";
Blockly.Msg.lp2i_mp3 = "MP3 player";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ninitialization of the module, volume and operating mode \nModule MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "play the mp3 file";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "play the specified song";
Blockly.Msg.lp2i_mp3_play_tooltip = "plays the current song";
Blockly.Msg.lp2i_mp3_pause = "pause mp3 file";
Blockly.Msg.lp2i_mp3_pause_tooltip = "stop the current song";
Blockly.Msg.lp2i_mp3_prev = "read the previous mp3 file";
Blockly.Msg.lp2i_mp3_prev_tooltip = "play the previous track";
Blockly.Msg.lp2i_mp3_vol = "set the volume to";
Blockly.Msg.lp2i_mp3_vol_tooltip = "set the volume to the specified value [0-48]";
Blockly.Msg.lp2i_mp3_next = "read the following mp3 file";
Blockly.Msg.lp2i_mp3_next_tooltip = "plays the next song";
// servomotor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "rotate";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "angle [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "possible rotation between 0 and 180 degrees";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "spin";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Spin the servo connected to the specified pin, at the indicated speed [0-90] and in the selected direction";
//engine
Blockly.Msg.mot_tooltip = "Shield motor controller L293D: \n activates both motors (M1 and M2) to advance or turn, the speed can be set between 0 and 90";
Blockly.Msg.mot_stop = "stop";
Blockly.Msg.mot_stop_tooltip = "L293D Motor Controller Shield: \nstop the two motors (M1 and M2)";
Blockly.Msg.moteur = "activate the engine";
Blockly.Msg.moteurstop = "stop the engine";
Blockly.Msg.moteur_tooltip = "starts the DC motor connected to the specified pin, at the indicated speed \nspeed = 0 -> motor stop";
Blockly.Msg.moteurdagu_tooltiprs040 = "RS 040 board: \n activates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "RS 040 board: \nstop one of the 2 motors";
Blockly.Msg.moteurdagu_tooltiprs027 = "RS 027 board: \n operates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "forward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "backward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Stepper Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - stepper motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "not per turn";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "speed (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "number of steps";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "DC 1 engine";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "DC 2 engine";
Blockly.Msg.m_pap="step-by-step engine";
Blockly.Msg.m_pap_step="step";
Blockly.Msg.m_pap_step1="move forward";
Blockly.Msg.m_pap_tooltip = "Initialization of a stepping motor. \nIndicate number of steps, speed in rpm and pins to connect";
Blockly.Msg.m_pap_step_tooltip = "activates the stepping motor by the number of steps indicated, the following instruction will only be executed once the rotation of the motor is done";
// serial
Blockly.Msg.Serial_Init = "Port Monitor - Connection ";
//Blockly.Msg.Serial_Init_tooltip = "Set the communication rate in characters per second for serial communication";
Blockly.Msg.Serial_Write = "Port Monitor - Print";
Blockly.Msg.Serial_Write_ln = "Port Monitor - Println";
//Blockly.Msg.Serial_write_tooltip = "Send data to the serial port";
Blockly.Msg.Serial_read = "Port Monitor - Read";
//Blockly.Msg.Serial_read_tooltip = "returns the first available data byte available in the serial port, or -1 if no data is available";
Blockly.Msg.Serial_available = "Port Monitor - Access?";
//Blockly.Msg.Serial_available_tooltip = "returns the number of bytes available in the serial port queue, or 0 if nothing is available";
Blockly.Msg.Serial_saut = "a line break";
//Blockly.Msg.Serial_saut_tooltip = "returns a line break on the serial monitor";
Blockly.Msg.Serial_space = "a separator";
//Blockly.Msg.Serial_space_tooltip = "return a space on the serial monitor";
Blockly.Msg.repl_read = "user entered command";
// software serial
Blockly.Msg.SSERIAL_Init = "SoftSerial - Connection Rx";
Blockly.Msg.SSERIAL_Init_ttl = "UART Display - Connection  Rx";
Blockly.Msg.base_define_ttl_uart = "UART Display - Button code";
Blockly.Msg.base_define_ttl_uart_top = "UART Display - Reading";
Blockly.Msg.base_define_ttl_uart_top_nom = "UART Display - Send";
Blockly.Msg.base_define_ttl_uart_top_nom_var = "in var ";
Blockly.Msg.base_define_ttl_uart_top_nom_var_g = "to schedule ";
Blockly.Msg.soft_read_ttl_dis = "UART Display - Сode";
Blockly.Msg.SSERIAL_Init_bluetooth = "Bluetooth - Connection Rx";
//Blockly.Msg.SSERIAL_tooltip = "Creating a new communication port using the specified pins and speed";
Blockly.Msg.SSERIAL_Read = "SoftSerial - Read";
Blockly.Msg.SSERIAL_Read_bluetooth = "Bluetooth - Read";
//Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Write = "SoftSerial - Send value";
Blockly.Msg.SSERIAL_Write_bluetooth = "Bluetooth - Send value";
//Blockly.Msg.SSERIAL_Write_tooltip = "Send data to the software port";
//Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Available = "SoftSerial - Access?";
Blockly.Msg.SSERIAL_Available_bluetooth = "Bluetooth - Access?";
//Blockly.Msg.SSERIAL_Available_tooltip = "returns the number of available bytes in the software port queue, or 0 if nothing is available";
////////////  DIY Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.OTTO9_HOME_TEXT = "home";
Blockly.Msg.OTTO9_HOME_TOOLTIP = " goes to home position straight";
Blockly.Msg.OTTO9_DIY_URL = " ";// do not translate
Blockly.Msg.OTTO9_HUMANOID_URL = " ";// do not translate
Blockly.Msg.OTTO9_CALIBRATION='calibrate ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='leg ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='foot ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='arm ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='use small positive and negative values iteratively,change gradually until is completely straight (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'save Trims on EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTO9_MOVE_TEXT = "move";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "  basic movements";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"], ["bend to the left", "BENDLEFT"], ["bend to the right", "BENDRIGHT"], ["shake left leg", "SHAKELEFT"], ["shake right leg", "SHAKERIGHT"], ["up", "jump"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"]]; 
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "speed";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["normal", "45"],["slow", "20"],["very slow", "10"] , ["fast", "60"], ["very fast", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "dance";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "  dance!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["flapping ↑", "flappingFRONT"], ["flapping ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "size";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normal", "25"], ["little", "10"], ["big", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "do";
Blockly.Msg.OTTO9_DO_TOOLTIP = "  complex movements";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesture";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Emotional sounds combined with movements";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 happy1", "OttoSuperHappy"],["🙂 happy2", "OttoHappy"], ["🙁 sad", "OttoSad"], ["😴 sleep", "OttoSleeping"], ["😕 confused", "OttoConfused"], ["😰 fretful", "OttoFretful"], ["😍 love", "OttoLove"], ["😡 angry", "OttoAngry"], ["🤩 magic", "OttoMagic"], ["😐 wave", "OttoWave"], [" 😎 victory", "OttoVictory"], ["😞 fail", "OttoFail"], ["💩 fart", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "sound";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Emotional sounds";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 happy1", "S_superHappy"], ["🙂 happy2", "S_happy"], ["😊 happy3", "S_happy_short"], ["🙁 sad", "S_sad"], ["😕 confused", "S_confused"], ["🤗 cuddly", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 surprise", "S_surprise"],["🤖 connect", "S_connection"], [" 🤖 disconnect", "S_disconnection"], ["👇 push", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 sleep", "S_sleeping"], ["💩 fart1", "S_fart1"], ["💩 fart2", "S_fart2"], ["💩 fart3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distance [cm]";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Ranging distance between 2cm to 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "obstacle";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["close", "10"],["very close", "3"],["far", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "noise measured";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "touch";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "use if conditional";
Blockly.Msg.OTTO9_GETG_TEXT = "motion";
Blockly.Msg.OTTO9_MOUTH_TEXT = "mouth";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "mouth emotion for the 8x8 LED matrix #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 happy1", "happyOpen"],["🙂 happy2", "happyClosed"], ["😊 smile", "smile"], ["😦 sad1", "23"], ["🙁 sad2", "24"], ["😮 surprise", "smallSurprise"], ["😲 Surprise2", "bigSurprise"], ["😕 confused", "confused"],["😛 tongue", "tongueOut"],["🙃 silly", "culito"],  ["😑 serious", "lineMouth"], ["🙄 upset", "21"], ["💖 heart", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ no", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ thunder", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "eyes";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "eyes emotion for the 16x8 i2C LED matrix ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 happy1", "happy_bmp"],["🙂 happy2", "eyes_bmp"], ["😦 sad", "sad_bmp"], ["😡 angry1", "angry_bmp"], ["😡 angry2", "angry2_bmp"], ["😰 freetful", "freetful_bmp"], ["😕 confused", "confused_bmp"],["😴 sleep", "sleep_bmp"],["😍 love", "love_bmp"],  ["😑 wave", "wave_bmp"], ["🤩 magic", "magic_bmp"], ["😞 fail", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "eyes text";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " clear eyes";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < >  = @, max.9 characters";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "mouth text";
Blockly.Msg.OTTO9_CLEAR_TEXT = " clear mouth";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Turn off all LEDs of the mouth matrix 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "arms";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "move the arms!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["hands up", "HANDSUP"], ["handwave left", "HANDWAVE1"], ["handwave right", "HANDWAVE2"]];


Blockly.Msg.HELPURL_001 = "site-help/001-en.html"; 
Blockly.Msg.HELPURL_002 = "site-help/002-en.html";
Blockly.Msg.HELPURL_003 = "site-help/003-en.html";
Blockly.Msg.HELPURL_004 = "site-help/004-en.html";
Blockly.Msg.HELPURL_005 = "site-help/005-en.html";
Blockly.Msg.HELPURL_006 = "site-help/006-en.html";
Blockly.Msg.HELPURL_007 = "site-help/007-en.html";
Blockly.Msg.HELPURL_008 = "site-help/008-en.html";
Blockly.Msg.HELPURL_009 = "site-help/009-en.html";
Blockly.Msg.HELPURL_010 = "site-help/010-en.html";
Blockly.Msg.HELPURL_011 = "site-help/011-en.html";
Blockly.Msg.HELPURL_012 = "site-help/012-en.html";
Blockly.Msg.HELPURL_013 = "site-help/013-en.html";
Blockly.Msg.HELPURL_014 = "site-help/014-en.html";
Blockly.Msg.HELPURL_015 = "site-help/015-en.html";
Blockly.Msg.HELPURL_016 = "site-help/016-en.html";
Blockly.Msg.HELPURL_017 = "site-help/017-en.html";
Blockly.Msg.HELPURL_018 = "site-help/018-en.html";
Blockly.Msg.HELPURL_019 = "site-help/019-en.html";
Blockly.Msg.HELPURL_020 = "site-help/020-en.html";
Blockly.Msg.HELPURL_021 = "site-help/021-en.html";
Blockly.Msg.HELPURL_022 = "site-help/022-en.html";
Blockly.Msg.HELPURL_023 = "site-help/023-en.html";
Blockly.Msg.HELPURL_024 = "site-help/024-en.html";
Blockly.Msg.HELPURL_025 = "site-help/025-en.html";
Blockly.Msg.HELPURL_026 = "site-help/026-en.html";
Blockly.Msg.HELPURL_027 = "site-help/027-en.html";
Blockly.Msg.HELPURL_028 = "site-help/028-en.html";
Blockly.Msg.HELPURL_029 = "site-help/029-en.html";
Blockly.Msg.HELPURL_030 = "site-help/030-en.html";
Blockly.Msg.HELPURL_031 = "site-help/031-en.html";
Blockly.Msg.HELPURL_032 = "site-help/032-en.html";
Blockly.Msg.HELPURL_033 = "site-help/033-en.html";
Blockly.Msg.HELPURL_034 = "site-help/034-en.html";
Blockly.Msg.HELPURL_035 = "site-help/035-en.html";
Blockly.Msg.HELPURL_036 = "site-help/036-en.html";
Blockly.Msg.HELPURL_037 = "site-help/037-en.html";
Blockly.Msg.HELPURL_038 = "site-help/038-en.html";
Blockly.Msg.HELPURL_039 = "site-help/039-en.html";
Blockly.Msg.HELPURL_040 = "site-help/040-en.html";
Blockly.Msg.HELPURL_041 = "site-help/041-en.html";
Blockly.Msg.HELPURL_042 = "site-help/042-en.html";
Blockly.Msg.HELPURL_043 = "site-help/043-en.html";
Blockly.Msg.HELPURL_044 = "site-help/044-en.html";
Blockly.Msg.HELPURL_045 = "site-help/045-en.html";
Blockly.Msg.HELPURL_046 = "site-help/046-en.html";
Blockly.Msg.HELPURL_047 = "site-help/047-en.html";
Blockly.Msg.HELPURL_048 = "site-help/048-en.html";
Blockly.Msg.HELPURL_049 = "site-help/049-en.html";
Blockly.Msg.HELPURL_050 = "site-help/050-en.html";
Blockly.Msg.HELPURL_051 = "site-help/051-en.html";
Blockly.Msg.HELPURL_052 = "site-help/052-en.html";
Blockly.Msg.HELPURL_053 = "site-help/053-en.html";
Blockly.Msg.HELPURL_054 = "site-help/054-en.html"; 
Blockly.Msg.HELPURL_055 = "site-help/055-en.html";
Blockly.Msg.HELPURL_056 = "site-help/056-en.html";
Blockly.Msg.HELPURL_057 = "site-help/057-en.html";
Blockly.Msg.HELPURL_058 = "site-help/058-en.html";
Blockly.Msg.HELPURL_059 = "site-help/059-en.html";
Blockly.Msg.HELPURL_060 = "site-help/060-en.html";
Blockly.Msg.HELPURL_061 = "site-help/061-en.html";
Blockly.Msg.HELPURL_062 = "site-help/062-en.html";
Blockly.Msg.HELPURL_063 = "site-help/063-en.html";
Blockly.Msg.HELPURL_064 = "site-help/064-en.html";
Blockly.Msg.HELPURL_065 = "site-help/065-en.html";
Blockly.Msg.HELPURL_066 = "site-help/066-en.html";
Blockly.Msg.HELPURL_067 = "site-help/067-en.html";
Blockly.Msg.HELPURL_068 = "site-help/068-en.html";
Blockly.Msg.HELPURL_069 = "site-help/069-en.html";
Blockly.Msg.HELPURL_070 = "site-help/070-en.html";
Blockly.Msg.HELPURL_071 = "site-help/071-en.html";
Blockly.Msg.HELPURL_072 = "site-help/072-en.html";
Blockly.Msg.HELPURL_073 = "site-help/073-en.html";
Blockly.Msg.HELPURL_074 = "site-help/074-en.html";
Blockly.Msg.HELPURL_075 = "site-help/075-en.html";
Blockly.Msg.HELPURL_076 = "site-help/076-en.html";
Blockly.Msg.HELPURL_077 = "site-help/077-en.html";
Blockly.Msg.HELPURL_078 = "site-help/078-en.html";
Blockly.Msg.HELPURL_079 = "site-help/079-en.html";
Blockly.Msg.HELPURL_080 = "site-help/080-en.html";
Blockly.Msg.HELPURL_081 = "site-help/081-en.html";
Blockly.Msg.HELPURL_082 = "site-help/082-en.html";
Blockly.Msg.HELPURL_083 = "site-help/083-en.html";
Blockly.Msg.HELPURL_084 = "site-help/084-en.html";
Blockly.Msg.HELPURL_085 = "site-help/085-en.html";
Blockly.Msg.HELPURL_086 = "site-help/086-en.html";
Blockly.Msg.HELPURL_087 = "site-help/087-en.html";
Blockly.Msg.HELPURL_088 = "site-help/088-en.html";
Blockly.Msg.HELPURL_089 = "site-help/089-en.html";
Blockly.Msg.HELPURL_090 = "site-help/090-en.html";
Blockly.Msg.HELPURL_091 = "site-help/091-en.html";
Blockly.Msg.HELPURL_092 = "site-help/092-en.html"; //esp
Blockly.Msg.HELPURL_093 = "site-help/093-en.html"; // просто серво
Blockly.Msg.HELPURL_094 = "site-help/094-en.html"; // шаговый степ и дир
Blockly.Msg.HELPURL_095 = "site-help/095-en.html"; // Гироскоп
Blockly.Msg.HELPURL_096 = "site-help/096-en.html"; //
Blockly.Msg.HELPURL_097 = "site-help/097-en.html"; //
Blockly.Msg.HELPURL_098 = "site-help/098-en.html"; //
Blockly.Msg.HELPURL_099 = "site-help/099-en.html"; //
Blockly.Msg.HELPURL_100 = "site-help/100-en.html"; //
Blockly.Msg.HELPURL_101 = "site-help/101-en.html"; // Дисплей двин
Blockly.Msg.HELPURL_102 = "site-help/102-en.html"; // Дисплей tv
Blockly.Msg.HELPURL_103 = "site-help/103-en.html"; // Дисплей tv
Blockly.Msg.HELPURL_104 = "site-help/104-en.html"; // Дисплей tv

Blockly.Msg.FOR_004_1 = "Repeat";
Blockly.Msg.FOR_004_2 = "times";  

Blockly.Msg.MATH_SINGLE_OP_ROOT = "Root";
Blockly.Msg.MATH_SINGLE_OP_ROOT_N = "Minus";
Blockly.Msg.MATH_SINGLE_OP_ROOT_SIN = "Sinus";
Blockly.Msg.MATH_SINGLE_OP_ROOT_COS = "Cosine";
Blockly.Msg.MATH_SINGLE_OP_ROOT_TAN = "Tangent";

Blockly.Msg.GENERAL_IR = "IR Remote - Reading - Pin";
Blockly.Msg.GENERAL_IR1 = "IR Remote - HEX";
Blockly.Msg.GENERAL_IRMM = "IR Led - Pin 3 - Send code";
Blockly.Msg.GENERAL_IRMM1 = "IR Led - HEX";

Blockly.Msg.RF24L01_sendvar = "Send value";
Blockly.Msg.RF24L01_recvvar = "Write to variable";

Blockly.Msg.RF24L01_init = "NRF24L01 2.4Ghz - Connection -";
Blockly.Msg.RF24L01_init2 = "SCK - Pin 13 MOSI - Pin 11 MISO - Pin 12";
Blockly.Msg.RF24L01_PIN_CE = "CE - Pin";
Blockly.Msg.RF24L01_PIN_CS = "CS - Pin";
Blockly.Msg.RF24L01_init3 = "NRF24L01 2.4Ghz - Send value";
Blockly.Msg.RF24L01_init4 = "NRF24L01 2.4Ghz - Write to variable";

Blockly.Msg.RTCDS1302_RST = "DS1302 - Connection  RST - Pin";
Blockly.Msg.RTCDS1302_CLK = "CLK - Pin";
Blockly.Msg.RTCDS1302_DAT = "DAT - Pin";
Blockly.Msg.RTCDS1302_RTC = "DS1302 - Recording - Day";
Blockly.Msg.RTCDS1302_MONTH="Month"; 
Blockly.Msg.RTCDS1302_YEAR="Year"; 
Blockly.Msg.RTCDS1302_HOUR="Hour"; 
Blockly.Msg.RTCDS1302_MINUTE="Minutes"; 
Blockly.Msg.RTCDS1302_SECOND="Seconds"; 
Blockly.Msg.RTCDS1302_Name2="DS1302 - Reading ";
Blockly.Msg.RTCDS1302_DAY="Day"; 
 
Blockly.Msg.RTCDS3231_NAME = "DS3231 - Connection - SDA - Pin A4 SCL - Pin A5";
Blockly.Msg.RTCDS3231_RTC = "DS3231 - Recording - Day";
Blockly.Msg.RTCDS3231_MONTH="Month"; 
Blockly.Msg.RTCDS3231_YEAR="Year"; 
Blockly.Msg.RTCDS3231_HOUR="Hour"; 
Blockly.Msg.RTCDS3231_MINUTE="Minutes"; 
Blockly.Msg.RTCDS3231_SECOND="Seconds"; 
Blockly.Msg.RTCDS3231_DAY="Day"; 
Blockly.Msg.RTCDS3231_NAME2="DS3231 - Reading";
Blockly.Msg.RTCDS3231_NAME3="DS3231 - Value";

Blockly.Msg.GENERAL_RESET = "Reset Arduino";

Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE = "EEPROM - Address"; 
Blockly.Msg.STORAGE_DATA_BYTE = "Write value"; 
Blockly.Msg.STORAGE_DATA_VARIABLE = "Variable:"; 
Blockly.Msg.STORAGE_EEPROM_READ_VARIABLE = "EEPROM - Reading from Address"; 

Blockly.Msg.SD_init = "Micro SD - Connection -";
Blockly.Msg.SD_init2 = "SCK - Pin 13 MOSI - Pin 11 MISO - Pin 12 CS - Pin";
Blockly.Msg.SD_name = "Micro SD - Recording text";
Blockly.Msg.SD_name1 = "Micro SD - Read File";
Blockly.Msg.SD_name2 = "Micro SD - Delete File";
Blockly.Msg.SD_name3 = "Micro SD - New Folder";
Blockly.Msg.SD_name4 = "Micro SD - Delete Folder";
Blockly.Msg.SD_infile= "to file";
Blockly.Msg.SD_linefeed= "Wrapping to a new line";

Blockly.Msg.stepPIN = "Servo - Pin";
Blockly.Msg.stepROTSERVO_Direction = "Speed";
Blockly.Msg.stepROTSERVO_Speed = "Angle";
Blockly.Msg.stepROTSERVO_Servo = "Servo - Disable - Pin";

Blockly.Msg.i2s = "I2C - Scanner";

Blockly.Msg.SERVO_Servo = "PCA 9685 Address"; 
Blockly.Msg.PIN = "Pin"; 
Blockly.Msg.Degree = "Angle";

Blockly.Msg.l9110MOTOR_D = "L298P";
Blockly.Msg.l9110MOTOR = "RM HN";
Blockly.Msg.l9110MOTORn = "EN (pwm)";
Blockly.Msg.l9110MOTOR_Direction ="Direction";
Blockly.Msg.l9110MOTOR_speed = "Speed";
Blockly.Msg.l9110MOTOR_L = "L293D";
Blockly.Msg.l9110MOTOR_Lm = "N1 (pwm)";
Blockly.Msg.l9110MOTORn_L = "N2 (pwm)";

Blockly.Msg.STEEPER_name = "Stepper motor";
Blockly.Msg.STEEPER_steprev = "Steps per revolution";
Blockly.Msg.STEEPER_pin1 = "Pin A";
Blockly.Msg.STEEPER_pin2 = "Pin B";
Blockly.Msg.STEEPER_pin3 = "Pin C";
Blockly.Msg.STEEPER_pin4 = "Pin D";
Blockly.Msg.STEEPER_name_d1 = "Stepper motor";
Blockly.Msg.STEEPER_name_d2 = "Speed";
Blockly.Msg.STEEPER_name_d3 = "Steps";
Blockly.Msg.STEEPER_stop = "Stepper Motor - Disable Hold";

Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_N = "Digital module";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_P = "Pin";
Blockly.Msg.AR_IN_DIG1 = "Button";
Blockly.Msg.AR_IN_DIG2 = "Infrared";
Blockly.Msg.AR_IN_DIG3 = "Blow";
Blockly.Msg.AR_IN_DIG4 = "Vibrations";
Blockly.Msg.AR_IN_DIG5 = "Tacho";
Blockly.Msg.AR_IN_DIG6 = "Tilt";
Blockly.Msg.AR_IN_DIG7 = "Hall";
Blockly.Msg.AR_IN_DIG8 = "Movement";
Blockly.Msg.AR_IN_DIG9 = "Flames";
Blockly.Msg.AR_IN_DIG10 = "Strip";
Blockly.Msg.AR_IN_DIG11 = "Alcohol";
Blockly.Msg.AR_IN_DIG12 = "Water";
Blockly.Msg.AR_IN_DIG13 = "Couple";
Blockly.Msg.AR_IN_DIG14 = "Soil";

Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_A = "Analog module";
Blockly.Msg.AR_IN_DIGA1 = "Potentiometer";
Blockly.Msg.AR_IN_DIGA2 = "Infrared";
Blockly.Msg.AR_IN_DIGA3 = "Photoresistor";
Blockly.Msg.AR_IN_DIGA4 = "Microphone";
Blockly.Msg.AR_IN_DIGA5 = "Joystick X";
Blockly.Msg.AR_IN_DIGA6 = "Joystick Y";
Blockly.Msg.AR_IN_DIGA7 = "Hall";
Blockly.Msg.AR_IN_DIGA8 = "Thermometer";
Blockly.Msg.AR_IN_DIGA9 = "Flames";
Blockly.Msg.AR_IN_DIGA10 = "Strip";
Blockly.Msg.AR_IN_DIGA11 = "Alcohol";
Blockly.Msg.AR_IN_DIGA12 = "Water";
Blockly.Msg.AR_IN_DIGA13 = "Couple";
Blockly.Msg.AR_IN_DIGA14 = "Soil";

Blockly.Msg.ultrasonic_ranger="Rangefinder HC SR04";
Blockly.Msg.TRIG="Trig - Pin";
Blockly.Msg.Echo="Echo - Pin";

Blockly.Msg.DHT_NAME="DHT";
Blockly.Msg.DHT_Type="Type";
Blockly.Msg.DHT_Type11="DHT11";
Blockly.Msg.DHT_Type21="DHT21";
Blockly.Msg.DHT_Type22="DHT22";
Blockly.Msg.DHT_Temp="Temperature ºC";
Blockly.Msg.DHT_Humi="Humidity %";

Blockly.Msg.RE_Interrupt="Encoder DT - Pin";
Blockly.Msg.RE_Interruptg="CLK - Pin";

Blockly.Msg.bmpHMC5883 = "Barometer BMP 280  Address";
Blockly.Msg.bmpHMC5883_2 = " Pressure";
Blockly.Msg.bmpHMC5883_3 = "mm. rt. st";

Blockly.Msg.TempDS18B20 = "Thermometer DS18B20 Pin";
Blockly.Msg.TempDS18B20N = "Temperature";
Blockly.Msg.TempDS18B20B = "ºC";

Blockly.Msg.ADXL345 = "Accelerometer ADXL345  Address";
Blockly.Msg.ADXL345D = "Axis";
Blockly.Msg.ADXL345S = "Value";

Blockly.Msg.HMC5883 = "Compass HMC5883  Address";
Blockly.Msg.HMC5883D = "Axis";
Blockly.Msg.HMC5883S = "Value";

Blockly.Msg.MPU6050 = "Gyroscope MPU6050  Address";

Blockly.Msg.digital_writeD = "Digital module";
Blockly.Msg.digD1 = "Led";
Blockly.Msg.digD2 = "Relay";
Blockly.Msg.digD3 = "Optorelay";
Blockly.Msg.digD4 = "Laser";
Blockly.Msg.digD5 = "Transistor";
Blockly.ALIGN_RIGHT_D = "Pin";

Blockly.Msg.digD7 = "On";
Blockly.Msg.digD8 = "Off";
Blockly.Msg.ALIGN_RIGHT = "Signal";

Blockly.Msg.digital_writeV = "Analog module";
Blockly.Msg.digital_writeG = "Pin";

Blockly.Msg.digAS1 = "Led";
Blockly.Msg.digAS2 = "Transistor";
Blockly.Msg.digAS3 = "Motor";
Blockly.Msg.digAS4 = "Lamp";
Blockly.Msg.digAS5 = "Glow";

Blockly.Msg.LedRGBpinR = "R - Pin";
Blockly.Msg.LedRGBpinG = "G - Pin";
Blockly.Msg.LedRGBpinB = "B - Pin";
Blockly.Msg.LedRGBcolor = "Color";
Blockly.Msg.LedRGBName = "RGB General";

Blockly.Msg.LedPin = "Led Pin";
Blockly.Msg.Cathode = "Cathode";
Blockly.Msg.Anode = "Anode";

Blockly.Msg.ledstrip_WS2812B_nameR = "Addressable led strip WS2812";
Blockly.Msg.ledstrip_WS2812B_nameD = "Pin";
Blockly.Msg.ledstrip_WS2812B_nameN = "Brightness";
Blockly.Msg.ledstrip_WS2812B_setPixelColor = "Color";
Blockly.Msg.ledstrip_WS2812B_Led_Number = "Pixel number";

Blockly.Msg.ds1990_Write = "Key DS1990 - Recording Pin";
Blockly.Msg.ds1990_Number = "ID";
Blockly.Msg.ds1990_Read1 = "Key DS1990 - Reading Pin";

Blockly.Msg.RFID_init = "RFID MFRC522";
Blockly.Msg.RFID_PIN_RST = "RST - Pin";
Blockly.Msg.RFID_init2 = "SCK - Pin 13 MISO - Pin 12 MOSI - Pin 11 SDA - Pin";
Blockly.Msg.RFID_init3 = "Code";

Blockly.Msg.KEYPAD_NAME = "Keyboard   4х4 Pin";
Blockly.Msg.KEYPAD_NAME_R = "Code";

Blockly.Msg.fingerprinting_read = "Fingerprinting FPM10A ";
Blockly.Msg.fingerprinting_read_pin = "Tx - Pin 2 Rx - Pin 3";
Blockly.Msg.fingerprinting_read_pinR = "Recording - ID ";
Blockly.Msg.fingerprinting_readD = "Reading - ID ";

Blockly.Msg.tensorsensor_read = "Load cell CZL-611CD-01";
Blockly.Msg.tensorsensor_read_pin = "SCK - Pin 2 DT - Pin 3";
Blockly.Msg.tensorsensor_read_D = "Value";

Blockly.Msg.TonePin = "Buzzer - Pin";
Blockly.Msg.Frequence = "Frequency";
Blockly.Msg.Duration = "Time";
Blockly.Msg.Note = "Note";
Blockly.Msg.Octave = "Octave";

Blockly.Msg.TEA5767_init = "Radio TEA5767 - SDA - Pin A4 SCL - Pin A5";
Blockly.Msg.TEA5767_SetFrequency = "Frequency(Mhz)";
Blockly.Msg.TEA5767_init1 = "Radio TEA5767 - Signal Strength";
Blockly.Msg.TEA5767_init2 = "Radio TEA5767 - Mute";
Blockly.Msg.TEA5767_init3 = "Radio TEA5767 - Unmute";

Blockly.Msg.MP3_name = "DFP Player Mp3 - Tx/Rx  Track";
Blockly.Msg.MP3_name2 = "DFP Player Mp3 - Track";
Blockly.Msg.MP3_name3 = "DFP Player Mp3 - Volume";
Blockly.Msg.MP3_name4 = "DFP Player Mp3 - Click ";
Blockly.Msg.MP3_vell = "Volume";
Blockly.Msg.MP3_delay = "Time";

Blockly.Msg.m7_setup = "4/7 Indicator - Connection";
Blockly.Msg.m7print_setup = "4/7 Indicator - Print";

Blockly.Msg.TM1637_init = "TM 1637 - Connection CLK - Pin";
Blockly.Msg.TM1637_init2 = "DIO - Pin";
Blockly.Msg.TM1637_name = "TM 1637 - Segment (1-4)";
Blockly.Msg.TM1637_NNN = "Number (0-9)";
Blockly.Msg.M1637_dpOFF_ON = "Colon";
Blockly.Msg.TM1637_nameN = "TM 1637 - Number (0-9999)"; 

Blockly.Msg.MAX7219_LM_NAME = "8 / 7 MAX7219 - Connection DIN - Pin";
Blockly.Msg.MAX7219_LM_PIN_CLK = "CLK - Pin";
Blockly.Msg.MAX7219_LM_PIN_CS = "CS - Pin";
Blockly.Msg.MAX7219_7D_DP = "Dot";
Blockly.Msg.MAX7219_7D_NAME2 = "8 / 7 MAX7219 - Number (0-9)";
Blockly.Msg.MAX7219_7D_NAME3 = "Segment (1-8)";
Blockly.Msg.MAX7219_7D_NAME4 = "8 / 7 MAX7219 - Number";
Blockly.Msg.MAX7219_7D_NAME5 = "Segment";
Blockly.Msg.MAX7219_7D_NAME6 = "8 / 7 MAX7219 - Clean";

Blockly.Msg.MAX7219_LM_NAMEB = "8 x 8 MAX7219 - Connection DIN - Pin";
Blockly.Msg.MAX7219_LM_PIN_CLKB = "CLK - Pin";
Blockly.Msg.MAX7219_LM_PIN_CSB = "CS - Pin";
Blockly.Msg.MAX7219_LM_PAINT = "8 x 8 MAX7219 - Graphic arts";
Blockly.Msg.MAX7219_LM_PAINT_x = "8 x 8 MAX7219  X -";
Blockly.Msg.MAX7219_LM_PAINT_y = "Y -";
Blockly.Msg.MAX7219_LM_PAINT_px = "PX -";

Blockly.Msg.LCD_setup_name = "LCD 16x2 - Connection";
Blockly.Msg.LCD_setup_RS = "RS";
Blockly.Msg.LCD_setup_E = "E";
Blockly.Msg.LCD_setup_DB4 = "DB4";
Blockly.Msg.LCD_setup_DB5 = "DB5";
Blockly.Msg.LCD_setup_DB6 = "DB6";
Blockly.Msg.LCD_setup_DB7 = "DB7";
Blockly.Msg.LCD_setup_COLUMNS = "Columns";
Blockly.Msg.LCD_setup_ROWS = "Rows";
Blockly.Msg.LCD_setup_name_print = "LCD 16x2 - Print";
Blockly.Msg.mLCDP_Print = "Text";
Blockly.Msg.LCD_lcdi2c_print_grp = "LCD 16x2 - Graphic";

Blockly.Msg.LCD_I2C_setup = "LCD 16x2 I2C - Connection";
Blockly.Msg.LCD_I2C_setup2 = "SDA - Pin A4 SCL - Pin A5 Address";
Blockly.Msg.LCD_lcdi2c_print = "LCD 16x2 I2C - Print";
Blockly.Msg.LCD_lcdi2c_print_gr = "LCD 16x2 I2C - Graphic arts";
Blockly.Msg.LCD_lcdi2c_print_gr2 = "LCD - Graphic";

Blockly.Msg.miniLCD_I2C_setup = "Mini OLED 128x64 I2C - Connection";
Blockly.Msg.miniLCD_I2C_setup2 = "SDA - Pin A4 SCL - Pin A5";
Blockly.Msg.miniLCD_I2C_print_x = "Mini OLED 128x64 I2C - Print X";
Blockly.Msg.miniLCD_I2C_print_y = "Y";
Blockly.Msg.miniLCD_I2C_print_F = "Size";
Blockly.Msg.miniLCD_I2C_print_T = "Text";
Blockly.Msg.miniLCD_I2C_print_R = "Number";
Blockly.Msg.miniLCD_I2C_print_TI = "Type";
Blockly.Msg.miniLCD_I2C_print_draw = "Mini OLED 128x64 I2C - Graphic arts";

Blockly.Msg.Motor_Forward = "Forward";
Blockly.Msg.Motor_Backward = "Backward";


Blockly.Msg.LCD_TEST = "Display";

Blockly.Msg.LCD_Nokia = "LCD Nokia - Connection  SCK";
Blockly.Msg.LCD_Nokia_text = "LCD Nokia - Print X";
Blockly.Msg.LCD_Nokia_text_x = "Text";
Blockly.Msg.LCD_Nokia_nom_x = "Size";
Blockly.Msg.LCD_Nokia_nom_y = "Number";
Blockly.Msg.LCD_Nokia_SmallFont = "Small";
Blockly.Msg.LCD_Nokia_MediumNumbers = "Medium";
Blockly.Msg.LCD_Nokia_BigNumbers = "Big";

Blockly.Msg.lcd_128x64px_spi = "LCD 128x64 SPI - Connection";
Blockly.Msg.lcd_128x64px_spi_pos = "Position";
Blockly.Msg.lcd_128x64px_spi_b = "LCD - Page";
Blockly.Msg.lcd_128x64px_spi_m = "LCD - Print X";
Blockly.Msg.lcd_128x64px_spi_pix = "LCD - Pixel X";
Blockly.Msg.lcd_128x64px_spi_line = "LCD - Line X";
Blockly.Msg.lcd_128x64px_spi_box = "LCD - Figure X";

Blockly.Msg.lcd_128x64px_spi_mini = "LCD Mini OLED SPI - Connection";
Blockly.Msg.lcd_128x64px_spi_top = "LCD - Connection";
Blockly.Msg.lcd_128x64px_spi_draw_pl = "LCD - Graphic arts";

Blockly.Msg.CAT_DISPLAYU_TFT = "Display TFT";
Blockly.Msg.CAT_DISPLAYU_OLED = "Display OLED";
Blockly.Msg.CAT_DISPLAYU_LCDP = "Display LCD p";
Blockly.Msg.CAT_DISPLAYU_TTL = "Display UART";
Blockly.Msg.CAT_DISPLAYU_TVVGA = "TV VGA";

Blockly.Msg.lcd_128x128px_spi = "TFT ST7735 - Connection";
Blockly.Msg.lcd_128x128px_spi_color = "Board";
Blockly.Msg.lcd_128x128px_spi_color_fone = "Background";
Blockly.Msg.lcd_128x128px_spi_text = "TFT ST7735 - Print X";
Blockly.Msg.lcd_128x128px_spi_textcolor = "Color";
Blockly.Msg.lcd_128x128px_spi_textsize = "Size";
Blockly.Msg.lcd_128x128px_spi_px = "TFT ST7735 - Pixel X";
Blockly.Msg.lcd_128x128px_spi_line = "TFT ST7735 - Line X";
Blockly.Msg.lcd_128x128px_spi_box = "TFT ST7735 - Figure X";

Blockly.Msg.lcd_tah_spi = "TFT Touch 240x320 - Connection LCD";
Blockly.Msg.lcd_tah_spi_text = "TFT Touch 240x320 - Print X";
Blockly.Msg.lcd_tah_spi_int = "Variable";
Blockly.Msg.lcd_tah_spi_box = "TFT Touch 240x320 - Figure X";
Blockly.Msg.lcd_tah_spi_tah = "TFT Touch";

Blockly.Msg.leonardo_url_1="Move cursor to";
Blockly.Msg.leonardo_url_2="X";
Blockly.Msg.leonardo_url_3="Y";
Blockly.Msg.leonardo_url_4="Mouse click";
Blockly.Msg.leonardo_url_5="Click mouse button";
Blockly.Msg.leonardo_url_6="Release mouse button";
Blockly.Msg.leonardo_url_7="Key click";
Blockly.Msg.leonardo_url_8="Press button";
Blockly.Msg.leonardo_url_9="Release button";
Blockly.Msg.leonardo_url_10="Release all buttons!";
Blockly.Msg.leonardo_url_11="Modifier Key Click";
Blockly.Msg.leonardo_url_12="Press modifier key";
Blockly.Msg.leonardo_url_13="Release modifier key";

Blockly.Msg.interrupAttach="Interrupt Pin";
Blockly.Msg.ATTACHE = "Interrupt";
Blockly.Msg.ATTACHE1 = "Abort";
Blockly.Msg.ATTACHE2 = "Abort";
Blockly.Msg.ATTACHE3 = "Don't interrupt";


Blockly.Msg.interrupMode="Mode";


Blockly.Msg.RE_Interrupt_none = "Encoder - Update Value";

Blockly.Msg.interrupAttachyield = "Background";

Blockly.Msg.t_ru_e = "TRUE";
Blockly.Msg.f_al_se = "FALSE";
Blockly.Msg.N_ULL = "NULL";

Blockly.Msg.HI_GH = "HIGH";
Blockly.Msg.LO_W = "LOW";

Blockly.Msg.O_N = "ON";
Blockly.Msg.O_FF = "OFF";

Blockly.Msg.FOR_in_1 = "For";
Blockly.Msg.FOR_in_2 = "from";
Blockly.Msg.FOR_in_3 = "to";
Blockly.Msg.FOR_in_4 = "+";
Blockly.Msg.FOR_in_5 = "-";

Blockly.Msg.base_form_none_1 = "Break";
Blockly.Msg.base_form_none_2 = "Continue";
Blockly.Msg.base_form_none_3 = "Repeat endlessly";

Blockly.Msg.base_define_while = "While";

Blockly.Msg.math_single_int = "Convert";
Blockly.Msg.math_single_int2 = "to";

Blockly.Msg.math_single_int_pi = "Is whether";
Blockly.Msg.math_single_int_pi2 = " ";
Blockly.Msg.math_single_int_pi3 = "Even";
Blockly.Msg.math_single_int_pi4 = "Odd";
Blockly.Msg.math_single_int_pi5 = "Integer";
Blockly.Msg.math_single_int_pi6 = "Positive";
Blockly.Msg.math_single_int_pi7 = "Negative";

Blockly.Msg.math_single_int_pi8 = "Is the";
Blockly.Msg.math_single_int_pi9 = "on the";

Blockly.Msg.math_single_int_pi10 = "Remainder of";
Blockly.Msg.math_single_int_pi11 = " ÷ ";

Blockly.Msg.math_single_int_pi12 = "Limit";
Blockly.Msg.math_single_int_pi13 = "from";
Blockly.Msg.math_single_int_pi14 = "before";

Blockly.Msg.lcd_128x128px_spi_tv = "TV - Format";
Blockly.Msg.lcd_128x128px_spi_tv1 = "TV - Print";
Blockly.Msg.lcd_128x128px_spi_tv1x = "X";
Blockly.Msg.lcd_128x128px_spi_tv1y = "Y";
Blockly.Msg.lcd_128x128px_spi_tv1f = "Font";
Blockly.Msg.lcd_128x128px_spi_tv1c = "Color";
Blockly.Msg.lcd_128x128px_spi_tv2 = "TV - Delay";
Blockly.Msg.lcd_128x128px_spi_tv3 = "TV - Line";
Blockly.Msg.lcd_128x128px_spi_tv4 = "TV - Rectangle";
Blockly.Msg.lcd_128x128px_spi_tv5 = "Fill";
Blockly.Msg.lcd_128x128px_spi_tv6 = "TV - Clear screen";
Blockly.Msg.lcd_128x128px_spi_tv7 = "Width";
Blockly.Msg.lcd_128x128px_spi_tv8 = "Height";

Blockly.Msg.lcd_128x128px_spi_tv_vga = "VGA - Connection";
Blockly.Msg.lcd_128x128px_spi_tv_vga1 = "VGA - Print";
Blockly.Msg.lcd_128x128px_spi_tv_vga2 = "VGA - Clear Screen";
Blockly.Msg.lcd_128x128px_spi_tv_vga3 = "VGA - Latency";

Blockly.Msg.ledstrip_WS2812B_delay = "Delay";
Blockly.Msg.ledstrip_WS2812B_pro = "Program";

Blockly.Msg.ledstrip_WS2812B_pro1 = "Stuff From Start";
Blockly.Msg.ledstrip_WS2812B_pro2 = "Stuff From End";
Blockly.Msg.ledstrip_WS2812B_pro3 = "Move From Start";
Blockly.Msg.ledstrip_WS2812B_pro4 = "Move From End";
Blockly.Msg.ledstrip_WS2812B_pro5 = "RGB Move";
Blockly.Msg.ledstrip_WS2812B_pro6 = "RGB Rainbow";

Blockly.Msg.ledstrip_WS1 = "D - Enable Ribbon";
Blockly.Msg.ledstrip_WS2 = "D - Disable Tape";
Blockly.Msg.ledstrip_WS3 = "D - Move Pixel to End";
Blockly.Msg.ledstrip_WS4 = "D - Move Pixel to Start";
Blockly.Msg.ledstrip_WS5 = "D - Start Engagement Set";
Blockly.Msg.ledstrip_WS6 = "D - Event Set to End";
Blockly.Msg.ledstrip_WS7 = "D - Stuff From Start";
Blockly.Msg.ledstrip_WS8 = "D - Stuff From End";

Blockly.Msg.ledstrip_WS1n = "Enable Ribbon";
Blockly.Msg.ledstrip_WS2n = "Disable Tape";
Blockly.Msg.ledstrip_WS3n = "Move Pixel to End";
Blockly.Msg.ledstrip_WS4n = "Move Pixel to Start";
Blockly.Msg.ledstrip_WS5n = "Start Engagement Set";
Blockly.Msg.ledstrip_WS6n = "Event Set to End";
Blockly.Msg.ledstrip_WS7n = "Stuff From Start";
Blockly.Msg.ledstrip_WS8n = "Stuff From End";
Blockly.Msg.ledstrip_WS9 = " With";
Blockly.Msg.ledstrip_WS10 = "by";
Blockly.Msg.ledstrip_WS11 = " Color";
Blockly.Msg.ledstrip_WS12 = " Time";