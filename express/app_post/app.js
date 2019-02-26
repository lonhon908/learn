const app = require('../access.js');

app.post('/user_post.do', function(req, res) {
    const response = {
        name: '张三',
        type: 'POST请求'
    };
    res.send(JSON.stringify(response));
})

app.listen(3002, function() {
    console.log('服务已启动，开始监听端口：3002')
})