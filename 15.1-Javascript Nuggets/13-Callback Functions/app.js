function makeUppercase(value){
    console.log(value.toUpperCase());
}

function rverseString(value){
    console.log(value.split('').reverse().join(''));
}
function handleName(name, cb){
    const fullName =`${name} smith`
    cb(fullName);
}

handleName('Peter', makeUppercase)
handleName('Peter', rverseString)

handleName('susan', (value)=>{
    console.log(value);
    //array methods, setTimeOut, event listeners etc
})
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    btn.innerHTML='Button Is Clicked';
})
