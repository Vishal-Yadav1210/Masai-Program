function personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  
  // Creating an object with name and age properties
  let person = {
    name: "Alice",
    age: 25
  };
  
  // Using call() to invoke personInfo with 'person' as this
  personInfo.call(person);
  