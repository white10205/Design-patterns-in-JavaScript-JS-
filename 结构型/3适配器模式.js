// 设配器模式允许接口不兼容的对象之间进行合作，适配器模式通过创建一个包装对象(适配器)，使得原本不兼容的接口变得兼容
//例如vue中的计算属性
//Axios 的用来发送请求的 adapter 本质上是封装浏览器提供的 API XMLHttpRequest。

//旧的计算器对象
class OldCalculator{
    getTotal(){
        return 100;
    }
}

//新的系统期望的接口
class NewCalculator{
    calculate(){
        return 200;
    }
}

//设配器类
class CalculatorAdapter{
    constructor(oldCalculator) {
        this.oldCalculator = oldCalculator
    }
    //适配方法
    calculate(){
        return this.oldCalculator.getTotal()
    }
}

//使用设配器链接新旧系统
const oldCalculator = new OldCalculator();
const adapter = new CalculatorAdapter(oldCalculator);
console.log('Total using adapter:' , adapter.calculate());//100