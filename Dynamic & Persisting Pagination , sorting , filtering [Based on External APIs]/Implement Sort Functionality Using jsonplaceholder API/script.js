const API_URL = "https://jsonplaceholder.typicode.com/users";
const productList = document.getElementById("product-list");
const sortSelect = document.getElementById("sort");
const errorDiv = document.getElementById("error");

async function fetchProducts(sortBy = "name_asc") {
  try {
    errorDiv.textContent = "";
    productList.innerHTML = "Loading...";

    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch products.");

    const data = await res.json();

    let sortedData = [...data];
    if (sortBy === "name_asc") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name_desc") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderProducts(sortedData);
  } catch (err) {
    productList.innerHTML = "";
    errorDiv.textContent = err.message;
  }
}

function renderProducts(products) {
  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Email:</strong> ${product.email}</p>
      <p><strong>City:</strong> ${product.address.city}</p>
      <p><strong>Company:</strong> ${product.company.name}</p>
    `;
    productList.appendChild(div);
  });
}
sortSelect.addEventListener("change", () => {
  fetchProducts(sortSelect.value);
});

fetchProducts();
