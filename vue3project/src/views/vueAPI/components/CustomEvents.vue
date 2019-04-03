<template>
  <div>
    <h2>自定义事件</h2>
    <custom-event>
      <span>1</span>
    </custom-event>
    <h2>将原生事件绑定到组件</h2>
    <native-event v-model="message" @focus="onFocus"></native-event>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  components: {
    'custom-event': {
      render() {
        return (
          <div>
            {
              this.$slots.default
            }
          </div>
        )
      }
    },
    'native-event': {
      props: {
        value: String
      },
      computed: {
        inputListeners() {
          var vm = this
          // `Object.assign` 将所有的对象合并为一个新对象
          return Object.assign({},
            // 我们从父级添加所有的监听器
            this.$listeners,
            // 然后我们添加自定义监听器，
            // 或覆写一些监听器的行为
            {
              // 这里确保组件配合 `v-model` 的工作
              input: function (event) {
                vm.$emit('input', event.target.value)
              }
            }
          )
        }
      },
      render(h) {
        return h('label', {}, [
          '聚焦',
          h('input', {
            class: {
              red: true
            },
            attrs: {
              value: this.value
            },
            on: {
              ...this.inputListeners
            }
          })
        ])
      }
    }
  },
  data() {
    return {
      message: '1'
    }
  },
  methods: {
    onFocus() {
      console.log('onFocus')
    }
  },
}
</script>

<style lang="less">
.red{
  background-color: red;
}
</style>
