import WeatherService from '@/services/weather_services'
import { selectImage, dateConverter } from '@/middleware'

/*
 *
 * State alanına obje içerisinde ki alanları en başta girmemin sebebi;
 * vuejs'in daha önce tanımlanmamış alanlar için console hatası vermesi.
 * Bu durumun önüne geçmek için bu alanları tanımlayarak daha sonra mutlaka kullanacağım
 * alanları önceden bildirmiş oluyorum.
 *
 */

const state = {
  forecast: {
    data: {
      city: {
        name: '',
        list: []
      }
    }
  }
}

/*
 *
 * getForecastDetails Tek bir şehire ait, bugünden itibaren önümüzdeki
 * 5 günün hava durumu bilgisinin detaylarını almamızı sağlıyor.
 *
 */

const getters = {
  getForecastDetails (state) {
    return state.forecast.data
  }
}

/*
 *
 * triggerGetForecast action'ı Tek bir şehire ait bugünden itibaren önümüzdeki
 * 5 günün hava durumu bilgisinin detaylarını api üzerinden almamızı sağlıyor.
 *
 */

const actions = {
  triggerGetForecast ({ commit }, { city }) {
    let client = new WeatherService()
    return new Promise((resolve, reject) => {
      client
        .getForecastStatus(city)
        .then(response => response.json())
        .then(data => {
          // console.log(data.name)
          commit('setForecast', data)
          resolve(data)
        })
        .catch(res => {
          reject(res)
        })
    })
  }
}

/*
 *
 * setForecast mutation'ı Tek bir şehire ait bugünden itibaren önümüzdeki
 * 5 günün hava durumu bilgisinin detaylarını api üzerinden alındıktan sonra state'e yazılmasını sağlıyor.
 *
 */

const mutations = {
  setForecast (state, data) {
    state.forecast.data = data
    let index = 0
    let days = state.forecast.data.list
    let allDates = []
    let newGroupData = []

    /*
     *
     * Burada hava durumunda gösterilecek resimin şimdiden belirlenmesinin sebebi
     * proje çalışır durumda olduğunda resim için girilen url'in webpack tarafından
     * düzenlenemiyor olması. Bu yüzden veri api'den gelir gelmez, resmin url'inin webpack tarafından
     * düzenlenmesini ve state'e yazılmasını sağlıyorum.
     *
     * Aynı zamanda timestamp olarak gelen tarih bilgisini anlamlı hale getirip, bu yeni tarih bilgisini de
     * state'e kaydedilmesini sağlıyourm.
     *
     */

    for (let day of days) {
      state.forecast.data.list[index].weatherImage = selectImage(day.weather[0].description)
      state.forecast.data.list[index].date = dateConverter(day.dt)
      index++

      if (allDates.indexOf(day.date) === -1) {
        allDates.push(day.date)
      }
    }

    /*
     *
     * Open Weather Api'ından gelen veri her bir gün için bir den fazla hava durumu raporu içeriyor.
     * Bu yüzden her bir güne ait verileri kendi içerisinde gruplamam gerekti. Bu alanı bu yüzden hazırladım.
     * Fakat verileri grupladıktan sonra her bir güne ait hava durumu bilgisinin içerinde aynı zamanda birden fazla zaman
     * dilimine ait başka hava durumu bilgileri de vardı.
     * Ben bu saatlerin hepsini kullanmak yerine, "sonraki gün" hava durumu bilgisi için, her bir güne ait tek bir veriyi  kullanmayı
     * tercih ettim.
     *
     * Aşağıda günlerin bulunduğu dizi, gün bazında gruplanıyor.
     *
     */

    let dateIndex = 0
    for (let date of allDates) {
      newGroupData[dateIndex] = []

      for (let day of days) {
        if (date === day.date) {
          newGroupData[dateIndex].push(day)
        }
      }

      dateIndex++
    }

    /*
     *
     * Gruplanmış olan yeni gün verisi state'e yazılıyor.
     *
     */

    state.forecast.data.list = newGroupData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
