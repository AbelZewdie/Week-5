
//array of arrays
grid = [
  [".", ".", "."],
  [".", "X", "."],
  ["?", ".", "O"],
];

console.log(grid[1][1]); //X
console.log(grid[2][2]); //O

grid[2][0] = "X" //replace ? with X

grid[0][2] = "O" //Block the X's with an O 

row = grid[1]
col = row[1]
console.log(col);

console.log(grid);  //Nott Pretty.
for(row of grid){
  console.log(row);
}

// we can take the letters out.
for(row of grid){
  console.log(row[0], row[1], row[2],);
}


//If it's a lot of rows.
for(row of grid){
  for(let c=0; c<row.length; c++){
    console.log(row[c]);
  }
}

//opposite of split()
for (row of grid){

  console.log(row.join(" "));
}

//////////////////////////////////////////////////////////////////////
//HOW TO BUILD 26 COLUMNS 1000 ROWN LIKE GOOGLE SHIT
let sheet = []
//rows first how to add 1000
//LOOP | FOR LOOP
for(let r=0; r< 1000; r++){
  let row = []; //array()
for(let c = 0; c < 26; c++){
  row.push(".")
}
  sheet.push(row)
}
sheet[999][25] = "X" //X in the bottom right corner
console.log(sheet.length);
console.log(sheet[0].length);


