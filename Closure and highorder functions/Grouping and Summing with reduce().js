function countAndSortCategories(categories) {
    // Step 1: Use reduce() to count occurrences of each category
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1; // Increment the count for the category
        return acc;
    }, {});

    // Step 2: Sort the categories by their counts in descending order
    const sortedCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
        .map(entry => entry[0]); // Extract only the category names

    return sortedCategories;
}

// Example usage:
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const result = countAndSortCategories(categories);
console.log(result); // Output: ["toys", "electronics", "clothing"]