function calcularVelocidade(){
    let distancia = parseFloat(document.getElementById("distancia").value);
    let tempo = parseFloat(document.getElementById("tempo").value);
    let velocidade = distancia / tempo;
    document.getElementById("velocidade").innerHTML = "A velocidade " + velocidade + " metros por segundo";
}