<template>
  <div class="">
    <button class="btn" @click="toggle">按钮</button>
    <button class="btn" @click="toggle2">按钮2</button>
    <button class="btn" @click="toggle3">按钮3</button>
    <vModal
      ref="modal"
      width="80%"
      top="50%"
      title="温馨提示"
      :content="content"
      text-align="left"
      :showCancelButton="true"
      :showConfirmButton="true"
      cancelButtonText="取消"
      confirmButtonText="确定"
      :filament="true"
      :transition="true"
      :maskClosable="false"
      :onCancel="onCancel"
      :onOk="onOk"
      @cancel="onCancel2"
      @ok="onOk2">
      <p>{{content}}</p>
    </vModal>
  </div>
</template>

<script>
import vModal from '../../../components/com/Modal';

export default {
  components: {
    vModal,
  },
  data() {
    return {
      content: '快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。'
    }
  },
  methods: {
    toggle() {
      /**
       * @param title 标题
       * @param content 内容
       * @param width 弹窗宽度 默认80%
       * @param top 弹窗离顶部的距离 默认50%
       * @param textAlign 内容对齐方式 默认center
       * @param transition 是否动画 默认true
       * @param showCancelButton 取消按钮 默认false
       * @param showConfirmButton 确定按钮 默认true
       * @param cancelButtonText 取消按钮文案 默认 ‘取消’
       * @param confirmButtonText 确定按钮文案 默认 ‘确定’
       * @param maskClosable 点击遮盖层是否关闭弹窗 默认false
       * @param onCancel 
       * @param onOk
       */
      this.$Modal.info({
        title: '标题',
        content: '我是内容我是内容我是内容我是内容我是内容我是内容',
        width: '80%',
        top: '50%',
        textAlign: 'left',
        transition: true,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        maskClosable: true,
        onCancel() {
          console.log('onCancel')
        },
        onOk() {
          console.log('onOk')
        }
      })
    },
    toggle2() {
      this.$Modal.confirm({
        title: '探讨探讨',
        content: '我是内容我是内容我是内容我是内容我是内容我是内容',
      })
    },
    toggle3() {
      this.$refs.modal.show();
    },
    onCancel() {
      console.log('onCancel')
    },
    onOk() {
      console.log('onOk')
    },
    onCancel2() {
      this.visible = false;
    },
    onOk2() {
      this.visible = false;
    }
  }
}
</script>

<style lang="less" scoped>

</style>

