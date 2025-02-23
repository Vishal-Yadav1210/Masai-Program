function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // Example usage
  let original = { name: "Alice", hobbies: ["reading", "traveling"] };
  let clone = deepClone(original);
  
  // Modifying the clone
  clone.hobbies.push("coding");
  
  console.log("Original:", original); // { name: "Alice", hobbies: ["reading", "traveling"] }
  console.log("Clone:", clone);       // { name: "Alice", hobbies: ["reading", "traveling", "coding"] }
  