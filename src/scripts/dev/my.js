(function () {
  "use strict";

  let root = document.documentElement;

  let navToggle = document.querySelector("js-navToggle");
  navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
  });

  let eventOpenPP = document.querySelector("#js-eventOpenBtn");
  let eventPP = document.querySelector("js-eventPP");

  if (eventPP) {
    let eventPP = document.querySelector("#js-eventOpenBtn");

    eventPP.addEventListener("click", function () {
      root.classList.add("show-event-popup");
    });

    eventPP.addEventListener("click", function (event) {
      if (
        event.target === this ||
        event.target.classList.contains("js-ppCloseBtn")
      ) {
        root.classList.remove("show-event-popup");
      }
    });
    document.addEventListener("keyup", function (event) {
      if (event.key === "Escape" || event.keyCode === 27) {
        root.classList.remove("show-event-popup");
      }
    });
  }
  let swipers = document.querySelectorAll(".js-swiper");
  swipers.forEach(function (swpr) {
    new Swiper(swpr, {});
  });
  let contactsMap = document.querySelector("js-contactsMap");
  if (contactsMap) {
  }
})();
