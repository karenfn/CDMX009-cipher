window.cipher = {
  // ...
 encode: (num,text)=>{
   let str = text.value;
   let letters= str.toUpperCase();// IDEA: todas las letras seran mayusculas
   let offset = num.value;
   let newText= "";
// IDEA: aplicamos la formula de ocdigo de cesar para convertir el texto en numeros
   for(let i=0; i<letters.length; i++){
     let letterAscii= letters.charCodeAt(i);// IDEA: usando charCodeAt convertimos el texto en unicode
     let conversion=(letterAscii-65+parseInt(offset))%26+65;// IDEA: convertimos en numeros

let output=String.fromCharCode(conversion);// IDEA: convertimos los numero en letras de nuevo

     newText += output;
    }

 return newText
  },

  decode:(num,textsDeco)=>{
    let strDeco = textsDeco.value;
    let letter= strDeco.toUpperCase();
    let offset = num.value;
    let newTexting = "";

   for(let i=0; i<letter.length; i++){
     let letterssAscii= letter.charCodeAt(i);
// IDEA: para hacer que decifre el codigo se invierten los signos
     let conversionDeco=(letterssAscii+65-parseInt(offset))%26+65;
     let out=String.fromCharCode(conversionDeco);

     newTexting  += out;
   }

 return newTexting
}
};
