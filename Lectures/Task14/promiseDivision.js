const Division = new Promise((resolve, reject) => {
  const num1 = 15;
  const num2 = 0;
  console.log(`Dividing ${num1} by ${num2}...`);
  if (num2) {
    resolve(`Result: ${num1 / num2}`);
  } else {
    reject(`Error: Division by zero is not allowed.`);
  }
});

Division.then((resolve) => {
  console.log(resolve);
}).catch((reject) => {
  console.log(reject);
});



