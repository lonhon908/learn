<template>
  <div class="wrapper" ref="wrapper">
    <div class="wrapper-content">
      <div ref="listWrapper">
        <slot>
          <ul class="list-content">
            <li
              v-for="(item, index) in data"
              :key="index"
              @click="clickItem(item)">{{item}}</li>
          </ul>
        </slot>
      </div>
      <!-- 可用于作用域插槽 -->
      <slot
        name="pullup"
        :pullUpLoad="pullUpLoad"
        :isPullingUp="isPullingUp"
        :pullUpDirty="pullUpDirty">
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-pullup" v-if="!isPullingUp">
            <p>{{pullUpText}}</p>
          </div>
          <div v-else class="pulluping">
            <Loading />
          </div>
        </div>
      </slot>
    </div>
    <slot name="pulldown">
      <div class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div v-if="beforePullDown" class="before-pulldown">
          <p>{{refreshText}}</p>
        </div>
        <div v-else class="pulldowning">
          <div v-if="isPullingDown" class="loading">
            <Loading />
          </div>
          <div v-else>
            <p>{{refreshText}}</p>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Loading from './Loading';

export default {
  name: 'vue-better-scroll',
  components: {
    Loading
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false
    },
    scrollbar: {
      type: null,
      default: false
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    topFollowPullDown: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null,
      beforePullDown: true, // 触发下拉刷新之前
      isPullingDown: false, // 处于下拉刷新回调中
      isRebounding: false, // 处于下拉刷新成功到顶部回弹到原始位置这段时间内
      isPullingUp: false, // 处于上拉加载过程中
      pullUpDirty: false, // 数据是否已全部加载完
      pullDownStyle: '', // 下拉刷新时，pullDownWrapper的样式
      pullDownInitTop: -50, // 初始化时top的值
    }
  },
  computed: {
    pullUpText() {
      return this.pullUpDirty ? '没有更多数据了' : '上拉加载更多'
    },
    refreshText() {
      if (this.beforePullDown) {
        return '下拉刷新'
      }
      return '刷新成功'
    }
  },
  beforeMount() {
    this.pullDownStyle = `top: ${this.pullDownInitTop}px`;
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    })
  },
  methods: {
    _initScroll() {
      let options = {
        probeType: this.probeType,
        click: this.click,
        scrollbar: this.scrollbar,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      }

      this.scroll = new BScroll(this.$refs.wrapper, options);

      if (this.listenScroll) {
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })
      }
      
      if (this.listenBeforeScroll) {
        this.scroll.on('listenBeforeScroll', () => {
          this.$emit('listenBeforeScroll')
        })
      }

      if (this.pullDownRefresh) {
        this._initPullDownRefresh()
      }

      if (this.pullUpLoad) {
        this._initPullUpLoad()
      }

    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    forceUpdata(dirty) {
      if (this.pullDownRefresh && this.isPullingDown) { // 下拉刷新
        this.isPullingDown = false;
        this._reboundPullDown().then(() => {
          this._afterPullDown();
        })
      } else if (this.pullUpLoad && this.isPullingUp) { // 上拉
        this.pullUpDirty = dirty;
        this.isPullingUp = false;
        // 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
        this.scroll.finishPullUp();
        // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
        this.refresh();
      } else {
        this.refresh()
      }
    },
    _initPullDownRefresh() {
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false;
        this.isPullingDown = true;
        this.$emit('pullingDown');
      })

      this.scroll.on('scroll', pos => {
        if (this.topFollowPullDown) {
          this.pullDownStyle = `top: ${pos.y + this.pullDownInitTop}px`;
        } else {
          if (this.beforePullDown) {
            this.pullDownStyle = `top: ${Math.min(pos.y + this.pullDownInitTop, 10)}px`;
          }
          if (this.isRebounding) {
            this.pullDownStyle = `top: ${10 - (this.pullDownRefresh.stop - pos.y)}px`;
          }
        }
      })
    },
    _initPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        // 如果全部的数据都已加载完全，不需要再执行pullingUp了
        if (this.pullUpDirty) {
          return this.scroll.finishPullUp();
        }
        this.isPullingUp = true;
        this.$emit('pullingUp')
      })
    },
    // 刷新成功之后回弹的过程中回调,刷新成功之后页面停留时间再回弹
    _reboundPullDown() {
      const { stopTime = 600 } = this.pullDownRefresh;
      return new Promise(resolve => {
        setTimeout(() => {
          this.isRebounding = true;
          this.scroll.finishPullDown();
          resolve()
        }, stopTime);
      })
    },
    _afterPullDown() {
      setTimeout(() => {
        this.pullDownStyle = `top: ${this.pullDownInitTop}px`;
        this.beforePullDown = true;
        this.isRebounding = false;
        this.refresh();
        // bounceTime: 默认值：700（单位ms，不建议修改） 作用：设置回弹动画的动画时长。
      }, this.scroll.options.bounceTime);
    },
    clickItem(item) {
      this.$emit('click', item)
    },
    destory() {
      this.scroll.destory();
    }
  },
}
</script>

<style lang="less" scoped>
.wrapper{
  height: 100%;
  position: relative;
  overflow: hidden;
  .wrapper-content{
    min-height: 100.1%;
  }
}
.list-content{
  font-size: 0.28rem;
  line-height: 1rem;
  text-align: center;
}

.pullup-wrapper{
  height: 1rem;
  .before-pullup{
    font-size: 0.28rem;
    line-height: 1rem;
    color: orange;
    text-align: center;
  }
  .pulluping{
    height: 100%;
  }
}
.pulldown-wrapper{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1rem;
  z-index: 10;
  font-size: 0.24rem;
  line-height: 1rem;
  text-align: center;
  .pulldowning, .loading{
    height: 100%;
  }
}
</style>

