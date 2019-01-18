<template>
  <div class="forecast__card">
    <div class="forecast__card__item">
      <div class="forecast__card__item__left">
        <img class="forecast__card__item__left__status" :src="days[0].weatherImage" alt="Hava Durumu">
        <p class="forecast__card__item__left__date">{{ dateConvert(days[0].dt) }}</p>
        <p class="forecast__card__item__left__date">{{ days[0].dt_txt.split(' ')[1] }}</p>
        <p class="forecast__card__item__left__description">{{ days[0].weather[0].description }}</p>
        <p class="forecast__card__item__left__description">
          {{ getWindDescription(Math.round(parseFloat(days[0].wind.speed))) }}
        </p>
      </div>
      <div class="forecast__card__item__right">
        <div class="forecast__card__item__right__temp">
          <img class="forecast__card__item__right__temp__thermometer" src="../assets/icons/thermometer.png" alt="Termometre">
          <p class="forecast__card__item__right__temp__value">{{ Math.round(parseFloat(days[0].main.temp)) }} &#8451;</p>
        </div>
        <div class="forecast__card__item__right__wind">
          <img class="forecast__card__item__right__wind__windIcon" src="../assets/icons/wind.png" alt="Rüzgar">
          <p class="forecast__card__item__right__wind__value">{{ Math.round(parseFloat(days[0].wind.speed)) }} m/s</p>
        </div>
        <div class="forecast__card__item__right__humidity">
          <p>Nem Oranı % {{ days[0].main.humidity }}</p>
        </div>
        <div class="forecast__card__item__right__pressure">
          <p>Başınç {{ days[0].main.pressure }} mb</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateConverter } from '@/middleware'

export default {
  name: 'ForecastCard',
  props: {
    days: Array,
    detailsLinkStatus: Boolean
  },
  created () {
    // console.log(this.dateConvert(1547845200))
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

.forecast {
  flex-wrap: nowrap;
  display: flex;

  &__card {
    display: flex;
    align-items: center;
    color: $white;
    margin-bottom: 20px;
    width: 115px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    &__item {
      width: 100%;

      &__left {
        width: 100%;
        background: rgba(255,255,255,.5);
        height: 180px;

        &__status {
          width: 40px;
          margin-top: 20px;
        }
        &__date {
          margin: 10px 0;
          color: $black;
        }
        &__description {
          text-transform: capitalize;
          margin: 0 0 5px 0;
          font-size: 14px;
          line-height: 19px;
        }
      }

      &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0,0,0,.3);
        height: 180px;
        width: 100%;
        overflow: hidden;
        position: relative;

        &__temp {
          display: flex;
          align-items: center;
          &__thermometer {
            width: 45px;
            height: 45px;
          }
          &__value {
            font-size: 16px;
            margin: 0 0 0 5px;
            line-height: 47px;
            width: 50px;
          }
        }

        &__wind {
          display: flex;
          align-items: center;
          &__windIcon {
            width: 45px;
            height: 45px;
          }
          &__value {
            font-size: 16px;
            margin: 0 0 0 5px;
            line-height: 47px;
            width: 50px;
          }
        }

        &__humidity {
          display: flex;
          font-size: 12px;

          p {
            width: 100%;
            text-align: center;
          }
        }

        &__pressure {
          display: flex;
          font-size: 10px;

          p {
            width: 100%;
            text-align: center;
          }
        }

        &__detailsLink {
          position: absolute;
          right: 10px;
          bottom: 10px;

          a {
            color: $white;
            text-decoration: none;

            &:hover {
              color: $lightGreen;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .forecast {
    .forecast__card {
      &__item {
        &__left {
          height: 190px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .forecast {
    flex-wrap: wrap;
    max-width: 95%;
    margin-left: 2.5%;

    .forecast__card {
      width: 100%;
      margin: 0 0 10px 0;

      &__item {
        &__right {
          &__temp {
            justify-content: center;
          }
          &__wind {
            justify-content: center;
          }
          &__humidity {
            font-size: 15px;
          }
          &__pressure {
            font-size: 15px;
          }
        }
      }
    }
  }
}
@media (max-width: 560px) {

}
</style>
