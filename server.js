const http = require('http')
const connect = require('connect')
const serveStatic = require('serve-static')

const app = connect()
  .use(serveStatic('./docs')) // 静的ファイルの置き場を指定します。

http.createServer(app).listen(3000)