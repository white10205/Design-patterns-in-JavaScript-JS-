class Singleton{
    static instance;//存储单例实例
    constructor(){}

    //获取单例实例方法
    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

//获取单例实例
var mySingleton1 = Singleton.getInstance();
var mySingleton2 = Singleton.getInstance();
console.log(mySingleton1 === mySingleton2);