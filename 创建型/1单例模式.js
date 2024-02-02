/* 单例模式是一种常见的设计模式，其目的是确保一个类只有一个实例，并提供全局访问点。
单例模式的目的是限制某个类的实例化次数，确保整个应用中只存在一个实例（如vuex和redux中的store） */
var Singleton = (function(){
    var instance;//存储单例实例
    function init(){
        //私有变量和方法
        var privateVariable = 'I am private';
        function privateMethod(){
            console.log('This is a private method');
        }
        return {
            // 共有变量和方法
            publicVariable :'I am public',
            publicMethod: function(){
                console.log('This is a public method');
            },
            getPrivateVariable:function(){
                return {privateVariable,privateMethod}
            },
        };
    }
    return {
        //获取单例实例方法
        getInstance:function(){
            if(!instance){
                instance = init();
            }
            return instance;
        },
    };

})();

//获取单例实例
var mySingleton = Singleton.getInstance();




