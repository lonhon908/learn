<template>
  <div>
    <p>render渲染</p>
    <anchored-heading v-for="(item, index) in 6" :key="index" :level="item">{{`h${item}`}}元素</anchored-heading>
  </div>
</template>

<script>
export default {
  components: {
    'anchored-heading': {
      render(h) {
        let VNode = h(`h${this.level}`, {}, this.$slots.default);
        return VNode;
      },
      mounted() {
        console.log(this.$slots, this.$props, this.$data, this.$parent)
      },
      data() {
        return {
          name: '张三'
        }
      },
      props: {
        level: {
          type: Number,
          required: true
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>

