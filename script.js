const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const result = document.getElementById('result');

document.getElementById('add').addEventListener('click', () => {
  result.value = Number(operand1.value || 0) + Number(operand2.value || 0);
});

document.getElementById('subtract').addEventListener('click', () => {
  result.value = Number(operand1.value || 0) - Number(operand2.value || 0);
});

document.getElementById('multiply').addEventListener('click', () => {
  result.value = Number(operand1.value || 0) * Number(operand2.value || 0);
});

document.getElementById('divide').addEventListener('click', () => {
  const value2 = Number(operand2.value);
  if (value2 === 0) {
    result.value = 'Cannot divide by zero';
  } else {
    result.value = Number(operand1.value || 0) / value2;
  }
});
