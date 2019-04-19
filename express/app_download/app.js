const express = require('express');

const app = require('../access.js');

app.use(express.static('public'));

app.get('/download.do', function(req, res) {
    res.download('public/FeHelper-20190226114618.json');
})

app.listen(3006, function() {
    console.log('服务已启动，开始监听端口：3006')
})
