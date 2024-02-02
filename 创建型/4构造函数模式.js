/* 构造函数模式是一种创建对象的方式，它使用构造函数来实例化对象，并使用new关键字调用构造函数
构造函数模式允许创建具有相似属性和方法的多个对象 */

//构造函数
function Animal(name,species){
    this.name = name 
    this.species = species
    this.eat = function(){
        console.log('eating');
    }
}
const cat = new Animal('Tom','Cat')
const dog = new Animal('Pluto','Dog');
