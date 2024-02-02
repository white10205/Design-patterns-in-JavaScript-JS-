/* 原型模式是一种创建对象的设计模式，它通过使用原型对象作为对象的模板，允许通过原型链共享属性和方法
JS中，每个对象都有一个指向其原型的链接，通过整个链接，对象可以继承原型的属性和方法。原型模式的优势
在于可以实现属性和方法的共享，节省内存，并且可以在运行时动态地添加或修改原型上的方法和属性，这使得原型模式
成为JS中实现继承地基础 */

function Animal(name,species){
    this.name = name
    this.species = species
}

Animal.prototype.eat = function(){
    console.log('eating');
}

const cat = new Animal('Tom','Cat')

const dog = new Animal('Pluto','Dog')