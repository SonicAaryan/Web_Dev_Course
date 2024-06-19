let adjectives;
let randomNumber = Math.random() * 10;

if (randomNumber > 0.33) {
    adjectives = "Crazy";
} else if (randomNumber >= 0.33 && randomNumber < 0.66) {
    adjectives = "Amazing";
} else {
    adjectives = "Fire";
}

let shopName;

if (randomNumber > 0.33) {
    shopName = "Engine";
} else if (randomNumber >= 0.33 && randomNumber < 0.66) {
    shopName = "Foods";
} else {
    shopName = "Garments";
}

let company;

if (randomNumber > 0.33) {
    company = "Bros";
} else if (randomNumber >= 0.33 && randomNumber < 0.66) {
    company = "Limited";
} else {
    company = "Hub";
}
let randomName = adjectives + shopName + company
console.log(randomName); 