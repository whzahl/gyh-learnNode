/**
 * Created by GUO on 2017/11/7.
 */
let buf1 = new Buffer('百度 ');
let buf2 = new Buffer('www.baidu.com');
let buf3 = Buffer.concat([buf1, buf2]);
console.log('buf3内容：' + buf3.toString());