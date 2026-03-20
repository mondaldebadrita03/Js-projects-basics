const body = document.body;
const toggle = document.getElementById("themeToggle");

// Load saved theme (optimization ✨)
if (localStorage.getItem("theme") === "dark") {
    body.classList.replace("light", "dark");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {
    const isDark = toggle.checked;

    body.classList.toggle("dark", isDark);
    body.classList.toggle("light", !isDark);

    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
});