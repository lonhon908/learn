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
        message: 'O(∩_∩)O哈哈~'
      })
    }
  },
}
</script>

<style lang="less" scoped>

</style>

