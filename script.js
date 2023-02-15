
const currentImage = document.getElementById("currentImage");


const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");


const thumbnailImages = document.querySelectorAll(".thumbnails img");


let currentIndex = 0;


currentImage.src = thumbnailImages[currentIndex].src;


function setCurrentImage(src) {
  currentImage.src = src;

  currentIndex = Array.from(thumbnailImages).findIndex((img) => img.src === src);
}


function changeImage(direction) {
  if (direction === "prev") {
    currentIndex = (currentIndex - 1 + thumbnailImages.length) % thumbnailImages.length;
  } else if (direction === "next") {
    currentIndex = (currentIndex + 1) % thumbnailImages.length;
  }

  currentImage.src = thumbnailImages[currentIndex].src;
}


prevButton.addEventListener("mouseover", () => changeImage("prev"));
nextButton.addEventListener("mouseover", () => changeImage("next"));


thumbnailImages.forEach((img) => img.addEventListener("click", () => setCurrentImage(img.src)));


function exitPage() {
  const confirmExit = confirm("Are you sure you want to exit the assignment?");
  if (confirmExit) {
    window.close();
  }
}
