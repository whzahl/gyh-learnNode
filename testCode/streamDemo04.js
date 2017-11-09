/**
 * Created by GUO on 2017/11/8.
 * 链式流
 */
let fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
console.log('程序执行完成');