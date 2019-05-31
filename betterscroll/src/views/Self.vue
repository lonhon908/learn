<template>
  <div class="self">
    <div class="top">
      <p>标题</p>
    </div>
    <div class="container">
      <VueBetterScroll
        class="wrapper-scroll"
        ref="scroll"
        :data="data"
        :probeType="options.probeType"
        :click="options.click"
        :scrollbar="options.scrollbar"
        :pull-down-refresh="options.pullDownRefresh"
        :pull-up-load="options.pullUpLoad"
        :listen-scroll="options.listenScroll"
        :listen-before-scroll="options.listenBeforeScroll"
        :topFollowPullDown="options.topFollowPullDown"
        @click="clickItem"
        @scroll="onScroll"
        @listenBeforeScroll="onListenBeforeScroll"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp">
        <ul class="list">
          <li v-for="(item, index) in data" :key="index">{{item + '**' + index}}</li>  
        </ul>
        <!-- 作用域插槽 -->
        <template slot="pullup" slot-scope="PropsData">
          <div class="pullup-wrapper" v-if="PropsData.pullUpLoad">
            <div class="before-pullup" v-if="!PropsData.isPullingUp">
              <p>{{pullUpText(PropsData)}}</p>
            </div>
            <div v-else class="pulluping">
              <Loading />
            </div>
          </div>
        </template>
      </VueBetterScroll>
    </div>
  </div>
</template>

<script>
import VueBetterScroll from '../components/BScroll';
import Loading from '../components/Loading';

export default {
  components: {
    VueBetterScroll,
    Loading
  },
  data() {
    return {
      options: {
        probeType: 1,
        click: true,
        pullDownRefresh: {
          threshold: 90,
          stop: 50, // 下拉刷新时，顶部loading 距离上停留的位置
          stopTime: 600
        },
        pullUpLoad: {
          threshold: -10
        },
        scrollbar: {
          fade: true,
        },
        listenScroll: false,
        listenBeforeScroll: true,
        topFollowPullDown: false, // 下拉时，顶部露出的文案是否跟随下拉
      },
      page: 1,
      n: 1,
      max: 100,
      data: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getData().then(res => {
        if (this.page === 1) {
          this.data = res;
        } else {
          this.data = this.data.concat(res)
        }
        this.page++;
        if (this.pullUping) {
          this.pullUping = false;
          let f = this.data.length >= this.max ? true : false;
          this.$nextTick(() => {
            this.$refs.scroll.forceUpdata(f);
            // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
            // this.$refs.scroll.refresh();
            // refresh放在finishPullUp()里面去了
          })
        }
        if (this.refreshing) {
          this.refreshing = false;
          this.$nextTick(() => {
            this.$refs.scroll.forceUpdata()
            // 刷新之后，注意将数据状态变更为“没有全部加载完成”
            this.$refs.scroll.pullUpDirty = false;
          })
        }
        console.log('成功')
      }).catch(() => {
        if (this.pullUping) {
          this.pullUping = false;
          this.$nextTick(() => {
            this.$refs.scroll.forceUpdata()
            // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
            // this.$refs.scroll.refresh();
          })
        }
        if (this.refreshing) {
          this.refreshing = false;
          this.$nextTick(() => {
            this.$refs.scroll.forceUpdata()
            // 刷新之后，注意将数据状态变更为“没有全部加载完成”
            // this.$refs.scroll.pullUpDirty = false;
          })
        }
        console.log('失败')
      })
    },
    getData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.2) {
            let arr = [];
            for(let i = 0; i < 20; i++) {
              arr.push(this.n++)
            }
            resolve(arr)
          } else {
            reject()
          }
        }, 1000);
      })
    },
    clickItem(item) {
      console.log(item)
    },
    onScroll() {
      console.log('onScroll')
    },
    onListenBeforeScroll() {
      console.log('onListenBeforeScroll')
    },
    onPullingDown() {
      console.log('onPullingDown')
      this.refreshing = true;
      this.page = 1;
      this.n = 1;
      this.init();
    },
    onPullingUp() {
      console.log('onPullingUp开始')
      this.pullUping = true;
      this.init();
      // this.$refs.scroll.finishPullUp();
    },
    pullUpText(data) {
      return data.pullUpDirty ? '没有更多数据了' : '上拉加载更多'
    }
  },
}
</script>

<style lang="less" scoped>
.self{
  height: 100%;
  position: relative;
  .top{
    font-size: 0.28rem;
    color: #ffffff;
    line-height: 1rem;
    text-align: center;
    background-color: #000;
  }
  .container{
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 1;
    overflow: hidden;
  }
}
.list{
  font-size: 0.24rem;
  line-height: 1rem;
  color: rgb(247, 72, 3);
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
</style>
