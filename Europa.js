function payClick() {
  // Add active class to the current button (highlight it)
  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("btn-pay");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active-btn-pay");
      current[0].className = current[0].className.replace(
        " active-btn-pay",
        ""
      );
      this.className += " active-btn-pay";
    });
  }
}
payClick();

function divChange() {
  var btn_diva = document.getElementById("btn-a");
  var btn_divb = document.getElementById("btn-b");
  var diva = document.getElementById("div_a");
  var divb = document.getElementById("div_b");

  btn_diva.addEventListener("click", () => {
    diva.style.display = "block";
    divb.style.display = "none";
  });
  btn_divb.addEventListener("click", () => {
    diva.style.display = "none";
    divb.style.display = "block";
  });
}
divChange();

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
};
