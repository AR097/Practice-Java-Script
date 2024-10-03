const express = require('express'); // Importa o módulo Express, que é um framework web para Node.js
const app = express(); // Cria uma instância da aplicação Express

// Função para gerar números da Mega-Sena
function gerarNumerosMegaSena() {
    const numeros = []; // Cria um array vazio para armazenar os números gerados
    while (numeros.length < 6) { // Continua gerando números até que o array tenha 6 números únicos
        const numero = Math.floor(Math.random() * 60) + 1; // Gera um número aleatório entre 1 e 60
        if (!numeros.includes(numero)) { // Verifica se o número ainda não foi adicionado ao array
            numeros.push(numero); // Adiciona o número ao array se ele for único
        }
    }
    return numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente e retorna o array
}

// Endpoint para gerar números da Mega-Sena
app.get('/gerar-mega-sena', (req, res) => { // Define uma rota GET para o endpoint '/gerar-mega-sena'
    const numeros = gerarNumerosMegaSena(); // Chama a função para gerar os números da Mega-Sena
    
});

// Configura o servidor para ouvir na porta 3000
app.listen(3000, () => { // Inicia o servidor Express na porta 3000
    console.log('Servidor rodando na porta 3000'); // Exibe uma mensagem no console indicando que o servidor está ativo
});
