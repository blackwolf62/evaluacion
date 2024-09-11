



function calcular() {
    var papas = 1000;
    var huevos = 5;
    var cebolla = 300;
    var comensales = document.getElementById("comensales").value;
    if (isNaN(comensales) || comensales <= 0) {
        alert("Por favor, ingresa un número válido de comensales.");
        return;
    }
    papas = comensales * (200 * papas / 1000);
    huevos = comensales * (200 * huevos / 1000);
    cebolla = comensales * (200 * cebolla / 1000);

    document.getElementById("resultado").innerHTML = comensales + " Comensales, " +
        "<br>" + "Se necesitará: " + "<br>" + papas + " grs de papa, " + "<br>" + huevos +
        " huevos, " + "<br>" + cebolla + " gr de cebolla.";

    document.getElementById("comensales").value = "";
}
