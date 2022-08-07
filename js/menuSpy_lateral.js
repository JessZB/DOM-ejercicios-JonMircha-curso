const d = document;

export default function scrollSpy(sections, links) {
  let $section = d.querySelectorAll("section[data-scroll-spy");
    console.log($section)
  const updateMenu = (entries, observe) => {
    console.log(entries)
    entries.forEach((entry) => {
      let id = entry.target.getAttribute("id");
      if (entry.isIntersecting) d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("visible");
      else d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("visible");
    });
  };
  const observer = new IntersectionObserver(updateMenu, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.6,
  });

  $section.forEach((el) => observer.observe(el));
}
