// Number Guess Game JS !WIP!
var GameStarted = false;
var RandomNumber = -1

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
    
    GameStarted = true;
  }
}

function submitNumber() {
  'use strict'

  if (!GameStarted){
      document.getElementById("higherLower").innerHTML = "You have to start the game first!";

  } else {
    document.getElementById("higherLower").innerHTML = " ";
  }

  // Fetch the single number input, and validate input:
  var forms = document.querySelectorAll('.needs-validation')
  console.log(forms)
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
  })

  // actually get the submitted value:
  let numberSubmitted = document.querySelector('input').value;

  console.log(numberSubmitted);


  
}

