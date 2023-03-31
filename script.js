let output = document.getElementById("output");
let operator = null;
let operand1 = null;
let operand2 = null;
let operandJustCalculated = null;

// function addNumber(char) {
//   output.value += char;
// }

// function addNumber(char) {
//     if (operator === null) {
//       output.value = "";
//       operator = null;
//     }
//     output.value += char;
//   }

function addNumber(char) {
    if (operator === null) {
      output.value = "";
    }
    // check if the output already contains a decimal point
    if (char === '.' && output.value.includes('.')) {
      return;
    }
    output.value += char;
  }

// function addNumber(char) {
//     if (operandJustCalculated !== null) {
//       operand1 = operandJustCalculated;
//       operandJustCalculated = null;
//       output.value = "";
//     }
//     if (operator === null) {
//       output.value = "";
//     }
//     if (char === '.' && output.value.includes('.')) {
//       return;
//     }
//     output.value += char;
//   }


function clearOutput() {
  output.value = '';
  operator = null;
  operand1 = null;
  operand2 = null;
}

function setOperator(op) {
  if (operator === null) {
    operator = op;
    operand1 = parseFloat(output.value);
    output.value = "";
  } else {
    calculate();
    operator = op;
  }
}

function calculate() {
  if (operator !== null) {
    operand2 = parseFloat(output.value);
    let result = null;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case 'x':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
    }
    output.value = result;
    operator = null;
    operand1 = result;
    operand2 = null;
  }
}