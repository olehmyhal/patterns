//Прослойка которая выполняется когда мы обращаемся к оригинальным методам объекта. 
//Только эта прослойка их заменяет, добавляя свой функционал

class CarAccess {
    open(){
        console.log('Opening the car door')
    }

    close(){
        console.log('Closing the car door')
    }
}

class SecurityService {
    constructor(door){
        this.door = door
    }

    open(password){
        if(this.authenticate(password)){
            this.door.open()
        } else {
            this.door.close()
        }
    }

    authenticate(password){
        return password === 'Ilon'
    }

    close(){
        this.door.close()
    }
}

const door = new SecurityService(new CarAccess())

door.open('Oleg')
door.open('Ilon')
door.close()