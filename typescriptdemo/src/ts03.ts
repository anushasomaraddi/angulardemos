
//? --> optional 

const car: {make: String; model:String; year?:number}={
make:"Toyota",
model:"Innova",
year:2023,

};
console.log(car);

interface ICar{
    make:string;
    model:string;
    year:number;
    colour:string;
}
const newcar:ICar={
    make:"Honda",
    model:"City",
    year:2020,
    colour:"red",
};
console.log(newcar);
interface ISafeCar extends ICar{
    airbags:number;
}
const mysafecar:ISafeCar={
    make:"Honda",
    model:"City",
    year:2020,
    colour:"red",
    airbags:4,
};
console.log(mysafecar);