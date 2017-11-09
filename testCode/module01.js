/**
 * Created by GUO on 2017/11/8.
 */
let name;
exports.setName = function (thyName) {
    name = thyName;
};
exports.sayName = function () {
    console.log('hello ' + name);
};
