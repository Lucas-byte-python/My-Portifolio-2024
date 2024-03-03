window.onload=()=>{
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let btn = document.getElementById("convert");
    let result;
    
// Verificando o resultado
value1.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
    }
    });

    btn.addEventListener("click",()=>{
    // Bloquear a execução caso não haja valor
    if (!value1.value) {
        alert("Digite um valor");
        return;
    }
    // Usar a mesma operação quando nada foi escolhido
    let checkSelect1 = from.value=="" && to.value=="";
    let checkSelect2 = from.value=="" || to.value=="";
    if (checkSelect1 || checkSelect2) {
        alert("Escolha uma opção");
        return;
    }
    
    // Converter Celsius para Kelvin
    if (from.value=="celsius" && to.value=="k") {
        result = parseInt(value1.value)+273;
    }
    //Converter Celsius para Fahrenheit
    if (from.value=="celsius" && to.value=="°F") {
        result = (parseInt(value1.value)*9/5) +32;
    }
    // Converter Kelvin para Celsius
    if (from.value=="kelvin" && to.value=="°c") {
        result = parseInt(value1.value)-273;
    }
    // Converter Kelvin para Fahrenheit
    if (from.value=="kelvin" && to.value=="°F") {
        result = (((parseInt(value1.value)-273.15)*9/5)+32).toFixed("2");
    }
    // Converter Fahrenheit para Celsius
    if (from.value=="fahrenheit" && to.value=="°c") {
        result = ((parseInt(value1.value)-32)*5/9).toFixed("2");
    }
    // Converter Fahrenheit para Kelvin
    if (from.value=="fahrenheit" && to.value=="k") {
        result = (((parseInt(value1.value)-32)*5/9)+273.15).toFixed(3);
        if (result.endsWith("0")) {
        result = (((parseInt(value1.value)-32)*5/9)+273.15).toFixed(2);
        }
    }

    // Parar quando o usuário escolher unidades iguais
        let checkOne = from.value=="celsius" && to.value=="°c";
        let checkTwo = from.value=="kelvin" && to.value=="k";
        let checkThree = from.value=="fahrenheit" && to.value=="°F";

        // Parando a operação
        if (checkOne || checkTwo || checkThree){
        value2.value="";
        return;
        }
        //Setting the result value
    value2.value=result+(to.value);
    });
}