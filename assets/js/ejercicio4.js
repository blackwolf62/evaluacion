function separar() {
    var numero = document.getElementById("numero").value;
    if (numero >= 10 && numero <= 99) {
        var decenas = Math.floor(numero / 10);
        var unidades = numero % 10;

        document.getElementById("resultado").innerHTML = "El número " + numero + " tiene: " + "<br>" + decenas + " decenas y "  + "<br>" + unidades + " unidades."
    }else {
        document.getElementById("resultado").innerHTML = "Deben ser números de 2 Dígitos" + "<br>"+ "Entre 10 y 99."
    }
}