"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function greet() {
    console.log("hey there...");
}
greet();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 3));
console.log(add(2, 3, 7));
function expo(value, exponent = 2) {
    return value ** exponent;
}
console.log(expo(2, 2));
console.log(expo(2, 3));
console.log(expo(2, 4));
console.log(expo(3));
