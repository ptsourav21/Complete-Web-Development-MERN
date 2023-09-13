//faster way to access/unpack variable from arrays
const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [john, peter, bob, anna, kelly, susan] = friends;
console.log(john, peter, bob, anna, kelly, susan);

const [john1, , bob1, , kelly1] = friends;
console.log(john1, kelly1, bob1);

let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second]
console.log(first, second);