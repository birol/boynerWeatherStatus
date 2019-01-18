<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang='scss'>
html {
  background-color: $green;
}
body {
  margin: 0;
}
#app {
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}
</style>
