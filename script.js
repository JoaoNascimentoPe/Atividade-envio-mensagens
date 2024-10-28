function salvarDados() {
    const num = document.getElementById('inputNum').value;
    const text = document.getElementById('inputText').value;
    const endereco = document.getElementById('inputEndereco').value;
    const email = document.getElementById('inputEmail').value;
    const nome = document.getElementById('inputNome').value;

    const dadosUsuario = {
        num: num,
        text: text,
        endereco: endereco,
        email: email,
        nome: nome
    };

    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

    alert('Dados salvos com sucesso!');
}

const dados = JSON.parse(localStorage.getItem('dadosUsuario'))

var nome = dados.nome
var endereco = dados.endereco
var email = dados.email
var numero = dados.num
var text = dados.text


let mensagem = 'Nome: ' + nome + ' Email: ' + email + ' Endereço: ' + endereco + ' Mensagem: ' + text

const url = "https://api.whatsapp.com/send?phone=55"+numero+"&text="+ mensagem

function enviarMensagem() {
    window.open(url, '_blank')
}

