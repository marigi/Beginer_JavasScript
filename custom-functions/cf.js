// console.log('it Works!!!');

// functions definition
function calculateBill() {
  console.log('Running calculates Bill');
  const total = 100 * 1.16;
  console.log(total);
  return total;
}

// function call
const myTotal = calculateBill();
console.log(`Your Total Bill is ${myTotal}`);
