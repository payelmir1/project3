
let timerLeft;
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-Btn');
const stopBtn = document.getElementById('stop-Btn');


const startTimer = (duration) => {
    let timer = duration;
    
     timerInterval = setInterval( () => {
         
      const minutus = parseInt(timer / 60, 10);
      const seconds = parseInt(timer % 60, 10);

      
      const displayMinutus = minutus < 10 ? '0' + minutus : minutus;
      const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
      timerDisplay.innerText = displayMinutus + ':' + displaySeconds;
       
      if(--timer < 0){

        clearInterval(timerInterval);
        timerDisplay.innerText = 'Breath Out';

        setTimeout(() => {
           
             timerDisplay.innerText = 'Breath In';
             startTimer(timerLeft);

        }, 3000);
      }
        
        
    }, 1000);

}


const stopTimer = () => {

    clearInterval(timerInterval);
    timerDisplay.innerText = "Breath In";
    isRunning = false;

}

startBtn.addEventListener('click', () => {
    if(!isRunning){

        timerLeft = 90;
        startTimer(timerLeft);
        isRunning = true;
    }
    
    
});

stopBtn.addEventListener('click', () => {

   stopTimer();
   isRunning = false;
});