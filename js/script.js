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

// Knoppen met acties
const sleepElement = document.getElementById("sleep");
const feedElement = document.getElementById("feed");
const playElement = document.getElementById("play");
const restartElement = document.getElementById("restart")

// Functie om de timer te stoppen
let timerInterval;
let isSeasonsStopped = false;
const block = document.getElementById('blok');

// Functie om de timer te stoppen
function gameOver() {
    if (happiness === 0 && energy === 0) {
      clearInterval(timerInterval);
      console.log("Timer is gestopt.");
      const pet = document.getElementById("pet");
      pet.src = "img/Fox_Ded.png";
      const backgroundElement = document.querySelector(".box");
      backgroundElement.classList.add("Ded");
      backgroundElement.classList.remove(seasons[i]);
      isSeasonsStopped = true;
  
      const naamHolder = naam.textContent;
      naam.textContent = "RIP " + naamHolder;

      sleepElement.classList.add('hidden');
      feedElement.classList.add('hidden');
      playElement.classList.add('hidden');
      restartElement.classList.remove('hidden')
    }
  }
  
  function restartPage(){
    window.location.reload();
} 

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
        var sleep = new Audio("sound/sleep.mp3");
        sleep.play();
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
        var eat = new Audio("sound/eat.mp3");
        eat.play();
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
        var playing = new Audio("sound/play.mp3");
        playing.play();
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

sleepElement.addEventListener("click", sleep);
feedElement.addEventListener("click", feed);
playElement.addEventListener("click", play);
restartElement.addEventListener("click", restartPage);

// Seizoensarray voor seizoenen
const seasons = ["spring", "summer", "autumn", "winter"];

// Doorloop de verschillende seizoenen
let i = 0;
let seasonsInterval;

function startSeasonsCycle() {
  if (!isSeasonsStopped) {
    const backgroundElement = document.querySelector(".box");
    backgroundElement.classList.remove(seasons[i]);
    i = (i + 1) % seasons.length;
    backgroundElement.classList.add(seasons[i]);
  }
}

seasonsInterval = setInterval(startSeasonsCycle, 20000);

// Timer voor tijdsduur bijhouden
window.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var startTime = new Date().getTime();
  
    timerInterval = setInterval(updateTimer, 1000);
  
    function updateTimer() {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - startTime;
  
      var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  
      timerElement.textContent = minutes.toString().padStart(2, '0') + ':' +
                                 seconds.toString().padStart(2, '0');
  
      // Controleer of de timer moet worden gestopt
      gameOver();
      return;
    }
  });

// Zet Happiness en energy op 0
document.addEventListener("keydown", function (event) {
    if (event.key === "d") {
      happiness = 0;
      energy = 0;
      updateStats();
    }
  });

// Bronnenlijst:
// 1 Hulp van Evi
// 2 Hulp van Ruben
// 3 Hulp van Sem