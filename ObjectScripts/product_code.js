function parsePartCode(partCode) {
  let valueList = partCode.split("-");
  console.log(valueList);

  const supplier = valueList[0];
  const Number = valueList[1];
  const size = valueList[2];
  //TODO PARSE
  return { //create object literal
    supplierCode: supplier,
    productNumber: Number,
    size: size
  };
};

//TEMPLATE
function display(partObject) {
  console.log(`
 Supplier: ${partObject.supplierCode}
 Product Number : ${partObject.productNumber}
 Size: ${partObject.size}
 `);
}




let partCode1 = "XYZ-1234-L";
let part1 = parsePartCode(partCode1);

display(part1);
display(parsePartCode("ABC-5678-XL"))

// console.log(" Supplier: " + part1.supplierCode);
// console.log(" Product Number: " + part1.productNumber);
// console.log(" Size: " + part1.size);