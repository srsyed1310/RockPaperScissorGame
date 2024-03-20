const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const ResultDisplay = document.getElementById('result');

const submitBtn = document.querySelectorAll('button');

let userChoice;
let ComputerChoice;
let Result;

submitBtn.forEach(submitBtn => submitBtn.addEventListener('click', (e)=>{
    userChoice = e.target.id;

    UserChoiceDisplay.innerHTML = userChoice;

    generatedNumber();
    getResult();

}));


// Get Computer Choice with Random Numbers


function generatedNumber() {

    const random = Math.floor(Math.random() * 3) + 1;


    if (random === 1) {
        ComputerChoice = 'Stone'
    }
    if (random === 2) {
        ComputerChoice = 'Paper'
    }
    if (random === 3) {
        ComputerChoice = 'Scissor'
    }

    ComputerChoiceDisplay.innerHTML = ComputerChoice;
}



//  Generated the Result


function getResult() {

    if (userChoice === ComputerChoice) {
        Result = 'Its a Draw 😌😌';
    }

    if(userChoice === 'Stone' && ComputerChoice === 'Paper'){
        Result = 'You lose 😭😭';
    }

    if(userChoice === 'Stone' && ComputerChoice === 'Scissor'){
        Result = 'You Win 🥳🥳';
    }

    if(userChoice === 'Paper' && ComputerChoice === 'Scissor'){
        Result = 'You lose 😭😭';
    }
    if(userChoice === 'Paper' && ComputerChoice === 'Stone'){
        Result = 'You Win 🥳🥳';
    }
    if(userChoice === 'Scissor' && ComputerChoice === 'Paper'){
        Result = 'You Win 🥳🥳';
    }
    if(userChoice === 'Scissor' && ComputerChoice === 'Stone'){
        Result = 'You lose 😭😭';
    }

    ResultDisplay.innerHTML = Result;

}
