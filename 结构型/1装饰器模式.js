/* 装饰器模式允许通过将对象包在装饰器类的实例中来动态地扩展对象地行为
在JS中，装饰器模式通常使用函数或类来实现 */

class Car{
    drive(){
        console.log('Driving the car');
    }
}

//装饰器类 - 加速装置
class TurboDecorator{
    constructor(car){
        this.car = car
    }
    drive(){
        this.car.drive()
        console.log('Turbo boost activated!');
    }
}

//装饰器类 - 音响系统
class StereDecorator{
    constructor(car){
        this.car = car
    }
    drive(){
        this.car.drive()
        console.log('Enjoying music with the stereo system');
    }
}

//创建基础汽车对象
const basicCar = new Car()

//使用装饰器扩展对象
const turboCar = new TurboDecorator(basicCar)
const luxuryCar = new StereDecorator(turboCar)

//调用装饰后地汽车对象的方法
luxuryCar.drive()
console.log(luxuryCar);