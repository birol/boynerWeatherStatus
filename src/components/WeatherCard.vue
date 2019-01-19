<template>
  <div class="weather__card" >
    <div class="weather__card__left">
      <h1 class="weather__card__left__title">{{ city.weather.name }}</h1>
      <img class="weather__card__left__status" :src="city.weatherImage" alt="Hava Durumu">
      <p class="weather__card__left__date">{{ dateConvert(city.weather.dt) }}</p>
    </div>
    <div class="weather__card__right">
      <div class="weather__card__right__temp">
        <img class="weather__card__right__temp__thermometer" src="../assets/icons/thermometer.png" alt="Termometre">
        <p class="weather__card__right__temp__value">{{ Math.round(parseFloat(city.weather.main.temp)) }} &#8451;</p>
        <p class="weather__card__right__temp__description">{{ city.weather.weather[0].description }}</p>
      </div>
      <div class="weather__card__right__wind">
        <img class="weather__card__right__wind__windIcon" src="../assets/icons/wind.png" alt="Rüzgar">
        <p class="weather__card__right__wind__value">{{ Math.round(parseFloat(city.weather.wind.speed)) }} m/s</p>
        <p class="weather__card__right__wind__description">
          {{ getWindDescription(Math.round(parseFloat(city.weather.wind.speed))) }}
        </p>
      </div>
      <div class="weather__card__right__humidity">
        <p>Nem Oranı % {{ city.weather.main.humidity }}</p>
      </div>
      <div class="weather__card__right__pressure">
        <p>Başınç {{ city.weather.main.pressure }} mb</p>
      </div>
      <div class="weather__card__right__detailsLink" v-if="detailsLinkStatus">
        <router-link :to="'/city/' + city.cityShort">Detaylar ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { dateConverter } from '@/middleware'

export default {
  name: 'WeatherCard',
  props: {
    city: Object,
    detailsLinkStatus: Boolean
  },
  methods: {
    dateConvert (date) {
      return dateConverter(date)
    },
    getWindDescription (windSpeed) {
      if (windSpeed > 0 && windSpeed < 1.5) {
        return 'Sakin'
      } else if (windSpeed > 1.4 && windSpeed < 3.5) {
        return 'Hafif Bir Esinti'
      } else if (windSpeed > 3.4 && windSpeed < 5.5) {
        return 'Hafif Esinti'
      } else if (windSpeed > 5.4 && windSpeed < 8) {
        return 'Ilımlı Esinti'
      } else if (windSpeed > 7.9) {
        return 'Sert Esinti'
      }
    }
  }
}
</script>

<style lang='scss'>
.weather {
  // display: flex;
  // flex-wrap: wrap;
  // max-width: 750px;
  // margin: auto;

  &__card {
    display: flex;
    align-items: center;
    color: $white;
    margin-bottom: 20px;
    width: 100%;

    &__left {
      width: 200px;
      background: rgba(255,255,255,.5);
      height: 180px;

      &__title {
        margin: 10px 0;
        font-family: 'Montserrat', cursive;
      }
      &__status {
        width: 80px;
      }
      &__date {
        margin: 10px 0;
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: rgba(0,0,0,.3);
      height: 180px;
      width: calc(100% - 200px);
      overflow: hidden;
      position: relative;

      &__temp {
        display: flex;
        align-items: center;
        &__thermometer {
          width: 50px;
          height: 50px;
        }
        &__value {
          font-size: 25px;
          margin: 0 0 0 10px;
          line-height: 52px;
          width: 100px;
        }
        &__description {
          text-transform: capitalize;
          margin: 0 0 0 10px;
        }
      }

      &__wind {
        display: flex;
        align-items: center;
        &__windIcon {
          width: 50px;
          height: 50px;
        }
        &__value {
          font-size: 25px;
          margin: 0 0 0 10px;
          line-height: 52px;
          width: 100px;
        }
        &__description {
          margin: 0 0 0 10px;
        }
      }

      &__humidity {
        display: flex;
        padding-left: 10px;
      }

      &__pressure {
        display: flex;
        padding-left: 10px;
      }

      &__detailsLink {
        position: absolute;
        right: 10px;
        bottom: 10px;

        a {
          color: $white;
          text-decoration: none;
          transition: color .3s;

          &:hover {
            color: $yellow;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .weather {
    max-width: 95%;
    margin-left: 2.5%;
  }
}
@media (max-width: 560px) {
  .weather {
    &__card {
      flex-direction: column;

      &__left {
        width: 100%;
      }

      &__right {
        width: 100%;
      }
    }
  }
}
</style>
