const app = require('../access.js');
const bodyParser=require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: '张三',
                type: 'GET请求'
            })
        }, 5000)
    })
}

app.get('/user_get1.do', async function(req, res) {
    console.log(req.query)
    const response = await getData()
    res.send(JSON.stringify(response));
})
app.post('/user_get2.do', async function(req, res) {
    console.log(req.body)
    const response = await getData()
    // const response = {
    //     name: '李四',
    //     type: 'POST请求'
    // };
    res.send(JSON.stringify(response));
})
app.listen(3001, function() {
    console.log('服务已启动，开始监听端口：3001')
})
