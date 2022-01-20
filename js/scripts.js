// Business logic
function luhnAlgorithm(number) {
  const cleanNumber = number.replace(/\s/g, '')
  const array = cleanNumber.split("");
  let sum = 0;
  if (array.length !== 16) {
    console.log("This is not a card number.");
  } 

  const numbers = array.map(Number);

  for (let i = 1; i < numbers.length; i=i+2) {
    numbers[i] = numbers[i] * 2;
    if (numbers[i] >= 10) {
      let digits = numbers[i].toString().split('');
      let realDigits = digits.map(Number);
      numbers[i] = realDigits[0]+realDigits[1];
    }
  };

  numbers.forEach(function(number) {
    sum += number;
  });

  if (sum % 10 === 0) {
    console.log("This card number is valid.");
  } else {
    console.log("This card number is not valid.");
  }
}
