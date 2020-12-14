let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("thame-dot");

// console.log(themeDots.length);

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    setTheme(this.id);
  });
}

function setTheme(mode) {
  if (mode == "default") {
    document.getElementById("theme").href = "css/default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme").href = "css/blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme").href = "css/green.css";
  }

  if (mode == "purpal") {
    document.getElementById("theme").href = "css/purpal.css";
  }

  localStorage.setItem("theme", mode);
}
