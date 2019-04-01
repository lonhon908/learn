<template>
  <div class="propsData"></div>
</template>

<script>
import Vue from 'vue';
const Comp = Vue.extend({
  props: ['msg'],
  render(h) {
    return h('h1', {
      attrs: {
        style: `color: red`
      }
    }, this.msg)
  }
})

export default {
  mounted() {
    this.$nextTick(() => {
      new Comp({
        el: '.propsData',
        // 创建实例时传递 props
        propsData: {
          msg: 1000000000000
        }
      })
    })
  },
}
</script>

<style lang="less" scoped>

</style>
