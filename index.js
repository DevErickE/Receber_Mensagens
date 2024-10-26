// URL do JSON do ChatBot
const apiUrl = 'https://devericke.github.io/ChatBot/mensagens.json'; // JSON de mensagens enviadas pelo ChatBot

// Função para adicionar mensagens recebidas ao chat
function addMessage(text, sender = "ChatBot") {
    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = `${sender}: ${text}`;
    messagesContainer.appendChild(newMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Função para buscar mensagens do ChatBot
function fetchMessages() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(messages => {
            document.getElementById('messages').innerHTML = '';
            messages.forEach(message => addMessage(message.content));
        })
        .catch(error => console.error('Erro ao buscar mensagens:', error));
}

// Atualiza mensagens do ChatBot a cada 5 segundos
setInterval(fetchMessages, 5000);

// Carrega mensagens iniciais
fetchMessages();
