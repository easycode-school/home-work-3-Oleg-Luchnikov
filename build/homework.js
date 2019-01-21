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
