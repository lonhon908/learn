<template>
  <div class="container">
    <!-- 头部 -->
    <CommonHeader :title="title" @menuBar="menuBar" @backToHome="backToHome"/>
    <!-- 移动菜单按钮 -->
    <div class="move-menu" v-drag @click="showSmallMenu"></div>
    <!-- 左侧大菜单 -->
    <LargeMenu v-model="visibleLargeMenu" :menuData="menulist"/>
    <!-- 底部小菜单 -->
    <SmalllMenu v-model="visibleSmallMenu" :menuData="activeSmallMenuData"/>
    <!-- webView -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue';
import LargeMenu from './components/LargeMenu';
import SmalllMenu from './components/SmallMenu';

import {mapState} from 'vuex';

export default {
  components: {
    CommonHeader,
    LargeMenu,
    SmalllMenu,
  },
  data() {
    return {
      showMenu: false,
      visibleLargeMenu: false,
      visibleSmallMenu: false,
    }
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    menulist() {
      return this.$store.state.menuData;
    },
    ...mapState(['activeSmallMenuData'])
  },
  methods: {
    menuBar() {
      this.visibleLargeMenu = !this.visibleLargeMenu;
    },
    backToHome() {},
    showSmallMenu() {
      this.visibleSmallMenu = !this.visibleSmallMenu;
    },
    jump(data) {
      this.$router.push(data.path);
      this.menuBar();
    }
  },
}
</script>


<style lang="less">
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.28rem;
  line-height: 0.8rem;
}
</style>
