// This is the code for the slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// The slide show codes ends here!

// The write up code starts here
const textToType = "Welcome to Vip kids academy a place where excellence meets opportunity and every child's potential is celebrated. Situated in the heart of our vibrant community, Vip kids academy opens its door as a beacon of quality education, dedicated to nurturing young minds and fostering a love for learning."; //This is where the write up is placed.

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
