// Global execution context
let age = 25;

function displayAge() {
  console.log("Current age:", age);
}

function changeAge() {
  age = 30; // Modifies the global variable
  console.log("Age after change:", age);
}

// Function calls
displayAge();   // Output: Current age: 25
changeAge();    // Output: Age after change: 30
displayAge();   // Output: Current age: 30
