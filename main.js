
var opcion;

var menu "Seleccione la opcion del area que desea calcular";
menu += "\n1) Cuadrado";
menu += "\n2) Rectangulo";
menu += "\3) Triangulo";
menu += "\n4) Circulo";
menu += "\n0) Salir";

do {
    opcion = promp(menu);

    console.log("Seleccionaste la opcion " + opcion);
    switch (opcion) {
        case "0":
            break;
        case "1":
            AreaDelCuadrado();
            break;
        case "2":
            AreaDelRectangulo();
            break;
        case "3":
            AreaDelTriangulo();
            break;
        case "4":
            AreaDelCirculo;
            break;

        default:
            console.log("Opcion Invalida");
            break;
    }
} while (opcion != 0 && opcion != null);

console.log("Fin");


function AreaDelCuadrado() {
    var lado = prompt("Ingrese el lado del cuadrado");
    var area = lado * lado;
    var msg = "El area del cuadrado es :" + area;
    console.log(msg);
    alert(msg);
}

function AreaDelRectangulo {
    var base = prompt("Ingrese la base del rectangulo");
    var altura = prompt("Ingrese la altura del rectangulo");
    var area = base * altura;
    var msg = "El area del rectangulo es :" + area;
    console.log(msg);
    alert(msg);

}

function AreaDelCirculo() {
    var radio = prompt("Ingrese el radio del circulo");
    var area = Math.PI * Math.pow(radio, 2);
    var msg = "El area del circulo es: " + area;
    console.log(msg);
    alert(msg);
}

function AreaDelTriangulo() {
    var base = prompt("Ingrese la base del triangulo");
    var altura = prompt("Ingrese la altura del triangulo");
    var area = base * altura;
    var msg = "El area del triangulo es :"
    area;
    console.log(msg);
    alert(msg);
}






