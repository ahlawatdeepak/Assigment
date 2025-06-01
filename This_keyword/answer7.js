function multiplyNumbers(a, b) {
  function multiply(x, y) {
    return x * y;
  }

  return multiply.apply(null, [a, b]);
}

// Example usage
console.log(multiplyNumbers(4, 5)); // Output: 20
