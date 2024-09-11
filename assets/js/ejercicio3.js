
function ver() {
    const numero = document.getElementById("numero").value;
    const esPar = !(numero % 2);
document.getElementById("resultado").innerHTML = esPar;
}
