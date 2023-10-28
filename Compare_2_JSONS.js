let obj1 = { name: "Person 1", age:5}; 
let obj2 = {age:5, name: "Person 1" };

const num1 = JSON.stringify(obj1, Object.keys(obj1).sort());
const num2 = JSON.stringify(obj2, Object.keys(obj2).sort());
if (num1 === num2) {
    console.log("The JSON objects are equal.");
  } else {
    console.log("The JSON objects are not equal.");
  }