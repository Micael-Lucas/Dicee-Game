var ale_um = Math.floor(Math.random()* 6) + 1;
var ale_dois = Math.floor(Math.random()* 6) + 1;
var vencedor = document.getElementById("MUDA");

function define_vencedor(ale_um, ale_dois){
  if (ale_um > ale_dois){
    return vencedor.innerHTML = "Jogador 1 Venceu";
  }
  else if (ale_dois > ale_um) {
    return vencedor.innerHTML = "Jogador 2 Venceu";
  }
  else {
    return vencedor.innerHTML = "Empate";
  }
  return;
}

define_vencedor(ale_um,ale_dois);

var imagem_um;
var imagem_dois;

function mostra_dado_um(ale_um){
  if (ale_um === 1){
  imagem_um = document.getElementById("img1");
  imagem_um.setAttribute("src", "images/dice1.png");
  }

  else if (ale_um === 2){return document.getElementById("img1").setAttribute("src", "images/dice2.png");}
  else if (ale_um === 3){return document.getElementById("img1").setAttribute("src", "images/dice3.png");}
  else if (ale_um === 4){return document.getElementById("img1").setAttribute("src", "images/dice4.png");}
  else if (ale_um === 5){return document.getElementById("img1").setAttribute("src", "images/dice5.png");}
  else {return document.getElementById("img1").setAttribute("src", "images/dice6.png");}
}

function mostra_dado_dois(ale_um){
  if (ale_dois === 1){return document.getElementById("img2").src = "images/dice1.png";}
  else if (ale_dois === 2){return document.getElementById("img2").src = "images/dice2.png";}
  else if (ale_dois === 3){return document.getElementById("img2").src = "images/dice3.png";}
  else if (ale_dois === 4){return document.getElementById("img2").src = "images/dice4.png";}
  else if (ale_dois === 5){return document.getElementById("img2").src = "images/dice5.png";}
  else {return document.getElementById("img2").src = "images/dice6.png";}
}

mostra_dado_um(ale_um);
mostra_dado_dois(ale_dois);
