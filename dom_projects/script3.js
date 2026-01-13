//project to change background color by clicking start button and stop on clicking stop button 
// Generate random colors first by random hex value
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0 ; i <6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
  
let intervalId ;
const startColorChange = function(){
    if(!intervalId){ //checking if interval is null then will add something to it 
    intervalId =  setInterval(changeBg, 1000);
    }
    function changeBg(){
      document.body.style.backgroundColor = randomColor();
    }
};

const stopColorChange = function(){
   clearInterval(intervalId);
   intervalId = null;  // for clean code for corner cases
};

document.querySelector('#start').addEventListener('click', startColorChange)
document.querySelector('#stop').addEventListener('click', stopColorChange)