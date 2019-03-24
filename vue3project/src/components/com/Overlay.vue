<template>
  <div
    class="overaly"
    @click="handlerClick"
    @touchmove.stop.prevent
    :style="style"
    appear="fade">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function,
    opacity: {
      type: Number,
      default: 0.4,
    },
    backgroundColor: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    style() {
      return {
        opacity: this.opacity,
        backgroundColor: this.backgroundColor
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    handlerClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  }
}
</script>

<style lang="less" scoped>
.overaly{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: #000;
  opacity: 0.4;
}
.fade-enter,.fade-leave-to{
  opacity: 0 !important;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .3s linear;
}
</style>
