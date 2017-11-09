/**
 * Created by GUO on 2017/11/8.
 */
let fs = require('fs');
let zlib = require('zlib');

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input1.txt'));
console.log('文件解压完毕');