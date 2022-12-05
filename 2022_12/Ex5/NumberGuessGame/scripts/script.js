// Number Guess Game JS !WIP!
var GameStarted = false

function startGame() {
  'use strict'

if (GameStarted){
  document.getElementById("higherLower").innerHTML = "Finish this game first!";
} else {
  document.getElementById("higherLower").innerHTML = "You have started a new game!";
}

  GameStarted = true
}

function submitNumber() {
  'use strict'

  if (!GameStarted){
      document.getElementById("higherLower").innerHTML = "You have to start the game first!";
      throw "exit";
  } else {
    document.getElementById("higherLower").innerHTML = " ";
  }
  
  let numberr = document.querySelector('input');

  console.log(numberr.value);
  console.log(numberr)
  function numberCheckValidity(e){
    if (numberr.value > 50) {
      console.log("SHITT");
      numberr.setCustomValidity("OH NO");
    }
  }

  numberr.addEventListener('submit', function (event){
    console.log(event)
    if (!numberCheckValidity(event)) {

      event.preventDefault()
      event.stopPropagation()
    }

    numberr.classList.add('was-validated')
  })


  // // Loop over them and prevent submission
  // Array.prototype.slice.call(SubmittedNumbers)
  //   .forEach(function (SubmittedNumbers) {
  //     SubmittedNumbers.addEventListener('submit', function (event) {
  //       if (!numberCheckValidity(event)) {
  //         event.preventDefault()
  //         event.stopPropagation()
  //       }

  //       SubmittedNumbers.classList.add('was-validated')
  //     }, false)
  //   })

  
}

