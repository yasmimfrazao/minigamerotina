const telaInicial = document.getElementById('tela-inicial');
const btnComecar = document.getElementById('btn-comecar');
const jogoDiv = document.getElementById('jogo');
const texto = document.getElementById('texto');
const opcoes = document.getElementById('opcoes');

const jogo = {
  s1: {
    texto: "O alarme toca às 06:30. O dia começou...ou quase.",
    opcoes: [
      { texto: "Pular da cama imediatamente", proximo: "s2" },
      { texto: "Dormir mais 5 minutinhos", proximo: "s3" }
    ]
  },
  s2: {
    texto: "Você decide começar o dia. O que vai fazer primeiro?",
    opcoes: [
      { texto: "Tomar café da manhã", proximo: "s4" },
      { texto: "Tomar banho", proximo: "s5" }
    ]
  },
  s3: {
    texto: "Você acorda de novo e são 07:37. A alma sai do corpo por 3 segundos. Se atrasou para a Ford! Você vê 11 chamadas perdidas e 23 mensagens no grupo do zap",
    opcoes: [
      { texto: "Sem banho hoje, só fé e desodorante", proximo: "s7" },
      { texto: "Ir sem tomar café", proximo: "s6" }
    ]
  },
  s4: {
    texto: "Você comeu. Você precisa se apressar.",
    opcoes: [
      { texto: "Sair direto, confiante no desodorante", proximo: "s6" },
      { texto: "Correr pro banho", proximo: "s5" }
    ]
  },
  s5: {
    texto: "Você toma um banho rápido e se sente quase uma pessoa adulta. Quase.",
    opcoes: [
      { texto: "Vamos logo trabalhar", proximo: "s8" }
    ]
  },
  s6: {
    texto: "Você está pronto (mais ou menos). Sai correndo para a Ford.",
    opcoes: [
      { texto: "Chegar", proximo: "s8" }
    ]
  },
  s7: {
    texto: "Você tomou café, mas saiu fedendo. Vai correndo mesmo.",
    opcoes: [
      { texto: "Chegar", proximo: "s8" }
    ]
  },
  s8: {
    texto: "Chegando na Ford às 08:12 você coloca a mão no bolso... e cadê o crachá?",
    opcoes: [
      { texto: "Tentar pular a catraca ninja style", proximo: "gameover" },
      { texto: "Pedir ajuda a equipe de segurança", proximo: "s8b" }
    ]
  },
  gameover: {
    texto: `<div class="gameover-title">GAME OVER</div>
           Você tentou pular a catraca, mas houve um movimento estranho nas câmeras. RH te chama para bater um papo. Você foi demitido.`,
    opcoes: [
      { texto: "Recomeçar", proximo: "s1" }
    ]
  },
  s8b: {
    texto: "Você explica para o segurança, ele te libera com cara de quem já viu isso mil vezes. Finalmente, você entra no prédio.",
    opcoes: [
      { texto: "Ir para o meu setor", proximo: "s9" }
    ]
  },
  s9: {
    texto: "Chegando lá, seu buddy te passa uma nova demanda. Mas tem um detalhe: seu notebook trava, pisca e solta um barulhinho que você jura que foi um pedido de socorro.",
    opcoes: [
      { texto: "Levar no TechLounge para ver se tem conserto", proximo: "s9a" },
      { texto: "Ignorar e reiniciar como sempre", proximo: "s9b" }
    ]
  },
  s9a: {
    texto: "Você leva o notebook até o TechLounge. O técnico analisa, suspira fundo e diz: 'Parabéns, você ganhou um novo notebook com touchpad na tela. É seu agora.'.",
    opcoes: [
      { texto: "Agradece e volta pro setor, se exibindo", proximo: "s10" }
    ]
  },
  s9b: {
    texto: "Você tenta continuar, mas o notebook só faz você perder tempo. Parece que ele não quer colaborar hoje, e você fica ali, esperando alguma mágica acontecer.",
    opcoes: [
      { texto: "Voltar e levar no TechLounge", proximo: "s9a" },
      { texto: "Desistir e esperar o dia acabar", proximo: "s11" }
    ]
  },
  s10: {
    texto: "Você consegue entregar a atividade e ganha um parabéns do seu buddy",
    opcoes: [
      { texto: "Esperar o horário de saída", proximo: "s11" }
    ]
  },
  s11: {
    texto: "O relógio marca 12h. Você está oficialmente livre!",
    opcoes: [
      { texto: "Ir embora", proximo: "s13" }
    ]
  },
  s13: {
    texto: "Você chega em casa. A missão foi cumprida. Ótimo trabalho!",
    opcoes: [
      { texto: "FIM", proximo: "s1" }
    ]
  }
};

function mostrarCena(cenaId) {
  if (cenaId === "telaInicial") {
    telaInicial.style.display = "flex";
    jogoDiv.style.display = "none";
    texto.innerHTML = "";
    opcoes.innerHTML = "";
  } else {
    telaInicial.style.display = "none";
    jogoDiv.style.display = "block";

    const cena = jogo[cenaId];
    texto.innerHTML = cena.texto;
    opcoes.innerHTML = "";

    cena.opcoes.forEach(opcao => {
      const botao = document.createElement("button");
      botao.textContent = opcao.texto;
      botao.onclick = () => mostrarCena(opcao.proximo);
      opcoes.appendChild(botao);
    });
  }
}

btnComecar.onclick = () => {
  console.log("Clicou em começar!");
  mostrarCena("s1");
};

mostrarCena("telaInicial");
