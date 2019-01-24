var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Task 1
/**
 *
 * @param {Object} target - класс декоратора
 * @param {string} method - метод декоратора
 * @param {PropertyDescriptor} descriptor - дескриптор метода
 */
function addItemInfoDecorator(target, method, descriptor) {
    let originalFunc = descriptor.value;
    descriptor.value = function (target) {
        this.date = new Date();
        this.info = `${this.name} - ${this.price}`;
        let origResult = originalFunc.apply(this);
        return origResult;
    };
}
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getItemInfo() {
        return {
            name: this.name,
            price: this.price
        };
    }
}
__decorate([
    addItemInfoDecorator
], Item.prototype, "getItemInfo", null);
let item = new Item('Apple', 100);
//Task 2
/**
 *
 * @param {string} type - значение поля type
 * @returns {(targetClass) => {new(): {type: string; createDate: Date}; prototype: {type: string; createDate: Date}}} - конструктор класса
 */
function userDecorator(type) {
    return function (targetClass) {
        return class {
            constructor() {
                this.type = type;
                this.createDate = new Date();
            }
        };
    };
}
let User = class User {
};
User = __decorate([
    userDecorator('admin')
], User);
const user = new User();
console.log(user);
//task 3
// News api USA
var ApiModelUsa;
(function (ApiModelUsa) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_usa_url';
        }
        getNews() {
        } // method
    }
    ApiModelUsa.NewsService = NewsService;
})(ApiModelUsa || (ApiModelUsa = {}));
var ApiModelUkr;
(function (ApiModelUkr) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_2_url';
        }
        getNews() {
        } // method get all news
        addToFavorite() {
        } // method add to favorites
    }
    ApiModelUkr.NewsService = NewsService;
})(ApiModelUkr || (ApiModelUkr = {}));
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
class Senior {
    doTasks() {
    }
    createApp() {
    }
    createArchitecture() {
        console.log('Hello architecture');
    }
}
/**
 *
 * @param targetClasss - Класс в который нужно добавить методы
 * @param {any[]} baseClasses - Массив классов из которыч нужно взять методы
 */
function applyMixins(targetClasss, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClasss.prototype[propName] = baseClass.prototype[propName];
        });
    });
}
applyMixins(Senior, [Junior, Middle]);
const senior = new Senior();
