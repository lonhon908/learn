<template>
  <transition :name="transition?'fade':''">
    <div v-show="visible" class="modal-container flex justify-content-center" @click="hideModal">
      <div class="pop-container" :style="{'top': top, 'width': width}">
        <h1 class="model-title" v-if="title" v-html="title"></h1>
        <div class="model-content" :style="{'textAlign': textAlign,maxHeight: maxHeight}">
          <slot>
            <div v-html="content"></div>
          </slot>
        </div>
        <slot name="btn">
          <div :class="filament?'modal-btn-filament':'modal-btn'" v-if="showConfirmButton||showCancelButton">
            <span v-if="showCancelButton" @click="cencel">{{cancelButtonText}}</span>
            <span v-if="showConfirmButton" @click="ok">{{confirmButtonText}}</span>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    // 提示框的标题
    title: {
      type: String,
      default: null
    },
    // 提示框的内容
    content: {
      type: String,
      default: null
    },
    // 是否显示确认按钮
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    // 是否显示取消按钮
    showCancelButton: {
      type: Boolean,
      default: false
    },
    // 按钮文案
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    // 按钮文案
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    // 提示框宽度
    width: {
      type: [String, Number],
      default: '72%'
    },
    // 文本的对齐方式
    textAlign: {
      validator(data) {
        return ['left', 'center', 'right'].indexOf(data) > -1;
      },
      default: 'center',
    },
    // 是否允许点击遮罩层关闭
    maskClosable: {
      type: Boolean,
      default: false,
    },
    // 弹窗最大高度，超出出现局部滚动
    maxHeight: {
      type: String,
      default: '50vh'
    },
    // 弹窗距离顶部的距离
    top: {
      type: String,
      default: '50%'
    },
    // 是否动画出现
    transition: {
      type: Boolean,
      default: true
    },
    // 细线，dpr=2(scaleY(0.5))
    filament: {
      type: Boolean,
      default: false,
    },
    onCancel: Function,
    onOk: Function,
  },
  data() {
    return {
      visible: false,
      closed: false, // 是否已关闭
    }
  },
  watch: {
    closed(newValue) {
      if (newValue) {
        // this.$el.addEventListener('transitionend', () => {
        //   this.destroyElement && this.destroyElement();
        //   this.$destroy();
        // }, false);
        setTimeout(() => {
          this.destroyElement && this.destroyElement();
        }, 300);
        this.visible = false;
      }
    }
  },
  methods: {
    show() {
      this.visible = true;
      this.closed = false;
    },
    hideModal() {
      if (this.maskClosable) {
        this.hide();
      }
    },
    cencel() {
      if (this.onCancel) {
        this.onCancel();
      }
      this.$emit('cancel');
      this.hide();
    },
    ok() {
      if (this.onOk) {
        this.onOk();
      }
      this.$emit('ok');
      this.hide();
    },
    hide() {
      this.closed = true;
    },
    destroyElement() {}
  },
}
</script>

<style lang="less" scoped>
.modal-container{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: PingFangSC-Regular;
  font-size: 0.32rem;
  color: #1d1d26;
  letter-spacing: 0;
  text-align: center;
}
.flex{
  display: flex;
}
.justify-content-center{
  justify-content: center;
}
.align-items-center {
  align-items: center;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .3s ease;
}

.pop-container{
  width: 72%;
  max-width: 100% !important;
  max-height: 100%;
  background-color: #fff;
  border-radius: 2px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  .model-title{
    line-height: 0.84rem;
    text-align: center;
    padding-top: 0.2rem;
  }
  .model-content{
    padding: 0 0.32rem 0.4rem;
    font-size: 0.28rem;
    line-height: 0.48rem;
    font-family: PingFangSC-Light;
    overflow-y: auto;
  }
}
.modal-btn-filament{
  display: flex;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.92rem;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 80, 0.05);
    transform: scaleY(0.5);
  }
  span{
    flex: 1;
    color: #1d1d26;
    &:nth-child(2) {
      position: relative;
      &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: rgba(0, 0, 80, 0.05);
        transform: scaleX(0.5);
      }
      color: #FB723E;
    }
    &:only-child{
      color: #FB723E;
    }
  }
}
.modal-btn{
  display: flex;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.92rem;
  border-top: 1px solid rgba(0, 0, 80, 0.05);
  span{
    flex: 1;
    color: #1d1d26;
    &:nth-child(2) {
      border-left: 1px solid rgba(0, 0, 80, 0.05);
      color: #FB723E;
    }
    &:only-child{
      color: #FB723E;
    }
  }
}
</style>

