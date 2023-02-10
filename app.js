const choices = document.getElementById('choices');
const table = document.getElementById('board');
const secretColor = document.querySelectorAll('.secret-color');
let selectedRow = 6;
let submittedColors =[];

let colors = {
  '1': 'blue',
  '2': 'green',
  '3': 'red',
  '4': 'yellow',
  '5': 'orange',
};


let board = [
  [0, 0, 0, 0],  // col 0
  [0, 0, 0, 0],  // col 1
  [0, 0, 0, 0],  // col 2
  [0, 0, 0, 0],  // col 3
  [0, 0, 0, 0],  // col 4
  [0, 0, 0, 0],  // col 5
  [0, 0, 0, 0],  // col 6
];
let selectedColors = [];
choices.addEventListener('click', function(evt) {
  selectedColor = evt.target.getAttribute('name');
  selectedColors.push(parseInt(selectedColor));
  console.log(selectedColors)
  render();
});




function render() {
  console.log(board)
  table.innerHTML = '';
  board.forEach((element, index) => {
    const div = document.createElement('div');
    div.className = 'row';
    element.forEach((el, i) => {
      const peg = document.createElement('div');
      peg.className = 'peg';
      if (index === selectedRow) {
        peg.style.backgroundColor = colors[selectedColors[i]];
      } else {
        peg.style.backgroundColor = colors[el];
      }
      div.appendChild(peg);
    });
    table.appendChild(div);
  });
}





let secretCode = [];
for (let i = 0; i <= 3; i++) {
secretCode.push(Math.floor(Math.random() * 5) + 1);
}
const answerCodeDivs = document.querySelectorAll(".nav");
for (let i = 0; i < answerCodeDivs.length; i++) {
 answerCodeDivs[i].classList.add(colors[secretCode[i]]);
  console.log(secretCode);
render();
}
let turn = 0;






const startButton = document.querySelector('.start');
startButton.addEventListener('click', function() {
    turn++;
  // If a row has not been filled up with 4 colors yet, return
  if (selectedColors.length !== 4) return;

   // Store the selected colors in the submittedColors array
    submittedColors = selectedColors;
  
  // Check if the number of turns has reached the maximum of 7
  if (turn === 7) {
    alert("You have lost the game! Click Restart to Play Again!");
    showKey();
    
  }
  // Check if the submittedColors match the secret code
  else if(JSON.stringify(submittedColors) === JSON.stringify(secretCode)) {
    alert("You have won the game! Click Restart to Play Again!");
    showKey();
  
    // Show the answer code
    for (let i = 0; i < answerCodeDivs.length; i++) {
      answerCodeDivs[i].classList.add(colors[secretCode[i]]);
    }
  }
  else if(turn !== JSON.stringify(secretCode)){
    alert('wrong answer try again!')
  } 
    board[selectedRow] = selectedColors;
  // Decrement selectedRow only if the length of selectedColors is 4
    selectedRow--;
    console.log(selectedRow);
  // Reset selectedColors
    selectedColors = [];

  // Re-render the board to display the new colors
    render();
});







const resetButton = document.getElementById('restart');
resetButton.addEventListener('click', function() {
  turn = 0;
  selectedRow = 6;
  let secretCode = [];
  for (let i = 0; i <= 3; i++) {
    secretCode.push(Math.floor(Math.random() * 5) + 1);
  }

  console.log(secretCode);
  const answerCodeDivs = document.querySelectorAll(".side-bar");
  for (let i = 0; i < answerCodeDivs.length; i++) {
    answerCodeDivs[i].classList.remove(colors[secretCode[i]]);
  }

  submittedColors = [];
  selectedColors = [];
  board = [        
    [0, 0, 0, 0],  // col 0
    [0, 0, 0, 0],  // col 1
    [0, 0, 0, 0],  // col 2
    [0, 0, 0, 0],  // col 3
    [0, 0, 0, 0],  // col 4
    [0, 0, 0, 0],  // col 5
    [0, 0, 0, 0],  // col 6
  ];

  // Check if game is over
  if (submittedColors === answerCodeDivs) {
    for (let i = 0; i < answerCodeDivs.length; i++) {
      answerCodeDivs[i].classList.add(colors[secretCode[i]]);
    }
  }
  render();
});



  
secretColor.forEach(function(key) {
    key.style.display = 'none';
  });
  function showKey() {
    secretColor.forEach(function(key) {
    key.style.display = 'block';
  });
}
  
secretColor.forEach(function(key) {
    const divColor = window.getComputedStyle(key).backgroundColor
    const divIndex = colorOrder.indexOf(key)
    const divClone = key.cloneNode(true);
    container.appendChild(divClone);
    container.removeChild(key);
    colorDivs[divIndex] = divClone;
    key.style.display = 'none';
  });

