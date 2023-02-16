


//!Generator
const Generate = (pass) => {
    let length = Range(),
    char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+=[]{};':/|,./<>?",
    passCon = "";

    for(let i = 0, x = char.length; i <= length; i++)
    {
        passCon += char.charAt(Math.floor(Math.random() * x));
    };

    const display = document.querySelector(".text");
 

    //* Throw a value to html format
    pass = display.innerHTML = passCon;
    
    //*Passing a value of pass into parameter
    return pass;

};

//!Clipboard
const Copy = () => {
    const display = document.querySelector(".text");
    const copyButton = document.querySelector("#Copy");
    copyButton.innerHTML = "Copied!"
    setTimeout(()=>{copyButton.innerHTML = "Copy"},2000);

    //*Copy a text 
    navigator.clipboard.writeText(Generate());
};


//!Password Lenght

const Range = (range) =>{
   
    const passLength = document.querySelector("label");
    const Range = document.querySelector("#range");

    range = passLength.textContent = Range.value;
    return range;

};