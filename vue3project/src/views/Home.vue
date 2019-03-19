<template>
  <div class="home">
    <HeaderTitle
      :title="$store.state.title"
      @menuBar="menuBar"
      @backTop="backTop"/>
    <MoveMenuBtn />
    <LeftMonu
      v-model="menuVisible"
      :menuData="menuData"/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle';
import MoveMenuBtn from '../components/MoveMenuBtn';
import LeftMonu from '../components/LeftMenu';

export default {
  name: 'home',
  components: {
    HeaderTitle,
    MoveMenuBtn,
    LeftMonu,
  },
  created() {
    let title = (this.$route.meta || {}).title || '';
    if (title) {
      this.title = title;
    }
  },
  data() {
    return {
      title: '',
      menuVisible: false,
    }
  },
  computed: {
    menuData() {
      return this.$store.state.menuData;
    }
  },
  methods: {
    menuBar() {
      this.menuVisible = !this.menuVisible;
    },
    backTop() {
      // 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
      this.$store.commit('changeTitle', {
        title: '主页'
      })
    },
  },
}
</script>

<style lang="less" scoped>

</style>

