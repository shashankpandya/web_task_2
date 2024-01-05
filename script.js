//navbar
window.toggleMenu = function () {
  var menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
};
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('menu');

  toggleButton.addEventListener('click', function () {
      navbarLinks.classList.toggle('show');
  });
});



//menu section
document.addEventListener("DOMContentLoaded", function () {
  // Select all "Add to Cart" buttons
  var addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  // Add click event listener to each button
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get item details from the data attributes
      var category = button.closest(".item-card").dataset.category;
      var name = button.closest(".item-card").dataset.name;
      var price = parseFloat(button.closest(".item-card").dataset.price);

      // Call a function to add the item to the cart
      addToCart(category, name, price);
    });
  });

  // Function to add the item to the cart
  function addToCart(category, name, price) {
    // Example: You can store the selected items in an array or any data structure
    console.log("Added to cart:", category, name, price);
  }
});

// cart section
document.addEventListener("DOMContentLoaded", function () {
  // Initialize cart count and display
  var cartCount = 0;
  var cartDisplay = document.getElementById("cart-display");
  var cartItemsContainer = document.getElementById("cart-items");
  var totalPriceElement = document.getElementById("total-price");

  // Function to toggle the cart display
  window.toggleCart = function () {
    cartDisplay.style.display =
      cartDisplay.style.display === "none" ? "block" : "none";
  };

  // Function to update the cart count and display
  function updateCartCount(count) {
    cartCount = count;
    document.getElementById("cart-count").innerText = count;
  }

  // Example: Add to cart function (replace with your actual logic)
  window.addToCart = function (name, price) {
    // Add the item to the cart (dummy logic)
    var cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <p>${name} - $${price.toFixed(2)}</p>
            <div>
                <button onclick="decreaseQuantity(this)">-</button>
                <span>1</span>
                <button onclick="increaseQuantity(this)">+</button>
                <button onclick="removeItem(this)">Remove</button>
            </div>
        `;
    cartItemsContainer.appendChild(cartItem);

    // Update the total price
    var totalPrice = parseFloat(totalPriceElement.innerText) + price;
    totalPriceElement.innerText = totalPrice.toFixed(2);

    // Update the cart count
    updateCartCount(cartCount + 1);
  };

  // Example: Decrease quantity function (replace with your actual logic)
  window.decreaseQuantity = function (button) {
    // Decrease the quantity logic (dummy logic)
    var quantityElement = button.parentElement.querySelector("span");
    var quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
      quantityElement.innerText = quantity - 1;
    }
  };

  // Example: Increase quantity function (replace with your actual logic)
  window.increaseQuantity = function (button) {
    // Increase the quantity logic (dummy logic)
    var quantityElement = button.parentElement.querySelector("span");
    var quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
  };

  // Example: Remove item function (replace with your actual logic)
  window.removeItem = function (button) {
    // Remove the item logic (dummy logic)
    var cartItem = button.closest(".cart-item");
    var price = parseFloat(
      cartItem.querySelector("p").innerText.split(" - $")[1]
    );
    cartItemsContainer.removeChild(cartItem);

    // Update the total price
    var totalPrice = parseFloat(totalPriceElement.innerText) - price;
    totalPriceElement.innerText = totalPrice.toFixed(2);

    // Update the cart count
    updateCartCount(cartCount - 1);
  };

  // Example: Checkout function (replace with your actual logic)
  window.checkout = function () {
    // Checkout logic (dummy logic)
    alert("Redirecting to checkout page...");
  };
});

//footer

// Function to scroll to the top of the page
window.scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

