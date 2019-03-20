<template>
  <div class="container">
    <!-- 头部 -->
    <CommonHeader :title="title" @menuBar="menuBar" @backToHome="backToHome"/>
    <!-- 移动菜单按钮 -->
    <div class="move-menu" v-drag @click="showSmallMenu"></div>
    <!-- 左侧大菜单 -->
    <LargeMenu v-model="visibleLargeMenu" :menuData="menulist" @changeMenu="changeMenu"/>
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
    menulist() {
      return this.$store.state.menuData;
    },
    ...mapState(['title', 'activeSmallMenuData'])
  },
  methods: {
    // 显示大菜单
    menuBar() {
      this.visibleLargeMenu = !this.visibleLargeMenu;
    },
    // 回到首页
    backToHome() {
      this.$router.push('/')
    },
    // 显示小菜单
    showSmallMenu() {
      this.visibleSmallMenu = !this.visibleSmallMenu;
    },
    // 大菜单选择时，修改到对应的小菜单
    changeMenu(data) {
      this.$store.commit('changeTitle', {
        title: data.title
      })
      // 将对应的小菜单赋值给活动菜单
      this.$store.dispatch(`${data.name}/setSmallMenu`)
    },
  }
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
