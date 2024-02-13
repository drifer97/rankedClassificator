// Variáveis
let nome = "Fade";  // Substitua pelo nome do herói
let xp = 8000;  // Substitua pela quantidade de experiência do herói

// Estrutura de decisão
let nivel;
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída
console.log(`O personagem de nome ${nome} está no nível ${nivel}`);
