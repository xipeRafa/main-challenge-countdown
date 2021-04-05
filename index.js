(function () {  //immediately invoked function expression (IIFE) 
      let count  = 59
      let second = document.getElementById('second')
      
      function countdown() {
        let seconds;
        
        if (count > 0) {
          count -= 1  //rest 1 in every loop
          
          seconds = count 
          second.querySelector('.card-face-back').textContent = seconds

          /* add second in  card-face-front(div) */
          second.dataset.baseAfter = seconds;

          second.querySelector('.card').classList.add('flip')

          second.querySelector('.card').addEventListener('animationend', event => {
            if(event.animationName === 'flip') { 
              // function start when animation start
              second.querySelector('.card-face-front').textContent = seconds

              /* add second in  card-face-Before(div) */
              second.dataset.baseBefore = seconds;
              second.querySelector('.card').classList.remove('flip')
            }
          })
        } else { count = 59 }
      }
    
       setInterval(() => {
           countdown();
        }, 1000);
    })();
   
    

  (function () {

      let count = 59
      let minute = document.getElementById('minute')

      function countdown2() {
     
     let minutes;
 
    if (count > 0) {
      count -= 1
      minutes = count
      minute.querySelector('.card-face-back').textContent = minutes
      minute.dataset.baseAfter = minutes
      minute.querySelector('.card').classList.add('flip')
      minute.querySelector('.card').addEventListener('animationend', event => {
        if(event.animationName === 'flip') {
          minute.querySelector('.card-face-front').textContent = minutes
          minute.dataset.baseBefore = minutes
          minute.querySelector('.card').classList.remove('flip')
        }
      })
    } else { count = 59 }
  }

   setInterval(() => {
         countdown2();
       }, 60000);
})();