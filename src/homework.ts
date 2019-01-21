// Task 1
/**
 *
 * @param {Object} target - класс декоратора
 * @param {string} method - метод декоратора
 * @param {PropertyDescriptor} descriptor - дескриптор метода
 */
function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
	let originalFunc = descriptor.value;
	descriptor.value = function (target) {
		this.date = new Date();
		this.info = `${this.name} - ${this.price}`;
		let origResult =  originalFunc.apply(this);
		return origResult;
	};
}

class Item {
	public price: number;
	public name: string;

	constructor(name: string ,price: number) {
		this.name = name;
		this.price = price;
	}

	@addItemInfoDecorator
	public getItemInfo() {
		return {
			name: this.name,
			price: this.price
		};
	}
}

let item = new Item('Apple', 100);