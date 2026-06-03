const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const perguntas = [
  {
    pergunta: "O que é agricultura sustentável?",
    respostas: [
      "Produzir sem pensar no meio ambiente",
      "Produzir alimentos preservando recursos naturais",
      "Usar apenas máquinas grandes",
      "Plantar sempre a mesma cultura"
    ],
    correta: 1
  },
  {
    pergunta: "Como a tecnologia ajuda no campo?",
    respostas: [
      "Dificultando o trabalho rural",
      "Aumentando desperdícios",
      "Monitorando dados e melhorando decisões",
      "Substituindo totalmente o agricultor"
    ],
    correta: 2
  },
  {
    pergunta: "O que sensores agrícolas podem medir?",
    respostas: [
      "Umidade do solo e temperatura",
      "Apenas velocidade da internet",
      "Somente preço dos alimentos",
      "Apenas tamanho das cidades"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é uma vantagem da IA no agronegócio?",
    respostas: [
      "Ignorar problemas da lavoura",
      "Prever riscos e analisar dados",
      "Eliminar a necessidade de estudar",
      "Aumentar o desperdício"
    ],
    correta: 1
  },
  {
    pergunta: "Por que campo e cidade estão conectados?",
    respostas: [
      "Porque a cidade não depende do campo",
      "Porque o alimento produzido no campo chega à cidade",
      "Porque só existe tecnologia na cidade",
      "Porque o campo não usa inovação"
    ],
    correta: 1
  },
  {
    pergunta: "Qual atitude ajuda na sustentabilidade?",
    respostas: [
      "Desperdiçar água",
      "Descartar lixo em rios",
      "Preservar o solo e usar água com consciência",
      "Queimar áreas verdes sem controle"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a ideia principal do projeto?",
    respostas: [
      "Separar tecnologia e agricultura",
      "Mostrar que o agro pode ser moderno e sustentável",
      "Falar apenas de máquinas",
      "Mostrar que a cidade é mais importante"
    ],
    correta: 1
  }
];

let indice = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const resultadoEl = document.getElementById("resultado");
const reiniciarBtn = document.getElementById("reiniciar");

function carregarPergunta() {
  resultadoEl.textContent = "";
  respostasEl.innerHTML = "";

  const atual = perguntas[indice];
  perguntaEl.textContent = atual.pergunta;

  atual.respostas.forEach((resposta, i) => {
    const botao = document.createElement("button");
    botao.classList.add("answer");
    botao.textContent = resposta;

    botao.addEventListener("click", () => verificarResposta(i));

    respostasEl.appendChild(botao);
  });
}

function verificarResposta(respostaSelecionada) {
  const correta = perguntas[indice].correta;

  if (respostaSelecionada === correta) {
    pontos++;
    resultadoEl.textContent = "✅ Resposta correta!";
  } else {
    resultadoEl.textContent = "❌ Resposta incorreta.";
  }

  setTimeout(() => {
    indice++;

    if (indice < perguntas.length) {
      carregarPergunta();
    } else {
      finalizarQuiz();
    }
  }, 1000);
}

function finalizarQuiz() {
  perguntaEl.textContent = "Obrigado por participar do quiz!";
  respostasEl.innerHTML = "";
  resultadoEl.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
  reiniciarBtn.classList.remove("hide");
}

reiniciarBtn.addEventListener("click", () => {
  indice = 0;
  pontos = 0;
  reiniciarBtn.classList.add("hide");
  carregarPergunta();
});

carregarPergunta();