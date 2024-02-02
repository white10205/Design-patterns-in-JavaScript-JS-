// 桥接模式将一个抽象部分与具体实现部分分离，使他们可以独立化，这种模式通过使用组合而不是继承，来将抽象和实现解耦
//通过桥接模式，我们可以独立的改变颜色和形状，而不必修改彼此之间的继承关系


//颜色实现类
class RedColor{
    applyColor(){
        console.log('Applying red color');
    }
}
class BlueColor{
    applyColor(){
        console.log('Applying blue color');
    }
}

//形状抽象类
class Shape{
    constructor(color){
        this.color = color
    }
    applyColor(){
        this.color.applyColor();
    }
    draw(){
        //具体的形状绘制逻辑
    }
}

//具体形状类
class Circle extends Shape{
    draw(){
        console.log('Drawing circle');
    }
}

class Square extends Shape{
    draw(){
        console.log('Drawing square');
    }
}

//使用桥接模式链接形状和颜色
const redCircle = new Circle(new RedColor());
const blueSquare = new Square(new BlueColor());

//调用具体形状的方法，委托给颜色实现类
redCircle.draw();//Drawing circle
redCircle.applyColor();//Applying red color

