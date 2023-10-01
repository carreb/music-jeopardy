<template>
  <div>
    <button @click="goToBoard">board</button> <button @click="goToAddSong">add song</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    goToBoard() {
      this.$router.push("/board")
    },
    goToAddSong() {
      this.$router.push("/addsong")
    }
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
  margin-top: 60px;
}
</style>
