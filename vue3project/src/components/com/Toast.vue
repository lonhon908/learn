<template>
  <transition name="fade">
    <div class="toast" v-if="visible">
      <div class="toast-content" :style="{'backgroundColor':backgroundColor,color: color,top: position}">
        {{message}}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    // 自动关闭限制时间
    duration: {
      type: Number,
      default: 2500
    },
    // toast位置
    position: {
      type: String,
      default: "50%"
    },
    backgroundColor: {
      type: String,
      default: '#000000'
    },
    color: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data() {
    return {
      visible: false,
      closed: false, // 已关闭
      timer: null
    }
  },
  mounted() {
    let duration = this.duration > 0 ? this.duration : 2500;
    this.startTimer(duration);
  },
  beforeDestroy() {
    this.stopTimer();
  },
  watch: {
    closed(newValue) {
      if (newValue) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },
  methods: {
    show() {
      this.visible = true;
    },
    startTimer(duration) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, duration);
    },
    stopTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    close() {
      this.closed = true;
    },
    destroyElement() {
      this.$destroy();
    }
  },
}
</script>

<style lang="less" scoped>
.toast{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: transparent;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .3s ease;
}

.toast-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  line-height: 20px;
  padding: 10px;
  min-width: 30vw;
  max-width: 70vw;
  word-break: break-all;
  border-radius: 3px;
  text-align: center;
}
</style>
