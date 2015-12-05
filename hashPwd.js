const sha1 = require('sha1');

// 你傳入的密碼
const password = 'simonPWD';

// 加入一段固定字串
const hashString = '.$AWed(!';

// 加密
var hashPwd = sha1(hashString + password);

console.log(hashPwd);