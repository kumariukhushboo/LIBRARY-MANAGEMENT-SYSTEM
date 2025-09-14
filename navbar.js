document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navbar.html")
      .then(response => response.text())
      .then(html => {
        document.body.insertAdjacentHTML("afterbegin", html);
      })
      .catch(error => console.error("Error loading the navbar:", error));
  });