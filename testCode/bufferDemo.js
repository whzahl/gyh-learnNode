/**
 * Created by GUO on 2017/11/7.
 */
let buffer = new Buffer(26);
for (let i = 0; i < 26; i++){
    buffer[i] = i + 97;
}

console.log(buffer.toString('ascii'));
console.log(buffer.toString('ascii', 0, 5));
console.log(buffer.toString('utf8', 0, 5));
console.log(buffer.toString(undefined, 0, 5));

