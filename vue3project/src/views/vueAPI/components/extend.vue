<template>
  <div class="">
    <div class="extendss"></div>
  </div>
</template>

<script>
import Vue from 'vue';
// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
const Profile = Vue.extend({
  render(h) {
    return h('h1', {}, this.message)
  },
  data() {
    return {
      message: 'message'
    }
  }
})
export default {
  name: 'extend',
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      new Profile().$mount('.extendss')
    })
  },
}
</script>

<style lang="less" scoped>

</style>

