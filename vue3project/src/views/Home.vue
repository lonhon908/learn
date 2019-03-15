<template>
  <div class="home">
    <HeaderTitle
      :title="title"
      @menuBar="menuBar"
      @backTop="backTop"/>
    <MoveMenuBtn />
    <LeftMonu
      v-model="menuVisible"
      :menuData="menuData"/>
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
      menuData: [{
        path: '/', // 路由
        name: 'home', // 命名路由
        value: '首页', // 该路由描述
        title: '首页', // 路由中文名
      }],
      title: '',
      menuVisible: false,
    }
  },
  methods: {
    menuBar() {
      this.menuVisible = !this.menuVisible;
    },
    backTop() {},
  },
}
</script>

<style lang="less" scoped>

</style>

