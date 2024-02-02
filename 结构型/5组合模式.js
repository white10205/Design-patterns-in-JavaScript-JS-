// 组合模式将对象组合成树形结构以表示"部分-整体"的层次结构

//抽象图形类
class Graphic{
    draw(){
        //抽象方法，由具体子类实现
    }
}

//具体图形类 - 圆形
class Circle extends Graphic{
    constructor(name){
        super()
        this.name = name 
    }
    draw(){
        console.log(`Drawing Circle : ${this.name}`);
    }
}

//具体图形类 - 矩形
class Rectangle extends Graphic{
    constructor(name){
        super()
        this.name = name 
    }
    draw(){
        console.log(`Drawing Rectangle : ${this.name}`);
    }
}

//复合图形类
class CompositeGraphic extends Graphic {
    constructor(name){
        super();
        this.name = name
        this.graphics = []
    }
    add(graphic){
        this.graphics.push(graphic)
    }
    draw(){
        console.log('Drawing Composite: ${this.name}');
        this.graphics.forEach((graphic)=>{
            graphic.draw()
        })
    }
}

//使用组合模式创建图形结构
const circle1 = new Circle('Circle 1');
const circle2 = new Circle('Circle 2');
const rectangle = new Rectangle('Rectangle 1');

const composite = new CompositeGraphic('Composite 1')
composite.add(circle1)
composite.add(rectangle)

const rootComposite = new CompositeGraphic('Root Composite')
rootComposite.add(composite)
rootComposite.add(rectangle)

rootComposite.draw()