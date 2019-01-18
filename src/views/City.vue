<template>
  <div class="city">
    <div class="weather">
      <WeatherCard
        :city="getWeatherDetails"
        :detailsLinkStatus="false"
      />
    </div>
    <h1>Sonraki Günler</h1>
    <div class="forecast">
      <ForecastCard
        v-for="(days, index) in getForecastDetails.list"
        v-bind:key="index"
        :days="days"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherCard from '@/components/WeatherCard'
import ForecastCard from '@/components/ForecastCard'

export default {
  name: 'City',
  components: {
    WeatherCard,
    ForecastCard
  },
  created () {
    this.triggerGetForecast(this.getParams('city'))
    this.triggerGetWeather(this.getParams('city'))
  },
  watch: {
    $route (to) {
      this.triggerGetForecast(to.params.city)
      this.triggerGetWeather(to.params.city)
    }
  },
  methods: {
    triggerGetForecast (city) {
      this.$store
        .dispatch('triggerGetForecast', {
          city: city
        })
        .then(() => {
          this.city = this.getCityName
        })
    },
    triggerGetWeather (city) {
      this.$store
        .dispatch('triggerGetWeather', {
          city: city
        })
        .then(() => {
          this.city = this.getCityName
        })
    },
    getParams (param) {
      return this.$route.params[param]
    }
  },
  computed: {
    ...mapGetters({
      getCityName: 'getCityName',
      getForecastDetails: 'getForecastDetails',
      getWeatherDetails: 'getWeatherDetails'
    })
  }
}
</script>

<style lang="scss">
.city {
  display: flex;
  max-width: 750px;
  margin: auto;
  flex-direction: column;

  .weather {
    flex: 1 100%;
  }
  .forecast {
    flex: 1 100%;
  }
}

@media (max-width: 800px) {
  .city {
    margin-left: calc(100% - 720px);
  }
}

@media (max-width: 767px) {
  .city {
    margin-left: 0;
  }
}
</style>
