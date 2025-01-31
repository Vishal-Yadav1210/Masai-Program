let tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

tasks.shift();
tasks.unshift("High-priority Task 1", "High-priority Task 2");
tasks[tasks.length - 1] = "New Last Task";

console.log(tasks);
