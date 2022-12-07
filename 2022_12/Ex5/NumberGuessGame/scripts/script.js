// Number Guess Game JS !WIP!
var GameStarted = false;
var RandomNumber = -1;
var NumberTries = -1;

var HighScore = [];

function startGame() {
  'use strict'
  // Checks if game has been started, if not, intialize game
  if (GameStarted){
    document.getElementById("higherLower").innerHTML = "Finish this game first!";
  } else {
    document.getElementById("higherLower").innerHTML = "You have started a new game!";
    document.getElementById("StartButton").classList.toggle('btn-success');
    // Generate random number between 0 and 100
    RandomNumber = Math.floor(Math.random() * 101);
    console.log(RandomNumber);
    // Game has been started!
    GameStarted = true;
    NumberTries = 0;

    // Reset Text field:
    document.getElementById("previousEntries").value = ""
  }
}

function editForm(){
    // Fetch the single number input, and validate input:
    var forms = document.querySelectorAll('.needs-validation')
    console.log("executed")

    function customCheckValidity(foo){
      return false
    }
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('input', function (event) {
          if (!customCheckValidity(form)) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
    })
}

//document.querySelector('input').addEventListener('input', editForm);

function submitNumber() {
  'use strict'

  if (!GameStarted){
    // Game has not been started
    document.getElementById("higherLower").innerHTML = "You have to start the game first!";
  } else {
    // Game has been started, all other logic here:
    document.getElementById("higherLower").innerHTML = "";
 


    // actually get the submitted value:
    let numberSubmitted = parseInt(document.querySelector('input').value);

    // check if valid and post to previous entries text field
    if (typeof numberSubmitted==='number' && 0 <= numberSubmitted && numberSubmitted <= 100){
      // valid try:
      NumberTries += 1;

      // Check if WIN:
      if (numberSubmitted == RandomNumber){
        alert("You did it! \r\n You guessed the number in " + NumberTries + " tries")

        document.getElementById("previousEntries").value += "#" + NumberTries + " - " + numberSubmitted + " - is correct! \r\n";
        
        //Log output for highscore
        HighScore.push("<br> Guessed in " + NumberTries + " tries. Random number was " + numberSubmitted );
      
        HighScore.sort()
        document.getElementById("highscoreModalContent").innerHTML = HighScore

        document.getElementById("higherLower").innerHTML = "You can start a new game!";
        document.getElementById("StartButton").classList.toggle('btn-success');
        // Reset Random Number
        RandomNumber = -1;
        // Game is ended! reset number of tries
        GameStarted = false;
        NumberTries = -1;

      } else {
        //ELSE: check higher/lower and log
        //increment number of tries
        let HighLow = "";
        if (numberSubmitted>RandomNumber){
          HighLow = "higher"
        } else {
          HighLow = "lower"
        }

        document.getElementById("previousEntries").value += "#" + NumberTries + " - " + numberSubmitted + " - is " + HighLow+ " than random number\r\n";
      }
    } else {
      document.getElementById("previousEntries").value += "invalid entry" + "\r\n";
    }


  }
}

