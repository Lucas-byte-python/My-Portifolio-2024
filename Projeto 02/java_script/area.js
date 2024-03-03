// Retangulo
function calcularRetangulo(){
    let base = parseFloat(document.getElementById("lado-r1").value);
    let altura = parseFloat(document.getElementById("lado-r2").value);
    let area = base * altura;
    document.getElementById("resultado-r").innerHTML = "A área do quadrilatero é " + area;
}
// Círculo
function calcularCirculo(){
    let raio = document.getElementById("raio").value;
    let area = Math.PI * raio**2;
    document.getElementById("resultado-c").innerHTML = "A área do círculo é " + area.toFixed(6);
}
// Trapézio
function calcularTrapezio() {
    let diagonalMaior = parseFloat(document.getElementById("d-maior").value);
    let diagonalMenor = parseFloat(document.getElementById("d-menor").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let area = ((diagonalMaior + diagonalMenor) * altura) / 2;
    document.getElementById("resultado-t").innerHTML = "A área do trapézio é " + area;
}
// Triângulo
function calcularTriangulo(){
    let base = parseFloat(document.getElementById("base-tr").value);
    let altura = parseFloat(document.getElementById("altura-tr").value);
    let area = (base * altura) / 2;
    document.getElementById("resultado-tr").innerHTML = "A área do triângulo é " + area;
}