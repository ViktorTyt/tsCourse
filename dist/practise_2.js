"use strict";
let age;
age = 50;
let nameV;
nameV = 'Max';
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback;
callback = (a) => { return 100 + a; };
console.log(callback(7));
let anything;
anything = -20;
anything = 'Text';
anything = {};
console.log(anything);
let some;
some = 'Text';
let str;
if (typeof some === "string") {
    str = some;
    console.log(str);
}
console.log(some);
let person;
person = ['Max', 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
const page = {
    load: Load.READY,
};
if (page.load === Load.LOADING) {
    console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
    console.log("Сторінка завантажена");
}
let numOrStr;
let Toggle;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date(),
        updateAt: new Date(),
    }
};
console.log(page1);
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
console.log(page2);
//# sourceMappingURL=practise_2.js.map