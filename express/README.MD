# express

> cnpm install -S express body-parser cookie-parser multer
```js
body-parser // node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
cookie-parser // 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
multer // node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。multer这个中间件用来处理客户上传的各种文件并且保存到服务端
```