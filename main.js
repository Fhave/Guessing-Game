var userName = prompt('Username: ');
console.log("Hello User, " + userName+"\n");

let level = 1;
let score = 0;

function guess(range) {
  console.log("Stage " + level)
  var random = Math.floor(Math.random() *     (parseInt(range+1))) + 1;
  
  var number = parseInt(prompt('Guess a number from 1 to '+(range+1)+': '));
  
  if(number==random){
    console.log("Correct")
    range += 1;
    level += 1;
    score += 5;
    console.log("Score: " +score+"\n")
    guess(range)
  }else{
    console.log("Wrong");
    console.log("The guessed number is " +random);
    var finalScore = score;
    console.log("\n"+"Your Final Score: "+finalScore);
  }
}

guess(1);
