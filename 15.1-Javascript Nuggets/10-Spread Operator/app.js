//spread operator
//allows and iterable to spread/expand individually inside reciever
// split into single items and COPY them

const reshad = 'reshad';
const letter =[...reshad]
console.log(letter);
const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestfriend = 'ishmam';

const friends = [...boys, ...girls, bestfriend]
console.log(friends);

//reference
//copy
const newFriends = friends;
newFriends[0] = 'nancy';
console.log(newFriends);
console.log(friends);

const newFriends2 = [...friends];
newFriends2[0] = 'Oishik';
console.log(newFriends2);
console.log(friends);

// ES2018 - ES8 Object
const person ={ name: 'john', job: 'developer'}
const newPerson = {...person, city:'chicago', job: 'web'};
newPerson.name='Nothing'
console.log(person);
console.log(newPerson);