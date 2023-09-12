//reduce
//iterates, callback function
//reduces to single value- number, array, object
//1st parameter ('acc') - total of all calculations
//2nd parameter ('curr') - currnet iteration/value

const staff = [
  {
    name: "Purnendu",
    age: 23,
    position: "Developer",
    salary: 100,
  },
  {
    name: "Ishmam",
    age: 24,
    position: "Analyst",
    salary: 400,
  },
  {
    name: "Reshad",
    age: 25,
    position: "Developer",
    salary: 300,
  },
  {
    name: "Oishik",
    age: 26,
    position: "SQA",
    salary: 200,
  },
];
const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);
  total += person.salary;
  return total; //always return first param in reduce
}, 0);//initial value 0, you can set anything
console.log(dailyTotal);
