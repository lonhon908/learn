<template>
  <div class="">
    <h2>函数式组件</h2>
    <my-component :items="list">
      <h1>123</h1>
      <h1>123</h1>
    </my-component>
  </div>
</template>

<script>
export default {
  components: {
    'my-component': {
      functional: true,
      // Props 可选
      props: {
        items: {
          type: Array,
          required: true
        },
        idOrdered: Boolean,
      },
      // 为了弥补缺少的实例
      // 提供第二个参数作为上下文
      render(h, context) {
        console.log(context)
        return h(
          'ul',
          context.data,
          context.children
        )
      }
    }
  },
  data() {
    return {
      msg: '哈哈哈😀',
      list: []
    }
  },
}
</script>
