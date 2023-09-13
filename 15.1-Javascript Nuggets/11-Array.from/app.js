//Array.from = Not On Prototype
// from - returns Array object from an object
//with a length property or an iterable object
//from - turns array-like/ish into array - string, nodeList, Set
//Works on pagination

const reshad = 'reshad';
console.log(Array.from(reshad));

const text = document.querySelectorAll('text');
const newText = Array.from(text).find((item)=>item.textContent==='Person')
// console.log(newText)

const item = Array.from({length:120},(_, index)=>{
    return index
})
console.log(item);

const itemPerPage = 14;
const pages = Math.ceil(item.length/itemPerPage);

console.log(pages);

const newItems = Array.from({length:pages},(_,index)=>{
    const start = index*itemPerPage;
    const tempItems = item.slice(start, start+itemPerPage)
    return tempItems
})
console.log(newItems);