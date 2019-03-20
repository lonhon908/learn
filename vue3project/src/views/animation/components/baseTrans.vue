<template>
  <div class="">
    <button class="btn" @click="toggle(1)">css过渡</button>
    <button class="btn" @click="toggle(2)">css动画</button>
    <p>CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除，<b>动画可以设置复杂的效果</b></p>
    <transition name="fade">
      <div class="box" v-if="visible1"></div>
    </transition>
    <transition name="slide">
      <div class="box" v-if="visible2"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  width: 200px;
  height: 200px;
  background-color: #25eb60;
  opacity: 1;
}
// v-enter：定义进入过渡的开始状态
// v-enter-to: 定义进入过渡的结束状态
.fade-enter,.fade-leave-to{
  width: 0;
  height: 0;
  opacity: 0;
}
// v-enter-to: 定义进入过渡的结束状态
.fade-enter-to{
  background-color: red;
}
// v-enter-active：定义进入过渡生效时的状态
// v-leave-active：定义离开过渡生效时的状态
.fade-enter-active,.fade-leave-active{
  transition: all .5s;
}

.slide-enter-active {
  animation: slide 1s linear;
}
.slide-leave-active {
  animation: slide 1s linear reverse;
}

@keyframes slide {
  0%{
    width: 0;
    height: 0;
    transform: translate(0, 0) rotateZ(0);
    background-color: #25eb60;
  }
  25%{
    width: 50px;
    height: 50px;
    transform: translate(100px, 0) rotateZ(360deg);
    background-color: red;
  }
  50%{
    width: 100px;
    height: 100px;
    transform: translate(100px, 100px) rotateZ(720deg);
    background-color: aquamarine;
  }
  75%{
    width: 150px;
    height: 150px;
    transform: translate(0, 100px) rotateZ(1080deg);
    background-color: yellow;
  }
  100%{
    width: 200px;
    height: 200px;
    transform: translate(0, 0) rotateZ(1440deg);
    background-color: #25eb60;
  }
}
</style>

