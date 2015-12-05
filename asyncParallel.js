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

const function3 = function(callback) {
    setTimeout(function(){
        console.log('function3 done');
        return callback();
    }, 1000);
};

//併發處理
async.waterfall([
    function(cb) 
    {
        async.parallel( 
            [
                function(next){function2(next);} , 
                function(next) { function3(next);}
            ], cb);
    },
    function(err, cb) {
        function1(cb);
    }
],
function(err) {
    if(err) { console.log(err); }
    console.log('done');
});
