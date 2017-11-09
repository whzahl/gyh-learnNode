/**
 * Created by GUO on 2017/11/8.
 * 从流中读取文件
 */
let fs = require('fs');
let data = '';

// 创建可读流
let readStream = fs.createReadStream('input.txt');

readStream.setEncoding('UTF8');

// 处理流事件 data,end,and error
readStream.on('data',function (chunk) {
    data += chunk;
});

readStream.on('end',function () {
    console.log(data);
});

readStream.on('error',function (err) {
    console.log(err.stack);
});

console.log('程序执行完毕');