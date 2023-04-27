function getTime(): number{
    return new Date().getTime();
}
console.log(getTime());

function greet():void{
    console.log("hey there...");

}
greet();

function multiply(a:number,b:number):number{
    return a*b;
}
console.log(multiply(4,5));

function add(a:number,b:number,c?:number):number{
    return a+b+(c||0);

}
console.log(add(2,3));
console.log(add(2,3,7));

function expo(value:number,exponent:number=2):number{
    return value**exponent;
}
console.log(expo(2,2));
console.log(expo(2,3));
console.log(expo(2,4));
console.log(expo(3));

