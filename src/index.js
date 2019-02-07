
let btnCifrar = document.getElementById('btnEncode');
btnCifrar.addEventListener("click",function () {
    let offset = parseInt(document.getElementById('saltos').value);
    let textOriginal = document.getElementById('texto').value.toUpperCase();
    let fraseCifrada = (cipher.encode(parseInt(offset), textOriginal));document.getElementById("msjSalida").value = fraseCifrada;
});

let btnDescifrar = document.getElementById('btnDecode');
btnDescifrar.addEventListener("click",function () {
    let offset = parseInt(document.getElementById("saltos").value);
    let textOriginal = document.getElementById('texto').value.toUpperCase();
    let fraseDescifrada = (cipher.decode(parseInt(offset), textOriginal));
    document.getElementById("msjSalida").value = fraseDescifrada;
});

//function inicio () {
//    
//}
//let btnSi = document.getElementById("si");
//btnSi.addEventListener("click", function () {
//});

function despedida () {
    let bye = '¡ Hasta la proxima !';
    document.getElementById("adios").value = bye;
    

}
let btnNo = document.getElementById("no");
btnNo.addEventListener("click", function () {
    
});

