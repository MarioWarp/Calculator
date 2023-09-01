const input1 = document.querySelector("#num1");
const calc = document.querySelector("#calc");
const input2 = document.querySelector("#num2");

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
const equal = document.querySelector("#equal");

function writeNumbers(e) {
    console.dir(typeof(e.target));
    input.value += e.target.innerText;
}

function calculate() {
    console.log(input.value);
}

one.onclick = writeNumbers;
two.onclick = writeNumbers;
tree.onclick = writeNumbers;
four.onclick = writeNumbers;
five.onclick = writeNumbers;
six.onclick = writeNumbers;
seven.onclick = writeNumbers;
eight.onclick = writeNumbers;
nine.onclick = writeNumbers;
zero.onclick = writeNumbers;
plus.onclick = writeNumbers;
minus.onclick = writeNumbers;
divide.onclick = writeNumbers;
multiply.onclick = writeNumbers;

equal.onclick = calculate;