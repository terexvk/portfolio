// dark and light mode toggle
var icon = document.getElementById('darkModeToggle');

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="images/sun.png";
    }else{
        icon.src="images/moon.jpg";
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Event listener for clicking the dark mode toggle button (image)
  document.getElementById('darkModeToggle').addEventListener('click', function() {
    toggleDarkMode();
  });

  

//scroll to top

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    console.log("yes");
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



  //reset form
  document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('myForm').reset(); // Reset the form
});




// contact button event
var contact = document.getElementById("contact-button");

contact.onclick = function(){
  window.location.href = "contacts.html";
}