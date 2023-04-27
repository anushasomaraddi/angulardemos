"use strict";
class Person {
    constructor() {
        this.name = "";
    }
}
const john = new Person();
john.name = "John";
console.log(john);
class Student {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const student1 = new Student("Jane");
console.log(student1);
