let time = 59;
var countDownElement = document.getElementById('countDown')

let highh3 = document.getElementById('highH3')


//LOST GAMES
let countLostGames = 0;
const lostGames = document.querySelectorAll('.lostGames');





gameFinishedWon = false
gameFinishedLost = false
var highscore = localStorage.getItem('highscore') || 0;
highh3.innerText = 'High score: ' + highscore

const goBack = document.getElementById('goBack')
goBack.addEventListener('click', goBackFunc)
function goBackFunc(){
    readRules.classList.add('hidden')
    rulesDiv.classList.remove('hidden')
}

const rulesDiv = document.getElementById('rulesDiv')
const button = document.getElementById('firstButton')
const rules = document.getElementById('rulesButton')
const readRules = document.getElementById('readRules')
rules.addEventListener('click', rulesFunc)
function rulesFunc(){
    readRules.classList.remove('hidden')
    startH2.classList.remove('hidden')
    rulesDiv.classList.add('hidden')
}

button.addEventListener('click', allFunc)
button.addEventListener('click', hideTab)

const redoButton = document.getElementById('redo')
redoButton.addEventListener('click', redo)
function redo(){
    window.location.href = 'index.html'
}
const retryButton = document.getElementById('retry')
retryButton.addEventListener('click', retry)
function retry(){
    window.location.href = 'index.html'
}


const h1 = document.querySelector('h1')
const startCoolGame = document.getElementById('coolGame')
const startH2 = document.getElementById('startH2')
const rulesText = document.getElementById('rulesText')
const coolGame = document.getElementById('coolGame')


//DIVS
const allDivs = document.querySelectorAll('div')

const firstDiv = document.getElementById('firstEquat')
const secondDiv = document.getElementById('secondEquat')
const thirdDiv = document.getElementById('thirdEquat')
const fourthDiv = document.getElementById('fourthEquat')
const fifthDiv = document.getElementById('fifthEquat')
const sixthDiv = document.getElementById('sixthEquat')
const seventhDiv = document.getElementById('seventhEquat')
const eighthDiv = document.getElementById('eighthEquat')
const ninthDiv = document.getElementById('ninthEquat')
const tenthDiv = document.getElementById('tenthEquat')

const youWonDiv = document.getElementById('winningDiv')
const youLostDiv = document.getElementById('losingDiv')
//BUTTONS
const firstButton = document.getElementById('firstEquatButton')
const secondButton = document.getElementById('secondEquatButton')
const thirdButton = document.getElementById('thirdEquatButton')
const fourthButton = document.getElementById('fourthEquatButton')
const fifthButton = document.getElementById('fifthEquatbutton')
const sixthButton = document.getElementById('sixthEquatButton')
const seventhButton = document.getElementById('seventhEquatButton')
const eighthButton = document.getElementById('eighthEquatButton')
const ninthButton = document.getElementById('ninthEquatButton')
const tenthButton = document.getElementById('tenthEquatButton')

//INPUTS
const firstInput = document.getElementById('firstInput')

//COUNTDOWN FUNCTION
function allFunc(){
 interval = setInterval(updateTime, 1000)
}

 function updateTime(){
    
    
    const minutes = 0
    
    countDownElement.innerHTML = minutes+":"+time
    time--;

    time = time < 0 ? 0 : time; 
    if(time < 10){
        time = '0'+time
    }

    if(time === 0){
        clearInterval(interval)
    }

    //LOST

    if(time + 1 <= 0){
        gameFinishedLost = true;
        gameFinishedWon = false;
        const allDivs = document.querySelectorAll('div')
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.add('hidden');
          }
        losingDiv.classList.remove('hidden')
    }


    }



//START

async function hideTab(){

    button.classList.add('hidden')
    firstDiv.classList.remove('hidden')
    rulesDiv.classList.add('hidden')
    highh3.classList.remove('hidden')
    
}

//FIRST

function updateLostGames(){lostGames.forEach(element => {
    element.textContent  = "Wrong Anwers: " + countLostGames;
    if (countLostGames === 3) {
        allDivs.forEach(element => {
          element.classList.add('hidden');
        });
        losingDiv.classList.remove('hidden');
        clearInterval(interval)
      }
  })};


var inputFirstElement = document.getElementById("firstInput");

