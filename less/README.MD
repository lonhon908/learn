## 1、变量
```js
    @width: 10px;
    @height: @width + 10px;
    // url 变量
    /* Less */
    @images: "../img";//需要加引号
    body {
        background: url("@{images}/dog.png");//变量名 必须使用大括号包裹
    }
    /* 生成的 CSS */
    body {
        background: url("../img/dog.png");
    }
```

## 2、混合
```js
.bordered { // 等价于 .bordered() { ... }
  border-top: dotted 1px black;
}
.container{
  width: 100px;
  height: 20px;
  .bordered; // 可以不要括号 等价于 .bordered()
}
```

## 3、嵌套
```js
#root{
    font-size: 20px;
    .container{
        line-height: 45px;
    }
}
// & 的妙用
/* Less */
#header{
    &:after{
        content:"Less is more!";
    }
    .title{
        font-weight:bold;
    }
    &_content{//理解方式：直接把 & 替换成 #header
        margin:20px;
    }
}
/* 生成的 CSS */
#header::after{
    content:"Less is more!";
}
#header .title{ //嵌套了
    font-weight:bold;
}
#header_content{ //没有嵌套！
    margin:20px;
}
```

## 4、计算
```js
@base: 5%;
@filler: @base * 2;
@other: @base + @filler;
@color: #224488 / 2; //results in #112244
background-color: #112244 + #111; // result is #223355
.content{
    transform: translateY(100% - 2rem);
}
@var: 50vh/2;
width: calc(50% + (@var - 20px));  // result is calc(50% + (25vh - 20px))
```

# 5、函数
```js
.box(@width:100%,@height:100%) { // 可以有默认参数
  width: @width;
  height: @height;
}
.header{
  background-color: blue;
  .box(20%);
}
// 方法的条件筛选   Less 没有 if else，可是它有 when
/* Less */
#card{
    // and 运算符 ，相当于 与运算 &&，必须条件全部符合才会执行
    .border(@width,@color,@style) when (@width>100px) and(@color=#999){
        border:@style @color @width;
    }
    // not 运算符，相当于 非运算 !，条件为 不符合才会执行
    .background(@color) when not (@color>=#222){
        background:@color;
    }
    // , 逗号分隔符：相当于 或运算 ||，只要有一个符合条件就会执行
    .font(@size:20px) when (@size>50px) , (@size<100px){
        font-size: @size;
    }
}
#main{
    #card>.border(200px,#999,solid);
    #card .background(#111);
    #card > .font(40px);
}
/* 生成后的 CSS */
#main{
    border:solid #999 200px;
    background:#111;
    font-size:40px;
}
```

## 6、默认参数方法
```js
/* Less */
.border(@a:10px,@b:50px,@c:30px,@color:#000){
    border:solid 1px @color;
    box-shadow: @arguments;//指代的是 全部参数
}
#main{
    .border(0px,5px,30px,red);//必须带着单位
}
```

## 7、数量不定的参数
> 如果你希望你的方法接受数量不定的参数，你可以使用... ，犹如 ES6 的扩展运算符。
```js
/* Less */
.boxShadow(...){
    box-shadow: @arguments;
}
.textShadow(@a,...){
    text-shadow: @arguments;
}
#main{
    .boxShadow(1px,4px,30px,red);
    .textShadow(1px,4px,30px,red);
}

/* 生成后的 CSS */
#main{
    box-shadow: 1px 4px 30px red;
    text-shadow: 1px 4px 30px red;
}
```

## 8、方法使用important！
```js
/* Less */
.border{
    border: solid 1px red;
    margin: 50px;
}
#main{
    .border() !important;
}
/* 生成后的 CSS */
#main {
    border: solid 1px red !important;
    margin: 50px !important;
}
```

## 9、循环方法
> Less 并没有提供 for 循环功能，但这也难不倒 聪明的程序员，使用递归去实现。
```js
/* Less */
.generate-columns(4);

.generate-columns(@n, @i: 1) when (@i =< @n) {
    .column-@{i} {
        width: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i + 1));
}
/* 生成后的 CSS */
.column-1 {
    dth: 25%;
}
.column-2 {
    width: 50%;
}
.column-3 {
    width: 75%;
}
.column-4 {
    width: 100%;
}
```