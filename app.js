var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var exit = document.getElementById("exit");
ready()
function ready(e){
  setTimeout(() => {
    document.getElementById('section1').style.backgroundColor = 'green'
  }, 10000);
}













if(document.body.scrollWidth>789){
  menu.addEventListener("click", function (e) {
  // nav.classList.toggle("menu-items");
  nav.style.width = "25%";
  e.preventDefault();
});
exit.addEventListener("click", function (e) {
  // nav.classList.add("menu-items");
  nav.style.width = "0";
  e.preventDefault();
})
}else{
    menu.addEventListener("click", function (e) {
  // nav.classList.toggle("menu-items");
  nav.style.width = "75%";
  e.preventDefault();
});
exit.addEventListener("click", function (e) {
  // nav.classList.add("menu-items");
  nav.style.width = "0";
  e.preventDefault();
})
}





// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }
