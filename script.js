let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
   };
   //console.log(generateTarget(2));
   
    function compareGuesses(humanGuess, computerGuess, secretTargetNumber) {
     if (humanGuess < 0 || humanGuess > 9) {
       alert('Your number is out of range!');
     }
     if (getAbsoluteDistance(humanGuess, secretTargetNumber) < getAbsoluteDistance(computerGuess, secretTargetNumber)) {
       return true;
     } else if (getAbsoluteDistance(humanGuess, secretTargetNumber) > getAbsoluteDistance(computerGuess, secretTargetNumber)) {
         return false;
     } else if (getAbsoluteDistance(humanGuess, secretTargetNumber) === getAbsoluteDistance(computerGuess, secretTargetNumber)){
       return true;
     }
   };
   
   //console.log(compareGuesses());
   function updateScore(winner) {
     if (winner === 'human') {
         humanScore += 1;
     } else {
       computerScore += 1;
     }
   };
   function advanceRound() {
     currentRoundNumber += 1;
   };
   updateScore('human');
   console.log(humanScore); // To confirm that this value increased by 1
   updateScore('computer');
   console.log(computerScore); // To confirm that this value increased by 1
   function getAbsoluteDistance(guess, target) {
     return Math.abs(target - guess);
   };
   generateTarget();
   advanceRound();