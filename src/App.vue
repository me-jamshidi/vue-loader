<template>
  <div id="app">
    <h1 id="vue-loading" style="visibility: hidden;">Loading...</h1>
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="addLoading()">Add loading</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    addLoading: function () {
      var id = this.$loading.show()
      setTimeout(() => {
        this.$loading.hide(id)
      }, 3000)

      var id2 = this.$loading.show()
      setTimeout(() => {
        this.$loading.hide(id2)
      }, 1000)
    }
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
