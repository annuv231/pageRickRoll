const image = "https://media.tenor.com/PehuVp_jAjUAAAAC/popular-controversial.gif";

//run once it loads
const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = image;
    console.log("getting images");
  }
setInterval(() => {
  //will fetch remaining images after loading.
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = image;
    console.log("getting images");
  }
}, 3000);
