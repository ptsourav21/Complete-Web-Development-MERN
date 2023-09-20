const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("clicked");
});

const debounce =(fn)=>{
    let timeoutID;
    return ()=>{
        console.log(timeoutID);
        clearTimeout(timeoutID)
        
        timeoutID = setTimeout(()=>{
            console.log("clicked from debounce");
            fn();
        },2000)
    }
}
btn.addEventListener('click', debounce(()=>{
    console.log("clicked from event");
}))
//delay logic
//so it runs 2s after last click
//setTimeout returns id, which pass into clearTimeout
