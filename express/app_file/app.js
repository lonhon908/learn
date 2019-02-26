const express = require('express');
const app = require('../access.js');
const bodyParser = require('body-parser');

// Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); // 创建 application/x-www-form-urlencoded 编码解析

app.listen(3003, function() {
    console.log('服务已启动，开始监听端口：3003')
})