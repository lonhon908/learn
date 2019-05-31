<template>
  <ul class="home">
    <li v-for="(item, index) in list" :key="index" @click="$router.push(item.path)">{{item.value}}</li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      list: [
        {
          path: '/pullup',
          value: '上拉加载，下拉刷新'
        },
        {
          path: '/vue-better-scroll',
          value: '自定义组件上拉加载，下拉刷新'
        },
        {
          path: '/picker',
          value: 'picker'
        }
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  font-size: 0.24rem;
  line-height: 1rem;
  padding: 0 0.4rem;
  box-sizing: border-box;
  li{
    position: relative;
    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background-color: #000;
    }
  }
}
</style>
