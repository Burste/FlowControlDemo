const function1 = function() 
{
    console.log('function1 done');
};

const function2 = function(callback/*2.CALLBACK*/) 
{
    /*1.
    setTimeout(function()
    { console.log('function2 done');}, 3000);*/
    setTimeout(function()
    { console.log('function2 done');
        return callback();//2.callback
    }, 3000);
};

const go = function() 
{
    //function2();//1.要先等3秒
    //function1();//1.我先!!
    //當我A執行完，執行B的時候 讓B成為CALLBACK
    function2(function(){ //2.
        function1();
    });
};

go();