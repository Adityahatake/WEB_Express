// Example demonstrating inheritance in JavaScript

// Parent class (constructor function)
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

// Child class (constructor function)
function Dog(name, breed) {
    // Call the parent constructor
    Animal.call(this, name);
    this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add a method specific to Dog
Dog.prototype.bark = function() {
    console.log(`${this.name} barks!`);
};

// Usage
const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // Buddy makes a sound.
dog.bark();  // Buddy barks!

// ES6 class syntax for inheritance
class AnimalClass {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class DogClass extends AnimalClass {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} barks!`);
    }
}

// Usage
const dog2 = new DogClass('Max', 'Beagle');
dog2.speak(); // Max makes a sound.
dog2.bark();  // Max barks!