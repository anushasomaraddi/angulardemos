const names:string[]=[];
names.push("obj1");
names.push("obj2");
console.log(names);

const countryNames: readonly string[]=["india","USA","Australia"];
// countryNames.push["uk"];
console.log(countryNames);

const numbers=[1,2,3,4];
numbers.push(78);
//numbers.push("x");

let ourtuple: [number,boolean,string];
ourtuple=[5,false,"hello"];
//ourtuple=[5,"hello",false];
console.log(ourtuple);
const graph:[number,number]=[34.4,56.6];
console.log(graph);
const[val1,val2]=graph;
console.log(val1);
console.log(val2);