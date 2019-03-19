<template>
  <div class="">
    <p>{{componentInsideType.length}} -- {{countList.length}}</p>
    <button class="button" @click="add({name: '张三'})">组件内部的store</button>

  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'Modules',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      componentInsideType: (state) => state.vuex.componentInsideType
    }),
    // 可以将模块的空间名称字符串作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文
    ...mapState('vuex', {
      countList: state => state.componentInsideType
    })
  },
  methods: {
    // ...mapMutations({
    //   add: 'changeComponent'
    // })
    add() {
      console.log(this.$store.state.vuex.componentInsideType)
      console.log(this.componentInsideType)
    }
  },
}
</script>

<style lang="less" scoped>

</style>
