## **CIFRADO Y DESCIFRADO CÉSAR**
### **Definición**

El Cifrado de Caesar es uno de los métodos de codificación conocidos más antiguos.
Es muy simple - sólo se cambian las posiciones del alfabeto. La transformación se denomina ROTN,
donde N es el valor de cambio de posiciones y ROT significa "ROTAR", por que es un cambio cíclico
Por ejemplo, ROT2 significa que "a" se vuelve "c", "b" se vuelve "d" y al final "y" se vuelve "a",
y "z" se vuelve "b". La cantidad de transformaciones posibles depende de la longitud del alfabeto. 
Para Inglés sólo llega a 25 (ROT0 a ROT26 no cambian el texto original). Debido a eso, es un método muy débil,
ya que puedes revisar todas las combinaciones posibles de manera muy rápida.
La calculadora a continuación muestra la tabla con todas las transformaciones posibles.
Los símbolos no-alfabéticos como espacios y dígitos no cambian

### **Seudocódigo**

1.	PSEUDOCÓDIGO CÉSAR;
2.	FUNCIÓN CIPHER (STR, DISPLACEMENT);
3.	SI;
4.	   STR = A UN CAMPO VACÍO;
5.	          ESCRIBIR ('NO DEBE INGRESAR UN NÚMERO');
6.	   STR = TIENE UN NÚMERO
7.	          ESCRIBIR ('NO DEBE INGRESAR UN NÚMERO');
8.	  STR = NÚMERO VÁLIDO;
9.	       VAR LETTER = ‘ ‘;
10.	       FOR (VAR I = 0; I < TAMAÑO DEL STR; I++);
11.	       LETTER = LETTER + ((STR(I) + 7 + DISPLACEMENT)%26 + 65);
12.	  RETUR LETTER;

