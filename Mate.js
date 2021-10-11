
function Sumar() {
    alert("vas a sumar");
    var Nu1 = document.getElementById("N1").value;
    var Nu2 = document.getElementById("N2").value;
    var Res = parseInt(Nu1)+parseInt(Nu2);
    alert("el resultado es de = "+Res);
}
function Restar() {
    alert("vas a restar");
    var Nu1 = document.getElementById("N1").value;
    var Nu2 = document.getElementById("N2").value;
    var Res = parseInt(Nu1)-parseInt(Nu2);
    alert("el resultado es de = "+Res);
}
function Multiplicar() {
    alert("vas a multiplicar");
    var Nu1 = document.getElementById("N1").value;
    var Nu2 = document.getElementById("N2").value;
    var Res = parseInt(Nu1)*parseInt(Nu2);
    alert("el resultado es de = "+Res);
}
function Dividir() {
    alert("vas a dividir");
    var Nu1 = document.getElementById("N1").value;
    var Nu2 = document.getElementById("N2").value;
    var Res = parseInt(Nu1)/parseInt(Nu2);
    alert("el resultado es de = "+Res);
}


function ver () {

    var dato = document.getElementById("Materia").value;
    switch (dato) {
        case "Programacion":
            alert("Has seleccionado Programacion");
            break;
        case "Soporte TI":
            alert("Has seleccionado Soporte TI");
            break;
        case "TICS":
            alert("Has seleccionado TICS");
            break;
        case "Diseno de Software":
            alert("Has seleccionado Diseno de Software");
            break;
    }
}