$(document).ready(function () {

    var computerGuess = Math.floor(Math.random() * 102) + 19;

    $("#randomNumber").html(computerGuess);
    console.log(computerGuess)
    // display randomNumber

    // create on click event and assign values to crystal images

    var crystal1 = Math.floor(Math.random() * 12) + 1;
    $("#crystal1").html("<img width= 200px src=" + "assets/images/crystal1.jpg" + " value=" + crystal1 + ">");
    console.log(crystal1);

    var crystal2 = Math.floor(Math.random() * 12) + 1;
    $("#crystal2").html("<img width= 200px src=" + "assets/images/crystal2.jpg" + " value=" + crystal2 + ">");
    console.log(crystal2);

    var crystal3 = Math.floor(Math.random() * 12) + 1;
    $("#crystal3").html("<img width= 200px src=" + "assets/images/crystal3.jpg" + " value=" + crystal3 + ">");
    console.log(crystal3);

    var crystal4 = Math.floor(Math.random() * 12) + 1;
    $("#crystal4").html("<img width= 200px src=" + "assets/images/crystal4.jpg" + " value=" + crystal4 + ">");
    console.log(crystal4);

    $("#crystal1").on ("click", function (){
      console.log(crystal1);  
    })
    $("#crystal2").on ("click", function (){
        console.log(crystal2);  
      })
      $("#crystal3").on ("click", function (){
        console.log(crystal3);  
      })
      $("#crystal4").on ("click", function (){
        console.log(crystal4);  
      })
})


// If statement - If total value is less than randomNumber, game continues

// Create Win total nmber

// Create loss total number

// If player value equals randomNumber, add to Win total and clear

// If player total is greater than randomNumber end game, add to losses and clear



