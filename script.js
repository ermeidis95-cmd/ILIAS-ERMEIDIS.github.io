const darkModeToggle = document.getElementById("dark-mode-toggle");


// Check whether the visitor previously selected dark mode

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀";
}


// Toggle dark mode

darkModeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");

        darkModeToggle.textContent = "☀";

    } else {

        localStorage.setItem("darkMode", "disabled");

        darkModeToggle.textContent = "☾";
    }

});
