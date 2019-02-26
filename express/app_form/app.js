const app = require('../access.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());//数据JSON类型
// post请求使用
app.use(bodyParser.urlencoded({ extended: false })); // 创建 application/x-www-form-urlencoded 编码解析

// 表单提交
app.get('/process_get', function (req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
  })
app.post('/process_post', function (req, res) {
    console.log(req.body)
    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(3005, function() {
    console.log('服务已启动，开始监听端口：3005')
})
