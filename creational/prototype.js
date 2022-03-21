//Позволяет копировать объекты не вдаваясь в подробности их реализации

class TeslaCar {
    constructor(model, price, interior, autopilot){
        this.model = model
        this.price = price
        this.interior = interior
        this.autopilot = autopilot
    }

    produce(){
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot)
    }
}

const prototypeCar = new TeslaCar('S', 80000, 'black', false)

const carOne = prototypeCar.produce()
const carTwo = prototypeCar.produce()
const carThree = prototypeCar.produce()

carOne.interior = 'red'
carTwo.price = 90000
carThree.autopilot = true

console.log(carOne)
console.log(carTwo)
console.log(carThree)
