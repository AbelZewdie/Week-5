
subtotals = [12, 21, 33] //create literal array
console.log(subtotals[subtotals.length-1]);

subtotals.push(300); //put one more on the stack
console.log(subtotals[subtotals.length-1]); //last one = 300

grandTotal = 0;

//how to add each one to the total?

for(let i=0; i < subtotals.length; i++){
  grandTotal += subtotals[i]
  console.log(i, subtotals[i], grandTotal);
}

console.log("GRAND TOTAL:", grandTotal); //366
