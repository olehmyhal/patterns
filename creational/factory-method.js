//создание однотипных объектов с одинаковой структурой но разными данными

class BMW {
    constructor(type, price, maxSpeed){
        this.type = type
        this.price = price
        this.maxSpeed = maxSpeed
    }
}

class BMWFactory {
    create(type){
        if(type === 'X5'){
            return new BMW(type, 10800, 300)
        }

        if(type === 'X6'){
            return new BMW(type, 11100, 320)
        }
    }
}

const factory = new BMWFactory()

const x5 = factory.create('X5')
const x6 = factory.create('X6')

console.log(x5)
console.log(x6)