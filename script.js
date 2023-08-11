$(document).ready(function () {
  // Toggle menu on click
  $(".toggle").click(function () {
    $(".menu-list").toggleClass("open");
  });

  // Prevent menu from closing when clicking inside the menu
  $(".menu-list").click(function (event) {
    event.stopPropagation();
  });

  // Check the initial screen width
  if ($(window).width() >= 992) {
    // If the screen is initially wider than 992px, show the menu
    $(".menu-list").addClass("open");
  }
});

//   Checkbox functionality..
const checkboxes = document.querySelectorAll(
  '.input-section input[type="checkbox"]'
);
const selectedFilterDiv = document.querySelector(".add-selected-filter");

// Function to update the selected filter
function updateSelectedFilter() {
  // Clear the previous content
  selectedFilterDiv.innerHTML = "";

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      // Get the product name
      const productName = checkbox.nextElementSibling.textContent;

      const productSpan = document.createElement("span");
      productSpan.textContent = productName;

      const xmarkIcon = document.createElement("i");
      xmarkIcon.classList.add("fa-solid", "fa-xmark");

      const selectedProductDiv = document.createElement("div");
      selectedProductDiv.classList.add("selected-product");

      selectedProductDiv.appendChild(productSpan);
      selectedProductDiv.appendChild(xmarkIcon);

      selectedFilterDiv.appendChild(selectedProductDiv);

      xmarkIcon.addEventListener("click", () => {
        removeSelectedProduct(selectedProductDiv);
        checkbox.checked = false;
      });
    }
  });
}

// Function to remove selected product
function removeSelectedProduct(productDiv) {
  productDiv.remove();
}

// Attach event listeners
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    updateSelectedFilter();
  });
});
