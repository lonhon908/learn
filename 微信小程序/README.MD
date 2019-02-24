## AppID(小程序ID)

> 微信公众平台 => 首页 => step1(配置服务器-开发设置)

# 一、全局配置文件 -- app.json
<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE">点击查看全局配置</a>
```js
// app.json是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等
{
  pages: [ // 所有页面路径
    "pages/index/index",
    ...
  ],
  window: { // 定义小程序所有页面的顶部背景颜色，文字颜色定义等。
    navigationBarBackgroundColor: "#000000",
    ...
  },
  tabBar: { // 底部 tab 栏的表现
    list: [],
    ...
  },
  ...
}
```

# 二、页面配置
> 每一个小程序页面也可以使用.json文件来对本页面的窗口表现进行配置。页面的配置只能设置 app.json 中部分 window 配置项的内容，页面中配置项会覆盖 app.json 的 window 中相同的配置项。

```js
// home.json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```