'use strict';
// Generics

// Загальна концепція

let arr: any[]= [];

arr.push('5',5,{})

console.log(arr)

let arrGeneric: Array<Number | string | Boolean | null> = [];

arrGeneric.push(7, false, null,"8");

console.log(arrGeneric)

//================
const promise: Promise<number> = new Promise((resolve) => {
  setInterval(() => {
    resolve(5);
  }, 1000);
});

promise.then((data) => {
  console.log( data);
});

// Generic function/method
function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB );
}

// const mergedFirst = merge({name: 'Alisa'}, {age: 28});

// mergedFirst.name;

// console.log(mergedFirst)

const obj777 = {
  firstName: "Viktor"
}

const obj888 = {
  lastName: "Tytenko"
}

const fullName = Object.assign(obj777, obj888)

console.log(`${fullName.firstName} ${fullName.lastName}`)

// ================
type Human = {
  name: string;
}

type AdditionFields = {
  age: number;
}

const mergedSecond = merge<Human, AdditionFields>({ name: 'Alisa' }, { age: 28 });

// Extends ============ should use not very often

function mergeExtends<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = mergeExtends({name: 'Alisa'}, { age: 20 });

merged.name;

// ===============================

interface ILength {
  length: number;
}

function getLength<T extends ILength>(str:T) {
  return str.length;
}

getLength("50");

// keyof

function extractValue<T extends object, U extends keyof T> (obj:T, key:U) {
  return obj[key];
}

extractValue({ name: 'Sergei' }, 'name');

// Generic Classes

class StoreClass<T> {
  private data: T[] = [];

  addItem (item:T):void {
    this.data.push(item);
  }

  getItems (): T[] {
    return this.data;
  }
}

// І тепер ми можемо контролювати, які типи можуть зберігатися у властивості data;

const storeString = new StoreClass<string>();

storeString.addItem('test');
console.log(storeString.getItems())

const storeObj = new StoreClass<object>();

storeObj.addItem({f:"50"})
console.log(storeObj.getItems())

// Utility Types
// Ми розберемо три типи, які принаймні мені доводиться часто використовувати.

// Partial

interface IPerson {
  name: string;
  age: number;
}

function createPerson (name: string): IPerson {
  const person: Partial<IPerson> = {};

  person.name = name;
  person.age = 36;

  return person as IPerson;
}

console.log(createPerson('Viktor'))

// Readonly

const arrReadonly: Readonly<string[]> = ['One', 'Two', 'Three'];

console.log(arrReadonly)

type Environment = {
  temperature: number;
}

const arrOfReadonly: Readonly<Environment> = {
  temperature: 27,
};

// Pick

interface Page {
  title: string;
  annotation: string;
  numberPage: number;
}

const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {
  annotation: 'Small page',
  numberPage: 1,
};

