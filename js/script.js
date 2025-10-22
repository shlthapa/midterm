function calculateFactorial() {
  const input = document.getElementById('inputNumber').value;
  let result = 1;

  for (let i = 1; i <= input; i++) {
    result *= i;
  }

  document.getElementById('output').innerText = `${input}! = ${result}`;
}
