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
      this.$OverLay.show({
        backgroundColor: '#000',
        opacity: .1
      })
      setTimeout(() => {
        this.$OverLay.hide()
      }, 3000)
    }
  },
}
</script>

<style lang="less" scoped>

</style>

