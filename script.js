// Dark/Light mode toggle logic
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.toggle("light-mode", savedTheme === "light");
  toggleBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  toggleBtn.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
