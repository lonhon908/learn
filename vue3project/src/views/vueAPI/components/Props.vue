<template>
  <div>
    <h2>类型检测：</h2>
    <intili-header :count="1" :age="25"></intili-header>
  </div>
</template>

<script>
export default {
  components: {
    'intili-header': {
      props: {
        list: {
          type: Array,
          default: () => ([])
        },
        count: {
          type: [Number, String],
          required: true,
        },
        // 检测类型 + 其他验证
        age: {
          type: Number,
          default: 0,
          required: true,
          validator: function (value) {
            return value >= 0
          }
        }
      },
      render(h) {
        return h('div',{}, this.count + this.age)
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>

