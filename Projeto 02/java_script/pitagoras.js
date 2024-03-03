function calcular() {
    const cateto1 = document.getElementById("cateto1").value;
    const cateto2 = document.getElementById("cateto2").value;
    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    document.getElementById("resultado").innerHTML = "O valor da hipotenusa é: " + hipotenusa;
}
function calculate() {
    var c1 = document.getElementById("c1").value;
    var h = document.getElementById("h").value;
    var c2 = Math.sqrt(h * h - c1 * c1);
    document.getElementById("result").innerHTML = "O valor do outro cateto é: " + c2;
  }