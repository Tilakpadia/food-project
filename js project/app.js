// // Store all food entries in this array
// let foodItems = [];

// document.addEventListener("DOMContentLoaded", () => {
//     const savedItems = localStorage.getItem("foodItems");
//     if (savedItems) {
//         foodItems = JSON.parse(savedItems);
//         displayFoodItems();
//     }

//     const form = document.getElementById("foodForm");

//     form.addEventListener("submit", function (e) {
//         e.preventDefault(); // prevent page reload

//         // Get input values
//         const name = document.getElementById("name").value.trim();
//         const price = parseFloat(document.getElementById("price").value);
//         const category = document.getElementById("category").value;
//         const description = document.getElementById("description").value.trim();

//         // Basic validation
//         if (!name || isNaN(price) || price <= 0 || !category) {
//         alert("Please fill in all required fields correctly.");
//         return;
//         }

//         // Create food object
//         const food = {
//         name,
//         price,
//         category,
//         description
//         };

//         // Push to array
//         foodItems.push(food);
       
//         localStorage.setItem("foodItems", JSON.stringify(foodItems));
       
//         window.location.href = "foodList.html";

//         console.log("✅ Food item added:", food);
//         console.table(foodItems);

//         // Update table
//         // displayFoodItems();

//         // Reset form
//         form.reset();
//     });
//     });

//     // Function to update the food list in table
//     function displayFoodItems() {
//     let table = document.getElementById("foodTable");

//     // If table doesn't exist, create it
//     if (!table) {
//         table = document.createElement("table");
//         table.id = "foodTable";
//         table.innerHTML = `
//         <thead>
//             <tr>
//             <th>Food Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Description</th>
//             </tr>
//         </thead>
//         <tbody></tbody>
//         `;
//         document.querySelector(".container").appendChild(table);
//     }

//     const tbody = table.querySelector("tbody");
//     tbody.innerHTML = ""; // clear previous rows

//     foodItems.forEach((item) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//         <td>${item.name}</td>
//         <td>₹${item.price.toFixed(2)}</td>
//         <td>${item.category}</td>
//         <td>${item.description}</td>
//         `;
//         tbody.appendChild(row);
//     });
// }

let foodItems = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("foodForm");

  const savedItems = localStorage.getItem("foodItems");
  if (savedItems) {
    foodItems = JSON.parse(savedItems);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();

    if (!name || isNaN(price) || price <= 0 || !category) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    const food = { name, price, category, description };
    foodItems.push(food);
    localStorage.setItem("foodItems", JSON.stringify(foodItems));

    // 🔁 Redirect to food list page
    window.location.href = "foodList.html";
  });
});
