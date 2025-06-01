function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count += 1;
      return count;
    },

    getCount() {
      return count;
    }
  };
}

// Usage
const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount());  // Output: 2
