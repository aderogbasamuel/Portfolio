const cursor = document.querySelector(".cursor");
let timeout;

// Update cursor position (viewport-relative)
function updateCursor(x, y) {
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.display = "block";
  resetHideTimeout();
}

// Reset the timeout that hides the cursor
function resetHideTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cursor.style.display = "none";
  }, 5000);
}

// Mouse support
document.addEventListener("mousemove", (e) => {
  updateCursor(e.clientX, e.clientY);
});

// Touch support
document.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  updateCursor(touch.clientX, touch.clientY);
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  updateCursor(touch.clientX, touch.clientY);
});

// Scroll support (optional — show cursor if user scrolls)
document.addEventListener("scroll", () => {
  cursor.style.display = "block";
  resetHideTimeout();
});

// Touch end — optional: hide cursor shortly after
document.addEventListener("touchend", () => {
  resetHideTimeout();
});

// Hide on mouse out
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});