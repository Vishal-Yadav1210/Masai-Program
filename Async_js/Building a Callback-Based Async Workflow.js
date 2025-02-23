function registerUser(username, callback) {
    setTimeout(() => {
        if (!username) {
            return callback("Registration failed: No username provided");
        }
        console.log(`User ${username} registered successfully`);
        callback(null, username);
    }, 1000);
}

function sendVerification(username, callback) {
    setTimeout(() => {
        if (username !== "validUser") {
            return callback("Verification failed: Invalid user");
        }
        console.log(`Verification email sent to ${username}`);
        callback(null, username);
    }, 1000);
}

function loginUser(username, callback) {
    setTimeout(() => {
        if (username !== "validUser") {
            return callback("Login failed: Incorrect user credentials");
        }
        console.log(`User ${username} logged in successfully`);
        callback(null, username);
    }, 1000);
}

function displayWelcomeMessage(username, callback) {
    setTimeout(() => {
        console.log(`Welcome, ${username}! Your account is now active.`);
        callback(null);
    }, 1000);
}

// Executing the workflow in sequence using callbacks
registerUser("validUser", (err, username) => {
    if (err) {
        return console.error(err);
    }
    sendVerification(username, (err, username) => {
        if (err) {
            return console.error(err);
        }
        loginUser(username, (err, username) => {
            if (err) {
                return console.error(err);
            }
            displayWelcomeMessage(username, (err) => {
                if (err) {
                    return console.error(err);
                }
                console.log("User workflow completed successfully.");
            });
        });
    });
});
