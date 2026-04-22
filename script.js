let current = '';
let previous = '';
let operator = '';

function updateDisplay(value){
  document.getElementById("display").innerText = value;
}

function appendNumber(num){
  if(num === '.' && current.includes('.')) return;
  current += num;
  updateDisplay(current);
}

function clearDisplay(){
  current = '';
  previous = '';
  operator = '';
  updateDisplay('0');
}

function setOperator(op){
  if(current === '') return;
  if(previous !== '') calculate();
  operator = op;
  previous = current;
  current = '';
}

function calculate(){
  let result;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);

  if(isNaN(prev) || isNaN(curr)) return;

  switch(operator){
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = prev / curr; break;
    default: return;
  }

  current = result.toString();
  operator = '';
  previous = '';
  updateDisplay(current);
}

function toggleSign(){
  if(current === '') return;
  current = (parseFloat(current) * -1).toString();
  updateDisplay(current);
}

function percent(){
  if(current === '') return;
  current = (parseFloat(current) / 100).toString();
  updateDisplay(current);
}