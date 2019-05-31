<template>
  <div class="pullup wrapper" ref="wrapper">
    <ul class="list wrapper-container">
      <li v-for="(item, index) in list" :key="index" @click="add($event)">{{item}}</li>
      <div class="pullup-wrapper">
        <p>{{pullup}}</p>
      </div>
    </ul>
    <div class="pulldown-wrapper" v-if="options.pullDownRefresh" :style="pullDownWrapperStyle">
      <p>{{pullDown}}</p>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

const BEFORE = 'before';
const LOADING = 'loading';
const AFTER = 'after';

export default {
  data() {
    return {
      list: [],
      page: 1,
      n: 0,
      scroll: null,
      options: {
        probeType: 1, // 可选值：1、2、3
        // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件
        click: true,
        // 这个配置用于做下拉刷新功能，默认为 false  当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新
        pullDownRefresh: {
          threshold: 50, // 触发下拉阈值
          stop: 50 // 回弹停留的距离
        },
        // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
        pullUpLoad: {
          threshold: 50, // 上拉阈值
        },
      },
      pullDown: BEFORE, // 下拉刷新过程状态变化
      pullup: BEFORE, // 上拉加载过程状态变化
      pullDownWrapperStyle: `top: -50px`,
    }
  },
  mounted() {
    this._initScroll();
    this.init()
  },
  methods: {
    _initScroll() {
      if (this.scroll) {
        if (this.pullDown === LOADING) {
          this.scroll.finishPullDown();
          this.pullDown = AFTER;
          setTimeout(() => {
            this.pullDown = BEFORE;
          }, 200)
        }
        if (this.pullup === LOADING) {
          this.scroll.finishPullUp();
          this.pullup = AFTER;
          setTimeout(() => {
            this.pullup = BEFORE;
          }, 200)
        }
        // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
        this.scroll.refresh();
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, this.options);
      this.scroll.on('pullingDown', () => {
        this.pullDown = LOADING;
        this.n = 0;
        this.init(1);
      })
      this.scroll.on('touchEnd', (e) => {
        console.log(e)
      })
      this.scroll.on('scroll', (pos) => {
        // if (this.pullDown === BEFORE) {
          // console.log(Math.max(0, pos.y))
          this.pullDownWrapperStyle = `top: ${Math.max(0, pos.y) - 50}px`
        // }
      })
      this.scroll.on('pullingUp', () => {
        this.pullup = LOADING;
        this.init();
      })
    },
    init(page = this.page) {
      this.getData().then(res => {
        if (page === 1) {
          this.list = res;
        } else {
          this.list = this.list.concat(res)
        }
        this.page++;
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    getData() {
      const that = this;
      return new Promise(resolve => {
        setTimeout(() => {
          let arr = [];
          for(let i = 0; i < 15; i++) {
            that.n += 1;
            arr.push(that.n)
          }
          resolve(arr)
        }, 1500)
      })
    },
    add(e) {
      // 滚动到指定的目标元素
      this.scroll.scrollToElement(e.target, 200)
    },
  },
}
</script>


<style lang="less" scoped>
.wrapper{
  height: 100%;
  overflow: hidden;
  .wrapper-container{
    min-height: 100.1%;
    font-size: 0.28rem;
    line-height: 1rem;
    text-align: center;
  }
}
.pulldown-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 0.28rem;
  color: #ffffff;
  line-height: 1rem;
  text-align: center;
  background-color: #000;
}
.pullup-wrapper{
  font-size: 0.28rem;
  line-height: 1rem;
  text-align: center;
}
</style>

