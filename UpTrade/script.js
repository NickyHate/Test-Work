/* Переменные для превью*/

const trade = document.querySelector("#trade");
const invest = document.querySelector("#invest");
const recruit = document.querySelector("#recruit");

/* Переменные с блоками-контейнерами*/

const preview = document.querySelector(".bg-container");
const mainScreen = document.querySelector(".bg-container__2");

/* Переменные для мобильного меню */

const str = document.querySelector(".str");
const mobile = document.querySelector(".mobile-container");

/* События-обработчики при переходе из превью */

if (document.body.clientWidth > 480) {
  trade.addEventListener("click", function() {
    mainScreen.classList.add("active");
    preview.classList.add("unactive");
  });

  invest.addEventListener("click", function() {
    mainScreen.classList.add("active");
    preview.classList.add("unactive");
  });

  recruit.addEventListener("click", function() {
    mainScreen.classList.add("active");
    preview.classList.add("unactive");
  });
} else {
  str.addEventListener("click", function() {
    str.classList.toggle("rotate");
    mobile.classList.toggle("str");
    preview.classList.add("bg");
  });
}
