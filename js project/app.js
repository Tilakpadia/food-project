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
    const imageInput = document.getElementById("image");

    if (!name || isNaN(price) || price <= 0 || !category) {
      alert("⚠️ Please fill in all required fields correctly.");
      return;
    }

    // Handle image upload (convert to Base64)
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (event) {
        saveFood(name, price, category, description, event.target.result);
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      // No image uploaded → fallback
      saveFood(name, price, category, description, null);
    }
  });
});

function saveFood(name, price, category, description, image) {
  const food = { name, price, category, description, image };

  foodItems.push(food);
  localStorage.setItem("foodItems", JSON.stringify(foodItems));

  // Redirect to food list page
  window.location.href = "foodList.html";
}
