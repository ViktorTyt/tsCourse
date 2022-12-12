// Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevantedEmployee = Admin & Employee

let elWithType: ElevantedEmployee;

elWithType = {
    name: "Viktor",
    privileges: ["1", "2"],
    startDate: new Date()
}

// console.log(elWithType)

interface IAdmin{
    name: string;
    privileges: string[];
}

interface IEmployee {
    name: string;
    startDate: Date;
}

interface IElevantedEmployee extends IAdmin, IEmployee { }

let elWithInterface: IElevantedEmployee;

elWithInterface = {
    name: "Viktor",
    privileges: ["1", '2'],
    startDate: new Date()
    
}

// console.log(elWithInterface)

// Type Guards

// ===============
type ComplexType = string | number;

function combine5 (a: ComplexType, b: ComplexType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
// ===============

type UnknownObject = Employee | Admin;

let obgAdmin: Admin;

obgAdmin = {
    name: "Ron",
    privileges: ["Hi", "Bye"]
}

let obgEmployee: Employee;

obgEmployee = {
    name: "Leo",
    startDate: new Date()
}
function showFields (e1: UnknownObject) {
  console.log(e1.name);
  if ('privileges' in e1) {
    console.log(e1.privileges);
  }
  if ('startDate' in e1) {
    console.log(e1.startDate);
  }
}

showFields(obgAdmin)
showFields(obgEmployee)

// ====================

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1)
useVehicle(v2)

// Type Casting
// ==================
const inputFirst = <HTMLInputElement>document.getElementById('num1'); // don't use with react

inputFirst.value = 'test@test.ts';

// ==================
const inputSecond = document.getElementById('num1') as HTMLInputElement;

inputSecond.value = 'test@test.ts';

// ==================
const inputThird = document.getElementById('num1');

if (inputThird) {
  (inputThird as HTMLInputElement).value = 'test@test.ts';
}

// Index Properties
interface Person10 {
  name: string;
  [x: string]: string | number; //or any, if we don't know types of properties at all
}

const user: Person10 = {
  name: 'Alex',
  gender: 'MAN',
  age: 35,
  country: 'Ukraine',
}

// Optional Chaining
interface PersonOptional {
  name: string;
  additionInfo?: {
    someInfo: string;
  }
}

const userOptional: PersonOptional = {
    name: "Fellix",    
}

const userOptiona2: PersonOptional = {
    name: "Fellix",
    additionInfo: {
        someInfo: "Hello"
    }
    
}

console.log(userOptional?.additionInfo?.someInfo);
console.log(userOptiona2?.additionInfo?.someInfo);

// Nullish Coalescing
const userInput = '';

const store = userInput || 'DEFAULT';

console.log(store); 4

const userInput1 = 0 || 7;

const store1 = userInput1 ?? 'DEFAULT';

console.log(store1);

// Перевантаження операторів (function overloads)
type Combinable = string | number;

function addCombinable(a: number, b: number): number;
function addCombinable(a: string, b: string): string;
function addCombinable(a: string, b: number): string;
function addCombinable(a: number, b: string): string;
function addCombinable(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(typeof addCombinable("6", "5"))

type AdminType = {
  type: 'admin';
  name: string;
}

type UserType = {
  type: 'user';
  name: string;
}

function checkUser (name: string, type: 'admin'): AdminType;
function checkUser (name: string, type: 'user'): UserType;
function checkUser (name: string, type: 'admin' | 'user') {
  if (type === 'admin') {
    return {
      name,
      type: 'admin'
    }
  } else {
    return {
      name,
      type: 'user'
    }
  }
}

const userCombinable = checkUser('Nikita', 'user');
console.log(userCombinable)
const adminCombinable = checkUser('Tonya', 'admin');
console.log(adminCombinable)