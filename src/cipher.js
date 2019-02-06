window.cipher = {

    encode: (offset,texto) => { 
        let nuevaFrase = '';
        for( let i=0; i<texto.length; i++){
            let letraInicial = texto.charCodeAt(i);
            //console.log(letraInicial);
            let iPosicion = letraInicial - 65;
            //console.log(iPosicion);
            let nPosicion = iPosicion + offset;
            //console.log(nPosicion);
            let pCero = nPosicion %26;
            //console.log(pCero);
            let vueltaCompleta = pCero + 65;
            //console.log(vueltaCompleta);
            let letraNueva = String.fromCharCode(vueltaCompleta);
            //console.log(letraNueva);
            nuevaFrase += letraNueva;
        }
        return nuevaFrase;
    },
    decode: (offset,texto) => {
        let fraseDescifrada = '';
        for(let i=0; i<texto.length;i++) {
            let nuevoAscii = (texto.charCodeAt(i) + 65 - offset) % 26 + 65;
            let letraNueva = String.fromCharCode(nuevoAscii);
            fraseDescifrada = fraseDescifrada + letraNueva;
            //nuevaFrase += letraNueva
        }
        return fraseDescifrada;
          
    },
};
  