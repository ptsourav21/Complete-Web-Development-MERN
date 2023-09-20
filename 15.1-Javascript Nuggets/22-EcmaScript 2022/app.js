//Ecmascript 2022
// at() - takes integer and returns the item at that index - string, array
// top level await - basic example

const scores = [99, 90, 100];
const oldlast = scores[scores.length - 1];
console.log(oldlast);

const newLast = scores.at(-1);
console.log(newLast);

const name = "Purnendu Talukder";
console.log(name.at(-1));

const resp = await fetch("https://www.course-api.com/react-tabs-project");
const data = await resp.json();
console.log(data);

import fetchTabs from './fetchTabs.js'

const tabs = await fetchTabs()
console.log(tabs);