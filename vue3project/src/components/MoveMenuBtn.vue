<template>
  <div class="move-menu" v-drag @click="menu"></div>
</template>

<script>
export default {
  name: 'MoveMenuBtn',
  data() {
    return {
      // dragData: {
      //   borderColor: 'black',
      //   opacity: 0.9,
      // }
    }
  },
  methods: {
    menu() {
      this.$emit('showMenu');
    }
  },
}
</script>

<style lang="less" scoped>
.move-menu{
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  width: 0.7rem;
  height: 0.7rem;
  border: 0.1rem solid rgba(0, 0, 255, 0.7);
  border-radius: 50%;
  z-index: 9999;
}
</style>
