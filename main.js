var fs = require("fs");
// 非阻塞代码示例
fs.readFile('input.txt',function (err,data) {
    if(err){
        return console.error(err);
    }
    console.log(data.toString());

});
console.log("program ended");
// 阻塞代码示例
var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("program ended");
