// Dot Notation
const person={
    name: "Peter",
}
console.log(person.name);
person.age = 25;
console.log(person)

//square bracket notation
const items ={
    'featured-item': ['item1', 'item2']
}
console.log(items['featured-item'])
console.log(person['name'])

//keyname bracket notation
let appState = 'loading';
appState='error';
const app={
[appState]: true,
}
keyName='computer'
app[keyName]='apple'
console.log(app);


const state ={
    loading: true,
    name:'',
    job:'',
}
function updateState(key, value){
    state[key]= value;
}
updateState('name', 'john')
updateState('job', 'developer')
updateState('AddNew', 'New Added')
console.log(state);