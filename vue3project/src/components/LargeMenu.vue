<template>
  <transition name="fade">
    <div class="menu-container" v-show="visible" @click="hide">
      <transition name="leftmove">
        <div class="menu" v-show="visible">
          <ul class="menu-list">
            <li v-for="(item, index) in list" :key="index" @click.stop.prevent="jump(item)">
              {{item.title}}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'large-menu',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    menuData: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      list: [...this.menuData],
      visible: this.value,
    }
  },
  methods: {
    jump(data) {
      this.$router.push(data.path);
      this.$emit('input');
      this.$store.commit('changeTitle', {
        title: data.title
      })
    },
    hide() {
      this.$emit('input');
    }
  },
  watch: {
    value(newValue) {
      this.visible = newValue;
    },
    menuData: {
      deep: true,
      handler(newValue) {
        this.list = [...newValue];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.menu-container{
  position: fixed;
  left: 0;
  top: 1.28rem;
  bottom: 0;
  width: 100%;
  background-color: rgba(238, 238, 238, 0.5);
  z-index: 1001;
}
.menu{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 68%;
  // height: calc(~'100vh - 1.28rem');
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px 0px 14px #b5b3b3;
  z-index: 999;
  .menu-list{
    padding: 0 0.3rem;
    font-size: 0.28rem;
    line-height: 0.9rem;
    color: #ffffff;
    li{
      border-bottom: 1px solid #ffffff;;
    }
  }
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}

.leftmove-enter,.leftmove-leave-to{
  left: -100%;
}
.leftmove-enter-active, .leftmove-leave-active{
  transition: left .5s;
}
</style>

