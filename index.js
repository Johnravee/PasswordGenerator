


//!Generator
const Generate = () => {
    const display = document.querySelector(".text");
    const copied = document.querySelector(".copied");
    const copyMsg = document.querySelector("h6");
    const generatedMsg = document.querySelector("h5");
    let length = Range(),
    char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+=[]{};':/|,./<>?",
    passCon = "";

    for(let i = 0, x = char.length; i <= length; i++)
    {
        passCon += char.charAt(Math.floor(Math.random() * x));
    };

    //*message 
    copyMsg.style.visibility = "visible";
    generatedMsg.style.visibility = "visible"

    //*Timer
    setTimeout(()=>copyMsg.style.visibility = "hidden",5000)
    setTimeout(()=>generatedMsg.style.visibility = "hidden",5000)

    //* Throw a value to html format
   let txt = display.innerHTML = passCon;
   setTimeout(()=> display.innerHTML = "",5000);

   //*diplay to copied password
   copied.innerText = txt;
   setTimeout(()=> copied.innerHTML = "",5000)

    //*Copying the generated txt 
    navigator.clipboard.writeText(txt);

};

//!Clipboard
// const Copy = () => {
//     const display = document.querySelector(".text");
//     const copyButton = document.querySelector("#Copy");
//     copyButton.innerHTML = "Copied!"
//     setTimeout(()=>{copyButton.innerHTML = "Copy"},2000);
    

//     //*Copy a text 
//     navigator.clipboard.writeText(Generate());
  
// };


//!Password Lenght

const Range = (range) =>{
   
    const passLength = document.querySelector("label");
    const Range = document.querySelector("#range");

    range = passLength.textContent = Range.value;
    return range;

};


//! Loader 

const loader = document.querySelector(".loader");
const delay = document.querySelector(".proc");

window.addEventListener("load", ()=>{
   loader.style.display = "none";
   
});

setTimeout(()=> delay.style.display = "none",4000)

