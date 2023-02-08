//  Раскомментируйте для программной реализации шины I2C:   //
//  #define pin_SW_SDA 3                                    // Назначение любого вывода Arduino для работы в качестве линии SDA программной шины I2C.
//  #define pin_SW_SCL 9                                    // Назначение любого вывода Arduino для работы в качестве линии SCL программной шины I2C.
//  Раскомментируйте для совместимости с большинством плат: //
//  #include <Wire.h>                                       // Библиотека iarduino_Pressure_BMP будет использовать методы и функции библиотеки Wire.
//  Ссылки для ознакомления:                                //
//  Подробная информация о подключении модуля к шине I2C:   // http://wiki.iarduino.ru/page/i2c_connection/
//  Подробная информация о функциях и методах библиотеки:   // http://wiki.iarduino.ru/page/trema-modul-pressure-meter
                                                            //
#include <iarduino_Pressure_BMP.h>                          // Подключаем библиотеку iarduino_Pressure_BMP для работы с датчиками атмосферного давления BMP180 или BMP280.
iarduino_Pressure_BMP sensor;                               // Объявляем объект sensor для работы с датчиком давления, используя функции и методы библиотеки iarduino_Pressure_BMP.
void setup(){                                               //
    Serial.begin(9600);                                     // Инициируем передачу данных в монитор последовательного порта на скорости 9600 бод.
    delay(1000);                                            // Ждём завершения переходных процессов при подаче питания
    sensor.begin();                                         // Инициируем работу с датчиком. Текущая высота будет принята за 0 м.
}                                                           //

void loop (){
//  Считываем данные и выводим: температуру в °С, давление в мм. рт. ст., изменение высоты относительно указанной в функции begin(по умолчанию 0 метров).
    if(sensor.read(1))       {Serial.println((String)"CEHCOP BMP" + sensor.type + ": \t P = " + sensor.pressure + "\tMM.PT.CT, \t T = " + sensor.temperature + " *C, \t\t B = "+sensor.altitude+" M.");}
    else                     {Serial.println("HET OTBETA OT CEHCOPA");}
//  Считываем данные и выводим: температуру в °С и давление в Па, давление в мм. рт. ст., изменение высоты относительно указанной в функции begin(по умолчанию 0 метров).
    if(sensor.read(2))       {Serial.println((String)"CEHCOP BMP" + sensor.type + ": \t P = " + sensor.pressure + "\tPa, \t\t T = "     + sensor.temperature + " *C, \t\t B = "+sensor.altitude+" M.");}
    else                     {Serial.println("HET OTBETA OT CEHCOPA");}
    delay(3000);
}

// Библиотека iarduino_Pressure_BMP для работы датчиками атмосферного давления BMP180 и BMP280.
// Библиотека имеет всего 3 функции: begin(), read(), measurement(), три переменные типа float: temperature, pressure, altitude и две переменные типа int: type, version.
// ========================
// Функция begin();        Предназначена для инициализации датчика и может принимать в качестве необязательного параметра значение начальной высоты (по умолчанию 0).
//                         Высота указывается в метрах, значение типа float. Можно указать высоту над уровнем моря. От этого значения рассчитывается высота в переменной altitude.
//                         Например: если вызвать функцию begin(10), подняться на 15 метров и вызвать функцию read(), то в переменной altitude будет значение 25 (10м + 15м).
//                         Функция возвращает значение типа bool (true или false) сообщающее о результате инициализации модуля.
//                         Функцию можно вызвать однократно (в коде setup), а можно и многократно (для корректировки или изменения начальной высоты).
// ========================
// Функция read();         Инициирует чтение (вычисление) текущих значений: температуры окружающей среды, атмосферного давления и высоты относительно начальной (указанной в функции begin()).
//                         Функция принимает одну необязательную цифру: 1 или 2 (по умолчанию 1). Если 1 то давление рассчитывается в мм.рт.ст., если 2 то давление рассчитывается в Па.
//                         Функция возвращает значение типа bool (true или false) сообщающее о результате чтения и вычисления данных.
// ========================
// Функция measurement();  Необязательная функция позволяющая выбрать точность измерений (уровень подавления шумов). Давление может «скакать» от ветра, хлопков или громкой музыки, это и есть шум показаний.
//                         Функция принимает одно обязательное, положительное, целочисленное значение от 0 (без подавления шума) до 3 (для bmp180) или до 4 (для bmp280) включительно. По умолчанию максимум.
//                         Функция возвращает значение типа bool (true или false) сообщающее о результате применения новой точности (значения передискретизации).
//                         Если Вам не нужна высокая точность измерений, её можно понизить, что приведёт к уменьшению энергопотребления, а при работе с датчиком bmp180 еще и к ускорению чтения данных.
// ========================
// Результаты:             Результаты измерений доступны для чтения из переменных: temperature, pressure, altitude, после вызова функции read(). Все переменные имеют тип float.
//                         temperature - хранит значение текущей температуры в °С, pressure - хранит текущее значение атмосферного давления в мм. рт. ст., altitude - хранит высоту в метрах относительно начальной.
// ========================
// I2C адрес датчика:      У датчиков BMP180 фиксированный адрес на шине I2C = 0x77, а у датчиков BMP280 может быть установлен адрес 0x77 или 0x76. По умолчанию библиотека общается с датчиками по адресу 0x77.
//                         Адрес датчика (модуля) можно указать при объявлении объекта библиотеки: вместо iarduino_Pressure_BMP sensor; напишите: iarduino_Pressure_BMP sensor(0x76);
// ========================
// Тип и версия:           Тип и версию датчика можно прочитать из переменных type и version, после вызова функции begin(). Обе переменные имеют тип int.
