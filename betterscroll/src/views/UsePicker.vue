<template>
  <div class="usePicker">
    <div class="usePickerItem" @click="showPicker(0)">点击0</div>
    <div class="usePickerItem" @click="showPicker(1)">点击1</div>
    <div class="usePickerItem" @click="showPicker(2)">三级联动城市选择</div>
    <Picker
      ref="picker0"
      :data="data[0]"
      :selectedIndex="selectedIndex[0]"
      @cancel="cancel(0, arguments)"
      @select="select(0, arguments)"
      @change="change(0, arguments)"
      @valuechange="valuechange(0, arguments)"/>

    <Picker
      ref="picker1"
      :data="data[1]"
      :selected-index="selectedIndex[1]"
      @cancel="cancel(1, arguments)"
      @select="select(1, arguments)"
      @change="change(1, arguments)"
      @valuechange="valuechange(1, arguments)"/>

    <CityPicker
      ref="picker2"
      :data="areaData"
      :selected-index="selectedIndex[1]"
      @select="select(1, arguments)"/>
  </div>
</template>

<script>
import Picker from '../components/picker/picker';
import CityPicker from '../components/CityPicker';

import data from '../common/js/address';
import { province_default, city_default, town_default } from '../common/js/area';

// let provinceData = data.map(item => ({
//   text: item.name,
//   value: item.code
// }))
// // console.log(JSON.stringify(provinceData))

// let cityData = {};
// let townData = {};
// data.forEach(item => {
//   cityData[item.code] = item.child.map(ci => {
//     townData[ci.code] = ci.child.map(bi => {
//       return {
//         city: ci.name,
//         text: bi.name,
//       }
//     })
//     return {
//       province: item.name,
//       text: ci.name,
//       value: ci.code
//     }
//   })
// })
// console.log(JSON.stringify(townData))
// console.log(cityData, townData)
// console.log(Object.keys(townData).length)


let province = [];
let city = [];
let town = [];

province = data.map((item, index) => ({
  id: item.code,
  text: item.name,
  value: index
}))

city = data[0].child.map((item, index) => ({
  id: item.code,
  text: item.name,
  value: index
}))

town = data[0].child[0].child.map((item, index) => ({
  id: item.code,
  text: item.name,
  value: index
}))

let data0 = [
    {
      disabled: true,
      text: '剧毒',
      value: 1
    }, {
      text: '蚂蚁',
      value: 2
    },
    {
      text: '幽鬼',
      value: 3
    },
    {
      text: '主宰',
      value: 4
    },
    {
      disabled: true,
      text: '卡尔',
      value: 5
    },
    {
      disabled: true,
      text: '宙斯',
      value: 6
    },
    {
      disabled: true,
      text: '巫医',
      value: 7
    }, {
      disabled: true,
      text: '巫妖',
      value: 8
    },
    {
      disabled: true,
      text: '神谕者',
      value: 9
    },
    {
      text: '撼地神牛',
      value: 10
    },
    {
      text: '蓝胖子',
      value: 11
    },
    {
      text: '水晶室女',
      value: 12
    },
    {
      text: '莉娜',
      value: 13
    },
    {
      text: '斯拉克',
      value: 14
    },
    {
      text: '斯拉达',
      value: 15
    }
  ]

export default {
  components: {
    Picker,
    CityPicker
  },
  data() {
    return {
      data: [
        [data0],
        [province, city, town]
      ],
      areaData: [province_default, city_default, town_default],
      selectedIndex: [
        [2],
        [0, 0, 0]
      ],
      changeIndex: [],

    }
  },
  computed: {

  },
  mounted() {
    
  },
  methods: {
    showPicker(index) {
      let picker = this.$refs[`picker${index}`]
      picker.show()
    },
    cancel() {
      console.log('取消')
    },
    change(index, args) {
      console.log(args)
      if (index === 1) { // 省市区三级联动组件
        if (args[0] === 0) {
          this.$set(this.selectedIndex, 1, [args[1], 0, 0])
          this.$set(this.data, 1, [
            province,
            data[args[1]].child.map((item, index) => ({
              id: item.code,
              text: item.name,
              value: index
            })),
            data[args[1]].child[0].child.map((item, index) => ({
              id: item.code,
              text: item.name,
              value: index
            }))
          ])
        } else if (args[0] === 1) {
          this.$set(this.selectedIndex, 1, [args[2][0], args[1], 0])
          this.$set(this.data, 1, [
            province,
            this.data[1][1],
            data[args[2][0]].child[args[1]].child.map((item, index) => ({
              id: item.code,
              text: item.name,
              value: index
            }))
          ])
        }
      }
    },
    select() {
      console.log('select', arguments)
    },
    valuechange() {
      console.log('valuechange', arguments)
    }
  },
}
</script>

<style lang="less" scoped>
.usePicker{
  padding: 0 10px;
  .usePickerItem{
    font-size: 0.28rem;
    line-height: 1rem;
    color: #000000;
    text-align: center;
    border-bottom: 1px solid #eeeeee;
  }
}
</style>


