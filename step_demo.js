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

step(
  function() {
    function2(this);
  },
  function() {
    function1(this);
  },
  function() {
    console.log('done');
  }
);