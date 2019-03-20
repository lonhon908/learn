<template>
  <div @click="gett">{{count}} -- {{countVuex}} -- {{countAlias}} -- {{countPlusLocalState}}</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'State',
  data() {
    return {
      localCount: 1
    }
  },
  computed: {
    count() {
      let data = this.$store.state.numbers;
      return data;
    },
    // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
    ...mapState(['numbers']),
    ...mapState({
      // 获取命名空间中的state,(此处numbers与根store中的)
      aaaa: state => state.vuex.numbers,
      // 箭头函数可使代码更简练
      countVuex: state => state.countVuex,
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'countVuex',
      // 使用局部状态
      countPlusLocalState (state) {
        return state.countVuex + this.localCount
      }
    })
  },
  methods: {
    gett() {
      console.log(this.numbers);
      console.log(this.numbers[5]());
      console.log(this.aaaa)
    }
  },
}
</script>

<style lang="less" scoped>

</style>
