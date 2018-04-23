/**
 * Objects and Functions
 */

// Copy by Reference vs Copy by Value

// Primitives (6 Types)
// 5 Types in Old School: Boolean, Null, Undefined, Number, String
// New Type in Modern JS: Symbol
let a = 23;
const b = a; // Copy by Value
a = 46;

console.log(a, b);

// Objects
const obj1 = {
  name: 'Harry Manchanda',
  age: 24,
};
const obj2 = obj1; // Copy by Reference
const obj3 = Object.assign({}, obj1); // Copy by Value - Old School
const obj4 = { ...obj1 }; // Copy by Value - Modern JavaScript
obj1.age = 25; 

console.log(obj1, obj2, obj3, obj4);

// Arrays (Special Kind of Objects)
const arr1 = [1, 2, 3];
const arr2 = arr1; // Copy by Reference
const arr3 = [].concat(arr1); // Copy by Value - Old School
const arr4 = [...arr1]; // Copy by Value - Modern JavaScript
arr1[0] = 4;

console.log(arr1, arr2, arr3, arr4);

// Functions
const age = 45;
const larry = {
  name: 'Larry Page',
  city: 'Palo Alto',
};
const siteRank = [1, 2, 8];

const change = (a, b, c) => {
  a = 46;
  b.city = 'Mountain View';
  c[2] = 9;
};

// change(age, larry, siteRank); // Copy by Value, Reference, Reference
change(age, { ...larry }, [...siteRank]); // Copy by Value, Value, Value

console.log(age, larry, siteRank);
