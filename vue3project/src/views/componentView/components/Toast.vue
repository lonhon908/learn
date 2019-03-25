<template>
  <div class="">
    <button class="btn" @click="toggle">按钮</button>
    <p>this.$Toast.show({message: 'O(∩_∩)O哈哈~'})</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    toggle() {
      this.$Toast.show({
        message: 'O(∩_∩)O哈哈~',
        duration: 3000,
        position: '50%',
        backgroundColor: 'red',
        color: '#fff'
      })
    }
  },
}
</script>

<style lang="less" scoped>

</style>

