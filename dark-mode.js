
/* =========================
   DARK MODE
========================= */

const darkModeToggle = document.getElementById("dark-mode-toggle");

/* LOAD SAVED MODE */

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

if (darkModeToggle) {
    darkModeToggle.textContent =
        document.body.classList.contains("dark-mode")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";

    /* TOGGLE MODE */

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const isDarkMode =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "darkMode",
            isDarkMode ? "enabled" : "disabled"
        );

        darkModeToggle.textContent =
            isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
}
