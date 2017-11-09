/**
 * Created by GUO on 2017/11/7.
 */
let buffer1 = new Buffer('guoyuhang');
let buffer2 = new Buffer(buffer1.length);
buffer1.copy(buffer2);

console.log(buffer2.toString());