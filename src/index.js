// Variável para armazenar o nome do herói
var nome = "Felipeira";

// Variável para armazenar a quantidade de XP do herói
var xp = 8000;

// Variável para armazenar o nível do herói
var nivel;

// Estrutura de decisão para atribuir o nível do herói de acordo com o XP
if (xp < 1000) {
  nivel = "Ferro"
} else if (xp >= 1000 && xp <= 2000) {
  nivel = "Bronze"
} else if (xp > 2000 && xp <= 5000) {
  nivel = "Prata"
} else if (xp > 5000 && xp <= 7000) {
  nivel = "Ouro"
} else if (xp > 7000 && xp <= 8000) {
  nivel = "Platina"
} else if (xp > 8000 && xp <= 9000) {
  nivel = "Ascendente"
} else if (xp > 9000 && xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante"
}

// Mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nome + " está no nível de " + nivel);