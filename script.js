const button = document.getElementById("dark-mode-toggle");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        button.textContent = "☀";

    } else {

        button.textContent = "☾";

    }

});
