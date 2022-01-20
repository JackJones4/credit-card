// Business logic
function luhnAlgorithm(number) {
  const cleanNumber = number.replace(/\s/g, '')
  const array = cleanNumber.split("");
  console.log(array);
  if (array.length === 16) {
    console.log("This card number is valid.");
  } else {
    console.log("This card number is not valid.");
  }
}
