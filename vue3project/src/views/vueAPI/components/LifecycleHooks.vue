<template>
  <div>
    <h2>生命周期钩子</h2>
    <button @click="add" class="btn">生命周期</button>
    <p>{{message}}</p>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
    <component :is="activeComponent"></component>
  </div>
</template>

<script>
export default {
  components: {
    child1: {
      render(h) {
        return h('h1', {
          attrs: {style: `color: red`}
        }, '我是child1')
      },
      activated() {
        console.log('生命周期activated: keep-alive 组件激活时调用')
      },
      deactivated() {
        console.log('生命周期deactivated: keep-alive 组件停用时调用')
      },
      beforeDestroy() {
        console.log('生命周期beforeDestroy: 实例销毁之前调用。在这一步，实例仍然完全可用');
      },
      destroyed() {
        console.log('生命周期destroyed: Vue 实例销毁后调用')
      },
    },
    child2: {
      render(h) {
        return h('h1', {
          attrs: {style: `color: blue`}
        }, '我是child2')
      }
    }
  },
  data() {
    return {
      message: 'haha',
      activeComponent: 'child1'
    }
  },
  beforeCreate() {
    console.log(`生命周期beforeCreate: ${this.message}`)
    console.log(`this.$el`, this.$el)
  },
  created() {
    console.log(`生命周期created: ${this.message}`)
    console.log(`this.$el`, this.$el)
  },
  beforeMount() {
    console.log(`生命周期beforeMount: ${this.message}`)
    console.log(`this.$el`, this.$el)
  },
  mounted() {
    console.log(`生命周期mounted: ${this.message}`)
    console.log(`this.$el`, this.$el)
  },
  beforeUpdate() {
    console.log(`生命周期beforeUpdate: this.message`)
  },
  updated() {
    console.log(`生命周期updated: this.message`)
  },
  methods: {
    add() {
      this.message = this.message + Math.floor(Math.random() * 10);
      const obj = {
        child1: 'child2',
        child2: 'child1'
      }
      this.activeComponent = obj[this.activeComponent];
    }
  },
}
</script>

<style lang="less" scoped>

</style>

