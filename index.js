let showTime = document.getElementById("showTime");
setInterval(() => {
  let time = new Date()
    .toLocaleTimeString()
    .replace("/.*(d{2}:d{2}:d{2}).*/", "$1");

  showTime.innerText = time;
}, 1000);
