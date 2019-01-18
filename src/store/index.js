/*
 *
 * Burada üç ayrı modül oluşturmamın sebebi;
 * cities isimli modülü anasayfada, tüm şehirlerin hava durumu bilgisini aynı anda kullanabilmek adına oluşturdum.
 * weather isimli modülü ise şehir detay sayfasında mevcut hava durumu bilgisini gösterirken kullanıyorum.
 * forecast isimli modülü ise yine şehir detay sayfasında şehre ait bir kaç günlük hava durumu bilgisini göstermek amacıyla kullanıyorum.
 *
 */

import weather from './modules/weather'
import forecast from './modules/forecast'
import cities from './modules/cities'

export default {
  modules: {
    weather,
    forecast,
    cities
  }
}
