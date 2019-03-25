<template>
  <transition name="fade">  
    <div
      v-if="visible"
      class="overlayer"
      @click="handlerClick"
      @touchmove.stop.prevent
      :style="style">
      <slot>
        <!-- <div class="loading"></div> -->
      </slot>
    </div>
  </transition>
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
  watch: {
    closed(newValue) {
      if (newValue) {
        // this.$el.addEventListener('transitionend', this.destroyElement);
        this.visible = false;
        setTimeout(() => {
          this.destroyElement && this.destroyElement();
        }, 300);
      }
    }
  },
  data() {
    return {
      visible: false,
      closed: false,
    }
  },
  methods: {
    show() {
      this.closed = false;
      this.visible = true;
    },
    hide() {
      this.closed = true;
      return Promise.resolve();
    },
    handlerClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
    destroyElement() {
      this.$destroy();
    },
  }
}
</script>

<style lang="less" scoped>
.overlayer{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
  background-color: #000;
  opacity: 0.4;
}
.fade-enter,.fade-leave-to{
  opacity: 0 !important;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .3s linear;
}
// .loading{
//   position: relative;
//   margin: 0 auto;
//   left: -9999px;
//   top: 50%;
//   width: 5px;
//   height: 5px;
//   border-radius: 50%;
//   background-color: blue;
//   box-shadow: 9984px 0 0 0 blue, 9999px 0 0 0 blue, 10014px 0 0 0 blue;
//   animation: dotCarousel .5s infinite linear;
// }
// @keyframes dotCarousel {
//   0%{
//     box-shadow: 9999px 0 0 2px blue, 10014px 0 0 1px blue, 9984px 0 0 3px blue;
//   }
//   33% {
//     box-shadow: 9999px 0 0 3px blue, 10014px 0 0 2px blue, 9984px 0 0 1px blue;
//   }
//   66% {
//     box-shadow: 9999px 0 0 1px blue, 10014px 0 0 3px blue, 9984px 0 0 2px blue;
//   }
//   100% {
//     box-shadow: 9999px 0 0 2px blue, 10014px 0 0 1px blue, 9984px 0 0 3px blue;
//   }
// }
</style>
