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

/*
this.parallel();
function2,function3同時執行完才會執行下一個function
*/
step(
  function () {
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