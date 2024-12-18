document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = parseFloat(document.getElementById('mes').value);
    const num2 = parseFloat(document.getElementById('ano').value);

    if (num2 > num1) {
        alert('Sucesso: Formulário enviado com sucesso.');
    } else {
        alert('Erro: O ANO de nascimento não pode ser menor do que o Mês.');
    }
});