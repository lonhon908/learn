<template>
  <div class="">
    <h2>列表的进入与离开过渡</h2>
    <div>
      <button class="btn" @click="add">add</button>
      <button class="btn" @click="remove">remove</button>
      <button class="btn" @click="reverse2">reverse</button>
    </div>
    <!-- 
        <transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。
          要使用这个新功能只需了解新增的 v-move 特性，它会在元素的改变定位的过程中应用。
    -->
    <transition-group name="list" tag="p">
      <span v-for="item in list" :key="item" class="list-item">{{item}}</span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      n: 1,
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.list.length);
    },
    add() {
      this.list.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.list.splice(this.randomIndex(), 1)
    },
    reverse2() {
      const t = Math.floor(Math.random() * 10) || 2;
      if (this.n++ % 2 === 1) {
        this.list.sort((a, b) => a % t - b % t);
      } else {
        this.list.sort((a, b) => b % t - a % t)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.list-item {
  display: inline-block;
  width: 30px;
  text-align: center;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
// <transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。
// 要使用这个新功能只需了解新增的 v-move 特性，它会在元素的改变定位的过程中应用。
.list-move{
  transition: transform 1s;
}
</style>
