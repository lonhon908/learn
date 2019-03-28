<template>
  <div>
    <h2>多组件之间的过渡</h2>
    <p><b>直接使用vue动态组件component标签</b></p>
    <button class="btn" @click="toggle">按钮</button>
    <transition name="fade" mode="out-in">
      <component :is="activeComponent"></component>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComponent: 'child1'
    }
  },
  components: {
    'child1': {
      render(h) {
        return h('div', {}, 'components1')
      }
    },
    'child2': {
      render(h) {
        return h('div', {}, 'components2')
      }
    }
  },
  methods: {
    toggle() {
      let obj = {
        child1: 'child2',
        child2: 'child1'
      }
      this.activeComponent = obj[this.activeComponent];
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s ease;
}
</style>
