<template>
  <div class="functional">
    <h2>functional函数式组件</h2>
    <p>我们标记组件为 functional，这意味它是无状态 (没有响应式数据)，无实例 (没有 this 上下文)</p>
    <my-component :list="list">
      <p>0</p>
    </my-component>
  </div>
</template>

<script>
export default {
  components: {
    'my-component': {
      functional: true,
      props: {
        list: Array
      },
      // 为了弥补缺少的实例
      // 提供第二个参数作为上下文
      render(h, context) {
        console.log(context)
        return (
          <div>
            {
              context.children
            }
            {
              context.props.list.map(item => h('p', item))
            }
          </div>
        )
      }
    }
  },
  data() {
    return {
      list: [1, 2]
    }
  },
}
</script>

<style lang="less" scoped>

</style>
