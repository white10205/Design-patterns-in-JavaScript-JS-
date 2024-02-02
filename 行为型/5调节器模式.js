//调节器模式（中介者模式）定义了一个对象，该对象封装了一组对象间的交互方式 中介者使对象之间不能直接相互通信
//而是通过中介者对象进行通信，从而降低了对象之间的耦合度

//聊天室类
class ChatMediator{
    constructor(){
        this.users = []
    }
    addUser(user){
        this.users.push(user)
    }
    sendMessage(message,sender){
        this.users.forEach((user)=>{
            if(user !== sender){
                user.receiveMessage(message)
            }
        })
    }
}

//用户类
class User{
    constructor(name,mediator){
        this.name = name
        this.mediator = mediator
    }

    sendMessage(message){
        console.log(`${this.name} sending message :${message}`);
        this.mediator.sendMessage(message,this)
    }

    receiveMessage(message){
        console.log(`${this.name} receive message: ${message}` );
    }
}

//使用中介者模式
const mediator = new ChatMediator();

const user1 = new User('user 1',mediator)
const user2 = new User('user 2',mediator)
const user3 = new User('user 3',mediator)

mediator.addUser(user1)
mediator.addUser(user2)
mediator.addUser(user3)

user1.sendMessage('Hello everyOne') 

user2.sendMessage('I am ADong')
