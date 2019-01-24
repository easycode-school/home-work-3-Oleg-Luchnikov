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
//Task 2
/**
 *
 * @param {string} type - значение поля type
 * @returns {(targetClass) => {new(): {type: string; createDate: Date}; prototype: {type: string; createDate: Date}}} - конструктор класса
 */
function userDecorator(type: string) {
	return function (targetClass) {
		return class {
			public type = type;
			public createDate = new Date();
		}
	}
}

@userDecorator('admin')
class User {
}

const user = new User();
console.log(user);

//task 3
// News api USA

namespace ApiModelUsa {
	export interface INews {
		id: number;
		title: string;
		text: string;
		author: string;
	}

	export class NewsService {
		protected apiurl: string = 'https://news_api_usa_url'

		public getNews() {
		} // method
	}
}

namespace ApiModelUkr {
	// News api Ukraine
	export interface INews {
		uuid: string;
		title: string;
		body: string;
		author: string;
		date: string;
		imgUrl: string;
	}

	export class NewsService {
		protected apiurl: string = 'https://news_api_2_url'

		public getNews() {
		} // method get all news
		public addToFavorite() {
		} // method add to favorites
	}
}

//Task 4
class Junior {
	doTasks() {
		console.log('Actions!!!');
	}
}

class Middle {
	createApp() {
		console.log('Creating!!!');
	}
}

class Senior implements Junior, Middle {
	doTasks(): void {
	}

	createApp(): void {
	}

	public createArchitecture(): void {
		console.log('Hello architecture');
	}
}

/**
 *
 * @param targetClasss - Класс в который нужно добавить методы
 * @param {any[]} baseClasses - Массив классов из которыч нужно взять методы
 */
function applyMixins(targetClasss: any, baseClasses: any[]) {
	baseClasses.forEach((baseClass) => {
		Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
			targetClasss.prototype[propName] = baseClass.prototype[propName];
		});
	});
}

applyMixins(Senior, [Junior, Middle]);
const senior = new Senior();