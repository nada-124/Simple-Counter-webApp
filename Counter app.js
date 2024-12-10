/*function HandelColorChange(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let color="rgb("+red +","+green+","+blue+")";
    document.getElementById("ColorFlipper").style.backgroundColor=color;
}*/
let counter=0;
const countervalue=document.getElementById('counter_value');
const Increment=document.getElementById('Increment');
const Decrement=document.getElementById('Decrement');
const reset=document.getElementById('Reset');
Increment.addEventListener(
    'click',() => {
        counter++;
        countervalue.innerText=counter;

    }
);
Decrement.addEventListener(
    'click',() => {
        counter--;
        countervalue.innerText=counter;

    }
);
reset.addEventListener(
    'click',() => {
        counter=0;
        countervalue.innerText=counter;

    }
);