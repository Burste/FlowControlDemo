const promise = require('bluebird');
const co = require('co');

const function1 = function(callback){
    console.log('function1 done');
    return callback();
};

const function2 = function(callback) {
    setTimeout(function(){
        console.log('function2 done');
        return callback();
    }, 3000);
};

const pfunction1 = promise.promisify(function1);
const pfunction2 = promise.promisify(function2);
co(function*() {
    yield pfunction2();
    yield pfunction1();
})
.then(function() {
    console.log('done!!');
})
.catch(function(err) {
    console.log('error!!');
});