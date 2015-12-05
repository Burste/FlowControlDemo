const promise = require('bluebird');

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

const function3 = function(callback) {
    setTimeout(function(){
        console.log('function3 done');
        return callback();
    }, 1000);
};

const pfunction1 = promise.promisify(function1);
const pfunction2 = promise.promisify(function2);
const pfunction3 = promise.promisify(function3);
//promise可以幫你區分
promise.all([
    pfunction3(),
    pfunction2()
])//3,2都執行完才會執行1
.then(function() {
    return pfunction1();
})
.then(function() {
    console.log('done!!');
})
.error(function(error) {
    console.log('error!!');
});
