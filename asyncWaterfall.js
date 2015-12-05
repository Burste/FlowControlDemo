const async = require('async');

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

async.waterfall([
    //一層處理完才會處理下一個function
    function(cb) {
        cb("HEY");//error 處理
    },
    function(cb) {
        function2(cb);
    },
    function(cb) {
        function1(cb);
    }
],
function(err) { 
    //nodejs內建error處理 : callback不應有值 應為NULL，if有值就會跳Error
    if(err) { console.log(err); }
    console.log('done');
});