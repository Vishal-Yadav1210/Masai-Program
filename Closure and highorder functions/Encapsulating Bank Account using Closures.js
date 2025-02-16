function createBankAccount(initialBalance) {
    // Initialize the balance with the input value
    let balance = initialBalance;

    // Return an object with methods to interact with the balance
    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            } else {
                return "Invalid deposit amount. Amount must be greater than 0.";
            }
        },
        withdraw: function (amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            } else if (amount > balance) {
                return "Insufficient funds.";
            } else {
                return "Invalid withdrawal amount. Amount must be greater than 0.";
            }
        },
        getBalance: function () {
            return balance;
        }
    };
}

const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150
console.log(account.withdraw(30)); // Output: 120
console.log(account.getBalance()); // Output: 120
console.log(account.withdraw(200)); // Output: "Insufficient funds."
console.log(account.deposit(-10)); // Output: "Invalid deposit amount. Amount must be greater than 0."