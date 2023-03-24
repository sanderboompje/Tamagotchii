// Functie om naam te veranderen
// Bron 1
var naamPet = document.querySelector('.Naampet')
var naamButton = document.querySelector('.ButtonNaam')
var naamInput = document.querySelector('.NaamInput')
var naam = document.querySelector('.Naamtekst')
var fox = document.querySelector('.pet')

naamPet.addEventListener('submit', function (naamButton) {
    naamButton.preventDefault();
    var naamHolder = naamInput.value;
    console.log(naamInput.value);
    if (naamInput.value == "") {
        naam.textContent = 'Je hebt geen naam gegeven';
        return
    } else {
        naam.textContent = naamHolder;
        naamPet.classList.add('hidden')
        fox.src = "img/fox.png"
    }
})

// Basis stats
// Bron 2
let hunger = 5;
let happiness = 50;
let energy = 50;
let isAsleep = false;

// Geupdate stats in html goed zetten
// Bron 2
function updateStats() {
    const hungerEl = document.getElementById("hunger");
    hungerEl.textContent = hunger;
    const happinessEl = document.getElementById("happiness");
    happinessEl.textContent = happiness;
    const energyEl = document.getElementById("energy");
    energyEl.textContent = energy;
}

// Slaap functie
// Bron 2
function sleep() {
    if (!isAsleep && energy < 90) {
        isAsleep = true;
        const pet = document.getElementById("pet");
        pet.src = "img/Fox_sleep.png";
        setTimeout(function sleepstats() {
            isAsleep = false;
            energy += 15;
            updateStats();
            pet.src = "img/Fox.png";
        }, 8000);
    }
}

// Eet functie

function feed() {
    if (hunger < 90 && hunger >= 10) {
        hunger -= 10;
        happiness += 10;
        energy += 10;
        const pet = document.getElementById("pet");
        pet.src = "img/Fox_eat.png";
        setTimeout(function feedstats() {
            pet.src = "img/Fox.png";
            updateStats();
        }, 6000);
    }
}

// Speel functie

function play() {
    if (energy >= 10 && hunger <= 95) {
        hunger += 5;
        happiness += 10;
        energy -= 15;
        const pet = document.getElementById("pet");
        pet.src = "img/Fox_play.png";
        setTimeout(function playstats() {
            pet.src = "img/Fox.png";
            updateStats();
        }, 6000);
    }
}

// Basis stats veranderen bij tijd

setInterval(function timeStats() {
    if (!isAsleep) {
        if (hunger >= 0 && hunger <= 100) {
            hunger += 5;
        }
        if (happiness > 0) {
            happiness -= 5;
        }
        if (energy > 0) {
            energy -= 5;
        }
        updateStats();
    }
}, 10000);
updateStats();

// Buttons met acties

var sleepElement = document.getElementById("sleep")
var feedElement = document.getElementById("feed")
var playElement = document.getElementById("play")

sleepElement.addEventListener("click", sleep)
feedElement.addEventListener("click", feed)
playElement.addEventListener("click", play)

// Seizoen array voor seizoenen

const seasons = ["spring", "summer", "autumn", "winter"];

// cycle door de verschillende seizoenen

let i = 0;

setInterval(function backgroundcycle() {
    const backgroundElement = document.querySelector(".box");
    backgroundElement.classList.remove(seasons[i]);
    i = (i + 1) % seasons.length;
    backgroundElement.classList.add(seasons[i]);
}, 20000);

// Bronenlijst

// 1 Hulp van Evi
// 2 Hulp van Ruben