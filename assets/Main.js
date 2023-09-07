document.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
  
    var header = document.getElementById("header");
    header.style.backgroundPositionY = -st / 20 + "px";
  
    var headerc = document.getElementById("headerc");
    headerc.style.top = -st / 5 + "px";
    headerc.style.bottom = st / 5 + "px";
  });