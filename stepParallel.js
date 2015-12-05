const step = require('step');

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
const function4 = function(callback){
    setTimeout(function(){
    console.log('function4 done');
    return callback();
    },5000);
};
/*
function () {
    function4(this.parallel());
    function2(this.parallel());
    function3(this.parallel());
  }
function4,2,3同時執行 
這整個function執行結束才會執行下一個function
*/
step(
  function () {
    function4(this.parallel());
    function2(this.parallel());
    function3(this.parallel());
  },
  function () {
    function1(this);
  },
  function() {
    console.log('done');
  }
);