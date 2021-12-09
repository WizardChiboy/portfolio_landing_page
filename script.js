const header = document.querySelector(".header_nav_container");

const headerNav = document.querySelectorAll(".header_nav_list > ul > a ");

window.onscroll = function () {
  var x = headerNav;
  var top = window.scrollY;

  if (top >= 600) {
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "black";
    }

    header.classList.add("active");
  } else {
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "white";
    }
    header.classList.remove("active");
  }
};
