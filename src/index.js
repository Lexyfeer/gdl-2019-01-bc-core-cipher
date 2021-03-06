document.getElementById('next').addEventListener("click",continuar);
function continuar () {
    document.getElementById("ver").style.display = 'block';
    document.getElementById("ocultar").style.display = 'none';
}

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

document.getElementById('end').addEventListener("click",swal);
function swal () {
    document.getElementById("form1").reset();
    document.getElementById("ver").style.display = 'none';
    document.getElementById("ocultar").style.display = 'block';

    // sweet alert
    swal({title: "Hasta la próxima!", text: "Regresa pronto!", icon: "info", button: "Aceptar"});
}