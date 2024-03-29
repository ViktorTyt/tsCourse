console.log("hello")

class Key  {
    private signature: number;

    constructor () {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature
    }
}

class Person1 {

    constructor(private key:Key) { }
    
    getKey():Key {
       return this.key
    }
}

abstract class House {
    protected door = false
    private tenats: Person[] = []

    constructor(protected key: Key) {}

    comeIn(person: Person):void {
        if (!this.door) {
            throw new Error("Door is close");
        }

        this.tenats.push(person)
        console.log("Tenats inside")
    }

    abstract openDoor(key: Key):boolean
}

class MyHouse extends House {
    openDoor(key: Key): boolean {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("Key to another door");
        }

        return this.door = true
    }
}

const key = new Key()

const house = new MyHouse(key)
const person1 = new Person1(key)

console.log(house)
console.log(person1)

house.openDoor(person1.getKey())

house.comeIn(person1)



