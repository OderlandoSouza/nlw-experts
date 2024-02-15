const perguntas = [
	{
	  pergunta: ".Qual o significado do termo PLC em automação?",
	  respostas: [
		  
		  "Programa Linear de Controle.",
		  "Processo de Lógica Contínua.",
		  "Controlador Lógico Programável.",
  
	  ],
	  correta: 2
	},

	{
	  pergunta: ".Em sistemas de automação, o que representa o acrônimo HMI?",
	  respostas: [
		"Hardware de Manutenção Integrado.",
		"Interface Homem-Máquina.",
		"Módulo de Integração Hidráulica."
	  ],
	  correta: 1
	},
	{
	  pergunta: ".O que significa o termo IoT em automação industrial?",
	  respostas: [
		"Internet of Things.",
		"Input Output Technology.",
		"Integrated Operational Tools."
	  ],
	  correta: 0
	},
	{
	  pergunta: ".Qual é o propósito dos sistemas SCADA em automação?",
	  respostas: [
		"Controle de tráfego.",
		"Monitoramento e Controle de Processos Industriais.",
		"Sistemas de pagamento automático."
	  ],
	  correta: 1
	},
	{
	  pergunta: ".Qual software da Rockwell é usado para programar controladores lógicos programáveis (CLPs)?",
	  respostas: [
		"FactoryTalk View.",
		"Studio 5000 Logix Designer.",
		"PanelView Plus."
	  ],
	  correta: 1
	},
	{
	  pergunta: ".O que significa o termo Indústria 4.0?",
	  respostas: [
		"A quarta revolução industrial, caracterizada pela digitalização e integração de processos industriais.",
		"A quarta geração de robôs industriais.",
		"O quarto estágio de automação em fábricas."
	  ],
	  correta: 0
	},
	{
	  pergunta: ".O que causa major fault na CPU do PLC",
	  respostas: [
		"Número negativo no preset do timer.",
		"AFI.",
		"JSR."
	  ],
	  correta: 0
	},
	{
	  pergunta: ".Qual o protocolo utilizado para identificar e lozalizar dispositivos em uma rede",
	  respostas: [
		"IPv4.",
		"RJ45.",
		"Slot."
	  ],
	  correta: 0
	},
	{
	  pergunta: ".Como os contatos normalmente abertos são representados em Ladder Logic?",
	  respostas: [
		"∣−∣.",
		"−∣∣−.",
		"∙−∙."
	  ],
	  correta: 1
	},
	{
	  pergunta: ".O que é uma bobina em um programa Ladder Logic?",
	  respostas: [
		"Um tipo de sensor magnético.",
		"Uma saída que pode ser ativada.",
		"Uma representação gráfica de um motor elétrico."
	  ],
	  correta: 1
	},
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
	const quizItem = template.content.cloneNode(true)
	quizItem.querySelector('h3').textContent = item.pergunta
  
	for (let resposta of item.respostas) {
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
  
		mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
	  }
	  quizItem.querySelector('dl').appendChild(dt)
	}
    
	quizItem.querySelector('dl dt').remove()
    
	// coloca a pergunta na tela
	quiz.appendChild(quizItem)
  }