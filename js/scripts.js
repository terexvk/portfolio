const icon = document.getElementById('darkModeToggle');
const musicIcon = document.getElementById('musicToggle');
let isDarkMode = false;
let isSoundOn = false;

const audio = document.getElementById('audioPlayer');

icon.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    isDarkMode = !isDarkMode;
    updateIcons();
});

musicIcon.addEventListener('click', () => {
    isSoundOn = !isSoundOn;
    toggleAudio();
    updateIcons();
});

function toggleAudio() {
    if (isSoundOn) {
        audio.play();
    } else {
        audio.pause();
    }
}

function updateIcons() {
    if (isDarkMode && isSoundOn) {
        icon.src = 'images/sun.png';
        musicIcon.src = 'images/yes_sound_black.png';
    } else if (isDarkMode && !isSoundOn) {
        icon.src = 'images/sun.png';
        musicIcon.src = 'images/no_sound_black.png';
    } else if (!isDarkMode && isSoundOn) {
        icon.src = 'images/moon.jpg';
        musicIcon.src = 'images/yes_sound_white.png';
    } else {
        icon.src = 'images/moon.jpg';
        musicIcon.src = 'images/no_sound_white.png';
    }
}

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
});



  // To save audio state when the user clicks play/pause
function toggleAudio() {
  if (isSoundOn) {
      audio.play();
      localStorage.setItem('audioStatus', 'playing');
  } else {
      audio.pause();
      localStorage.setItem('audioStatus', 'paused');
  }
}

// To retrieve audio state on page load
window.onload = function() {
  const audioStatus = localStorage.getItem('audioStatus');
  if (audioStatus === 'playing') {
      audio.play();
      isSoundOn = true;
      updateIcons();
  }
};


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
document.addEventListener("DOMContentLoaded", function() {
  var contact = document.getElementById("contact-button");

  contact.addEventListener("click", function() {
    window.location.href = "contacts.html";
  });
});
