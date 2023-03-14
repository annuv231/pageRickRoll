const image = "https://media.tenor.com/PehuVp_jAjUAAAAC/popular-controversial.gif";

setInterval(() => {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = image;
    console.log("getting images");
  }
}, 3000);
