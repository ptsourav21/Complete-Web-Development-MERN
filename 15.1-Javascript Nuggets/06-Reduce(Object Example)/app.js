// Reduce Object
//cart example

const cart = [
  {
    title: "samsung galaxy s7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 3,
  },
  {
    title: "xiaomi note 5",
    price: 399.99,
    amount: 4,
  },
];

// let total = cart.reduce((total, cartItem)=>{
let {totalItems, cartTotal} = cart.reduce((total, cartItem)=>{
    const {amount, price}=cartItem;
    //count items
    total.totalItems+=amount;
    //COUNT SUM 
    total.cartTotal+=amount*price;
    return total;
},{
    totalItems: 0,
    cartTotal: 0,
})
cartTotal = parseFloat(cartTotal.toFixed(2))
console.log(totalItems, cartTotal);