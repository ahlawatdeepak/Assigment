const userProfile = {
  name: "Alice",
  age: 28,

  details() {
    return `${this.name} is ${this.age} years old.`; // Template literal fixed
  },

  updateAge(newAge) {
    if (newAge <= 0) {
      console.log("Invalid age.");
      return;
    }

    this.age = newAge;

    // Call the method to get the updated string
    console.log(this.details());
  }
};

userProfile.updateAge(30); // Output: Alice is 30 years old.
console.log(userProfile.details()); // Output: Alice is 30 years old.
