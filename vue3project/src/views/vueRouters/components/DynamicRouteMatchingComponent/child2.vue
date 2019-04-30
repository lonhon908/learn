<template>
  <div>我是组件child2</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route .params)
  },
}
</script>