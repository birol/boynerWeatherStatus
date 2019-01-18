<template>
  <div class="city">
    <div class="weather">
      <WeatherCard
        v-for="(city, index) of getCities"
        v-bind:key="index"
        :city="city"
        :detailsLinkStatus="true"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherCard from '@/components/WeatherCard'

export default {
  name: 'Dashboard',
  components: {
    WeatherCard
  },
  created () {
    for (let index in this.getCities) {
      this.triggerGetCityWeather(this.getCities[index].city)
    }
  },
  methods: {
    triggerGetCityWeather (city) {
      this.$store
        .dispatch('triggerGetCityWeather', {
          city: city
        })
        .then(() => {
          this.city = this.getCityName
        })
    }
  },
  computed: {
    ...mapGetters({
      getCities: 'getCities'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
