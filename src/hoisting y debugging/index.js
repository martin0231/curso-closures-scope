nameOfDog();

function nameOfDog(){
    console.log(`El mejor perro es ${namePerro}`);
}

// Pero si agregamos o definimos una varible si se ejecuta el codigo
var namePerro;

// "El mejor perro es _undefined_"
// hoisting se aplica a var y function

var a = "hola"

function hola(){
    var b = "hello"
    var c = "hello world"
    debugger
}

hola()