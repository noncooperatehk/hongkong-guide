<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <SearchCompany msg="Hong Kong Guide"/>
  </div>
</template>

<script>
import SearchCompany from './components/SearchCompany.vue'

export default {
  name: 'app',
  components: {
    SearchCompany
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
