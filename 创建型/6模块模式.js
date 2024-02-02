// 模块模式是一种封装和组织JS代码地设计模式，它使用闭包来创建私有作用域，从而实现信息隐藏和模块化


var MyModule = (function () {

    //私有变量和方法
    var privateVariable = 'I am private';
    function privateMethod() {
        console.log('This is a private method');
    }
    return {
        // 共有变量和方法
        publicVariable: 'I am public',
        publicMethod: function () {
            console.log('This is a public method');
        },
        getPrivateVariable: function () {
            return { privateVariable, privateMethod }
        },
    };


})();