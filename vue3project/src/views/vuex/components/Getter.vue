<template>
  <div class="">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
      <li v-for="(item, index) in list2" :key="list.length+index">{{item}}</li>
    </ul>
    <button class="button" @click="show">console</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Getter',
  data() {
    return {}
  },
  computed: {
    list() {
      return this.$store.getters.numberList
    },
    // 通过让 getter 返回一个函数，来实现给 getter 传参
    list2() {
      return this.$store.getters.numberListData('Boolean')
    },
    ...mapGetters(['numberList']),
    ...mapGetters({
      // 映射为 `this.$store.getters.numberList`
      doneCount: 'numberList',
      // 辅助函数无法传参
    })
  },
  methods: {
    show() {
      console.log(this.numberList)
    }
  },
}
</script>

<style lang="less" scoped>

</style>

