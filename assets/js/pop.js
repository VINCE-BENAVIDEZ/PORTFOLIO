const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("closeBtn");

// Make ALL thumbnails clickable
document.querySelectorAll(".popup-trigger").forEach(img => {
  img.addEventListener("click", () => {
    popupImage.src = img.src;
    popup.style.display = "flex";
  });
});

// Close with X
closeBtn.onclick = () => popup.style.display = "none";

// Close if clicking outside the image
popup.onclick = (e) => {
  if (e.target === popup) popup.style.display = "none";
};
