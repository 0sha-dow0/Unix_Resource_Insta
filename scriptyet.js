const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


let interval = null;
document.addEventListener('DOMContentLoaded',()=>{
  text = document.getElementById('yet')
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    text.innerText = text.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return text.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= text.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30); 
})