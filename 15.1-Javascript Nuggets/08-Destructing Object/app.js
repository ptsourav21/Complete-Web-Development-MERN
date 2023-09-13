//faster way to access/unpack variable from objects
const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;

console.log(firstName, lastName, sister);
last = 'some value'
const {last: shakeAndBake, first, city, siblings:{siblings:favorite}, zip} = bob; //last:shakeAndbake, shakeAndbake is alias
console.log(first, last, city, zip, favorite, shakeAndBake);

function printPerson({first, last}){
    // console.log(person.first);
    // const {first, last} = person;
    console.log(first, last);
}
printPerson(bob);