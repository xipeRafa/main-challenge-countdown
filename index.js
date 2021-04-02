(function seconds() {

      let count  = 59
      let second = document.getElementById('second')
      
      function countdown() {
        let seconds;
        
        // Seconds's render
        if (count > 0) {
          count -= 1
          seconds = count < 10 ? `0${count}` : `${count}`;
          second.querySelector('.card-face-back').textContent = seconds;
          second.dataset.baseAfter = seconds;
          second.querySelector('.card').classList.add('flip');
          second.querySelector('.card').addEventListener('animationend', event => {
            if(event.animationName === 'flip') {
              second.querySelector('.card-face-front').textContent = seconds;
              second.dataset.baseBefore = seconds;
              second.querySelector('.card').classList.remove('flip');
            }
          })
        } else {
          count = 59;
        }
      }
    
      let run = setInterval(() => {
        if (count >= 0) {
          countdown();
        } else {
          clearInterval(run);
          console.log('seconds-stop');
        }
      }, 1000);
    })();
   
    

    (function minutes() {

      let count = 59
      let minute = document.getElementById('minute')

      function countdown() {
     
     let minutes;
 
    // minutes's render
    if (count > 0) {
      count -= 1
      minutes = count < 10 ? `0${count}` : `${count}`;
      minute.querySelector('.card-face-back').textContent = minutes;
      minute.dataset.baseAfter = minutes;
      minute.querySelector('.card').classList.add('flip');
      minute.querySelector('.card').addEventListener('animationend', event => {
        if(event.animationName === 'flip') {
          minute.querySelector('.card-face-front').textContent = minutes;
          minute.dataset.baseBefore = minutes;
          minute.querySelector('.card').classList.remove('flip');
        }
      })
    } else {
      count = 59;
    }
  }

  let run = setInterval(() => {
     
    if (count >= 0) {
      countdown();
    } else {
      clearInterval(run);
      console.log('minutes-stop');
    }
  }, 60000);
})();