// 使用 require 指令来载入 http 模块
var http = require("http");
http.createServer(function (request, response) {
    // 发送HTTP头部
    // HTTP状态值：200 OK
    // 内容类型：text/plain
    response.writeHead(200,{'Content-type':'text/plain'});
    // 发送响应数据 “hello node.js"
    response.end('hello node.js\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');