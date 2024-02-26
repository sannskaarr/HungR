const cursor = document.querySelector(".cursor");
var timeout;
  
      //follow cursor on mousemove
      document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;
  
        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display = "block";
  
        //cursor effects when mouse stopped
        function mouseStopped(){
          cursor.style.display = "none";
        }
        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 1000);
      });
  
      //cursor effects when mouseout
      document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
      });


  // Function to open the login/signup popup
function openPopup() {
  document.getElementById("login-signup-popup").style.display = "flex";
}

// Function to close the login/signup popup
function closePopup() {
  document.getElementById("login-signup-popup").style.display = "none";
}

// Event listener to open the popup when "Login/Signup" is clicked
document.querySelector('.login-signup-trigger').addEventListener('click', openPopup);


// Add 'hover-target' class to elements you want to apply the hover effect
document.addEventListener("DOMContentLoaded", function () {
    const hoverElements = document.querySelectorAll('.hover-target');
  
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', function () {
        this.classList.add('hovered'); // Add your desired hover effect class
      });
  
      element.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');
      });
    });
  });

 // Function to open the contact form popup



