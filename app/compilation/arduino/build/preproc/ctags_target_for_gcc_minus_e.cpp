# 1 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino"
# 1 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino"
# 2 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino" 2

# 4 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino" 2

 long Pixcil = 0;
 long NeoPix = 0;

 Adafruit_NeoPixel strip2(60, 2, ((1<<6) | (1<<4) | (0<<2) | (2)) /*|< Transmit as G,R,B*/ + 0x0000 /*|< 800 KHz data transmission*/);

 Adafruit_NeoPixel strip3(60, 3, ((1<<6) | (1<<4) | (0<<2) | (2)) /*|< Transmit as G,R,B*/ + 0x0000 /*|< 800 KHz data transmission*/);

 Adafruit_NeoPixel strip4(60, 4, ((1<<6) | (1<<4) | (0<<2) | (2)) /*|< Transmit as G,R,B*/ + 0x0000 /*|< 800 KHz data transmission*/);

 Adafruit_NeoPixel strip5(60, 5, ((1<<6) | (1<<4) | (0<<2) | (2)) /*|< Transmit as G,R,B*/ + 0x0000 /*|< 800 KHz data transmission*/);


void setup() {




    strip2.begin();
  strip2.show();
  strip2.setBrightness(50);

    strip3.begin();
  strip3.show();
  strip3.setBrightness(50);

    strip4.begin();
  strip4.show();
  strip4.setBrightness(50);

    strip5.begin();
  strip5.show();
  strip5.setBrightness(50);

}

void loop() {
   Pixcil = 30;
    NeoPix = 30 - 0;
      for (int count = 0; count < NeoPix; count++) {
      strip2.setBrightness(255);
     strip3.setBrightness(255);
      strip4.setBrightness(255);
       strip5.setBrightness(255);
     strip2.setPixelColor(Pixcil-1, strip2.Color(255,0,0));
     strip3.setPixelColor(Pixcil-1, strip3.Color(0,0,255));
     strip4.setPixelColor(Pixcil-1, strip4.Color(0,255,0));
      strip5.setPixelColor(Pixcil-1, strip5.Color(255,0,255));
    strip2.show();
    strip3.show();
     strip4.show();
       strip5.show();
     delay(30);
       Pixcil = Pixcil - 1;
     }
     Pixcil = 0;

}
