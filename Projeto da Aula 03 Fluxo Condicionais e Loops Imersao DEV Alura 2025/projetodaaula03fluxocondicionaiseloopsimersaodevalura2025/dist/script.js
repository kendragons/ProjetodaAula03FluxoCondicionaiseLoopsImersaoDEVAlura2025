fase = 1;

// Lista com as descrições das fases
descricoesDasFases = [
  "1 Capitalismo Tardio – Escolha uma ação para iniciar o colapso do sistema.",
  "2️ Crise e Colapso do Capitalismo – A crise se aprofunda! Hora de agir estrategicamente.",
  "3️ Tomada dos Meios de Produção – Os trabalhadores assumem o controle das fábricas e terras!",
  "4️ Luta de Classes – A burguesia reage! Resista e mantenha o controle do Estado.",
  "5️ Construção do Socialismo – Organizando a economia e sociedade para a nova era.",
  "6️ Consolidação da Sociedade Comunista – Abolição do Estado e transição para a autossuficiência."
];

while (fase <= 6) {
  console.log("Fase: " + fase);
  
  // Mostra a descrição correspondente à fase atual
  alert(descricoesDasFases[fase - 1]);

  escolhaJogador = prompt("Fase " + fase + ": Escolha uma estratégia (1, 2 ou 3)?");
  sabotadorBurguês = Math.floor(Math.random() * 3) + 1;

  if (escolhaJogador == sabotadorBurguês) {
    alert("A burguesia reagiu e reprimiu o movimento! A revolução fracassou...");
    fase = 1000; // Encerra o loop
  } else {
    alert("Avançamos na revolução! A estratégia sabotada foi: " + sabotadorBurguês);
  }

  fase = fase + 1;
}

// Se chegou até aqui, venceu!
if (fase == 7) {
  alert("Parabéns! A revolução triunfou! A sociedade agora é autossustentável, justa e livre de exploração! 🚩✨");
}