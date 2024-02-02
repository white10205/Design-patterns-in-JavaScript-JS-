// 迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而不暴露该对象的内部表示

//自定义迭代器对象
class ArrayIterator{
    constructor(array){
        this.array = array
        this.index = 0
    }
    hasNext(){
        return this.index < this.array.length
    }
    next(){
        return this.hasNext()? this.array[this.index ++] : null
    }
}

//使用迭代器模拟遍历数组
const array = [1,2,3,4,5,6]
const iterator = new ArrayIterator(arr);
while(iterator.hasNext()){
    console.log(iterator.next());//1 2 3 4 5 6
}