<template>
  <div class="">
    <h2>自定义过渡的类名</h2>
    <p v-for="(item, index) in list" :key="index">{{item}}</p>
    <p>他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 Animate.css 结合使用十分有用</p>
    <button class="btn" @click="toggle(1)">动画1</button>
    <button class="btn" @click="toggle(2)">动画2</button>
    <!-- <transition
      enter-active-class="animated-tada"
      leave-active-class="animated-bounceOutRight"> -->
    <transition
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight">
      <p v-if="visible1">hello JavaScript</p>
    </transition>
    <transition
      enter-active-class="animated flip"
      leave-active-class="animated rotateOut">
      <div class="box" v-if="visible2"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'enter-class',
        'enter-active-class',
        'enter-to-class (2.1.8+)',
        'leave-class',
        'leave-active-class',
        'leave-to-class (2.1.8+)'
      ],
      visible1: false,
      visible2: false,
    }
  },
  methods: {
    toggle(index) {
      this[`visible${index}`] = !this[`visible${index}`];
    }
  },
}
</script>

<style lang="less" scoped>
.box{
  width: 100px;
  height: 100px;
  background-color: red;
}
.animated-tada{
  animation: fade .5s linear;
}
.animated-bounceOutRight{
  animation: fade .5s linear reverse;
}
@keyframes fade{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>

