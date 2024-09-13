
// select dom elements
let options = document.querySelectorAll('.game button');
const game = document.querySelector('.game'); 
const winner = document.querySelector('.winner'); console.log('',winner.className[7])
const tryAgain = document.querySelector('.try_again');
const reStart = document.querySelector('.restart');

let clickCount = 0;

// put text to elements
options.forEach((option)=>{
     option.addEventListener('click',(e)=>{
          clickCount++;
          switch(clickCount){
               case 1 : e.target.innerText = "X";
               break;
               case 2 : e.target.innerText = "O";
               break;
               case 3 : e.target.innerText = "X";
               break;
               case 4 : e.target.innerText = "O";
               break;
               case 5 : e.target.innerText = "X";
               break;
               case 6 : e.target.innerText = "O";
               break;
               case 7 : e.target.innerText = "X";
               break;
               case 8 : e.target.innerText = "O";
               break;
               case 9 : e.target.innerText = "X";
               break;
               default: '';
               break;
          }
          // button disabled 
          e.target.disabled = true;
          e.target.classList.add('btn_dis');

          // decides to winner
          if(options[0].innerText == 'X' && options[1].innerText == 'X' && options[2].innerText == 'X'){
               Winner("X");
          }
          if(options[0].innerText == 'O' && options[1].innerText == 'O' && options[2].innerText == 'O'){
               Winner("O");
          }
          if(options[3].innerText == 'X' && options[4].innerText == 'X' && options[5].innerText == 'X'){
               Winner("X");
          }
          if(options[3].innerText == 'O' && options[4].innerText == 'O' && options[5].innerText == 'O'){
               Winner("O");
          }
          if(options[6].innerText == 'X' && options[7].innerText == 'X' && options[8].innerText == 'X'){
               Winner("X");
          }
          if(options[6].innerText == 'O' && options[7].innerText == 'O' && options[8].innerText == 'O'){
               Winner("O");
          }
          
          if(options[0].innerText == 'X' && options[3].innerText == 'X' && options[6].innerText == 'X'){
               Winner("X");
          }
          if(options[0].innerText == 'O' && options[3].innerText == 'O' && options[6].innerText == 'O'){
               Winner("O");
          }
          if(options[1].innerText == 'X' && options[4].innerText == 'X' && options[7].innerText == 'X'){
               Winner("X");
          }
          if(options[1].innerText == 'O' && options[4].innerText == 'O' && options[7].innerText == 'O'){
               Winner("O");
          }
          if(options[2].innerText == 'X' && options[5].innerText == 'X' && options[8].innerText == 'X'){
               Winner("X");
          }
          if(options[2].innerText == 'O' && options[5].innerText == 'O' && options[8].innerText == 'O'){
               Winner("O");
          }

          if(options[0].innerText == 'X' && options[4].innerText == 'X' && options[8].innerText == 'X'){
               Winner("X");
          }
          if(options[0].innerText == 'O' && options[4].innerText == 'O' && options[8].innerText == 'O'){
               Winner("O");
          }
          if(options[2].innerText == 'X' && options[4].innerText == 'X' && options[6].innerText == 'X'){
               Winner("X");
          }
          if(options[2].innerText == 'O' && options[4].innerText == 'O' && options[6].innerText == 'O'){
               Winner("O");
          }

          if(clickCount == 9 && winner.className[7] == "h"){
               game.classList.add('hide');
               tryAgain.classList.remove('hide')
               reStart.style.backgroundColor = 'red';
               reStart.style.color = '#fff';
          }
     });
});

// restart Game
reStart.addEventListener('click',(e)=>{
     for(let i = 0; i<options.length; i++){
          options[i].innerText = '';
          options[i].disabled = false;
          options[i].classList.remove('btn_dis');
          clickCount = 0;
          winner.classList.add('hide');
          winner.innerText = ""
          game.classList.remove('hide');
          tryAgain.classList.add('hide');
          reStart.style.backgroundColor = '#f0f0f0';
          reStart.style.color = '#000';
     }
});

// reusable code for winners
function Winner(val) {
     winner.classList.remove('hide');
     winner.innerText = val
     game.classList.add('hide');
}