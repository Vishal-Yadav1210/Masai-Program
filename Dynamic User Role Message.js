const generateMessage = (user) => {
    const { role, active } = user;
  
    return role === "admin"
      ? active
        ? "Admin Access Granted!"
        : "Admin Access Revoked"
      : role === "user"
      ? active
        ? "User Access Granted!"
        : "User Access Revoked"
      : "Access Denied";
  };
  
  // Example usage:
  let user1 = { name: "Alice", role: "admin", active: false };
  let user2 = { name: "Bob", role: "user", active: true };
  let user3 = { name: "Charlie", role: "guest", active: true };
  
  console.log(generateMessage(user1)); // Output: "Admin Access Revoked"
  console.log(generateMessage(user2)); // Output: "User Access Granted!"
  console.log(generateMessage(user3)); // Output: "Access Denied"