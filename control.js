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


// funçao para preencher formulario 
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//consumo do API da ViaCep
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //esperar
        const address = await dados.json();

        if(address.hasOwnProperty('erro')){
            alert('cep não encontrato')
        }else{
            preencherFormulario(address);
        }
    }else{
        alert('CEP incorreto');
    }
        }
        //adiciona evento DUM ao input do CEP para executar função pesquisarCep
        document.getElementById('cep').addEventListener('focusout', pesquisarCep)