//segunda formula: se utiliza para obtener el alfabeto completo
//(x-65+n)%26+65

//primera formula: se utiliza para navegar por el array
//(x+n)%26

//CIFRADO 
var input = prompt ('introduce la frase que deseas cifrar');
function cipher (input){
  var fra = "";

  for (var i= 0; i< input.length; i++){
    var ascii = input.charCodeAt(i);

    if (ascii === 32){
      fra += ' ';
    }else if ( ascii >= 65 && ascii <= 90){
      var fraTwo = (ascii - 65 + 33) % 26 + 65;
      fra += String.fromCharCode (fraTwo);
    }else if ( code >= 97 && ascii <= 122){
      var fraThree = (ascii - 97 + 33) % 26 + 97;
      fra += String.fromCharCode (fraThree);
    }
  }
  return fra;
}

alert(cipher (input));



// NOTAS
//Ref. ASCII https://ascii.cl/es/
