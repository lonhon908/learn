const fs = require('fs');
const path = require('path');
const express = require('express');

const app = require('../access.js');

app.use(express.static('public'));

app.get('/download.do', function(req, res) {
    // res.download('public/c.json');
    fs.readFile(path.resolve(__dirname, '../public/d.pdf'), function(err, data) {
        if (err) {
            throw err
        }
        res.end(data)
    })
})

app.listen(3006, function() {
    console.log('服务已启动，开始监听端口：3006')
})
