

//function cifrar() {
//    let offset = document.getElementById("saltos").value;
//    let textOriginal = document.getElementById('texto').value;
//    //return console.log(offset,textOriginal);
//    console.log(window.cipher.encode(offset, textOriginal)); 
//    
//    
//}

//function descifrar() {
//    let offset = document.getElementById("saltos").value;
//    let textOriginal = document.getElementById('texto').value;
//    // return console.log(offset,textOriginal);
//    console.log(window.cipher.decode(offset, textOriginal)); 
//}



let btnCifrar = document.getElementById('btnEncode');
btnCifrar.addEventListener("click",function () {
    let offset = parseInt(document.getElementById('saltos').value);
    let textOriginal = document.getElementById('texto').value.toUpperCase();
     console.log(cipher.encode(offset, textOriginal));

    //document.getElementById("demo").innerHTML = window.cipher.encode(offset, textOriginal)
});

let btnDescifrar = document.getElementById('btnDecode');
btnDescifrar.addEventListener("click",function () {
    let offset = parseInt(document.getElementById("saltos").value);
    let textOriginal = document.getElementById('texto').value.toUpperCase();
    console.log(cipher.decode(offset, textOriginal));
     

    //document.getElementById("demo").innerHTML = window.cipher.decode(offset, textOriginal)
});
