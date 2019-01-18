import WeatherService from '@/services/weather_services'
import { selectImage } from '@/middleware'

/*
 *
 * Burada sabit 5 şehir için veri saklayacağımızdan dolayı bu 5 şehrin bilinen verilerini
 * state'e standart olarak yazdım. Sonrasında güncellecek ve kullanılacak alanları ise boş alanlar olarak ekledim.
 *
 */

const state = {
  cities: {
    data: {
      0: {
        city: 'Seattle',
        cityShort: 'seattle',
        country: 'us',
        weatherImage: '',
        weather: {
          dt: '',
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
      },
      1: {
        city: 'Bethel',
        cityShort: 'Bethel',
        country: 'us',
        weatherImage: '',
        weather: {
          dt: '',
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
      },
      2: {
        city: 'Teoc',
        cityShort: 'teoc',
        country: 'us',
        weatherImage: '',
        weather: {
          dt: '',
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
      },
      3: {
        city: 'Salzburg',
        cityShort: 'salzburg',
        country: 'at',
        weatherImage: '',
        weather: {
          dt: '',
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
      },
      4: {
        city: 'Kırşehir',
        cityShort: 'kirsehir',
        country: 'tr',
        weatherImage: '',
        weather: {
          dt: '',
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
 * Şehirlere ait detayların ve hava durumu bilgilerinin çekileceği alan.
 *
 */

const getters = {
  getCities (state) {
    return state.cities.data
  }
}

/*
 *
 * Tek bir şehire ait hava durumu bilgisinin çekilmesini sağlayacak fonksiyon.
 *
 */

const actions = {
  triggerGetCityWeather ({ commit }, { city }) {
    let client = new WeatherService()
    return new Promise((resolve, reject) => {
      client
        .getWeatherStatus(city)
        .then(response => response.json())
        .then(data => {
          // console.log(data.name)
          commit('setCityWeather', data)
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
 * Burada hava durumunda gösterilecek resimin şimdiden belirlenmesinin sebebi
 * proje çalışır durumda olduğunda resim için girilen url'in webpack tarafından
 * düzenlenemiyor olması. Bu yüzden veri api'den gelir gelmez, resmin url'inin webpack tarafından
 * düzenlenmesini ve state'e yazılmasını sağlıyorum.
 *
 * Bunlar dışında şehire ait hava durumu bilgisinin state'e yazılmasını sağlıyorum.
 *
 */

const mutations = {
  setCityWeather (state, data) {
    // console.log(data.name)
    switch (data.name) {
      case 'Seattle':
        state.cities.data[0].weather = data
        state.cities.data[0].weatherImage = selectImage(state.cities.data[0].weather.weather[0].description)
        break
      case 'Bethel':
        state.cities.data[1].weather = data
        state.cities.data[1].weatherImage = selectImage(state.cities.data[1].weather.weather[0].description)
        break
      case 'Teoc':
        state.cities.data[2].weather = data
        state.cities.data[2].weatherImage = selectImage(state.cities.data[2].weather.weather[0].description)
        break
      case 'Salzburg':
        state.cities.data[3].weather = data
        state.cities.data[3].weatherImage = selectImage(state.cities.data[3].weather.weather[0].description)
        break
      case 'Kırşehir':
        state.cities.data[4].weather = data
        state.cities.data[4].weatherImage = selectImage(state.cities.data[4].weather.weather[0].description)
        break
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
