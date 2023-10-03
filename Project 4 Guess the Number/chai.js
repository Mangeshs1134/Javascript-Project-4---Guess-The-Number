let chances = 7;

let body = document.querySelector(`body`);
const form = document.querySelector(`form`);
const result = document.querySelector(`.result`);
const prevGuess = document.querySelector(`.prevGuess`);
const remainGuess = document.querySelector(`.remainGuess`);
const number = document.querySelector(`.number`);
const submit = document.querySelector(`.submit`);
const play = document.querySelector(`.play-again`);
const notify = document.querySelector(`.notify`);
const game= document.querySelector(`.input`);

play.style.display = `none`;
function refreshPage() {
  window.location.reload();
}
// for (let index = 0; index < chances; index++) {

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  let entValue = document.querySelector(`#game`).value;
  console.log(entValue);

  if (entValue > 0 || entValue < 21) {
    notify.innerHTML=``
    let num = Math.random();
    num = (num * 10 + 1).toFixed(0);
    console.log(num);
    number.innerHTML = `${num}`;
    if (entValue === num) {
      game.innerHTML = `You Won the game`;
prevGuess.innerHTML = `${entValue}`;
        remainGuess.innerHTML = `${chances}`;
      submit.innerHTML = ``;
      play.style.display = `flex`;
    //   game.innerHTML=``
     
    } else {
        chances = chances - 1;
        prevGuess.innerHTML = `${entValue}`;
        remainGuess.innerHTML = `${chances}`;
        
        if (chances == 0) {
            game.innerHTML = `YOU LOST`;
            submit.innerHTML = ``;
            play.style.display = `flex`;
            // game.innerHTML=``
            // document.getElementById(`game`).innerHTML=``
      }
    }
  }else{
    notify.innerHTML=`give correct input`
  }
});
// }
// console.log(`abc`)
