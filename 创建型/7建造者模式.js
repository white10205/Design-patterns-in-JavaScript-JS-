class ComputerBuilder{
    constructor(){
        this.computer = {}
    }
    addCPU(cpu){
        this.computer.cpu = cpu;
        return this //返回构造器实例，以支持链式调用
    }
    addRAM(ram){
        this.computer.ram = ram
        return this 
    }
    addStorage(storage){
        this.computer.storage = storage
        return this 
    }
    build(){
        return this.computer
    }
}

//使用构造器创建对象
const myComputer = new ComputerBuilder().addCPU('Intel i7').addRAM('16GB').addStorage('512GB SSD').build()