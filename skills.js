const readline = require('readline');

function calculateNumbers(var1, var2) {
  return var1 + var2;
}

function calculator(num1, num2, operation) {
  if (operation === 'add') {
    return num1 + num2;
  } else if (operation === 'subtract') {
    return num1 - num2;
  } else if (operation === 'multiply') {
    return num1 * num2;
  } else if (operation === 'divide') {
    return num1 / num2;
  } else {
    return 'Invalid operation';
  }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Enter the operation (add/subtract/multiply/divide): ', (operation) => {
            const result = calculator(Number(num1), Number(num2), operation);
            console.log('Result:', result);
            rl.close();
        });
    });
});