<template>
  <div class="navigation">
    <router-link class="navigation__link" to="/">
      <img class="navigation__link__image" src="../assets/icons/home.svg" alt="Anasayfa">
    </router-link>
    <!--     <router-link
        v-bind:key="index"
        v-for="(city, index) in getCities"
        :to="'/city/' + city.cityShort"
      >
        {{ city.city }} |
      </router-link> -->
    <router-link class="navigation__link" to="/info">
      <img class="navigation__link__image" src="../assets/icons/info.svg" alt="Bilgi">
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters({
      getCities: 'getCities'
    })
  }
}
</script>

<style lang='scss'>
.navigation {
  display: flex;
  padding: 30px;
  margin: auto;
  width: 750px;
  overflow: hidden;
  justify-content: space-between;

  .navigation__link {
    font-weight: bold;
    color: $white;
    text-decoration: none;
    .navigation__link__image {
      width: 50px;
    }
  }
}
@media (max-width: 767px) {
  .navigation {
    max-width: calc(95% - 60px);
    padding: 30px;
  }
}
</style>
