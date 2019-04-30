<template>
  <div>我是组件child4</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route .params)
  },
}
</script>