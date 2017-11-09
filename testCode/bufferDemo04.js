/**
 * Created by GUO on 2017/11/7.
 */

let buffer2 = new Buffer('ABCD');
let buffer1 = new Buffer('ABCDE');
let result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1.toString() + " 在" + buffer2 + "之前");
}
else if (result === 0) {
    console.log(buffer1.toString() + " 与" + buffer2 + "相等");
}
else {
    console.log(buffer1.toString() + " 在" + buffer2 + "之后");
}