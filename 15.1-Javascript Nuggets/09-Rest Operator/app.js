//Rest Operator...
//gathers/collect items
//destructing, functions
//placement important, careful with the same name
//rest when declare function, spread when invoke the function

//arrays
const fruits = ['apple', 'orange', 'lemon', 'banana','pearl']
const [first, second,...restOfTheFriuits] = fruits;
console.log(first, restOfTheFriuits);

const specificFruit = restOfTheFriuits.find((fruit)=> fruit==='lemon')
console.log(specificFruit);
// objects
const person = {name: 'john', lastName: 'smith', job: 'Developer'};
// const {...rest,job} = person; //this will throw error
const {name,...rest} = person;
console.log(name, rest);

//functions

const getAverage = (name,...score)=>{
    console.log(name);
    console.log(score);
    const average= score.reduce((total,item)=>{return total+=item},0)/score.length;
    console.log(average);
}
const testScores = [23,45,67,89]
// getAverage(person.name, 89,76,81,100)
// getAverage(person.name, testScores) //this will deliver nested array
getAverage(person.name, ...testScores)
