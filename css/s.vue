<template>
  <div class="mycanvas" ref="mycanvas">
    <canvas ref="canvas"></canvas>
    <div v-html="descr" class="perName" data-text="完成率"></div>
    <div v-text="endresul" class="perData"></div>
  </div>
</template>
<script>
export default {
  props: {
    percentvalue: String,
    textstr: String
  },
  data() {
    return {
      canvas: null, //获取canvas元素
      context: null, //canvas.getContext("2d"), //获取画图环境，指明为2d
      centerX: null, //canvas.width / 2, //Canvas中心点x轴坐标
      centerY: null, //canvas.height / 2, //Canvas中心点y轴坐标
      rad: (Math.PI * 2) / 100, //将360度分成100份，那么每一份就是rad度
      value: 0,
      endresul: 0,
      radius: 50, //半径
      descr: this.textstr,
      changewidth: 0
    };
  },
  watch: {
    percentvalue: function(params) {
      this.updateData(params);
    },
    changewidth: function() {
      this.changeCanvas();
    }
  },
  methods: {
    changeCanvas: function() {
      this.canvas = this.$refs.canvas;
      this.canvas.width = this.$refs.mycanvas.clientWidth;
      this.canvas.height = this.$refs.mycanvas.clientHeight;
      if (!this.canvas.height || !this.canvas.width) return;
      this.radius =
        this.canvas.width > this.canvas.height
          ? this.canvas.height / 2 - 6
          : this.canvas.width / 2 - 6;
      this.context = this.canvas.getContext("2d"); //获取画图环境，指明为2d
      this.centerX = this.canvas.width / 2; //Canvas中心点x轴坐标
      this.centerY = this.canvas.height / 2; //Canvas中心点y轴坐标
      this.drawFrame(0);
    },
    updateData(realdata) {
      if (Object.keys(realdata.dataSource).length == 2) {
        this.endresul = Math.floor(Math.random() * 100);
        this.drawFrame();
        this.changewidth = this.$refs.mycanvas.clientHeight;
      }
    },
    drawFrame() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.whiteCircle();
      this.blueCircle(this.endresul);
      this.endcircle(this.endresul);
    },
    endcircle(n) {
      this.context.save();
      this.context.strokeStyle = "white"; //设置描边样式
      this.context.lineWidth = 8; //设置线宽
      this.context.lineCap = "round";
      this.context.shadowBlur = "20";
      this.context.shadowColor = "#42cfa9";
      this.context.beginPath(); //路径开始
      this.context.arc(
        this.centerX,
        this.centerY,
        this.radius - 2,
        n * this.rad,
        n * this.rad,
        false
      ); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
      this.context.stroke(); //绘制
      this.context.closePath(); //路径结束
      this.context.restore();
    },
    blueCircle(n) {
      this.context.save();
      this.context.strokeStyle = "#42cfa9"; //设置描边样式
      this.context.lineWidth = 2; //设置线宽
      this.context.lineCap = "round";
      this.context.shadowBlur = "9";
      this.context.shadowColor = "#42cfa9";
      this.context.beginPath(); //路径开始
      this.context.arc(
        this.centerX,
        this.centerY,
        this.radius - 2,
        0,
        n * this.rad,
        false
      ); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
      this.context.stroke(); //绘制
      this.context.closePath(); //路径结束
      this.context.restore();
    },
    whiteCircle() {
      this.context.save();
      this.context.beginPath();
      this.context.strokeStyle = "#25363F";
      this.context.arc(
        this.centerX,
        this.centerY,
        this.radius - 2,
        0,
        Math.PI * 2,
        true
      );
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
    }
  }
};
