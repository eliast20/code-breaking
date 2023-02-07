

const blueButton = document.querySelector('.color-blue');
blueButton.addEventListener("click", function(){
    console.log('blue');
})

const greenButton = document.querySelector('.color-green');
console.log(greenButton)
greenButton.addEventListener("click", function(){
    console.log('green');
})

const redButton = document.querySelector('.color-red');
console.log(redButton);
redButton.addEventListener("click", function(){
    console.log('red');
})

const yellowButton = document.querySelector('.color-yellow');
console.log(yellowButton)
yellowButton.addEventListener("click", function(){
    console.log('yellow');
})

const orangeButton = document.querySelector('.color-orange');
console.log(orangeButton)
orangeButton.addEventListener("click", function(){
  const pegs = document.querySelector('.peg1')
          const color = this.dataset.color;
          pegs.forEach(peg => {
            peg.style.backgroundColor = color;
          });
        });
    
      
    console.log('orange');

const playButton = document.getElementById('restart');
console.log(playButton)
playButton.addEventListener("click", function(){
    console.log('play/restart');
})

const enterButton = document.querySelector('.start');
console.log(enterButton)
enterButton.addEventListener("click", function(){
    console.log('enter');
});

  






button.addEventListener("click", function() {
    const randomColor = getRandomColor(colorChoice);
    colorBoard.style.backgroundColor = randomColor;
  });
  
  function getRandomColor() {
    const letters = "01234";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = letters[Math.floor(Math.random() + 5)];
    }
    return color;
  }
  