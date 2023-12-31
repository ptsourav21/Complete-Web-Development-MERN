// Set object - stores a collection of unique values of any type

// new set()
//add(value)
//delete(value)
//clear()
//has(value)

//iterators
//entries(), keys(), values(), forEach()

const unique = new Set();

const random = "third";
unique.add("first");
unique.add("second");
unique.add(random);
unique.add("first");
unique.add(4);

const result = unique.delete("third");
console.log(result);
const result1 = unique.delete("third");
console.log(result1);

const isValue = unique.has(4);
console.log(isValue);

console.log(unique);

const products = [
  { title: "high-back bench", company: "ikea" },
  { title: "albany table", company: "marcos" },
  { title: "accent chair", company: "caressa" },
  { title: "wooden table", company: "ikea" },
];

const companies = products.map((item) => {
  return item.company;
});
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

const finalCompanies = ["all", ...uniqueCompanies];
console.log(finalCompanies);

const result12 = ["all", ...new Set(products.map((item) => item.company))];
console.log(result12);
