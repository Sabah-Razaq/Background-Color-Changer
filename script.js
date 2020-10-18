let colors = [
  '#f0f0f0',
  '#cccccc',
  '#999999',
  '#666666',
  '#333333',
  '#000000'
]

let currentColor = 0;

window.addEventListener('click', click);

function click() {
  if(currentColor == colors.length -1) {
    currentColor = 0;
  } else {
    currentColor ++;
  }
  document.body.style.backgroundColor = colors[currentColor];
}

window.onload = function() {
  document.body.style.backgroundColor = colors[currentColor];
}