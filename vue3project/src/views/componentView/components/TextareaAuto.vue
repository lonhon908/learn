<template>
  <div class="">
    <AutoTextarea
      v-model="message"
      placeholder="请输入"
      :maxLength="1000"
      :style="{'text-align': 'right', 'resize': 'none','backgroundColor': '#eee'}"
      :autosize="{minRows: 1, maxRows: 5}"/>
  </div>
</template>

<script>
import AutoTextarea from '../../../components/com/TextareaAuto';

export default {
  components: {
    AutoTextarea,
  },
  data() {
    return {
      message: ''
    }
  },
}
</script>

<style lang="less" scoped>

</style>
