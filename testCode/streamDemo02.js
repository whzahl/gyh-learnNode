/**
 * Created by GUO on 2017/11/8.
 * write in stream
 */
let fs = require('fs');
let data = 'guoyuhang';
// create a file,and put the stream into file
var writeStream = fs.createWriteStream('output.txt');

// use utf8 write data
writeStream.write(data,'UTF8');

//标记文件结尾
writeStream.end();

writeStream.on('finish',function () {
    console.log('写入完成');
});
writeStream.on('error',function (err) {
    console.log(err.stack);
});

console.log('程序执行完成');

