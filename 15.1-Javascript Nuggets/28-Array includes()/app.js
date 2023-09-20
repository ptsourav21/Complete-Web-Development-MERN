const groceries = ['milk', 'bread', 'meat']

let randomItem ='lemon';
randomItem = 'milk';

const isIncluded = groceries.includes(randomItem);
console.log(isIncluded);

if(groceries.includes(randomItem)){
    console.log("true");
}