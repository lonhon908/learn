<template>
  <div>我是组件child1</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route .params)
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to.params)
    next();
  },
  watch: {
    '$route'(/* to, from */) {
      console.log(this.$route.params)
    }
  },
}
</script>


