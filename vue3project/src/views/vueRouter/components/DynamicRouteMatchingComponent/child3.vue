<template>
  <div>我是组件child3</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route .params)
  },
}
</script>