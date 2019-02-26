/* 文件上传 */
const app = require('../access.js');
const multer  = require('multer'); //获得中间件
const bodyParser = require('body-parser');
const fs = require("fs");
// 单张上传
// const upload = multer({dest:'./uploads/'});//指定配置项，这里指定文件保存于当前目录下的upload子目录
// app.use(upload.single('file')); //运用中间件，并且指明文件名,此名需要同html input name的文件名一致，否则会报错

app.use(bodyParser.urlencoded({ extended: false })); // 创建 application/x-www-form-urlencoded 编码解析
app.use(multer({ dest: '/tmp/'}).array('file'));

app.post('/file_upload', function(req, res) {
    console.log(req.files[0]);  // 上传的文件信息
    res.send(JSON.stringify({
        message:'File uploade~d successfully', 
        filename:req.files[0].originalname
    }))
    /* const des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
          if(err) {
            console.log( err );
          } else {
            response = {
              message:'File uploade~d successfully', 
              filename:req.files[0].originalname
            };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
        });
    }); */
})
app.post('/user_post.do', function(req, res) {
    const response = {
        name: '张三',
        type: 'POST请求'
    };
    res.send(JSON.stringify(response));
})

app.listen(3004, function() {
    console.log('服务已启动，开始监听端口：3004')
})