<template>
  <div class="">
    <h2>声明 JavaScript 钩子</h2>
    <button class="btn" @click="toggle">按钮</button>
    <!-- 推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，
    Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。 -->
    <!-- :css="false" -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false">
      <div class="box" v-if="visible"></div>
    </transition>
  </div>
</template>

<script>
import '../../../common/js/requestAnimationFrame';

export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    // 设置进入过渡之前的状态
    beforeEnter(el) {
      el.style.width = 0;
      el.style.height = 0;
      el.style.opacity = 0;
      el.style.backgroundColor = "#000000";
    },
    // active状态
    enter(el, done) {
      let current = 0;
      let id = null;
      const fn = () => {
        if (current <= 200) {
          current += 4;
          el.style.width = `${current}px`;
          el.style.height = `${current}px`;
          el.style.opacity = current/200;
          id = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(id);
          done();
        }
      }
      fn();
    },
    afterEnter(el) {
      el.style.backgroundColor = 'red';
    },
    enterCancelled(el) {
      console.log("动画进入过程中被取消，比如动画进入未完成之前，就点击隐藏按钮", el);
    },
    beforeLeave(el) {
      el.style.width = '200px';
      el.style.height = '200px';
      el.style.opacity = 1;
      el.style.backgroundColor = "blue";
    },
    leave(el, done) {
      let current = 200;
      let id = null;
      const fn = () => {
        if (current > 0) {
          current -= 4;
          el.style.width = `${current}px`;
          el.style.height = `${current}px`;
          el.style.opacity = current/200;
          id = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(id);
          done();
        }
      }
      fn();
    },
    afterLeave(el) {
      console.log('元素已经离开了', el)
    },
    leaveCancelled() {
      console.log('动画离开过程中被取消，比如动画离开未完成之前，就点击显示按钮')
    }
  },
}
</script>

<style lang="less" scoped>

</style>

