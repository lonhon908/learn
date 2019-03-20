<template>
  <div class="">
    <p>{{person}} -- {{list}} -- {{a}}</p>
    <button class="button" @click="changePerson({person: '王五'})">person</button>
  </div>
</template>

<script>
/* 
  通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。
  它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
*/
import {createNamespacedHelpers} from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('vuex/modulesStore')

export default {
  name: 'CreateNamespacedHelpers',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['person', 'list']),
    ...mapState({
      a: state => state.person
    })
  },
  methods: {
    ...mapMutations(['changePerson']),
    // 或者
    // changePerson(data) {
    //   this.$store.commit('vuex/modulesStore/changePerson', data)
    // }
  },
}
</script>
