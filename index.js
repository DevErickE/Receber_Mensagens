// URL da API onde as mensagens são enviadas
const apiUrl = 'https://devericke.github.io/ChatBot/'; // Substitua com o link real

// Função para adicionar uma mensagem ao chat
function addMessage(text) {
    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = text;
    messagesContainer.appendChild(newMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Função para buscar novas mensagens da API
function fetchMessages() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar mensagens');
            }
            return response.json();
        })
        .then(messages => {
            // Exibe cada mensagem recebida
            messages.forEach(message => {
                addMessage(message.content); // Supondo que a API retorne { "content": "texto da mensagem" }
            });
        })
        .catch(error => console.error('Erro:', error));
}

// Atualiza o chat com novas mensagens a cada 5 segundos
setInterval(fetchMessages, 5000);
