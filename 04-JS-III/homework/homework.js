// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}



function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }

  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);

  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);

  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(' ');

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  return array.includes(elemento);

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let suma = numeros.reduce(function (previo, actual) {
    return previo + actual;
  });

  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // let suma = 0
  // for( i = 0 ; i < resultadosTest.length; i++) {
  //   suma = resultadosTest[i] + suma;
  // }
  // return suma/resultadosTest.length;
  // var inicial = 0;
  // var promedi = resultadosTest.reduce(
  //   function (previo, actual) {
  //     return previo + actual;
  //   },
  //   inicial
  // );
  //   return promedi / resultadosTest.length
  let promedio = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    promedio += resultadosTest[i];
  }

  return promedio / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = numeros[0];

  for (i = 1; i < numeros.length; i++) {
    if (mayor < numeros[i]) {
      mayor = numeros[i];
    }
  }

  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length == 0) return 0;
  if (arguments.length == 1) return arguments[0];

  var producto = 1;
  for (i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  return producto;
}
//console.log(multiplicarArgumentos(1,3,5,5));

function cuentoElementos(arreglo) {
 //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var cantidad = 0;

  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      cantidad += 1;
    }
  }

  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  
  let queEs = 'Es dia Laboral'

  if (numeroDeDia === 1 || numeroDeDia === 7) queEs = 'Es fin de semana';
  
  return queEs;
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí 

  let numerostring = n.toString();

  if (numerostring.charAt(0) == 9) return true;

  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  let iguales = true;
  let num = arreglo[0];

  for (i = 0; i < arreglo.length; i++) {
    if (num !== arreglo[i]) {
      iguales = false
      break;
    }
  }

  return iguales;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = array.filter(mes => mes == 'Enero' || mes == 'Marzo' || mes == 'Noviembre')
  if (!meses.includes('Enero') || !meses.includes('Marzo') || !meses.includes('Noviembre')) {
    return 'No se encontraron los meses pedidos';
  }

  return meses;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array 
  //sólo los valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayor = array.filter(number => number > 100)
  // function (number, indice, array) {
  //   return number > 100
  // }

  return mayor;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la 
  //ejecución y devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array = [];
  let num = numero;

  for (i = 0; i < 10; i++) {
    num += 2
    array.push(num);
    if (num == i) {
      array = 'Se interrumpió la ejecución'
      break;
    }
  }
  //   // escribir el for 
  //   // guardar el valor de la suma en el array
  //   // devolver mensaje si el valor de la suma y i coinciden

  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente 
  //iteración Pista: usá el statement 'continue'
  // Tu código:
  var array = []


  //bucle aumentado en 2 hasta 10 veces
  // cuani = 5 no ejecutar y realizar el siguiente (continue)
  //guardar valor en array

  for (i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    numero += 2;
    array.push(numero);
  }

  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
