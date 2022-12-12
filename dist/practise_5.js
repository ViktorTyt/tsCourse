"use strict";
var _a, _b;
let elWithType;
elWithType = {
    name: "Viktor",
    privileges: ["1", "2"],
    startDate: new Date()
};
let elWithInterface;
elWithInterface = {
    name: "Viktor",
    privileges: ["1", '2'],
    startDate: new Date()
};
function combine5(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
let obgAdmin;
obgAdmin = {
    name: "Ron",
    privileges: ["Hi", "Bye"]
};
let obgEmployee;
obgEmployee = {
    name: "Leo",
    startDate: new Date()
};
function showFields(e1) {
    console.log(e1.name);
    if ('privileges' in e1) {
        console.log(e1.privileges);
    }
    if ('startDate' in e1) {
        console.log(e1.startDate);
    }
}
showFields(obgAdmin);
showFields(obgEmployee);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
const inputFirst = document.getElementById('num1');
inputFirst.value = 'test@test.ts';
const inputSecond = document.getElementById('num1');
inputSecond.value = 'test@test.ts';
const inputThird = document.getElementById('num1');
if (inputThird) {
    inputThird.value = 'test@test.ts';
}
const user = {
    name: 'Alex',
    gender: 'MAN',
    age: 35,
    country: 'Ukraine',
};
const userOptional = {
    name: "Fellix",
};
const userOptiona2 = {
    name: "Fellix",
    additionInfo: {
        someInfo: "Hello"
    }
};
console.log((_a = userOptional === null || userOptional === void 0 ? void 0 : userOptional.additionInfo) === null || _a === void 0 ? void 0 : _a.someInfo);
console.log((_b = userOptiona2 === null || userOptiona2 === void 0 ? void 0 : userOptiona2.additionInfo) === null || _b === void 0 ? void 0 : _b.someInfo);
const userInput = '';
const store = userInput || 'DEFAULT';
console.log(store);
4;
const userInput1 = 0 || 7;
const store1 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : 'DEFAULT';
console.log(store1);
function addCombinable(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(typeof addCombinable("6", "5"));
function checkUser(name, type) {
    if (type === 'admin') {
        return {
            name,
            type: 'admin'
        };
    }
    else {
        return {
            name,
            type: 'user'
        };
    }
}
const userCombinable = checkUser('Nikita', 'user');
console.log(userCombinable);
const adminCombinable = checkUser('Tonya', 'admin');
console.log(adminCombinable);
//# sourceMappingURL=practise_5.js.map