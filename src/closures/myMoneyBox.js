// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}
  
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
  
const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);


function productos() {
    let agregarCarrito = [];

    function mostrarCarrito(producto) {
       agregarCarrito.push(producto);
       console.log(`${agregarCarrito}`)
        
    }
    return mostrarCarrito
}
const carrito = productos();
carrito('Galleta');
carrito('Chocolate');



function crearContador(contador = 0){
  
  return{
    incrementar: function(){
      contador = contador + 1
      return contador
    },
    decrementar: function(){
      contador = contador - 1
      return contador
    },
    obtenerValor: function(){
      return contador
    }
  }
}

const contador1 = crearContador(10);

contador1.incrementar()
contador1.incrementar()
contador1.decrementar()
contador1.obtenerValor()