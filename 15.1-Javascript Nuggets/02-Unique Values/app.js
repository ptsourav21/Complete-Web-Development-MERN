const menu = [
  {
    name: "Pancakes",
    category: "Breakfast",
  },
  {
    name: "burger",
    category: "Lucnch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category:"Breakfast",
  },
  {
    name: "eggs",
    category: "Breakfast",
  },
];
const categories = ["all", ...new Set (menu.map((item)=> item.category))];

console.log(categories);

const result = document.getElementById("result")
result.innerHTML = categories.map((categories)=>{
    return `<button>${categories}</button>`;
})