let p = document.querySelector("p");
let time = 10;
function timer (){
    let text = document.createTextNode(`The sales end in ${time}sec!`);
    let br = document.createElement("br");
    p.appendChild(text);
    p.appendChild(br);
    if (time == 0){
        clearInterval(interval);
    }
    time--;
}
let interval = setInterval(timer, 1000);