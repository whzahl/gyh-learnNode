/**
 * Created by GUO on 2017/11/8.
 * 管道流示例
 */
let fs = require('fs');
let readStream = fs.createReadStream('input.txt');

let writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

console.log('程序执行完成');