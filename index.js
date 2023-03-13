


//!Generator
const Generate = () => {
    const pswGeneratedtxt = document.querySelector("#pswGeneratedtxt")
    const modal = document.querySelector(".modals");
    let length = Range(),
    char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+=[]{};':/|,./<>?",
    passCon = "";

    for(let i = 0, x = char.length; i < length; i++)
    {
        passCon += char.charAt(Math.floor(Math.random() * x));
    };

   
    modal.style.display = "flex";
    modal.style.transform = "scale(1)";
    
    
   //*Store a data
    pswGeneratedtxt.innerHTML = passCon;
 
    
    //*Copying the generated txt 
    navigator.clipboard.writeText(passCon);
   
 
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


const delay = document.querySelector(".proc");

window.addEventListener("load", ()=>{
    document.querySelector(".loader").style.display = "none";
   document.querySelector("img").style.display = "block"
   
});

setTimeout(()=> delay.style.display = "none",4000)

//!Close btn

const Close = () => {
  const modal = document.querySelector(".modals");

  modal.style.transform = "scale(0)";
  modal.style.transition = "all 0.5s ease-out";
};

