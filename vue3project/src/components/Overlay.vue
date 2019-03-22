<template>
  <transition name="overlay">
    <div
      class="overlay"
      v-if="visible">
      <div></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: this.value,
    }
  },
  watch: {
    value(newValue) {
      this.visible = newValue;
    }
  }
}
</script>

<style lang="less" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.1);
}
.overlay-enter,.overlay-leave-to{
  background-color: rgba(0, 0, 0, 0);
}
.overlay-enter-active, .overlay-leave-active{
  transition: all .5s linear;
}
</style>

