function cambiar(){
   var n1 = document.getElementById("n1").value;
   var n2 = document.getElementById("n2").value;

   var temp = n1;
   n1 = n2;
   n2 = temp;

   var n1 = document.getElementById("n1").value = n1;
   var n2 = document.getElementById("n2").value = n2;

   document.getElementById("resultado").innerHTML += "Variable 1: " + n2 + " >---> " + "Variable 2: " + n1 + "<br>";

}