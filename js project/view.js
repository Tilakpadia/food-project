document.addEventListener("DOMContentLoaded", () => {
  const savedItems = localStorage.getItem("foodItems");
  const foodGrid = document.getElementById("foodGrid");

  if (!savedItems) {
    foodGrid.innerHTML = "<p>No food items found. Please add some!</p>";
    return;
  }

  let foodItems = JSON.parse(savedItems);
  foodGrid.innerHTML = "";

  foodItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "food-card";

    // Use uploaded image or fallback
    const imgUrl = item.image || "https://source.unsplash.com/400x300/?food";

    card.innerHTML = `
      <img src="${imgUrl}" alt="Food Image">
      <div class="info">
        <span class="badge ${item.category}">${item.category}</span>
        <h4>${item.name} <span>₹${item.price}</span></h4>
        <p>${item.description || "No description provided"}</p>
        <div class="card-actions">
          <button class="btn edit-btn" data-index="${index}">✏️ Edit</button>
          <button class="btn delete-btn" data-index="${index}">🗑️ Delete</button>
        </div>
      </div>
    `;
    foodGrid.appendChild(card);
  });

  // Delete functionality
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      foodItems.splice(index, 1);
      localStorage.setItem("foodItems", JSON.stringify(foodItems));
      window.location.reload();
    });
  });

  // Edit functionality
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      const item = foodItems[index];

      // Save the index for updating later
      localStorage.setItem("editIndex", index);
      localStorage.setItem("editItem", JSON.stringify(item));

      // Redirect to form page
      window.location.href = "foodForm.html";
    });
  });
});

function goBack() {
  window.location.href = "FoodForm.html";
}
