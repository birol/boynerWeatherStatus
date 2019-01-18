import WeatherService from '@/services/weather_services'
import { selectImage } from '@/middleware'

/*
 *
 * State alanına obje içerisinde ki alanları en başta girmemin sebebi;
 * vuejs'in daha önce tanımlanmamış alanlar için console hatası vermesi.
 * Bu durumun önüne geçmek için bu alanları tanımlayarak daha sonra mutlaka kullanacağım
 * alanları önceden bildirmiş oluyorum.
 *
 */

const state = {
  weather: {
    data: {
      weather: {
        city: '',
        cityShort: '',
        country: '',
        weatherImage: '',
        weather: {
          dt: '',
          name: '',
          main: {
            temp: ''
          },
          wind: {
            speed: ''
          },
          weather: {
            0: {
              description: ''
            }
          }
        }
      }
    }
  }
}

/*
 *
 * getWeatherDetails Tek bir şehire ait hava durumu bilgisinin detaylarını almamızı sağlıyor.
 * getCityName ise sadece seçili şehrin adını bize dönüyor.
 *
 */

const getters = {
  getWeatherDetails (state) {
    return state.weather.data.weather
  },
  getCityName (state) {
    return state.weather.data.name
  }
}

/*
 *
 * triggerGetWeather action'ı Tek bir şehire ait hava durumu bilgisinin api üzerinden almamızı sağlıyor.
 *
 */

const actions = {
  triggerGetWeather ({ commit }, { city }) {
    let client = new WeatherService()
    return new Promise((resolve, reject) => {
      client
        .getWeatherStatus(city)
        .then(response => response.json())
        .then(data => {
          // console.log(data.name)
          commit('setWeather', data)
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
 * setWeather mutation'ı Tek bir şehire ait hava durumu bilgisinin api üzerinden alındıktan sonra state'e yazılmasını sağlıyor.
 *
 */

const mutations = {
  setWeather (state, data) {
    state.weather.data.weather.weather = data
    state.weather.data.weather.weatherImage = selectImage(state.weather.data.weather.weather.weather[0].description)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
