const imagesSrc = [
  "./assets/1.png",
  "./assets/2.png",
  "./assets/3.png",
  "./assets/4.png",
  "./assets/5.png",
  "./assets/6.png",
];

const images = document.querySelectorAll(".grid-color");

images.forEach(
  (image, index) => (image.style.backgroundImage = `url(${imagesSrc[index]})`)
);
