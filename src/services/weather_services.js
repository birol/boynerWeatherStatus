/*
 *
 * Burada projenin tamamında kullanmam gereken iki adet istek ihtiyacım var.
 * Bir tanesi tek bir şehire air hava durumu bilgisini alıyor.
 * Diğeri ise yine tek bir şehire ait, önümüzdeki 5 günün hava durumu bilgisini alıyor.
 *
 * baseUrl, her iki istek için de sabit olan url kısmı oldığu için onu ayrıca tanımladım.
 * Aynı şekilde appId değeri de sabit olduğu ve her iki istekte de kullanılacağı için onu da ayrıca tanımladım.
 *
 */

export default class WeatherService {
  constructor () {
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/'
    this.appId = '8020479bf3d21b85439fd6974b0248fd'
  }

  getWeatherStatus (city) {
    return fetch(
      `${this.baseUrl}weather?q=${city}&appid=${this.appId}&units=metric&lang=tr`
    )
  }

  getForecastStatus (city) {
    return fetch(
      `${this.baseUrl}forecast?q=${city}&appid=${this.appId}&units=metric&lang=tr`
    )
  }
}
