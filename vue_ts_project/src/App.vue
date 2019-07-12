<template>
  <div id="app">
    <keep-alive>
      <router-view  v-if="$route.mate && $route.mate.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.mate || !$route.mate.keepAlive"></router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>
