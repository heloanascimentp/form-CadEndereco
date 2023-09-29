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

//verificar se o CEP  é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa numero informado com expressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep); // verifica o tamanho do Cep digitado e executa a função de validação do CEP