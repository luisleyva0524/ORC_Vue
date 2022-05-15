<template>
  <div id="app">
    <img src="./assets/logo.png">
    <getDataOfClients/>
  </div>
</template>

<script>
import getDataOfClients from './components/getDataOfClients.vue'

export default {
  name: 'App',
  components: {
    getDataOfClients
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
