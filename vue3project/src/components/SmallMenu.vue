<template>
  <transition name="rootComponentStyle">
    <div class="common-bottom-container" v-show="visibleSmallMenu" @click.stop.prevent="hideMenu">
      <transition name="rootComponentStyle-list">
        <div class="common-bottom-container-list" v-show="visibleSmallMenu">
          <ul class="list">
            <li v-for="(item, index) in arr" :key="index" @click="jump(item)">{{item.title}}</li>
          </ul>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'small-menu',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    meunData: {
      type: Array,
      default: () => ([]),
    }
  },
  data() {
    return {
      visibleSmallMenu: this.value,
      list: [...this.meunData],
      arr: [{
        path: 'simple',
        name: 'simple',
        value: '',
        title: 'simple',
      }, {
        path: 'state',
        name: 'state',
        value: '',
        title: 'state',
      }, {
        path: 'getter',
        name: 'getter',
        value: '',
        title: 'getter',
      }, {
        path: 'mutations',
        name: 'mutations',
        value: '',
        title: 'mutations',
      }, {
        path: 'actions',
        name: 'actions',
        value: '',
        title: 'actions',
      }, {
        path: 'modules',
        name: 'modules',
        value: '',
        title: 'modules',
      }]
    }
  },
  methods: {
    hideMenu() {
      this.$emit('input');
    },
    jump(data) {

      this.$router.push({
        name: data.name
      })
    }
  },
  watch: {
    value(newValue) {
      this.visibleSmallMenu = newValue;
    },
    meunData: {
      deep: true,
      handler(newValue) {
        this.list = [...newValue];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.common-bottom-container{
  position: fixed;
  top: 1.28rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(~'100vh - 1.28rem');
  // overflow-y: auto;
  z-index: 999;
  background-color: rgba(238, 238, 238, 0.5);
}
.rootComponentStyle-enter,.rootComponentStyle-leave-to{
  opacity: 0;
}
.rootComponentStyle-enter-active,.rootComponentStyle-leave-active{
  transition: opacity .5s;
}
.common-bottom-container-list{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(~'100vh - 1.28rem - 3rem');
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px -4px 14px #b5b3b3;
  .list{
    font-size: 0.28rem;
    color: #ffffff;
    line-height: 1rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
    li{
      border-bottom: 1px dashed #adabab;
    }
  }
}
.rootComponentStyle-list-enter,.rootComponentStyle-list-leave-to {
  bottom: -100%;
}
.rootComponentStyle-list-enter-active,.rootComponentStyle-list-leave-active{
  transition: all .5s;
}
</style>