firstButton.addEventListener('click', () => {
    var value = inputFirstElement.value;
    if (parseInt(value) === 10) {
        hideFirst();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});

function hideFirst(){
    firstDiv.classList.add('hidden')
    secondDiv.classList.remove('hidden')
}
function toButtonFirst(){
    firstButton.addEventListener('click', () => {
    var value = inputFirstElement.value;
    if (parseInt(value) === 10) {
        hideFirst();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}


//SECOND

var inputSecondElement = document.getElementById("secondInput");
secondButton.addEventListener('click', () => {
    var value = inputSecondElement.value;
    if (parseInt(value) === 21) {
        hideSecond();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});

function hideSecond(){
    secondDiv.classList.add('hidden')
    thirdDiv.classList.remove('hidden')
}
function toButtonSecond(){
    secondButton.addEventListener('click', () => {
    var value = inputSecondElement.value;
    if (parseInt(value) === 21) {
        hideSecond();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}



//THIRD

var inputThirdElement = document.getElementById("thirdInput");
thirdButton.addEventListener('click', () => {
    var value = inputThirdElement.value;
    if (parseInt(value) === 8) {
        hideThird();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});


function hideThird(){
    thirdDiv.classList.add('hidden')
    fourthDiv.classList.remove('hidden')
}
function toButtonThird(){
    thirdButton.addEventListener('click', () => {
    var value = inputThirdElement.value;
    if (parseInt(value) === 8) {
        hideThird();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}



//FOURTH

var inputFourthElement = document.getElementById("fourthInput");
fourthButton.addEventListener('click', () => {
    var value = inputFourthElement.value;
    if (parseInt(value) === 32) {
        hideFourth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});


function hideFourth(){
    fourthDiv.classList.add('hidden')
    fifthDiv.classList.remove('hidden')
}
function toButtonFourth(){
    fourthButton.addEventListener('click', () => {
    var value = inputFourthElement.value;
    if (parseInt(value) === 32) {
        hideFourth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}



//FIFTH

var inputFifthElement = document.getElementById("fifthInput");
fifthButton.addEventListener('click', () => {
    var value = inputFifthElement.value;
    if (parseInt(value) === 13) {
        hideFifth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
function hideFifth(){
    fifthDiv.classList.add('hidden')
    sixthDiv.classList.remove('hidden')
}
function toButtonFifth(){
    fifthButton.addEventListener('click', () => {
    var value = inputFifthElement.value;
    if (parseInt(value) === 13) {
        hideFifth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}



//SIXTH
var inputSixthElement = document.getElementById("sixthInput");

sixthButton.addEventListener('click', () => {
    var value = inputSixthElement.value;
    if (parseInt(value) === 1765) {
        hideSixth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});

function hideSixth(){
    sixthDiv.classList.add('hidden')
    seventhDiv.classList.remove('hidden')
}
function toButtonSixth(){
    sixthButton.addEventListener('click', () => {
    var value = inputSixthElement.value;
    if (parseInt(value) === 1765) {
        hideSixth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}




//SEVENTH
var inputSeventhElement = document.getElementById("seventhInput");

seventhButton.addEventListener('click', () => {
    var value = inputSeventhElement.value;
    if (parseInt(value) === 2) {
        hideSeventh();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});

function hideSeventh(){
    seventhDiv.classList.add('hidden')
    eighthDiv.classList.remove('hidden')
}
function toButtonSeventh(){
    seventhButton.addEventListener('click', () => {
    var value = inputSeventhElement.value;
    if (parseInt(value) === 2) {
        hideSeventh();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}



//EIGHTH

var inputEighthElement = document.getElementById("eighthInput");
eighthButton.addEventListener('click', () => {
    var value = inputEighthElement.value;
    if (parseInt(value) === 141) {
        hideEighth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
function hideEighth(){
    eighthDiv.classList.add('hidden')
    ninthDiv.classList.remove('hidden')
}
function toButtonEighth(){
   eighthButton.addEventListener('click', () => {
    var value = inputEighthElement.value;
    if (parseInt(value) === 141) {
        hideEighth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}



//NINTH

var inputNinthElement = document.getElementById("ninthInput");
ninthButton.addEventListener('click', () => {
    var value = inputNinthElement.value;
    if (parseInt(value) === 10) {
        hideNinth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});

function hideNinth(){
    ninthDiv.classList.add('hidden')
    tenthDiv.classList.remove('hidden')
}
function toButtonNinth(){
    var value = inputNinthElement.value;
    if (parseInt(value) === 10) {
        hideNinth();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
}


//TENTH

var inputTenthElement = document.getElementById("tenthInput");
tenthButton.addEventListener('click', () =>{
    var value = inputTenthElement.value;
    if (parseInt(value) === 78) {
        hideLast();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});


function hideLast(){
    tenthDiv.classList.add('hidden')
    youWonDiv.classList.remove('hidden')
    var remainingTime = time
    if(remainingTime > 0){
        gameFinishedWon = true
        console.log(gameFinishedWon)
        clearInterval(interval)
        document.body.classList.add('winningBody')
        if (remainingTime > highscore) {
            highscore = remainingTime + 1;
            localStorage.setItem('highscore', highscore);
            console.log('New Highscore:', highscore);
    }else{
        console.log(highscore);
        highh3.innerText = highscore
    }
    }
    function toButtonTenth(){
    tenthButton.addEventListener('click', () =>{
    var value = inputTenthElement.value;
    if (parseInt(value) === 78) {
        hideLast();
    } else if (value !== '') {
        countLostGames++;
        updateLostGames();
    }
});
}

}
//ENTER LISTENERS

var allInputs = document.getElementsByClassName('equats')
console.log(allInputs)

allInputs[0].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputFirstElement.value;
        if (parseInt(value) === 10) {
            hideFirst();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[1].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputSecondElement.value;
        if (parseInt(value) === 21) {
            hideSecond();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[2].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputThirdElement.value;
        if (parseInt(value) === 8) {
            hideThird();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[3].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputFourthElement.value;
        if (parseInt(value) === 32) {
            hideFourth();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[4].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputFifthElement.value;
        if (parseInt(value) === 13) {
            hideFifth();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[5].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputSixthElement.value;
        if (parseInt(value) === 1765) {
            hideSixth();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[6].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputSeventhElement.value;
        if (parseInt(value) === 2) {
            hideSeventh();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[7].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputEighthElement.value;
        if (parseInt(value) === 141) {
            hideEighth();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[8].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputNinthElement.value;
        if (parseInt(value) === 10) {
            hideNinth();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});

allInputs[9].addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        var value = inputTenthElement.value;
        if (parseInt(value) === 78) {
            hideTenth();
        } else if (value !== '') {
            countLostGames++;
            updateLostGames();
        }
    }
});



