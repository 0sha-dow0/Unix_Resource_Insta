const tracker = document.getElementById('follower')

document.body.onpointermove = event =>{
   const{clientX,clientY} = event
   tracker.animate({
    left:`${clientX}px`,
    top:`${clientY}px`},{duration :300,fill:'forwards'});
}
const random =()=>{

}



