/*CIFRADO CÉSAR: Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha */

/*Cramos una función cipher (para encriptar) que tenga como argumentos a str (que será la palabra que deseamos ingresar) y a displacement (que será el tamaño del desplazamiento que queremos darle a la palabra, al momento de cifrarla)*/
function cipher (str, displacement){
  /*Primero debemos ver que se cumpla las condiciones, y lo hacemos por medio de la condicional if - else*/
  /*Hacemos la condición para que no se acepten campos vacíos y mandamos un mensaje, alertanto que no se debe realizar*/
  if (str === ''){
    alert ('NO DEBE INGRESAR UN CAMPO VACÍO');
    /*Hacemos la condición para que no se acepten números y mandamos un mensaje, alertanto que no se debe realizar*/
  } else if (((parseInt(str) >= 0)) || (parseInt(str)) < 0){
        alert ('NO DEBE INGRESAR UN NÚMERO');
    /*Realizamos el procedimiento mediante la fómula, de los demás casos; donde no inclumplen con lo mencionado*/
  } else {
    /*defino la variable letter con un campo vacío, ya que...*/
    var letter = '';
    str = str.toLowerCase();
    /*Para proceder con la fórmula, primero debemos hacer una iteración, que recorrar el tamaño del argumento str (que es la frase que se va a ingresar)*/
    for (var i = 0; i < str.length; i++){
      /*Realizamos la fórmula, pero para ello debemos hacer un charCodeAt a la palabra ingresada (str) que me da la posición en ASCII, hago el recorrido para cada letra de la palabro (por ello he usado la iteración for*/
      /*Luego de que me sale la posición de cada letra ingresada, debo hacerle un Strign.fromCharCode, que me devuelve la letra de la posición que me sale*/
      letter = letter + String.fromCharCode((str.charCodeAt(i)+7+displacement)%26 + 65);
    }
  return letter;
  }

}

var strCipher = cipher(prompt("¿Qué palabra desea cifrar?"), 33);
alert (strCipher);


/*Cramos una función cipher (para encriptar) que tenga como argumentos a str (que será la palabra que deseamos ingresar) y a displacement (que será el tamaño del desplazamiento que queremos darle a la palabra, al momento de cifrarla)*/
function decipher (str, displacement){
  /*Primero debemos ver que se cumpla las condiciones, y lo hacemos por medio de la condicional if - else*/
  /*Hacemos la condición para que no se acepten campos vacíos y mandamos un mensaje, alertanto que no se debe realizar*/
  if (str === ''){
    alert ('NO DEBE INGRESAR UN CAMPO VACÍO');
    /*Hacemos la condición para que no se acepten números y mandamos un mensaje, alertanto que no se debe realizar*/
  } else if (((parseInt(str) >= 0)) || (parseInt(str)) < 0){
        alert ('NO DEBE INGRESAR UN NÚMERO');
    /*Realizamos el procedimiento mediante la fómula, de los demás casos; donde no inclumplen con lo mencionado*/
  } else {
    /*defino la variable letter con un campo vacío, ya que...*/
    var letter = '';
    str = str.toLowerCase();
    /*Para proceder con la fórmula, primero debemos hacer una iteración, que recorrar el tamaño del argumento str (que es la frase que se va a ingresar)*/
    for (var i = 0; i < str.length; i++){
      /*Realizamos la fórmula, pero para ello debemos hacer un charCodeAt a la palabra ingresada (str) que me da la posición en ASCII, hago el recorrido para cada letra de la palabro (por ello he usado la iteración for*/
      /*Luego de que me sale la posición de cada letra ingresada, debo hacerle un Strign.fromCharCode, que me devuelve la letra de la posición que me sale*/
      letter = letter + String.fromCharCode((str.charCodeAt(i)+7+displacement)%26 + 65);
    }
  return letter;
  }

}

var strCipher2 = decipher(prompt("¿Qué palabra desea cifrar?"), -33);
alert (strCipher2);
