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

const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const baseConhecimento = [
  {
    termos: ["agricultura sustentável", "sustentabilidade", "sustentavel"],
    resposta: "A agricultura sustentável busca produzir alimentos preservando o solo, a água, a biodiversidade e reduzindo desperdícios. Ela une produtividade com responsabilidade ambiental."
  },
  {
    termos: ["sensor", "sensores", "umidade", "temperatura", "solo"],
    resposta: "Sensores agrícolas ajudam a medir umidade do solo, temperatura, luminosidade e outras condições da lavoura. Com esses dados, o agricultor pode irrigar melhor e evitar desperdício."
  },
  {
    termos: ["irrigação", "irrigacao", "água", "agua"],
    resposta: "A irrigação inteligente usa sensores e automação para liberar água apenas quando necessário. Isso economiza recursos naturais e melhora o desenvolvimento das plantas."
  },
  {
    termos: ["drone", "drones"],
    resposta: "Drones no campo podem mapear plantações, identificar falhas, monitorar pragas, acompanhar o crescimento das culturas e ajudar na aplicação precisa de insumos."
  },
  {
    termos: ["ia", "inteligência artificial", "inteligencia artificial"],
    resposta: "A Inteligência Artificial no agro pode analisar dados, prever clima, identificar doenças nas plantas, estimar produtividade e ajudar o produtor a tomar decisões mais rápidas."
  },
  {
    termos: ["automação", "automacao", "arduino", "robótica", "robotica"],
    resposta: "A automação no campo permite controlar irrigação, iluminação, motores, sensores e máquinas. Com Arduino e robótica, é possível criar protótipos de baixo custo para resolver problemas reais."
  },
  {
    termos: ["campo e cidade", "cidade", "campo"],
    resposta: "Campo e cidade estão conectados porque o campo produz alimentos e matérias-primas, enquanto a cidade oferece tecnologia, pesquisa, transporte, comércio e consumo."
  },
  {
    termos: ["preservação do solo", "erosão", "erosao", "plantio direto"],
    resposta: "Preservar o solo é essencial para manter a fertilidade. Algumas práticas importantes são rotação de culturas, plantio direto, cobertura vegetal e uso consciente de máquinas."
  },
  {
    termos: ["praga", "pragas", "doença", "doenca"],
    resposta: "A tecnologia ajuda no controle de pragas por meio de imagens, sensores, drones e IA. Isso permite agir mais rápido e reduzir o uso excessivo de defensivos."
  },
  {
    termos: ["agricultura de precisão", "precisão", "precisao"],
    resposta: "A agricultura de precisão usa dados, GPS, sensores, máquinas e softwares para aplicar água, fertilizantes e defensivos na quantidade correta e no local certo."
  },
  {
    termos: ["gps", "satélite", "satelite"],
    resposta: "GPS e satélites ajudam no mapeamento das áreas agrícolas, monitoramento da lavoura, previsão climática e orientação de máquinas no campo."
  },
  {
    termos: ["clima", "previsão", "previsao", "chuva"],
    resposta: "A previsão do clima é muito importante para o agricultor planejar o plantio, a colheita, a irrigação e a aplicação de defensivos."
  },
  {
    termos: ["estufa", "horta", "horta inteligente"],
    resposta: "Uma horta ou estufa inteligente pode usar sensores de umidade, luminosidade e temperatura para controlar irrigação e melhorar o crescimento das plantas."
  },
  {
    termos: ["energia solar", "solar", "energia"],
    resposta: "A energia solar pode ser usada no campo para alimentar bombas de irrigação, sensores, sistemas de automação e reduzir custos com eletricidade."
  },
  {
    termos: ["agroecologia", "orgânico", "organico"],
    resposta: "A agroecologia valoriza práticas agrícolas que respeitam o meio ambiente, reduzem o uso de produtos químicos e fortalecem a produção local."
  },
  {
    termos: ["adubo", "fertilizante", "compostagem"],
    resposta: "Adubos e fertilizantes ajudam no crescimento das plantas. A compostagem é uma alternativa sustentável que transforma restos orgânicos em nutrientes para o solo."
  },
  {
    termos: ["internet das coisas", "iot"],
    resposta: "A Internet das Coisas, ou IoT, conecta sensores, máquinas e sistemas pela internet. No campo, ela permite monitorar dados em tempo real."
  },
  {
    termos: ["5g", "internet rural", "conectividade"],
    resposta: "A conectividade no campo permite usar sensores, drones, máquinas inteligentes, aplicativos e sistemas de monitoramento remoto."
  },
  {
    termos: ["produtividade", "produção", "producao"],
    resposta: "A produtividade agrícola melhora quando o produtor usa boas práticas, tecnologia, manejo correto do solo, irrigação eficiente e planejamento."
  },
  {
    termos: ["agrinho"],
    resposta: "O Agrinho incentiva projetos educativos sobre cidadania, sustentabilidade, meio ambiente, tecnologia e transformação social."
  }
];

function adicionarMensagem(texto, tipo) {
  const div = document.createElement("div");
  div.className = tipo === "user" ? "user-message" : "bot-message";
  div.innerHTML = texto;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function responderIA(pergunta) {
  const perguntaMinuscula = pergunta.toLowerCase();

  const itemEncontrado = baseConhecimento.find(item =>
    item.termos.some(termo => perguntaMinuscula.includes(termo))
  );

  if (itemEncontrado) {
    return itemEncontrado.resposta;
  }

  const buscaGoogle = `https://www.google.com/search?q=${encodeURIComponent(pergunta + " agro tecnologia campo sustentabilidade agricultura")}`;

  return `
    Ainda não tenho uma resposta completa sobre isso no meu banco de conhecimento.
    <br><br>
    Mas você pode consultar uma pesquisa no Google:
    <br><br>
    <a href="${buscaGoogle}" target="_blank" class="google-link">🔎 Pesquisar no Google</a>
  `;
}

function enviarPergunta() {
  const pergunta = userInput.value.trim();

  if (pergunta === "") return;

  adicionarMensagem(pergunta, "user");

  setTimeout(() => {
    const resposta = responderIA(pergunta);
    adicionarMensagem(resposta, "bot");
  }, 500);

  userInput.value = "";
}

sendBtn.addEventListener("click", enviarPergunta);

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enviarPergunta();
  }
});