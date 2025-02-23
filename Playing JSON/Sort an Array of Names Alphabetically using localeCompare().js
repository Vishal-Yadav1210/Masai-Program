function sortNames(namesArray) {
    return namesArray.sort((a, b) => a.localeCompare(b));
  }
  
  // Example usage
  console.log(sortNames(["Charlie", "Alice", "Bob"])); 
  // Output: ["Alice", "Bob", "Charlie"]
  