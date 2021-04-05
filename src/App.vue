<template>
  <div id="app">
    <img id="symbol" alt="Vue logo" src="./assets/headline2.png">
    <WeaponSelect/>
  </div>
</template>

<script>
import WeaponSelect from './components/WeaponSelect.vue'

export default {
  name: 'App',
  components: {
    WeaponSelect
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #202020;
  margin-top: 60px;
}

#symbol{
  height: 100px;
  width: 200px;
  margin-bottom: 100px;
}
</style>
