/**
 * Created by GUO on 2017/11/7.
 */
let events = require('events');
let eventEmitter = new events.EventEmitter();
eventEmitter.emit('error');