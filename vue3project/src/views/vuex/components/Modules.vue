<template>
  <div class="">
    <p>{{componentInsideType.length}} -- {{countList.length}} -- {{person2}}</p>
    <button class="button" @click="add">组件内部的state</button>
    <button class="button" @click="matutionsPerson({person: 'hahahahahaha'})">组件内部的matutions</button>
    <button class="button" @click="dispatchPerson({person: '赵柳'})">组件内部的dispatch</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
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
    }),
    ...mapState({
      person: state => state.vuex.modulesStore.person,
      // 不加前缀访问的是根store
      numbers: state => state.numbers
    }),
    // 或者将模块的空间名称字符串作为第一个参数传递给上述函数
    ...mapState('vuex/modulesStore', {
      person2: state => state.person
    }),
    // getters中获取命名空间内部状态   通过this['vuex/modulesStore/largeThenZeon']使用
    ...mapGetters(['vuex/modulesStore/largeThenZeon']),
    // 或者
    ...mapGetters({
      a: 'vuex/modulesStore/largeThenZeon'
    }),
    // 或者
    ...mapGetters('vuex/modulesStore', {
      b: 'largeThenZeon'
    })
  },
  methods: {
    add() {
      console.log(this.$store.state.vuex.componentInsideType)
      console.log(this.$store.state.vuex.modulesStore.list)
      console.log(this.$store.getters['vuex/ads'])
      // 获取命名空间中的getters计算属性
      console.log(this.$store.getters['vuex/modulesStore/largeThenZeon'])
      console.log(this.componentInsideType);
      console.log(this.person, this.person2, this['vuex/modulesStore/largeThenZeon'], this.a, this.b)
      console.log(this.numbers)
    },
    /* matutionsPerson(data) {
      // 命名空间内的mutations
      this.$store.commit('vuex/modulesStore/changePerson', data)
    }, */
    // 或者
    ...mapMutations({
      matutionsPerson: 'vuex/modulesStore/changePerson'
    }),
    /* dispatchPerson(data) {
      this.$store.dispatch('vuex/modulesStore/setPerson', data)
    }, */
    // 或者
    ...mapActions({
      dispatchPerson: 'vuex/modulesStore/setPerson'
    })
  },
}
</script>

<style lang="less" scoped>

</style>
