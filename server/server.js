// server.js
let express = require('express')
let app = express();

let whitList = ['http://localhost:3000'] //设置白名单
app.use(function(req, res, next) {
  let origin = req.headers.origin
  // if (whitList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', "*")
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name')
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST')
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6)
    // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name')
    if (req.method === 'OPTIONS') {
      res.end() // OPTIONS请求不做任何处理
    }
  // }
  next()
})

app.get('/jsonp.do', function(req, res) {
  let { wd, cb } = req.query;
  const data = {
    name: '张三'
  }
  res.end(`${cb}(${JSON.stringify(data)})`)
})

app.post('/cors.do', function(req, res) {
  const data = {
    name: '张三'
  }
  res.status(200).send(data);
})

app.listen(3000)
