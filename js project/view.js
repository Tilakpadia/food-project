document.addEventListener("DOMContentLoaded", () => {
  const savedItems = localStorage.getItem("foodItems");
  const foodList = document.getElementById("foodList");

  if (!savedItems) {
    foodList.innerHTML = "<p>No items found.</p>";
    return;
  }

  const foodItems = JSON.parse(savedItems);

  foodItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "food-card";
    div.innerHTML = `
      <h4>${item.name} <span>₹${item.price}</span></h4>
      <p><strong>Category:</strong> ${item.category}</p>
      <p>${item.description}</p>
    `;
    foodList.appendChild(div);
  });
});

function goBack() {
  window.location.href = "foodForm.html";
}
