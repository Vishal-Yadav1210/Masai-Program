let counter = 0; // Track elapsed time
const interval = setInterval(() => {
    console.log("Loading...");
    counter++;

    if (counter === 5) {
        clearInterval(interval); // Stop the interval after 5 seconds
        console.log("Loaded successfully!");
    }
}, 1000);
