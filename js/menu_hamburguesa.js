const d = document;

export default function hamburguerMenu(panelBtn, panel, activePanel) {
  
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle(activePanel);
    }
  });
  d.addEventListener("scroll", (e) => {
    if(d.querySelector(panel).classList.contains(activePanel)){
        d.querySelector(panel).classList.remove(activePanel);
    }
  })
}


// Mi Solución

// d.addEventListener("scroll", e=>{
//     console.log(e.target.matches("panel"))
// })

// function hamburguerMenu(e, className){
//     e.classList.toggle(className)
// }
// function hiddenMenu(e, className){
//     if(e.classList.contains(className)){
//         e.classList.remove(className)
//     }
// }

// const funciones = {
//     hamburguerMenu,
//     hiddenMenu
// }
