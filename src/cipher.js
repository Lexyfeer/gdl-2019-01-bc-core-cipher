window.cipher = {
  
  const encode = (offset,texto) => {
    console.log('entro'); 
    let nuevaFrase = '';
    for(let i=0; i<texto.length;i++) {
        let nuevoAscii = ((texto.charCodeAt(i) - 65 + offset) % 26) + 65;
        let letraNueva = String.fromCharCode(nuevoAscii);
        nuevaFrase = nuevaFrase + letraNueva;
        //nuevaFrase += letraNueva
        console.log(nuevaFrase);
    };
    return nuevaFrase;
      
};

  const decode = (offset, texto) => {
    let nuevaFrase = '';
    for(let i=0; i<texto.length;i++) {
        let nuevoAscii = (texto.charCodeAt(i) + 65 - offset) % 26 + 65;
        let letraNueva = String.fromCharCode(nuevoAscii);
        nuevaFrase = nuevaFrase + letraNueva;
        //nuevaFrase += letraNueva
    };
    return console.log(nuevaFrase);
      
};
  // ... 
};
