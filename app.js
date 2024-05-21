let rslt = document.querySelector(".rslt");

let clrmaker = document.querySelector("#clrmaker");
let clrbtn = document.querySelector(".clrbtn");
let clr1 = document.querySelector(".clr1");
let clr2 = document.querySelector(".clr2");
let clr3 = document.querySelector(".clr3");

clrbtn.addEventListener('click', function(){ 

    let red= Math.round(Math.random()* 250);
    let green= Math.round(Math.random()* 250);
    let blue= Math.round(Math.random()* 250);


    clr1.innerHTML= red;
    clr2.innerHTML= green;
    clr3.innerHTML= blue;

    console.log(red);
    clrmaker.style.background = `rgb(${red},${green},${blue})`;

});