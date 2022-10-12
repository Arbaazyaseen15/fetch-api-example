

//Function to generate random 6digits hex value
const randomHexValue = () => {
    let result = [];
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
    for (let n = 0; n < 6; n++) {
      result.push(hex[Math.floor(Math.random() * 16)]);
    }
    return '#' + result.join('');
  }  

//Onclick Function to Change Color
function changeColor(){
    
    const hexValue = randomHexValue();
    const background = document.querySelector('body');
    const text = document.querySelector('h1');
    const btn = document.querySelector('.btn');
    const h1Text = document.createTextNode(`Generated Color Value: ${hexValue}`);

    //remove the pre generated text
    if(text.hasChildNodes() == 1){
        console.log('1');
        text.removeChild(text.firstChild);
    }

    text.appendChild(h1Text);
    background.style.backgroundColor = hexValue;

}

//to display generaated value



