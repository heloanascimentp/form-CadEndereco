'USE strict'; //modo restrito
//consumindo API de CEP, do ViaCep
// httsp://viacep.com.br/

//função para limpar o formulario 
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
