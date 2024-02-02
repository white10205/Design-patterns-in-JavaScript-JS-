/* 命令模式将请求封装成一个对象，从而允许不同的请求参数化客户端队列，请求可进行排队、请求可被取消
以及支持可撤销的操作 */

//命令接口
class Command{
    execute(){
        //命令接口，具体命令类需要实现该方法

    }
}


//具体命令类 - 打开电视
class TurnOnTVcommand extends Command{
    constructor(tv){
        super()
        this.tv = tv
    }
    execute(){
        this.tv.turnOn();
    }
}
//具体命令类 - 关闭电视
class TurnOffCommand extends Command{
    constructor(tv){
        super()
        this.tv = tv 
    }
    execute(){
        this.turnOff();
    }
}

//接收者类 - 电视
class TV{
    turnOn(){
        console.log('TV is turned on');
    }
    turnOff(){
        console.log('TV is turned off');
    }
}

//调用者类 - 遥控器
class RemoteControl{
    constructor(){
        this.command = null;
    }
    setCommand(command){
        this.command = command
    }
    pressButton(){
        this.command.execute()
    }
}

//使用命令模式
const TV = new TV();
const turnOnCommand = new TurnOnTVcommand();
const turnOnTVcommand = new TurnOffCommand();

const remoteControl = new RemoteControl();


//配置遥控器按钮
remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton();