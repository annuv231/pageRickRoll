const image = "https://media.tenor.com/nBt6RZkFJh8AAAAi/never-gonna.gif";

setInterval(() => {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = image;
    console.log("getting images");
  }
}, 3000);
