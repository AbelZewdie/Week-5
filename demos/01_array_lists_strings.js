
// JAVASCRIPT ARRAYS (AKA lists)

fruitList = [] //array literal - empty

fruitList = ["apple", "banana", "cherry"]
console.log(fruitList[2]) //cherry

fruitList.push("pear")
fruitList.push("orange")
fruitList.push("grape")

console.log(fruitList.length); //6
console.log(fruitList[fruitList.length-1]); //always the last one. (5)

console.log(fruitList);
console.log(fruitList.pop()); //destructive
console.log(fruitList[fruitList.length-1]); //always last one

//LOOP
for(let i = 0; i < fruitList.length; i++){
  console.log(i, fruitList[i]);
}



// fruit = array(); //Constructor/Factory function explicit

//Other ways to define things!!!
/*
x = 123
x = Number(123)
d = Date()

text = "ABC" //String Literal
text = String("ABC"); //Constructor/Factory Function.
*/