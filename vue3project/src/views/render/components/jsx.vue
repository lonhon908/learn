<template>
  <div class="">
    <h2>jsx语法</h2>
    <initial-header></initial-header>
  </div>
</template>

<script>
export default {
  components: {
    'initial-header': {
      // 在 Vue 中使用 JSX 语法，它可以让我们回到更接近于模板的语法上
      render() {
        return (
          <AnchoredHeading level={this.level}>
            <span>Hello</span> world!
          </AnchoredHeading>
        )
      },
      data() {
        return {
          level: [1, 2, 3, 4, 5, 6]
        }
      },
      components: {
        AnchoredHeading: {
          props: {
            level: {
              type: Array,
              default: () => ([])
            }
          },
          render(h) {
            // jsx语法
            return (
              <div data-index={this.level}>
                {
                  this.$slots.default
                }
                {
                  this.level.map(value => h(`h${value}`, `h${value}`))
                }
              </div>
            )
          }
        }
      }
    }
  }
}
</script>
