"use strict"
pi = 3.14
console.log(pi)
console.log(typeof(pi))

function myFunction() {
  //"use strict"  
  return pi = 3.1416;
}

console.log(myFunction());

//El modo estricto tiene varios cambios en la semántica normal de JavaScript:
/* 
1) Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.

2)Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones:
 a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.

3)Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript. */