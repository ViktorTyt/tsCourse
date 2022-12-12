'use strict';
let arr = [];
arr.push('5', 5, {});
console.log(arr);
let arrGeneric = [];
arrGeneric.push(7, false, null, "8");
console.log(arrGeneric);
const promise = new Promise((resolve) => {
    setInterval(() => {
        resolve(5);
    }, 1000);
});
promise.then((data) => {
    console.log(data);
});
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const obj777 = {
    firstName: "Viktor"
};
const obj888 = {
    lastName: "Tytenko"
};
const fullName = Object.assign(obj777, obj888);
console.log(`${fullName.firstName} ${fullName.lastName}`);
const mergedSecond = merge({ name: 'Alisa' }, { age: 28 });
function mergeExtends(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = mergeExtends({ name: 'Alisa' }, { age: 20 });
merged.name;
function getLength(str) {
    return str.length;
}
getLength("50");
function extractValue(obj, key) {
    return obj[key];
}
extractValue({ name: 'Sergei' }, 'name');
class StoreClass {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItems() {
        return this.data;
    }
}
const storeString = new StoreClass();
storeString.addItem('test');
console.log(storeString.getItems());
const storeObj = new StoreClass();
storeObj.addItem({ f: "50" });
console.log(storeObj.getItems());
function createPerson(name) {
    const person = {};
    person.name = name;
    person.age = 36;
    return person;
}
console.log(createPerson('Viktor'));
const arrReadonly = ['One', 'Two', 'Three'];
console.log(arrReadonly);
const arrOfReadonly = {
    temperature: 27,
};
const pageAnnotation = {
    annotation: 'Small page',
    numberPage: 1,
};
//# sourceMappingURL=generics.js.map