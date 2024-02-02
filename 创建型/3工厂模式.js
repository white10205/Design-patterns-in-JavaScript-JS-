/* 工厂模式是一种创建对象的设计模式，它提供了一种封装对象创建过程的方式，使得代码无需关心具体的实例化过程，
提高代码的灵活性和可维护性。在实际应用中，工厂模式经常用于对象的创建和封装逻辑 */
//例如Vue中的虚拟DOM和vue-router创建模式（hash模式和history模式）


class Car{
    constructor(type,model){
        this.type = type
        this.model = model
    }
}
class CarFactory{
    createCar(type,model){
        return new Car(type,model)
    }
}
const factory = new CarFactory();
const myCar = factory.createCar('SUV','MODEL')