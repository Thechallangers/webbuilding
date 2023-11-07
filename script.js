const navLinks = document.querySelector(".nav-links");

    // Toggle the navigation links on smaller screens
    function toggleNav() {
        navLinks.classList.toggle("active");
    }

    // Add click event to the logo to toggle the navigation
    document.querySelector(".logo").addEventListener("click", toggleNav);

    // Add a click event to each navigation link to close the navigation on click
    const navLinksList = document.querySelectorAll(".nav-links li a");
    navLinksList.forEach(link => {
        link.addEventListener("click", toggleNav);
    });

    const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
