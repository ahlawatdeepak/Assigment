function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Define the context object
const person = {
  name: "Alice",
  age: 30
};

// Call personInfo with 'person' as the context
personInfo.call(person); // Output: Name: Alice, Age: 30
