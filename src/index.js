import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

const animal1 = new Animal('George', 2);
animal1.speak();
console.log(animal1);

class Lion extends Animal {
    constructor(name, age, furColor, speed) {
        super(name, age);

        this.furColor = furColor;
        this.speed = speed;
    }

    roar() {
        console.log(`ROAR! I have ${this.furColor} fur and I can run ${this.speed} mph!`);
    }
}

const lion1 = new Lion('George', 2, 'chocolate and white', 55);
lion1.speak();
lion1.roar();