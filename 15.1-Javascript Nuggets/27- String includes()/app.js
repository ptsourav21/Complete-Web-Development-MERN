const products = [
  { title: "high-back bench", company: "ikea" },
  { title: "albany table", company: "marcos" },
  { title: "accent chair", company: "caressa" },
  { title: "wooden table", company: "ikea" },
];

const text = 'acc'
const filteredProduct = products.filter((product)=>product.title.toLocaleLowerCase().includes(text))

console.log(filteredProduct);
// const firstname = 'john'
// const result = firstname.includes('j',0)
// console.log(result);

// const product ={title: 'accent chair',}

// const result2 = product.title.includes('ac')
// console.log(result2);