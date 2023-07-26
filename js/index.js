const dashboard = document.querySelector(".dashboard");
const closeSidebar = document.querySelector(".close-sidebar");
const openSidebar = document.querySelector(".open-sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

openSidebar.addEventListener("click", () => {
  dashboard.classList.add("show-sidebar");
});
closeSidebar.addEventListener("click", () => {
  dashboard.classList.remove("show-sidebar");
});
sidebarOverlay.addEventListener("click", () => {
  dashboard.classList.remove("show-sidebar");
});
