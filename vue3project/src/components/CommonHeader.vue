<template>
  <header class="header">
    <div class="directory" @click="menuBar">
      <b></b>
      <b></b>
      <b></b>
    </div>
    <p>{{title}}</p>
    <span class="" @click="backToHome"></span>
  </header>
</template>

<script>
export default {
  name: 'common-header',
  props: {
    title: {
      type: String,
      default: '首页'
    }
  },
  data() {
    return {
      value: this.title
    }
  },
  methods: {
    menuBar() {
      this.$emit('menuBar')
    },
    backToHome() {
      this.$emit('backToHome');
    }
  },
  watch: {
    title(newValue) {
      this.value = newValue;
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  height: 1.28rem;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .directory{
    width: 1.28rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    b{
      width: 30%;
      height: 2px;
      background-color: #fff;
      &:nth-child(2) {
        margin: 5px 0;
      }
    }
  }
  p{
    max-width: 55%;
    text-align: center;
    color: #fff;
    font-size: 0.36rem;
  }
  span{
    width: 1.28rem;
    height: 100%;
  }
}
</style>
