<template>
  <div class="app">
    <div class="container">
      <section class="get" @click="getData(1)">get请求1</section>
      <section class="get" @click="getData(2)">get请求2</section>
      <section class="get" @click="getData(3)">get请求3</section>
      <section class="get" @click="postData(1)">post请求1</section>
      <section class="get" @click="postData(2)">post请求2</section>
      <section class="get" @click="postData(3)">post请求3</section>
      <section class="get" @click="cancel">取消请求</section>
    </div>
  </div>
</template>

<script>
import {post, get} from './common/js/post';
import axios from 'axios';

// 取消请求

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
const CancelToken = axios.CancelToken;
let cancel;
export default {
  data() {
    return {
      
    }
  },
  methods: {
    getData(index) {
      get('user_get1.do', {
        id: index
      }).then(res => {
        console.log(res)
      })
    },
    postData(index) {
      post('user_get2.do', {
        id: index
      }, {
        cancelToken: new CancelToken(function executor(c) {
          // executor 函数接收一个 cancel 函数作为参数
          cancel = c;
        })
      }).then(res => {
        console.log(res)
      }).catch(err => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          // 处理错误
        }
      })
    },
    cancel() {
      try {
        cancel('取消请求');
      } catch (error) {
        
      }
    }
  },
}
</script>

<style lang="less" scoped>
.app{
  width: 100%;
  height: 100%;
}
.container{
  display: flex;
  flex-wrap: wrap;
}
.get{
  width: 33.3%;
  font-size: 14px;
  color: #000000;
  line-height: 50px;
  text-align: center;
}
</style>
