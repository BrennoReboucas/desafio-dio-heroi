let expHero = 6320;
let nameHero = "Brenno";
let rankHero;

if(expHero < 1000) {
    rankHero = "Ferro"
} else if(expHero > 1000 && expHero <= 2000){
    rankHero = "Bronze"
} else if(expHero > 2000 && expHero <= 3000){
    rankHero = "Prata"
} else if(expHero > 4000 && expHero <= 5000){
    rankHero = "Ouro"
} else if(expHero > 5000 && expHero <= 6000){
    rankHero = "Platina"
} else if(expHero > 6000 && expHero <= 7000){
    rankHero = "Diamante"
} else if(expHero > 7000 && expHero <= 8000){
    rankHero = "Mestre"
} else if(expHero > 8000 && expHero <= 9000){
    rankHero = "Grão-mestre"
} else{
    rankHero = "Desafiante"
}

console.log("O Herói de nome " + nameHero + " está no elo " + rankHero + "!")