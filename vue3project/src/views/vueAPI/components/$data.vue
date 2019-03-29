<template>
  <div>
    <p>vm.$data</p>
    <div>
      <button class="btn" @click="getData">this.$data</button>
    </div>
    <p>{{$data}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '查看',
      message: 'message'
    }
  },
  methods: {
    getData() {
      console.log(this.$data)
    }
  },
}
</script>

<style lang="less" scoped>

</style>
