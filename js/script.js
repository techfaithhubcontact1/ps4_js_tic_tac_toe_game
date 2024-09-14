// select dom elements
let btns = document.querySelectorAll('.game button');
const game = document.querySelector('.game'); 
const winner = document.querySelector('.winner');
const tryAgain = document.querySelector('.try_again');
const reStart = document.querySelector('.restart');

let clickCount = 0;
// put text into elements
btns.forEach((btn)=>{
     btn.addEventListener('click',(e)=>{
          clickCount++;
          switch(clickCount){
               case 1 : e.target.innerText = "A";
               break;
               case 2 : e.target.innerText = "B";
               break;
               case 3 : e.target.innerText = "A";
               break;
               case 4 : e.target.innerText = "B";
               break;
               case 5 : e.target.innerText = "A";
               break;
               case 6 : e.target.innerText = "B";
               break;
               case 7 : e.target.innerText = "A";
               break;
               case 8 : e.target.innerText = "B";
               break;
               case 9 : e.target.innerText = "A";
               break;
               default: '';
               break;
          }
          // button disabled 
          e.target.disabled = true;
          e.target.classList.add('btn_dis');
          // get current value
          let cv = e.target.innerText;
          // check x axises
          if(btns[0].innerText==btns[1].innerText && btns[1].innerText==btns[2].innerText && btns[2].innerText==cv){
               Winner(cv);
          }
          if(btns[3].innerText==btns[4].innerText && btns[4].innerText==btns[5].innerText && btns[5].innerText==cv){
               Winner(cv);
          }
          if(btns[6].innerText==btns[7].innerText && btns[7].innerText==btns[8].innerText && btns[8].innerText==cv){
               Winner(cv);
          }
          // check y axises
          if(btns[0].innerText==btns[3].innerText && btns[3].innerText==btns[6].innerText && btns[6].innerText==cv){
               Winner(cv);
          }
          if(btns[1].innerText==btns[4].innerText && btns[4].innerText==btns[7].innerText && btns[7].innerText==cv){
               Winner(cv);
          }
          if(btns[2].innerText==btns[5].innerText && btns[5].innerText==btns[8].innerText && btns[8].innerText==cv){
               Winner(cv);
          }
          // check cross axises 
          if(btns[0].innerText==btns[4].innerText && btns[4].innerText==btns[8].innerText && btns[8].innerText==cv){
               Winner(cv);
          }
          if(btns[2].innerText==btns[4].innerText && btns[4].innerText==btns[6].innerText && btns[6].innerText==cv){
               Winner(cv);
          }
          //show try again box
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
     for(let i = 0; i<btns.length; i++){
          btns[i].innerText = '';
          btns[i].disabled = false;
          btns[i].classList.remove('btn_dis');
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


