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
//可以幫你把同一件事情放在同一個function
async.waterfall([
    function(cb) 
    {
        async.parallel( 
            
            //同時、併發處理
            [
                function(next){function2(next);} , //3s
                function(next){function3(next);}//1s
                
            ], 
            function(err)
            {
                cb();
                return;
            }
            );
            //兩個function併發完才會往下
    },
    function(cb) {
        function1(cb);
    }
],
function(err) {
    if(err) { console.log(err); }
    console.log('done');
});
