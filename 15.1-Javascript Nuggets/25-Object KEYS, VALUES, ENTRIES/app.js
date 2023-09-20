//Three methods to convert objects into arrays 
//object.keys() - converts property names into array
//object.values() - converts property values into array
//object.entries()- converts both

const person = {
  name: "john",
  age: 25,
  status: "student",
};

const keys = Object.keys(person);
console.log(keys)

const values = Object.values(person);
console.log(values)

const entries = Object.entries(person);
console.log(entries) 

//map method

const newResult= entries.map((item)=>{
    const [first, second]=item
    console.log(first, second);
    return first
})

console.log(newResult);

//for of loop

for(const item of entries){
    const [first1, second2]=entries
    console.log(first1,second2);
}