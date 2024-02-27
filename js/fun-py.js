alert("Na caixa de texto digite o que se pede para assim funcionar o código python!")
function calcularSalario() {
    var salario = parseFloat(document.getElementById('salario').value);
    var resultado = document.getElementById('resultado');
    
    if (!isNaN(salario)) {
        var novoSalario = salario * 1.25;
        resultado.innerHTML = '<p>Salário atual: R$' + salario.toFixed(2) + '</p>' +
                              '<p>Salário com acréscimo: R$' + novoSalario.toFixed(2) + '</p>';
    } else {
        resultado.innerHTML = '<p>Por favor, insira um valor válido para o salário.</p>';
    }
}