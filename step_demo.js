const step = require('step');

const function1 = function(callback){
    console.log('function1 done');
    return callback();
};

const function2 = function(callback) {
    setTimeout(function(){
        console.log('function2 done');//先執行 才往下callback
        return callback();
    }, 3000);
};
const function3 = function(callback) {
    setTimeout(function(){
        console.log('function3 done');//先執行 才往下callback
        return callback();
    }, 3000);
};
step(

  function() {
    function1(this);
    function3(this);
  },
    function() {
    function2(this);//this 是說這行處理完 跳下一個function 不斷往下跑
  },
  function() {
    console.log('done');
  }
);