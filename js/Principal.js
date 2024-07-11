import Empresa from "./Empresa.js";
import Vendedor from "./Vendedor.js";

let tienda = new Empresa();

let mary = new Vendedor("Mary", 150);
let jose = new Vendedor("José", 135);
let carlos = new Vendedor("Carlos", 160);
let pedro = new Vendedor("Pedro", 75);

tienda.procesarVend(mary)
tienda.procesarVend(jose)
tienda.procesarVend(carlos)
tienda.procesarVend(pedro)

let salida = document.getElementById("salida");

salida.innerHTML = "Cantidad de ventas que fueron por 100$ o menos: " + tienda.menores;
salida.innerHTML += "<br>Cantidad de ventas mayores a 100$: " + tienda.mayores;
salida.innerHTML += "<br>Monto total de las ventas: " + tienda.ventas + "$";