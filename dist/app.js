"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
function combine(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        console.log("first");
        return param1 + param2;
    }
    else {
        console.log("second");
        return param1.toString() + param2.toString();
    }
}
console.log(combine(5, "770"));
function greeting(action) {
    if (action === 'hello') {
        console.log('Hello user!');
    }
    else {
        console.log('Bye user!');
    }
}
greeting('hello');
greeting('bye');
function returnResult(num) {
    return num;
}
console.log(returnResult(5));
class Person {
}
//# sourceMappingURL=app.js.map