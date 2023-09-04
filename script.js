// 
const input = document.querySelector("#num1");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const tree = document.querySelector("#tree");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const deleteAll = document.querySelector("#deleteAll");
const equal = document.querySelector("#equal");

let firstNumber = null;
let operation = null;
let secondNumber = null;
let result = null;

function writeNumbers(e) {
  if (!operation) {
    if (firstNumber === null) {
      firstNumber = e.target.innerText;
    } else {
      firstNumber += e.target.innerText;
    }
  } else {
    if (secondNumber === null) {
      secondNumber = e.target.innerText;
    } else {
      secondNumber += e.target.innerText;
    }
  }

  input.value += e.target.innerText;
}

function calculate() {
  if (firstNumber !== null && secondNumber !== null && operation !== null) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === 0) {
          alert("Dijeljenje s nulom nije dopušteno");
          clearAll();
          return;
        } else {
          result = firstNumber / secondNumber;
        }
        break;
    }

    input.value = result;
  }
}


function clearAll() {
  firstNumber = null;
  operation = null;
  secondNumber = null;
  result = null;
  input.value = "";
}

deleteAll.onclick = function() {
    clearAll();
}

one.addEventListener("click", writeNumbers);
two.addEventListener("click", writeNumbers);
tree.addEventListener("click", writeNumbers);
four.addEventListener("click", writeNumbers);
five.addEventListener("click", writeNumbers);
six.addEventListener("click", writeNumbers);
seven.addEventListener("click", writeNumbers);
eight.addEventListener("click", writeNumbers);
nine.addEventListener("click", writeNumbers);
zero.addEventListener("click", writeNumbers);
plus.addEventListener("click", () => setOperation("+"));
minus.addEventListener("click", () => setOperation("-"));
divide.addEventListener("click", () => setOperation("/"));
multiply.addEventListener("click", () => setOperation("*"));
equal.addEventListener("click", calculate);

function setOperation(op) {
  if (firstNumber !== null && secondNumber === null) {
    operation = op;
    input.value += op;
  }
}
