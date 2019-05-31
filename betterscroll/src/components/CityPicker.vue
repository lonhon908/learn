<template>
  <Picker
    ref="picker"
    :title="title"
    :data="initData"
    :cancelText="cancelText"
    :confirmText="confirmText"
    :selectedIndex="selectedIndex"
    @change="handleChange"
    @select="handleSelect"/>
</template>

<script>

import Picker from './picker/picker';

export default {
  components: {
    Picker
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    title: {
      type: String
    },
    cancelText: {
      type: String
    },
    confirmText: {
      type: String
    },
    selectedIndex: {
      type: Array,
      default: [0, 0, 0]
    }
  },
  data() {
    return {
      tempIndex: [0, 0, 0],
      com: [...this.selectedIndex]
    }
  },
  computed: {
    initData() {
      const [provinceList, cityList, townList] = this.data

      const province = provinceList;
      const city = cityList[province[this.tempIndex[0]].value]
      const town = townList[city[this.tempIndex[1]].value]
      return [province, city, town]
    }
  },
  watch: {
    initData() {
      this.$refs.picker.refresh()
    }
  },
  methods: {
    show() {
      this.tempIndex = [...this.com];
      this.$refs.picker.setData(this.initData)
      this.$refs.picker.setSelectedIndex([...this.com]);
      this.$refs.picker.show()
    },
    handleSelect() {
      // 存储确定的数据，如果只是滑动改变了但是没有确定，再次打开picker应该回到上次滑动之前的位置
      this.com = [...arguments[1]]
      this.$emit('select', ...arguments);
    },
    handleChange(i, newIndex) {
      if (newIndex !== this.tempIndex[i]) {
        for(let j = 2; j > i; j--) {
          this.$set(this.tempIndex, j, 0)
          this.$refs.picker.scrollTo(j, 0)
        }

        this.$set(this.tempIndex, i, newIndex)
      }
    }
  },
}
</script>

<style lang="less" scoped>

</style>
