
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");

    if (!toggle) return;

    function applyDarkMode(enabled) {
        document.body.classList.toggle("dark-mode", enabled);
        localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
        toggle.textContent = enabled ? "☀️ Light Mode" : "🌙 Dark Mode";
    }

    applyDarkMode(localStorage.getItem("darkMode") === "enabled");

    toggle.addEventListener("click", function () {
        const enabled = !document.body.classList.contains("dark-mode");
        applyDarkMode(enabled);
    });
});
