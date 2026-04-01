//export를 const 앞에 붙이던지 마지막 줄 추가하던지//
const link = () => {
  document.querySelectorAll(".header_menu ul li a").forEach(function (li) {
    li.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });
};

export default link;
