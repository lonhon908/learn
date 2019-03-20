<template>
  <div class="">
    <h2>appear 特性设置节点在初始渲染的过渡</h2>
    <!-- 自定义 JavaScript 钩子 -->
    <transition
      appear
      @before-appear="customBeforeAppearHook"
      @appear="customAppearHook"
      @after-appear="customAfterAppearHook"
      @appear-cancelled="customAppearCancelledHook">
      <div class="box"></div>
    </transition>
    <transition
      appear
      appear-class="appear-class"
      appear-to-class="appear-to-class"
      appear-active-class="appear-active-class">
      <p>appear 不需要v-if/v-show控制</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    // 
    customBeforeAppearHook(el) {
      el.style.width = 0;
      el.style.height = 0;
      el.style.opacity = 0;
      el.style.backgroundColor = "yellow";
    },
    customAppearHook(el, done) {
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
    customAfterAppearHook(el) {
      el.style.backgroundColor = 'red';
    },
    customAppearCancelledHook() {
      console.log('动画进入过程中被取消，比如动画进入未完成之前，就点击隐藏按钮')
    }
  },
}
</script>

<style lang="less" scoped>
// 定义初始化状态
.appear-class{
  font-size: 40px;
  color: red;
  background-color: pink;
}
// 定义结束状态
.appear-to-class{
  font-size: 12px;
  color: #000000;
  background-color: #fff;
}
.appear-active-class{
  transition: all 1s linear;
}

.box{
  width: 200px;
  height: 200px;
  background-color: yellow;
}
</style>
