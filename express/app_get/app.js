const app = require('../access.js');

app.get('/user_get.do', function(req, res) {
    const response = {
        name: '张三',
        type: 'GET请求'
    };
    res.send(JSON.stringify(response));
})

app.listen(3001, function() {
    console.log('服务已启动，开始监听端口：3001')
})
