window.onscroll = function () { scroller() };
  function scroller() {
    var header = document.getElementById("nav");
    var homeBtn = document.getElementById("homeBtn");
    var sticky = header.offsetTop;
    console.log(header.offsetTop, window.pageYOffset)
    if (window.pageYOffset > 195) {
      header.classList.add("sticky");
      homeBtn.innerText = 'ANTHROPOLOGICAL CULTURE MUSEUM'
    } else if (window.pageYOffset <= 195) {
      header.classList.remove("sticky");
      homeBtn.innerText = 'HOME'
    }
  }