const people = [
  {
    name: "Purnendu",
    age: 23,
    position: "Developer",
  },
  {
    name: "Ishmam",
    age: 24,
    position: "Analyst",
  },
  {
    name: "Reshad",
    age: 25,
    position: "Developer",
  },
  {
    name: "Oishik",
    age: 26,
    position: "SQA",
  },
];
const fruits = ['Orange','pear', 'lemon' ]
//filter:
const youngPeople = people.filter((person)=>{
    // if(person.age<26){
    //     return true;
    // }
    return person.age < 26;
})
console.log(youngPeople);

const developer = people.filter((person)=>person.position==='Developer');
console.log(developer);
//no match
const seniorDevs = people.filter((item)=>item.position=='senior devs')
console.log(seniorDevs);
//find
const purnendu = people.find((person)=>person.name==='Purnendu')
console.log(purnendu);//object instance
const fruit = fruits.find((fruit)=> fruit ==='lemon')
console.log(fruit);//single instance
//no match
const oldPerson = people.find((person)=> person.age>26)
console.log(oldPerson);
//multiple matches
const randomPerson = people.find((person)=>person.age<26)
console.log(randomPerson);

const developers = people.filter((person)=>person.position === 'Developer')
console.log(purnendu.position);
console.log(developers[0].name);
console.log(developers[1].name);
console.log(developers[2].name);
