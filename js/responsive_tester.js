const d = document,
  w = window;

export default function responsiveTester(form) {
  let tester,
    $form = d.getElementById(form);
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = w.open(
        $form.url.value, "tester", `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`
      );
    }
    d.addEventListener("click", (e) => {
      if(e.target === $form.close) tester.close();
    });
  });
}

// Forma 1
// export default function responsiveTester(form, url, width, height,closeBtn){
//     let tester;
//     let formTab = d.getElementById(form)
//     formTab.onsubmit = function(e){
//         e.preventDefault()
//         const widthTab = d.getElementById(width).value,
//         heightTab = d.getElementById(height).value,
//         urlTab = d.getElementById(url).value;
//         tester = w.open(urlTab, "Sexo", `width=${widthTab}, height=${heightTab}`)
//     }
//     d.getElementById(closeBtn).addEventListener('click', ()=>{
//         tester.close()
//     })
// }

// Forma 2
// export default function responsiveTester(form){
//     let tester,
//     formTab = d.forms[form],
//     closeTab = formTab["close"];

//     formTab.addEventListener('submit',(e)=>{
//         e.preventDefault()
//         let heightTab = formTab["height"].value,
//         widthTab = formTab["width"].value,
//         urlTab = formTab["url"].value;
//         tester = w.open(urlTab, "Sexo", `width=${widthTab}, height=${heightTab}, left="500", top="100"`)
//     })
//     closeTab.addEventListener('click', ()=>{
//         tester.close()
//     })
// }
