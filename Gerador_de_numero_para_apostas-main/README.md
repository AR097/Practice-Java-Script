##  API REST Geradora de Números da Mega-Sena
Descrição:

Este projeto consiste em uma API REST desenvolvida em Node.js com o framework Express, que tem como principal funcionalidade a geração de números aleatórios para apostas na Mega-Sena. A aplicação expõe um endpoint que, ao ser acessado, retorna um conjunto de 6 números únicos e aleatórios entre 1 e 60, organizados em ordem crescente. 

Este projeto é uma demonstração prática de como criar uma API simples, abordando conceitos básicos de desenvolvimento back-end, como definição de rotas, tratamento de requisições e respostas, e geração de conteúdo dinâmico.

Funcionalidades:

Geração de 6 números aleatórios e únicos para apostas na Mega-Sena.
Resposta JSON que pode ser consumida por qualquer cliente HTTP.
Servidor configurado para rodar localmente na porta 3000.
Tecnologias Utilizadas:

Node.js: Plataforma utilizada para construir a aplicação.
Express: Framework web para Node.js que simplifica a criação de servidores HTTP e APIs.


Como Executar:

Clone o repositório para sua máquina local.
```
git clone https://github.com/AR097/Gerador_de_numero_para_apostas.git
```

Instale as dependências com o comando npm install.
```
Install
```

Execute o servidor com node app.js.
```
node app.js
```

Acesse http://localhost:3000/gerar-mega-sena em seu navegador ou via cliente HTTP para gerar os números.

O resultado deve ser o mostrado a baixo:

![image](https://github.com/user-attachments/assets/b565f3c9-f18c-462f-9840-1f98ad67acd1)
![image](https://github.com/user-attachments/assets/bfb049f2-ce35-4034-9903-86509dd28d2a)

# Para Aprender

## Tenha ou instale o node.js
<a href="https://nodejs.org/en"> Clique aqui caso precise baixar </a>

## Crie um diretorio para o projeto:
```
mkdir Gerador_de_numeros_para_aposta
```

## Navegue até o diretório:
```
cd Gerador_de_numeros_para_aposta
```

## Iniciar um projeto Node.js dentro da pasta:
```
npm init -y
```

## Installe o express:
```
npm install express
```
## Abra o editor de codigo:
```
code .
```
## Crie um arguivo chamado app.js:

Nele sera incluído o codigo abaixo, que fará o gerador de numeros funcionar.

## Código JavaScript

Primeiramente vamos importar o módulo Express, que já temos instalado.
```javascript
const express = require('express');
```
e devemos criar uma instância de aplicação Express, essa instâ. é um objeto que contém todas as funcionalidades e métodos fornecidos pelo framework Express para construir e gerenciar seu servidor web.

Definindo o Array de Números:

Iniciamos com uma constante que será um array vazio, utilizado para armazenar os números gerados.
```javascript
const numeros = [];
```
Criando o Loop:

Usamos um loop while que rodará até que o array tenha 6 números.
```javascript
while (numeros.length < 6) {
```
- `length`: Propriedade do array em JavaScript que retorna o número de elementos que ele contém.
- `while`: É o loop que verifica a condição de numeros.length.
- `<`: Operador de comparação que verifica se o valor à esquerda é menor que o valor à direita. Como definimos 6 como o tamanho do array, esse operador verificará se a quantidade de numeros.length é menor que 6.

Gerando Números Aleatórios:

Usamos a função Math.random() para gerar um número decimal entre 0 e 1, multiplicando-o por 60 para gerar um número entre 1 e 60.
```javascript
const numero = Math.ceil(Math.random() * 60);
```
- `Math.ceil`: Em JavaScript, é usada para arredondar um número para cima até o inteiro mais próximo.

Garantindo Números Únicos:

Utilizamos a função includes para verificar se o número gerado já está presente (retorna true) ou não (retorna false) no array.
```javascript
if (!numeros.includes(numero)) {
```
feche 
```}}```

Se o número não estiver no array, ele será adicionado usando o método push.
```javascript
numeros.push(numero);
```

Ordenando os Números:

o proximo codigo nos retorna os 6 números ordenados de forma crescente:
```javascript
return numeros.sort((a, b) => a - b);
```
feche 
```}```
Vamos definir uma rota GET para o endpoint(/gerar-mega-sena):
```javascript
app.get('/gerar-mega-sena', (req, res) => { 
```
Na proxima linha de codigo, vamos chamar a função para ser gerado os numeros:
```javascript
const numeros = gerarNumerosMegaSena(); 
```
feche 
```}```
E vamos definir que os numeros a serem retonrados sejam gerados em formato JSON.
```javascript
res.json({ numeros }); 
```
feche 
```});```

E agora, é so configurar o servidor para a porta 3000:
```Javascript
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
```

O código completo ficará assim:

```javascript
const express = require('express'); // Importa o módulo Express, que é um framework web para Node.js
const app = express(); // Cria uma instância da aplicação Express

// Função para gerar números da Mega-Sena
function gerarNumerosMegaSena() {
    const numeros = []; // Cria um array vazio para armazenar os números gerados
    while (numeros.length < 6) { // Continua gerando números até que o array tenha 6 números únicos
        const numero = Math.ceil(Math.random() * 60); // Gera um número aleatório entre 1 e 60
        if (!numeros.includes(numero)) { // Verifica se o número ainda não foi adicionado ao array
            numeros.push(numero); // Adiciona o número ao array se ele for único
        }
    }
    return numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente e retorna o array
}

// Endpoint para gerar números da Mega-Sena
app.get('/gerar-mega-sena', (req, res) => { // Define uma rota GET para o endpoint '/gerar-mega-sena'
    const numeros = gerarNumerosMegaSena(); // Chama a função para gerar os números da Mega-Sena
    res.json({ numeros }); // Retorna os números gerados em formato JSON
});

// Configura o servidor
app.listen(3000, () => { // Inicia o servidor Express na porta 3000
    console.log('Servidor rodando na porta 3000'); // Exibe uma mensagem no console indicando que o servidor está ativo
});

```
