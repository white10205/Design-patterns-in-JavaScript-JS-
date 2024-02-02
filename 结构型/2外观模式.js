/* 外观模式提供一个简化的接口，用于访问一个或多个复杂子系统，通过隐藏系统的复杂性，提供一个更简单和一致的接口
使客户端更容易使用，目标是简化接口，隐藏复杂性 */

//子系统 - 播放器
class Player{
    play(){
        console.log('Playing music');
    }
    stop(){
        console.log('Stopping music');
    }
}

//子系统 - 音响
class Stereo{
    turnOn(){
        console.log('Turning on the stereo');
    }
    turnOff(){
        console.log('Turning off the stereo');
    }
}

//外观类 - 音响系统外观
class AudioSystemFacade{
    constructor(){
        this.player = new Player();
        this.stereo = new Stereo();
    }
    playMusic(){
        this.stereo.turnOn();
        this.player.play();
    }
    stopMusic(){
        this.player.stop();
        this.stereo.turnOff();
    }
}

//使用外观模式 简化接口
const audioFacade = new AudioSystemFacade();
audioFacade.playMusic();
audioFacade.stopMusic();