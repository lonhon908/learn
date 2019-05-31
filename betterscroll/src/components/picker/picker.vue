<template>
  <transition name="picker-fade">
    <div class="picker" v-show="visible" @click="cancel" @touchmove.prevent>
      <transition name="picker-move">
        <div class="picker-panel" v-show="visible" @click.stop>
          <div class="picker-choose">
            <span @click="cancel">{{cancelText}}</span>
            <p class="picker-title">{{title}}</p>
            <span @click="confirm">{{comfirmText}}</span>
          </div>
          <div class="picker-content">
            <div class="mask-top"></div>
            <div class="mask-bottom"></div>
            <div class="wheel-wrapper" ref="wheelWrapper">
              <div class="wheel" v-for="(data, index) in list" :key="index">
                <ul class="wheel-scroll">
                  <li class="wheel-item" v-for="(item, num) in data" :key="index+String(num)" @click="selectClick(index, num, item)">{{item.text}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    title: {
      type: String,
      default: '默认标题'
    },
    comfirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    selectedIndex: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      visible: false,
      list: this.data.slice(),
      pickerSelectedIndex: this.selectedIndex,
      pickerSelectedValue: [],
      pickerSelectedText: [],
      dirty: false, // 传入的data数据是否改变
    }
  },
  created() {
    if (!this.pickerSelectedIndex.length) {
      this.pickerSelectedIndex = this.list.map(() => 0)
    }
  },
  methods: {
    cancel() {
      this.hide();
      this.$emit('cancel');
    },
    confirm() {
      if (!this._canConfirm()) {
        return;
      }
      this.hide();

      let changed = false;
      for(let i = 0; i < this.list.length; i++) {
        // 获取每个wheel的滚动位置对应的下标
        let index = this.wheels[i].getSelectedIndex();

        this.pickerSelectedIndex[i] = index;

        let value = null;
        if (this.list[i].length) {
          value = this.list[i][index].value;
        }
        // 如果再次选择时，select有滑动改变过
        if (this.pickerSelectedValue[i] !== value) {
          changed = true;
        }
        // 缓存本次滑动的结果，用于下次滑动后对比是否有变化（有变化就触发event：'valuechange'）
        this.pickerSelectedValue[i] = this.list[i][index].value;
        this.pickerSelectedText[i] =  this.list[i][index].text;

      }
      this.$emit('select', this.pickerSelectedValue, this.pickerSelectedIndex, this.pickerSelectedText)

      if (changed) {
        this.$emit('valuechange', this.pickerSelectedValue, this.pickerSelectedIndex, this.pickerSelectedText)
      }
    },
    show() {
      if (this.visible) return;
      this.visible = true;

      // 初始化 或者 data数据被改变
      if (!this.wheels || this.dirty) {
        this.$nextTick(() => {
          this.wheels = [];
          let wheelWrapper = this.$refs.wheelWrapper;
          for(let i = 0; i < this.list.length; i++) {
            this._createWheel(wheelWrapper, i)
          }
          // 重新初始化，dirty = false
          this.dirty = false;
        })
      } else {
        for(let i = 0; i < this.list.length; i++) {
          this.wheels[i].enable();
          this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
        }
      }
    },
    hide() {
      this.visible = false;
      for(let i = 0; i < this.list.length; i++) {
        this.wheels[i].disable()
      }
      // this.wheels.forEach(wheel => {
      //   wheel.disable()
      // });
    },
    setData(data) {
      this.list = data.slice();
      this.dirty = true;
    },
    setSelectedIndex(selectedIndexArray) {
      this.pickerSelectedIndex = selectedIndexArray
      this.wheels && this.wheels.forEach((wheel, index) => {
        wheel.wheelTo(selectedIndexArray[index]);
      })
    },
    // 用于制作多级联动的
    refillColumn(index, data) {
      if (!this.visible) {
        console.error('can not use refillColumn when picker is not show');
        return;
      }
      const wheelWrapper = this.$refs.wheelWrapper;
      let scroll = wheelWrapper.children[index].querySelector('.wheel-scroll');
      let wheel = this.wheels[index];

      if (scroll && wheel) {
        // 获取原来的data
        let oldData = this.list[index];
        // 设置新的data
        this.$set(this.list, index, data);
        // 获取当前wheel的位置index
        let selectedIndex = wheel.getSelectedIndex();
        let dist = 0;
        if (oldData.length) {
          let oldValue = oldData[selectedIndex].value;
          for(let i = 0; i < data.length; i++) {
            // 获取新的data中对应的value与旧的value比较有无相等，得到对应的index，此处用于data更新之后，滚动到相应的位置
            if (data[i].value === oldValue) {
              dist = i;
              break;
            }
          }
        }
        this.pickerSelectedIndex[index] = dist;
        this.$nextTick(() => {
          wheel = this._createWheel(wheelWrapper, index);
          wheel.wheelTo(dist);
        })
      }
    },
    _createWheel(wheelWrapper, i) {
      if (!this.wheels[i]) {
        this.wheels[i] = new BScroll(wheelWrapper.children[i], {
          wheel: {
            // 初始化位置
            selectedIndex: this.pickerSelectedIndex[i],
            // 倾斜角度
            rotate: 25,
            wheelWrapperClass: 'wheel-scroll',
            wheelItemClass: 'wheel-item'
          },
          /* 
            better-scroll 的实现会阻止原生的滚动，这样也同时阻止了一些原生组件的默认行为。
            这个时候我们不能对这些元素做 preventDefault，所以我们可以配置 preventDefaultException
          */
          // 不设置这个属性时，wheel-item上的点击事件无法触发，
          preventDefaultException: {
            className: /(^|\s)wheel-item(\s|$)/
          },
          probeType: 3
        })

        // 高版本的better-scroll,当滑动之后，点击取消， 再次进入show时，会滚动到上次滑动之前的状态，此时会触发scrollEnd事件，低版本不会触发
        this.wheels[i].on('scrollEnd', () => {
          // getSelectedIndex 获取当前选中的索引值
          this.$nextTick(() => {
            let index = this.wheels[i].getSelectedIndex();
            this.$emit('change', i, index, this.pickerSelectedIndex)
          })
        })
      } else {
        this.wheels[i].refresh()
      }

      return this.wheels[i];
    },
    scrollTo(index, dist) {
      const wheel = this.wheels[index];
      wheel.wheelTo(dist);
      this.pickerSelectedIndex[index] = dist;
    },
    refresh() {
      this.$nextTick(() => {
        this.wheels.forEach(wheel => {
          wheel.refresh();
        })
      })
    },
    _canConfirm() {
      // isInTransition 判断当前 scroll 是否处于滚动动画过程中。
      return this.wheels.every(wheel => !wheel.isInTransition)
    },
    selectClick() {
      this.$emit('selectClick', ...arguments)
    }
  },
  watch: {
    data(newValue) {
      this.setData(newValue);
    },
    selectedIndex(newValue) {
      console.log('newValue', newValue)
      this.setSelectedIndex(newValue)
    }
  }
}
</script>


<style lang="less" scoped>
.picker{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
}
.picker-panel{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 270px;
  z-index: 101;
  background-color: #fff;
}

.picker-choose{
  font-size: 12px;
  color: #000;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  span{
    width: 80px;
    text-align: center;
  }
}

.picker-content{
  position: relative;
  top: 10px;
  .mask-top,.mask-bottom{
    position: absolute;
    left: 0;
    z-index: 10;
    height: 80px;
    width: 100%;
    pointer-events: none;
  }
  .mask-top{
    top: 0;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
  }
  .mask-bottom{
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
  }
}

.wheel-wrapper{
  display: flex;
  .wheel{
    flex: 1;
    height: 200px;
    overflow: hidden;
    .wheel-scroll{
      margin-top: 80px;
      list-style: none;
      font-size: 14px;
      text-align: center;
      line-height: 40px;
    }
  }
}

.picker-fade-enter,.picker-fade-leave-to{
  opacity: 0;
}
.picker-fade-enter-active,.picker-fade-leave-active{
  transition: all .3s ease-in-out;
}
.picker-move-enter,.picker-move-leave-to{
  transform: translate3d(0, 273px, 0);
}
.picker-move-enter-active,.picker-move-leave-active{
  transition: all .3s ease-in-out;
}
</style>
