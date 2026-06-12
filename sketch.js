let perguntas = [
  {
    pergunta: "Qual prática ajuda a manter a saúde do solo?",
    opcoes: ["Monocultura", "Rotação de culturas", "Queimadas", "Uso excessivo de agrotóxicos"],
    resposta: 1 // índice da resposta correta
  },
  {
    pergunta: "O que é agricultura de precisão?",
    opcoes: ["Uso de tecnologia para otimizar recursos", "Plantio manual", "Uso de sementes transgênicas", "Desmatamento controlado"],
    resposta: 0
  },
  // Adicione mais perguntas aqui
];

let indiceAtual = 0;
let pontuacao = 0;
let respostaSelecionada = -1;
let feedback = '';

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER);
}

function draw() {
  background(240);
  if (indiceAtual < perguntas.length) {
    let p = perguntas[indiceAtual];

    // Pergunta
    textSize(24);
    fill(0);
    text(p.pergunta, width/2, 100);

    // Opções
    textSize(18);
    for (let i = 0; i < p.opcoes.length; i++) {
      let cor = (respostaSelecionada == i) ? (i == p.resposta ? '#8F8' : '#F88') : '#DDD';
      fill(cor);
      rect(width/2 - 150, 150 + i*60, 300, 50, 10);
      fill(0);
      text(`(${String.fromCharCode(65+i)}) ${p.opcoes[i]}`, width/2, 180 + i*60);
    }

    // Feedback
    textSize(20);
    fill(0);
    text(feedback, width/2, 450);

  } else {
    // Fim do jogo
    textSize(32);
    fill(0);
    text("Fim do Quiz!", width/2, 200);
    text(`Sua pontuação: ${pontuacao}/${perguntas.length}`, width/2, 260);
    text("Clique para jogar de novo", width/2, 320);
  }
}

function mousePressed() {
  if (indiceAtual < perguntas.length) {
    let p = perguntas[indiceAtual];
    for (let i = 0; i < p.opcoes.length; i++) {
      if (mouseX > width/2 - 150 && mouseX < width/2 + 150 &&
          mouseY > 150 + i*60 && mouseY < 200 + i*60) {
        respostaSelecionada = i;
        if (i == p.resposta) {
          pontuacao++;
          feedback = "Correto! 🌱";
        } else {
          feedback = "Errado! Tente de novo.";
        }
        setTimeout(() => {
          indiceAtual++;
          respostaSelecionada = -1;
          feedback = '';
        }, 1500);
      }
    }
  } else {
    // Reiniciar
    indiceAtual = 0;
    pontuacao = 0;
    feedback = '';
  }
}
