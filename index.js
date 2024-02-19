const greyBackgroundElements = document.querySelectorAll(".grey-background");
const navbartheme = document.querySelectorAll(".navbar-theme");
const blackbg = document.querySelectorAll(".black-background");
const toggleBtn = document.getElementById("toggle-btn");
let flag = localStorage.getItem('data-theme') || [];
localStorage.setItem("data-theme", '0')

function themeChange(){
  
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggleBtn.setAttribute("src", "images/theme/sun-regular.svg");
    localStorage.setItem("data-theme", '0')
  } else {
    toggleBtn.setAttribute("src", "images/theme/moon-regular.svg");
    localStorage.setItem("data-theme", '1')
  }

  greyBackgroundElements.forEach(function (element) {
    element.classList.toggle("dark-theme-grey-bg");
  });

  blackbg.forEach(function (element) {
    element.classList.toggle("black-theme");
  });

  navbartheme.forEach(function (element) {
    element.classList.toggle("white-font");
  });
}

if(flag === '0'){
  themeChange();
}

toggleBtn.onclick = () => {
  themeChange();
};

