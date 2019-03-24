<template>
  <div class="">
    <button class="btn" @click="toggle">overlay</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggle() {
      this.$OverLay.show()
      setTimeout(() => {
        this.$OverLay.hide()
      }, 2000)
    }
  },
}
</script>

<style lang="less" scoped>

</style>

