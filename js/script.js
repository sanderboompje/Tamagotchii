// Functie om de naam te wijzigen
const naamPet = document.querySelector('.Naampet');
const naamButton = document.querySelector('.ButtonNaam');
const naamInput = document.querySelector('.NaamInput');
const naam = document.querySelector('.Naamtekst');
const fox = document.querySelector('.pet');

naamPet.addEventListener('submit', function (event) {
    event.preventDefault();
    const naamHolder = naamInput.value;
    console.log(naamInput.value);
    if (naamInput.value === "") {
        naam.textContent = 'Je hebt geen naam gegeven';
        return;
    } else {
        naam.textContent = naamHolder;
        naamPet.classList.add('hidden');
        fox.src = "img/fox.png";
    }
});

// Basisstatistieken
let hunger = 5;
let happiness = 50;
let energy = 50;
let isAsleep = false;

// Update van statistieken in HTML
function updateStats() {
    const hungerEl = document.getElementById("hunger");
    hungerEl.textContent = hunger;
    const happinessEl = document.getElementById("happiness");
    happinessEl.textContent = happiness;
    const energyEl = document.getElementById("energy");
    energyEl.textContent = energy;
}

// Slaapfunctie
function sleep() {
    if (!isAsleep && energy < 90) {
        isAsleep = true;
        const pet = document.getElementById("pet");
        pet.src = "img/Fox_sleep.png";
        setTimeout(function sleepStats() {
            isAsleep = false;
            energy += 15;
            updateStats();
            pet.src = "img/Fox.png";
        }, 8000);
    }
}

// Eetfunctie
function feed() {
    if (hunger < 90 && hunger >= 10) {
        hunger -= 10;
        happiness += 10;
        energy += 10;
        const pet = document.getElementById("pet");
        pet.src = "img/Fox_eat.png";
        setTimeout(function feedStats() {
            pet.src = "img/Fox.png";
            updateStats();
        }, 6000);
    }
}

// Speelfunctie
function play() {
    if (energy >= 10 && hunger <= 95) {
        hunger += 5;
        happiness += 10;
        energy -= 15;
        const pet = document.getElementById("pet");
        pet.src = "img/Fox_play.png";
        setTimeout(function playStats() {
            pet.src = "img/Fox.png";
            updateStats();
        }, 6000);
    }
}

// Basisstatistieken veranderen met de tijd
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

// Knoppen met acties
const sleepElement = document.getElementById("sleep");
const feedElement = document.getElementById("feed");
const playElement = document.getElementById("play");

sleepElement.addEventListener("click", sleep);
feedElement.addEventListener("click", feed);
playElement.addEventListener("click", play);

// Seizoensarray voor seizoenen
const seasons = ["spring", "summer", "autumn", "winter"];

// Doorloop de verschillende seizoenen
let i = 0;
setInterval(function backgroundCycle() {
    const backgroundElement = document.querySelector(".box");
    backgroundElement.classList.remove(seasons[i]);
    i

 = (i + 1) % seasons.length;
    backgroundElement.classList.add(seasons[i]);
}, 20000);

// Timer voor tijdsduur bijhouden
window.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');

    // Pakt de starttijd als het document is geladen
    var startTime = new Date().getTime();

    setInterval(updateTimer, 1000);

    function updateTimer() {
        // Pakt de huidige tijd
        var currentTime = new Date().getTime();
        // Rekent de afgelopen tijd af
        var elapsedTime = currentTime - startTime;

        // Rekent uren, minuten en secondes uit
        var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Formateer de tijd
        timerElement.textContent =  minutes.toString().padStart(2, '0') + ':' +
                                    seconds.toString().padStart(2, '0');
    }
});

// Bronnenlijst:
// 1 Hulp van Evi
// 2 Hulp van Ruben
// 3 Hulp van Sem