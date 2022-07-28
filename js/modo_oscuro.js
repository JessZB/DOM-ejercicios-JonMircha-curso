const d = document;

export default function darkTheme(btnDark, classTheme) {
  const $iconChange = d.querySelector(`${btnDark} i`),
    $dataDark = d.querySelectorAll("[data-dark]"),
    sun = "fa-sun",
    moon = "fa-moon";

  const darkMode = () => {
    localStorage.setItem("darkMode", "true");
    $iconChange.classList.replace(moon, sun);
    $dataDark.forEach((el) => el.classList.add(classTheme));
  };
  const lightMode = () => {
    localStorage.setItem("darkMode", "false");
    $dataDark.forEach((el) => el.classList.remove(classTheme));
    $iconChange.classList.replace(sun, moon);
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnDark) || e.target.matches(`${btnDark} *`)) {
      if ($iconChange.classList.contains(moon)) {
        localStorage.setItem("darkMode", "true");
        darkMode();
      } else {
        localStorage.setItem("darkMode", "false");
        lightMode();
      }
    }
  });

  if (localStorage.getItem("darkMode") === "true") darkMode();
  else lightMode();
}

//   Cambiar variables CSS
//   export default function darkMode(btnDark, main, second) {
//     const $html = document.documentElement,
//       $body = document.body,
//       $iconChange = d.querySelector(`${btnDark} i`);
//     d.addEventListener("click", (e) => {
//       if (e.target.matches(btnDark) || e.target.matches(`${btnDark} *`)) {
//           e.target.classList.toggle("active");
//         if (e.target.classList.contains("active")) {
//           $iconChange.classList.replace("fa-moon", "fa-sun");
//           $iconChange.classList.add();

//           $html.style.setProperty("--main-color", second);
//           $html.style.setProperty("--second-color", second);

//           $body.style.backgroundColor = "#ffffff";
//       } else {

//           $iconChange.classList.replace("fa-sun", "fa-moon");

//           $html.style.setProperty("--main-color", second);
//           $html.style.setProperty("--second-color", main);
//           $body.style.backgroundColor = second;
//         }
//       }
//     });
//   }
