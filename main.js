document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = parseFloat(document.getElementById('campoA').value);
    const num2 = parseFloat(document.getElementById('campoB').value);

    if (num2 > num1) {
        alert('Sucesso: Formulário enviado com sucesso.');
    } else {
        alert('Erro: O valor B precisa ser maior do que o valor A.');
    }
});