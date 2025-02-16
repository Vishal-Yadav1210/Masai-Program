function outerFunction() {
    const message = "Hello, this is a message from the outer function!";
    return function innerFunction() {
        console.log(message);
    };
}
const storedFunction = outerFunction();

storedFunction();