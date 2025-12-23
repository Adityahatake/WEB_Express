// Encapsulation in JavaScript using Classes

class Person {
    // Private field (ES2022+ syntax)
    #name;

    constructor(name, age) {
        this.#name = name; // private property
        this.age = age;    // public property
    }

    // Getter for name (controlled access)
    getName() {
        return this.#name;
    }

    // Setter for name (controlled modification)
    setName(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this.#name = newName;
        } else {
            console.log('Invalid name');
        }
    }
}

const person = new Person('Alice', 25);

console.log(person.age);         // 25 (public)
console.log(person.getName());   // Alice (accessing private via getter)

person.setName('Bob');
console.log(person.getName());   // Bob

person.setName('');              // Invalid name

// Direct access to #name is not allowed
// console.log(person.#name);    // SyntaxError