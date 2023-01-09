let inc=document.getElementById('increament');
let text=document.getElementById('screen');
let rset=document.getElementById('reset');
let dec=document.getElementById('dec');

let count=0;

function incr(){
    count++;
    text.innerHTML=count;
}
function reset(){
    count=0;
    text.innerHTML=0;
}
function decr(){
    count--;
    text.innerHTML=count;
}

inc.onclick=incr;
rset.onclick=reset;
dec.onclick=decr;