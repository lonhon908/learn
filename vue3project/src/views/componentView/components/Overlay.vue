<template>
  <div class="">
    <button class="btn" @click="toggle">overlay</button>
    <vOverlay v-model="visible"/>
  </div>
</template>

<script>
import vOverlay from '../../../components/Overlay';

export default {
  components: {
    vOverlay,
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggle() {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 2000)
    }
  },
}
</script>

<style lang="less" scoped>

</style>

