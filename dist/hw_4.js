"use strict";
console.log("hello");
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person1 {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenats = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error("Door is close");
        }
        this.tenats.push(person);
        console.log("Tenats inside");
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("Key to another door");
        }
        return this.door = true;
    }
}
const key = new Key();
const house = new MyHouse(key);
const person1 = new Person1(key);
console.log(house);
console.log(person1);
house.openDoor(person1.getKey());
house.comeIn(person1);
//# sourceMappingURL=hw_4.js.map