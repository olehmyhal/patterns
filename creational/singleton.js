//Гарантирует что у класса есть только один экземпляр
let instance

class Counter {
    constructor(){
        if(!instance) instance = this
        instance.count = 0
        return instance
    }

    getCount(){
        return instance.count
    }

    increaseCount(){
        return instance.count++
    }
}

const counterOne = new Counter()
const counterTwo = new Counter()

counterOne.increaseCount()
counterOne.increaseCount()
counterTwo.increaseCount()
counterTwo.increaseCount()

console.log(counterOne.getCount())
console.log(counterTwo.getCount())