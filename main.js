// import "./style.css";
// import products from "./api/products.json";
// import { showProductContainer } from "./homeProductCards";

// // Define a function named `showProductContainer` that takes an array of products as input.
// showProductContainer(products);



// import "./style.css";
// import products from "./api/products.json";
// import { showProductContainer } from "./homeProductCards";

// document.addEventListener("DOMContentLoaded", () => {
//   showProductContainer(products);
// });


// import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

function renderProducts() {
  showProductContainer(products);
}

window.addEventListener("DOMContentLoaded", renderProducts);
window.addEventListener("pageshow", (event) => {
  // If coming from bfcache, re-render products
  if (event.persisted) {
    renderProducts();
  }
});