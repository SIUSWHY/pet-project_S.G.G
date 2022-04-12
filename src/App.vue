<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  /* height: 100%; */
  margin: 0px;
  background: linear-gradient(0deg, #171c2d, #254252) no-repeat;
}
::-webkit-scrollbar {
  display: none;
}
</style>
