const tracker = document.getElementById('follower')

document.body.onpointermove = event =>{
   const{clientX,clientY} = event
   tracker.animate({
    left:`${clientX}px`,
    top:`${clientY}px`},{duration :300,fill:'forwards'});
}
const random =()=>{

}
////////////////////////////////////////////////////////////////////////////////////
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


let interval = null;
document.addEventListener('DOMContentLoaded',()=>{
        text2=document.getElementById('yet') 
            let iteration = 0;
                        
            clearInterval(interval);
            
            interval = setInterval(() => {
                text2.innerText = text2.innerText
                .split("")
                .map((letter, index) => {
                  if(index < iteration) {
                    return text2.dataset.value[index];
                  }
                
                  return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            
              if(iteration >= text2.dataset.value.length){ 
                clearInterval(interval);
              }
            
              iteration += 1/3;
            }, 30)           
})




