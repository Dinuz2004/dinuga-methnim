
var typed = new Typed('.text', {
  strings: ["Web Developer", "QA Engineer", "Backend Developer", "Mobile App Developer"],
  typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop:true
});

// script.js
document.getElementById("downloadBtn").addEventListener("click", function() {
  // Trigger the download link click when the button is pressed
  document.getElementById("downloadLink").click();
});


