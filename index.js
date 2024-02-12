const perguntas = [
    {
      pergunta: ".Qual é a finalidade da função 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string para um número inteiro.",
        "Arredondar um número decimal para o inteiro mais próximo.",
        "Converter um número decimal para uma string."
      ],
      correta: 0
    },
    {
      pergunta: ".O que é 'Hoisting' em JavaScript?",
      respostas: [
        "Uma técnica para declarar variáveis fora do escopo global.",
        "O ato de mover declarações para o topo do seu escopo durante a fase de compilação.",
        "Uma função que move elementos HTML para o topo da página."
      ],
      correta: 1
    },
    {
      pergunta: ".Como se declara uma variável constante em JavaScript?",
      respostas: [
        "const myVar = 10;",
        "let myVar = 10;",
        "var myVar = 10;"
      ],
      correta: 0
    },
    {
      pergunta: ".Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: ".O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento web.",
        "O Modelo de Objeto do Documento, uma representação da estrutura do documento HTML.",
        "Um método para criar funções anônimas."
      ],
      correta: 1
    },
    {
      pergunta: ".Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i < 10; i++)",
        "loop (i = 0; i < 10; i++)",
        "for (i = 0; i <= 10)"
      ],
      correta: 0
    },
    {
      pergunta: ".O que é 'closure' em JavaScript?",
      respostas: [
        "Uma função que não tem acesso a variáveis externas.",
        "Um escopo que permite o acesso a variáveis externas, mesmo após a função ter retornado.",
        "Uma forma de fechar o navegador usando JavaScript."
      ],
      correta: 1
    },
    {
      pergunta: ".O que é o operador ternário em JavaScript?",
      respostas: [
        "Um operador lógico que retorna verdadeiro se uma condição for satisfeita.",
        "Um operador que realiza três operações matemáticas simultaneamente.",
        "Um operador condicional que retorna um valor com base em uma condição."
      ],
      correta: 2
    },
    {
      pergunta: ".Qual é a função do método 'map()' em arrays JavaScript?",
      respostas: [
        "Criar uma cópia exata do array original.",
        "Mapear cada elemento do array através de uma função e retornar um novo array resultante.",
        "Remover elementos duplicados de um array."
      ],
      correta: 1
    },
    {
      pergunta: ".O que é AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca popular para desenvolvimento web.",
        "Uma técnica que permite realizar requisições assíncronas no navegador.",
        "Um padrão de design para estruturar código JavaScript."
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('acertos span')
  
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
            corretas.add(item)
        }
         mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
      quizItem.querySelector('dl dt').remove()
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem) 
  
  }
  