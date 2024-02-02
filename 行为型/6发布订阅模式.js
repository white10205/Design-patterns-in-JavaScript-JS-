//发布订阅模式 其实是一种对象间一对多的依赖关系，
//当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。
//（如微信公众号一样有无数个订阅者，有一个发布者，当发布者发布文章的时候，订阅者都可以收到发布的文章。）
//例如vue2中的EventBus ， vue3已经放弃


class Event{
    constructor(){
        //创建一个对象存储方法
        this.eventList = {};
    }
    //绑定方法
    on(name,fn){
        if(typeof fn !== 'function') return 
        let eventList = this.eventList;
        if(!eventList[name]) eventList[name] = [];
        eventList[name].push(fn)
    }

    //触发事件
    emit(name,...res){
        const eventList = this.eventList[name];
        if(!eventList || eventList.length === 0) return ;
        eventList.forEach(fn => {
            fn(...res)
        })
    }

    //解绑事件
    remove(name,fn){
        if(typeof fn !== 'function') return ;
        let eventList = this.eventList[name];
        if(!eventList || eventList.length === 0) return ;
        eventList = eventList.filters( f => f !== fn)
    }
}

//使用发布订阅模式

function fn1(args){
    console.log(args);
}
function fn2(args){
    console.log(args);
}

const e = new Event();

e.on('test1',fn1);
e.on('test2',fn2);

e.emit('test1',111);//111
e.emit('test2',2222);//222


