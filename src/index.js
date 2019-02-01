function capturar(offset, textOriginal) {
    let offset = document.getElementById("saltos").value;
    let textOriginal = document.getElementById('texto').value;
    return console.log('offset, textOriginal'); 
};




//const abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M',//'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//const totalPosiciones = abecedario.length-1;
//console.log (totalPosiciones);
//abecedario.forEach(function (elemento, indice, array) {
//    console.log(elemento, indice);
//});


        //variables
        //let offset;
        //let textOriginal;

    //submit
    /*function capturar(offset, textOriginal) {
        let offset = document.getElementById("saltos").value;
        let textOriginal = document.getElementById('texto');
        return console.log('offset, textOriginal'); 
    };*/
        //return console.log(offset);
        //return console.log(textOriginal);



        
        
        



/*f(x) = (x + n) % 26
la x significa el numero de posicion que tiene la primera letra a cifrar
la n es el numero de desplazamiento
y el residuo de 26 es por el abecedario*/

//const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//const abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
/*function myFunction() {
    const cadenaOriginal = document.getElementById("texto").value;
    const x = str.charCodeAt(cadenaOriginal.length);
    return ('x');
  }*/

  //const abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  //const textOriginal = document.getElementById('texto').value;
  //const offset = document.getElementById('saltos').value;
  //for(let i=0; i<textOriginal.length; i++){
  //console.log(textOriginal[i]);
  //}

// const arreglo = abecedario.split('');
// console.log(arreglo);

// for(let i=0; i<abecedario.length; i++){
//   console.log(abecedario[i]);
// }

// f(x, offset) = (x + offset)%26;
//const textOriginal = 'Hola Lexy';
//function desplazarLetra(posicionInicial, offset){
  //return (posicionInicial + offset) % 26;
//}



//console.log('cifrar:', cifrar(textOriginal, 3));

//Crear una funcion llamada cipher que cifre el texto ingresado//

//function cifrar(textoACifrar, offset){

  
  //var cifrado ="";
 
     //for(let i=0; i<texto.length; i++) { //el for recorrera las letras del texto a cifrar//
          
     /*const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     offset = 3;
     boton_de_cifrar = document.getElementById('cifrar');
     boton_de_descifrar = document.getElementById('descifrar');
     entrada = document.getElementById('input'),
     salida = document.getElementById('output');
 
     function cifrar(input, output, desplazamiento){
         var resultado = '';
         //Usaremos un bucle
         for(var i=0, c; c=input[i]; i++){
             var caracter_actual = '',
                 indice_actual = alfabeto.indexOf( c );
 
             if((indice_actual + desplazamiento) <= alfabeto.length){
                 //Desaplazamos el caracter.
                 caracter_actual = alfabeto[ (indice_actual + desplazamiento) ];
 
                 //Convertimos a ASCII
                 caracter_actual = caracter_actual.charCodeAt( 0 );
 
                 //El guion lo usamos para delimitar cada caracter cifrado y poder decifrarlo.
                 resultado += caracter_actual + '-';
             }
             else{
                 var indice_actual_temporal = indice_actual + desplazamiento,
                     sobrante = indice_actual_temporal - alfabeto.length;
 
                 //
                 //Usaremos solo el desplazamiento para reemplazar el caracter.
                 caracter_actual = alfabeto[sobrante];
 
                 //Convertimos a ASCII
                 caracter_actual = caracter_actual.charCodeAt( 0 );
 
                 resultado += caracter_actual + '-';
             }
         }
 
         output.value = resultado.replace(/\-$/, '');
     }
 
     function descifrar(output, desplazamiento){
         var array_de_caracteres = output.value.split('-'),
             resultado = '';
 
         //Usaremos un bucle
         for(var i=0, c; c=array_de_caracteres[i]; i++){
 
             c = String.fromCharCode( parseInt( c ) );
 
             var caracter_actual = '',
                 indice_actual = alfabeto.indexOf( c );
 
             if((indice_actual - desplazamiento) >= 0){
                 caracter_actual = alfabeto[ (indice_actual - desplazamiento) ];
 
                 resultado += caracter_actual;
             }
             else{
                 var indice_actual_temporal = indice_actual - desplazamiento,
                     sobrante = parseInt(indice_actual_temporal.toString().replace('-', '') );
 
 
                 caracter_actual = alfabeto[alfabeto.length - sobrante];
 
                 resultado += caracter_actual;
             }
         }
 
         output.value = resultado
     }
 
 
     boton_de_cifrar.addEventListener('click', function(){
         cifrar(entrada.value, salida, desplazamiento);
     }, false);
 
     boton_de_descifrar.addEventListener('click', function(){
         descifrar(salida, desplazamiento);
     }, false);*/