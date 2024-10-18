const sw = document.getElementById("switch-style"), bdy = document.body;
if (sw && bdy) {
  sw.checked = window.localStorage && localStorage.getItem("theme") !== "light-theme" || !window.localStorage;

  bdy.classList.toggle("dark-theme", sw.checked)
  bdy.classList.toggle("light-theme", !sw.checked)

  sw.addEventListener("change", function (){
    bdy.classList.toggle("dark-theme", this.checked)
    bdy.classList.toggle("light-theme", !this.checked)
    if (window.localStorage) {
      this.checked ? localStorage.setItem("theme", "dark-theme") : localStorage.setItem("theme", "light-theme")
    }
  })
}

