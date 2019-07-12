const express = require('express');

const app = require('../access.js');

app.use(express.static('public'));

app.get('/download.do', function(req, res) {
    res.download('public/abc.pdf');
})

app.listen(3006, function() {
    console.log('服务已启动，开始监听端口：3006')
})
