<template>
  <div class="">
    <p>{{count}}</p>
    <button class="button" @click="sendTimeOut">sendTimeOut</button>
    <button class="button" @click="incrementBy({time: 2, step: 10000})">支持传参</button>
    <button class="button" @click="add({time: 5})">add</button>
    <button class="button" @click="actionA">返回promise</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
export default {
  name: 'Action',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      count: 'countVuex'
    })
  },
  methods: {
    sendTimeOut() {
      // Action 通过 store.dispatch 方法触发
      this.$store.dispatch('increment', {
        time: 2
      })
      // 对象形式
      /* this.$store.dispatch({
        type: 'increment',
        time: 1
      }) */
    },
    ...mapActions([
      // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      'increment',
      // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
      'incrementBy', // `mapActions` 也支持载荷
    ]),
    ...mapActions({
      // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      add: 'increment'
    }),
    actionA() {
      this.$store.dispatch('actionA').then((res) => {
        // do something
        console.log(res);
        return this.$store.dispatch('actionB')
      }).then((res) => {
        console.log(res);
      })
    }
  },
}
</script>

<style lang="less" scoped>

</style>
