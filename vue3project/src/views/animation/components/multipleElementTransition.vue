<template>
  <div class="">
    <h2>多元素过渡</h2>
    <button class="btn" @click="toggle1">按钮1</button>
    <button class="btn" @click="toggle2">按钮2</button>
    <!-- 当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。 -->
    <transition name="fade">
      <p key="1" v-if="index===0">55555555555555555555555</p>
      <p key="2" v-if="index===1">22222222222222222222222</p>
      <p key="3" v-if="index===2">33333333333333333333333</p>
    </transition>
    <!-- 同时生效的进入和离开的过渡不能满足所有要求，所以 Vue 提供了 过渡模式 -->
    <!-- 
          in-out：新元素先进行过渡，完成之后当前元素过渡离开。
          out-in：当前元素先进行过渡，完成之后新元素过渡进入。
    -->
    <transition name="fade" mode="out-in">
      <p key="4" v-if="index2===0">55555555555555555555555</p>
      <p key="5" v-if="index2===1">22222222222222222222222</p>
      <p key="6" v-if="index2===2">33333333333333333333333</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      index2: 1,
      total: 1,
    }
  },
  methods: {
    toggle1() {
      this.index = ++this.total % 3;
    },
    toggle2() {
      this.index2 = ++this.total % 3;
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s ease;
}
</style>

