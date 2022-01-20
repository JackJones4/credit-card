// Business logic
function luhnAlgorithm(number) {
  const cleanNumber = number.replace(/\s/g, '')
  const array = cleanNumber.split("");
  let sum = 0;

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

function company(number) {
  const cleanNumber = number.replace(/\s/g, '')
  const array = cleanNumber.split("");
  const numbers = array.map(Number);
  let company = "";

  if (numbers[0] === 3 && (numbers[1] === 4 || numbers[1] === 7)) {
    company = "American Express";
  } else if (numbers[0] === 4) {
    company = "Visa";
  } else if (numbers[0] === 5) {
    company = "Mastercard";
  } else if (numbers[0] === 6) {
    company = "Discover Card";
  }
  return company;
}

function length(number) {
  const cleanNumber = number.replace(/\s/g, '')
  const array = cleanNumber.split("");
  const numbers = array.map(Number);

  if (numbers.length === 16 && (company(number) === "Visa" || company(number) === "Mastercard" || company(number) === "Discover Card")) {
    console.log("This is a valid card number.");
  }  else if (numbers.length === 15 && company(number) === "American Express") {
    console.log("This is a valid card number.");
  } else {
    console.log("This is not a valid card number.");
  }
}