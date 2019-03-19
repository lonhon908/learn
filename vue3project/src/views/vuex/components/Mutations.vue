<template>
  <div>
    <p>{{count}}</p>
    <button class="button" @click="getData">add</button>
    <button class="button" @click="getData2">add+</button>
    <button class="button" @click="increment">increment</button>
    <button class="button" @click="incrementBy(100)">increment</button>
    <button class="button" @click="adddd(100)">adddd</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Mutation',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      count: 'countVuex'
    })
  },
  methods: {
    getData() {
      // 载荷应该是一个对象
      this.$store.commit('add', {step: 2});
    },
    getData2() {
      // 对象风格的提交方式
      this.$store.commit({
        type: 'add',
        step: 4
      })
    },
    ...mapMutations([
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      'increment',
      // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`]),
      'incrementBy'
    ]),
    ...mapMutations({
      // 将 `this.add()` 映射为 `this.$store.commit('incrementBy')`
      adddd: 'incrementBy'
    })
  },
}
</script>

<style lang="less" scoped>

</style>
