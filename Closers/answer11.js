function outerFunction() {
  const message = "Hello from the closure!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

// Invoke outerFunction and store the result (which is innerFunction)
const myClosure = outerFunction();

// Call the stored inner function
myClosure(); // Output: Hello from the closure!
