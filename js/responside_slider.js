const d = document;

export default function responsiveSlider() {
  const $next = d.getElementById("next"),
    $before = d.getElementById("before"),
    $content = [...d.querySelectorAll(".sliders")];

  let nextClass = "slider-next",
    beforeClass = "slider-before",
    showClass = "slider-show",
    i = 0;

  $next.addEventListener("click", () => {
    if (i < $content.length - 1) {
      i += 1;
    } else {
      i = 0;
      $content.forEach((el) => {
        el.classList.remove(beforeClass);
        el.classList.remove(showClass);
      });
      $content[0].classList.add(showClass);
      $content[0].classList.add(nextClass);
      setTimeout(() => {
        $content[i].classList.remove(nextClass);
      }, 100);
    }
    if (i >= 1) {
      $content[i].classList.add(nextClass);
      $content[i].classList.add(showClass);
      setTimeout(() => {
        $content[i].classList.remove(nextClass);
        $content[i - 1].classList.add(beforeClass);
      }, 0);
    }
  });

  $before.addEventListener("click", () => {
    console.log();
    if (i > 0) {
      i -= 1;
    } else {
      i = $content.length - 1;
      $content.forEach((el) => {
        el.classList.remove(nextClass);
        el.classList.remove(showClass);
      });
    }
    console.log(i);
    if (i >= 0) {
      $content[i].classList.add(beforeClass);
      $content[i].classList.add(showClass);

      setTimeout(() => {
        $content[i].classList.remove(beforeClass);
        if (i < $content.length - 1) $content[i + 1].classList.add(nextClass);
      }, 0);
    }
  });
  // Auto Slider
  setInterval(() => {
    $next.click();
  }, 5000);
}
