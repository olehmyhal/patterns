//дополнительная надстройка (абстракция) которая помогает создавать однотипные объекты и управляет фабриками

//Абстрактная фабрика
function bmwProducer(kind){
    return kind === 'sport' ? sportCarFactory : familyCarFactory
}

function sportCarFactory(){
    return new Z4()
}

function familyCarFactory(){
    return I3
}

class Z4 {
    info(){
        return 'Z4 is a sport car'
    }
}

class I3 {
    info(){
        return 'I# is a family car'
    }
}

const produce = bmwProducer('sport')
const myCar = new produce()

console.log(myCar.info())
