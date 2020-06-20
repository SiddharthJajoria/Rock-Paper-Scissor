//general
const resetBtn = document.querySelector('.reset');
const throwBtn = document.querySelector('.throw');
const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const score = document.querySelector('.counter');
const options = ['rock', 'paper', 'scissor'];
var items = [];
var score1 = 0;
var score2 = 0;


//generation of photos on click
init();

function generator() {
  throwBtn.addEventListener('click', function() {
    let num1 = Math.floor(Math.random() * 3);
    let num2 = Math.floor(Math.random() * 3);
    img1.style.display = "block";
    img1.style.backgroundImage = `url("${options[num1]}.png")`;
    items.push(options[num1]);
    img2.style.display = "block";
    img2.style.backgroundImage = `url("${options[num2]}.png")`;
    items.push(options[num2]);
    scoreUpdate(items.toString());
    items = [];
    let html = '<h3>%score1 : %score2</h3>'
    let newHtml = html.replace("%score1", score1);
    newHtml = newHtml.replace("%score2", score2);
    score.innerHTML = newHtml;
    score.style.visibility = 'visible';
    if (score1>=10 || score2>=10) {
      throwBtn.style.pointerEvents="none";
      if(score1===10){
        document.querySelector('.player-1 h2').innerHTML="Winner";
        document.querySelector('.player-1').classList.add("winner-1");
        document.querySelector('.player-2 h2').innerHTML="Loser";
        document.querySelector('.player-2').classList.add("loser-2");
      }else{
        document.querySelector('.player-2 h2').innerHTML="Winner";
        document.querySelector('.player-2').classList.add("winner-2");
        document.querySelector('.player-1 h2').innerHTML="Loser";
        document.querySelector('.player-1').classList.add("loser-1");
      }
    }
  })
}
generator();

//deciding the scores
function scoreUpdate(answer) {
  switch (answer) {
    case "rock,paper":
      score2 += 1;
      return score2;
      break;
    case "rock,rock":
      break;
    case "rock,scissor":
      score1 += 1;
      return score1;
      break;
    case "paper,paper":
      break;
    case "paper,rock":
      score1 += 1;
      return score1;
      break;
    case "paper,scissor":
      score2 += 1;
      return score2;
      break;
    case "scissor,paper":
      score1 += 1;
      return score1;
      break;
    case "scissor,rock":
      score2 += 1;
      return score2;
      break;
    case "scissor,scissor":
      break;
    default:
  }
}


//initialising function
function init() {
  img1.style.display = "none";
  img2.style.display = "none";
  score.style.visibility = 'hidden';
  document.querySelector('.player-1').classList.remove("winner-1");
  document.querySelector('.player-2').classList.remove("winner-2");
  document.querySelector('.player-1').classList.remove("loser-1");
  document.querySelector('.player-2').classList.remove("loser-2");
  document.querySelector('.player-1 h2').innerHTML="Player-1";
  document.querySelector('.player-2 h2').innerHTML="Player-2";
  throwBtn.style.pointerEvents='all';
  score1=0;
  score2=0;
}




//reset the game
resetBtn.addEventListener('click', init);
