//Оптимизирует работу с объектами кэшируя их

class Auto {
	constructor(model) {
		this.model = model
	}
}

class AutoFactory {
	constructor(name) {
		this.models = {}
	}

	create(name) {
		let model = this.models[name]
		if (model) return model
		this.models[name] = new Auto(name)
		return this.models[name]
	}

    getModels(){
        return this.models
    }
};

const factory = new AutoFactory()

factory.create('BMW')
factory.create('Audi')
factory.create('Tesla')
factory.create('Tesla')

console.log(factory.getModels())