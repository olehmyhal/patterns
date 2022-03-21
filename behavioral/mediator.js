//Уменьшает связанность классов между собой, делая их более автономными 

class OfficialDealer {
    constructor() {
        this.customers = [];
    }
    
    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(name);
    }
    
    addToCustomersList(name) {
        this.customers.push(name);
    }
    
    getCustomerList() {
        return this.customers;
    }
};

class Customer {
    constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }
    
    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info)
    }
};

const mediator = new OfficialDealer()

const customerOne = new Customer('Alla', mediator)
const customerTwo = new Customer('Oleg', mediator)

customerOne.makeOrder('BMW', '')
customerTwo.makeOrder('Audi', 'Wanna it now')

console.log(mediator.getCustomerList())