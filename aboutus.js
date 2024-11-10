// The write up code starts here
const textToType = "What we offer!"; //This is where the write up is placed.

// Get the text container element
const textContainer = document.getElementById("text-container");

// Function to simulate typing effect
function typeText(index) {
  if (index < textToType.length) {
    textContainer.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(() => {
      typeText(index);
    }, 100); // Adjust typing speed here (milliseconds)
  }
}

// Start typing when the page loads
window.onload = function() {
  typeText(0);
};

// The write up codes ends here
