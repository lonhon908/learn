<template>
  <div class="common-container vuex">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      list: [{
        title: 'a'
      }]
    }
  },
  methods: {
    menu() {
      this.visible = !this.visible;
    }
  },
}
</script>

<style lang="less" scoped>

</style>
