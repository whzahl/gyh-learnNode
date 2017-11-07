/**
 *
 * Created by GUO on 2017/11/7.
 */
let events = require('events');
let eventEmitter =new events.EventEmitter();
let listener1 = function () {
    console.log('监听器listener1执行');

};
let listener2 = function () {
    console.log('监听器listener2执行');
};
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);
let eventListeners = events.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',listener1);
console.log('listener1不在受监听');
eventEmitter.emit();
eventListeners = events.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");

console.log("程序执行完毕");
