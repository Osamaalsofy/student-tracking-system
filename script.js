// Get the elements
var slidingMenu = document.getElementById("sliding-menu");
var classList = document.getElementById("class-list");

// Initially hide the sliding menu
slidingMenu.style.right = "-250px";

// Define a function to open the sliding menu
function openMenu() {
  slidingMenu.style.right = "0";
}

// Define a function to close the sliding menu
function closeMenu() {
  slidingMenu.style.right = "-250px";
}

// Add a click event listener to the sliding menu to close it
document.addEventListener("click", function (event) {
  // If the clicked element is not a link or the menu button, close the menu
  if (!event.target.closest(".sliding-menu") && !event.target.closest("button")) {
    closeMenu();
  }
});

// Add event listener to close the sliding menu when clicking anywhere on the body
document.body.addEventListener("click", function (event) {
  if (!event.target.closest(".sliding-menu") && !event.target.closest("button")) {
    closeMenu();
  }
});

// Define a function to show the class list
function showClassList() {
  classList.style.display = "block";
}

// Define a function to hide the class list
function hideClassList() {
  classList.style.display = "none";
}

// Add a click event listener to the class list to hide it
classList.addEventListener("click", function (event) {
  // If the clicked element is not a link, hide the list
  if (event.target.tagName != "A") {
    hideClassList();
  }
});
