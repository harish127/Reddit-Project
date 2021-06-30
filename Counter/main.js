var ct=0;
var tc =0;



 function plusone() {
    console.log("+1");
    document.getElementById('CT').textContent = ++ct;
    document.getElementById('TC').textContent = ++tc;
}

 function minusone() {
    console.log("-1");
    document.getElementById('CT').textContent = --ct;
    document.getElementById('TC').textContent = ++tc;
}

 function zero() {
    console.log("0");

    document.getElementById('TC').textContent = ++tc;
}

 function reset() {
    console.log("reset");
    ct=0;
    tc=0;
    document.getElementById('CT').textContent = ct;
    document.getElementById('TC').textContent = tc;
}
