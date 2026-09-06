// firebase-init.js
const firebaseConfig = {
  apiKey: "AIzaSyAaVc7IRNLksoKv6PDXE2Vs7D_K3QzHgCc",
  authDomain: "couplequizzes-57680.firebaseapp.com",
  databaseURL: "https://couplequizzes-57680-default-rtdb.firebaseio.com",
  projectId: "couplequizzes-57680",
  storageBucket: "couplequizzes-57680.firebasestorage.app",
  messagingSenderId: "881639719010",
  appId: "1:881639719010:web:3b63772e8221096a4ed13b"
};

// Initialize Firebase once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// Shared Theme Handler
function initSharedTheme() {
  const savedTheme = localStorage.getItem("quiz_theme") || "clean";
  setSharedTheme(savedTheme);
}

function setSharedTheme(themeKey) {
  document.documentElement.setAttribute("data-theme", themeKey === "clean" ? "" : themeKey);
  const themeNameLabel = document.getElementById("current-theme-name");
  if (themeNameLabel) themeNameLabel.innerText = themeKey;
  localStorage.setItem("quiz_theme", themeKey);
  const menu = document.getElementById("theme-menu");
  if (menu) menu.classList.add("hidden");
}

function toggleThemeDropdown() {
  const menu = document.getElementById("theme-menu");
  if (menu) menu.classList.toggle("hidden");
}

// Shared Toast Message
function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "fixed bottom-20 left-1/2 -translate-x-1/2 hidden bg-zinc-900 text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-xl z-50 pointer-events-none";
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);
}

// Automatically apply theme on page load
window.addEventListener("DOMContentLoaded", initSharedTheme);