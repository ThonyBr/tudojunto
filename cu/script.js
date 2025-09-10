// Definindo as credenciais de login
const usuarioValido = 'admin'; // Define o nome de usuário válido
const senhaValida = '123@456'; // Define a senha válida

// Selecionando o formulário e o campo de mensagens
const form = document.getElementById('loginForm'); // Obtém o formulário pelo seu id "loginForm"
const messageElement = document.getElementById('message'); // Obtém o elemento onde a mensagem será exibida

// Adicionando o evento de envio do formulário
form.addEventListener('submit', function(event) { // Adiciona um ouvinte de evento para o envio do formulário
    event.preventDefault(); // Impede o envio padrão do formulário (evita o recarregamento da página)

    // Pegando os valores dos campos
    const usuario = document.getElementById('usuario').value; // Obtém o valor inserido no campo de usuário
    const senha = document.getElementById('senha').value; // Obtém o valor inserido no campo de senha

    // Verificando se as credenciais estão corretas
    if (usuario === usuarioValido && senha === senhaValida) { // Se o usuário e a senha forem válidos
        messageElement.textContent = 'Login bem-sucedido!'; // Exibe a mensagem de sucesso
        messageElement.style.color = 'green'; // Altera a cor da mensagem para verde
    } else { // Se as credenciais estiverem erradas
        messageElement.textContent = 'Usuário ou senha inválidos'; // Exibe a mensagem de erro
        messageElement.style.color = 'red'; // Altera a cor da mensagem para vermelha
    }
});
