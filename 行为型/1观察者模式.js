// 观察者模式定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动更新
// 在JS中观察者模式通常使用回调函数或事件机制来实现，通过此模式我们可以实现对象之间的松耦合。


//主题类，负责维护观察者列表，并提供添加、移除和通知观察者的方法
class Subject{
    constructor(){
        this.observers = []
    }
    //添加观察者
    addObserver(observer){
        this.observers.push(observer)
    }

    //移除观察者
    removeObserver(observer){
        this.observers = this.observers.filter((o) => o !== observer)
    }
    
    //通知所有观察者
    notify(){
        this.observers.forEach((observer) =>{
            observer.update();
        })
    }
}



//观察者类，具有一个update方法，用于在收到通知时执行相应的操作
class observer{
    constructor(name){
        this.nam = name 
    }
    
    //更新方法
    update(){
        console.log(`${this.name} has been notified and updated`);
    }
}



//创建主题和观察者
const subject = new Subject()
const observer1 = new observer('Observer 1');
const observer2 = new observer('Observer 2');

//添加观察者到主题
subject.addObserver(observer1)
subject.addObserver(observer2)

//通知所有观察者
subject.notify();
