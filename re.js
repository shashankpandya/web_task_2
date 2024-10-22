document.addEventListener("DOMContentLoaded", function() {
  var icon = document.getElementById("icon");
  var body = document.body;

  icon.onclick = function() {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
      icon.src = "/Images/sun.png";
    } else {
      icon.src = "/Images/moon.png";
    }
  };
});

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
            <p>${name} - ₹${price.toFixed(2)}</p>
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
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

//

    function scrolltoHome() {
      var element = document.getElementById("Home");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    function scrolltoMenu() {
      var element = document.getElementById("sec");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }


    function scrolltoAboutus() {
      var element = document.getElementById("aboutus");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    function scrolltoCart() {
      var element = document.getElementById("Cart");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    function scrolltoContacts() {
      var element = document.getElementById("Contacts");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('icon');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    updateThemeIcon(currentTheme === 'dark');

    themeToggle.onclick = function() {
      const isDarkMode = document.body.classList.toggle('dark-theme');
      updateThemeIcon(isDarkMode);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    function updateThemeIcon(isDarkMode) {
      icon.src = isDarkMode ? "/Images/sun.png" : "/Images/moon.png";
      icon.alt = isDarkMode ? "Light mode" : "Dark mode";
    }

    // Mobile menu toggle
    function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('show');
    }

    // Smooth scrolling
    function scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Cart functionality
    let cartItems = [];

    function addToCart(name, price) {
      const existingItem = cartItems.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }
      updateCartDisplay();
    }

    function updateCartDisplay() {
      const cartCountElement = document.getElementById('cart-count');
      const cartItemsContainer = document.getElementById('cart-items');
      const subtotalElement = document.getElementById('subtotal-price');
      const taxElement = document.getElementById('tax-amount');
      const totalPriceElement = document.getElementById('total-price');

      cartCountElement.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
      cartItemsContainer.innerHTML = '';
      let subtotal = 0;

      cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
          <div class="cart-item-info">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">₹${item.price.toFixed(2)}</span>
          </div>
          <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
          </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        subtotal += item.price * item.quantity;
      });

      const tax = subtotal * 0.05;
      const total = subtotal + tax;

      subtotalElement.textContent = subtotal.toFixed(2);
      taxElement.textContent = tax.toFixed(2);
      totalPriceElement.textContent = total.toFixed(2);
    }

    function decreaseQuantity(index) {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
      } else {
        cartItems.splice(index, 1);
      }
      updateCartDisplay();
    }

    function increaseQuantity(index) {
      cartItems[index].quantity++;
      updateCartDisplay();
    }

    function toggleCart() {
      const cartDisplay = document.getElementById('cart-display');
      cartDisplay.style.display = cartDisplay.style.display === 'none' ? 'block' : 'none';
    }

    function checkout() {
      const total = document.getElementById('total-price').textContent;
      alert(`Thank you for your order! Total: ₹${total}`);
      cartItems = [];
      updateCartDisplay();
      toggleCart();
    }

    // Initialize cart display
    updateCartDisplay();







function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', addSmoothScrolling);
