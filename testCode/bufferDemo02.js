/**
 * Created by GUO on 2017/11/7.
 */
let buffer = new Buffer('www.baidu.com');
var json = buffer.toJSON(buffer);

console.log(json);
