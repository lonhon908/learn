<template>
  <div class="">
    <button class="btn" @click="toggle">按钮</button>
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
      @ok="onOk2"/>
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
      // this.$refs.modal.show();
      this.$Modal.show({
        title: '标题',
        content: '我是内容我是内容我是内容我是内容我是内容我是内容',
        width: '80%',
        top: '50%',
        textAlign: 'left',
        // transition: false,
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

