<template>
  <div>
    <h1>vm.$props</h1>
    <anchored-heading v-for="(item, index) in 6" :key="index" :level="item">{{item}}</anchored-heading>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    'anchored-heading': {
      render(h) {
        return h(`h${this.level}`, {}, this.$slots.default)
      },
      mounted() {
        // console.log(this.$props);
        // console.log(this.$parent);
        // console.log(this.$root);
      },
      props: {
        level: {
          type: Number,
          required: true
        }
      }
    }
  },
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.$props);
    // 当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。
    console.log(this.$children)
  },
}
</script>

<style lang="less" scoped>

</style>
