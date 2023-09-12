const people = [
  {
    name: 'Purnendu',
    age: 23,
    position: 'Developer',
  },
  {
    name: 'Ishmam',
    age: 24,
    position: 'Analyst',
  },
  {
    name: 'Reshad',
    age: 25,
    position: 'Developer',
  },
  {
    name: 'Oishik',
    age: 26,
    position: "SQA",
  },
];

const getAge = (person) => person.age * 2; //single line no need to write return
const ages = people.map((person) => person.age);
const ages2 = people.map(getAge);

console.log(ages);
console.log(ages2);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.getElementById("result")
result.innerHTML=names.join('');

