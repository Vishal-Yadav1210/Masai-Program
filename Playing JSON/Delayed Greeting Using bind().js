function greet() {
    console.log(`Hello, ${this.name}`);
  }
  
  function setTimeoutGreeting(person) {
    let boundGreet = greet.bind(person); // Bind 'this' to the person object
    setTimeout(boundGreet, 1000); // Call the function after 1 second
  }
  
  // Example usage
  let person = { name: "Alice" };
  setTimeoutGreeting(person);
  