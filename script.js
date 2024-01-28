  var icon = document.getElementById("icon");

   icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src="/Img/sun.png";
    }else
    {
      icon.src="/Img/moon.png";
    }
   }



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


  function addToCart(category, name, price) {
    console.log("Added to cart:", category, name, price);
  }
});

// cart section
document.addEventListener("DOMContentLoaded", function () {
  var cartCount = 0;
  var cartDisplay = document.getElementById("cart-display");
  var cartItemsContainer = document.getElementById("cart-items");
  var totalPriceElement = document.getElementById("total-price");

 
  window.toggleCart = function () {
    cartDisplay.style.display =
      cartDisplay.style.display === "none" ? "block" : "none";
  };

  function updateCartCount(count) {
    cartCount = count;
    document.getElementById("cart-count").innerText = count;
  }

  window.addToCart = function (name, price) {
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

    var totalPrice = parseFloat(totalPriceElement.innerText) + price;
    totalPriceElement.innerText = totalPrice.toFixed(2);

  
    updateCartCount(cartCount + 1);
  };


  window.decreaseQuantity = function (button) {
    var quantityElement = button.parentElement.querySelector("span");
    var quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
      quantityElement.innerText = quantity - 1;
    }
  };

  window.increaseQuantity = function (button) {
    // Increase the quantity logic (dummy logic)
    var quantityElement = button.parentElement.querySelector("span");
    var quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
  };

  window.removeItem = function (button) {
    var cartItem = button.closest(".cart-item");
    var price = parseFloat(
      cartItem.querySelector("p").innerText.split(" - $")[1]
    );
    cartItemsContainer.removeChild(cartItem);

    var totalPrice = parseFloat(totalPriceElement.innerText) - price;
    totalPriceElement.innerText = totalPrice.toFixed(2);

 
    updateCartCount(cartCount - 1);
  };

  window.checkout = function () {
    alert("Redirecting to checkout page...");
  };
});

//footer

window.scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

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
