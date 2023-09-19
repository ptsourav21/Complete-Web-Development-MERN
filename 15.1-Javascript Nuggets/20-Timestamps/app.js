//Timestamps
console.log(new Date());

//Unix Time
//January 1, 1970
//1s = 1000msi

//Date.now()
console.log(Date.now());
//new Date().getTime()
console.log(new Date().getTime());
//new Date().valuedOf()
console.log(new Date().valueOf());

setTimeout(() => {
  console.log(Date.now());
}, 1000);
//create id's in learning apps
let people = [];
people = [...people, { id: Date.now(), name: "peter" }];

setTimeout(()=>{
    people = [...people, { id: Date.now(), name: "john" }];
    console.log(people);
},1000)

// create/get dates
console.log(new Date(1695149625626));
const now = Date.now();
const futureDate = new Date(now+1000*60)
console.log(new Date(), futureDate);

//difference between dates
const firstDate = new Date()
const secondDate = new Date(2025, 8, 28);

const firstValue = firstDate.getTime()
const secondValue = secondDate.getTime()

console.log(firstValue);
console.log(secondValue);

const timeDiff = secondValue-firstValue
console.log(timeDiff);
const minutes = timeDiff/(1000*60)
console.log(minutes);

const hours = minutes/60;
console.log(hours);
