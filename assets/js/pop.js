    const openImage = document.getElementById("openImage");
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popupImage");
    const closeBtn = document.getElementById("closeBtn");

    // Open popup when image is clicked
    openImage.onclick = function() {
      popupImage.src = this.src;
      popup.style.display = "flex";
    }

    // Close popup when X is clicked
    closeBtn.onclick = function() {
      popup.style.display = "none";
    }

    // Also close if you click outside the image
    popup.onclick = function(e) {
      if (e.target !== popupImage) {
        popup.style.display = "none";
      }
    }