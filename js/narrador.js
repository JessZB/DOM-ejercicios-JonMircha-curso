const d = document,
  w = window;

export default function speechWindow(play, pause, stop, text) {
  let $speechText = d.querySelector(text),
    $speechSelect = d.querySelector("#speech-selector"),
    $speechPlay = d.querySelector(play),
    $speechPause = d.querySelector(pause),
    $speechStop = d.querySelector(stop),
    voices = [];
  const uterance = new SpeechSynthesisUtterance();

  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", () => {
      voices = w.speechSynthesis.getVoices();
      console.log(voices);
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.lang}`;
        $speechSelect.appendChild($option);
      });
    });
    d.addEventListener("change", (e) => {
      if (e.target === $speechSelect) {
        console.log(e.target.value);
        uterance.voice = voices.find((x) => x.name === e.target.value);
      }
    });

    d.addEventListener("click", (e) => {
        // if(speechSynthesis.paused && speechSynthesis.speaking) speechSynthesis.resume();
      if (e.target === $speechPlay) {
        uterance.text = $speechText.value;
        w.speechSynthesis.speak(uterance);
      }
      if (e.target === $speechStop) {
        if (speechSynthesis.speaking) {
          speechSynthesis.resume();
          speechSynthesis.cancel();
        }
      }
    //   if(e.target === $speechPause){
    //     if(speechSynthesis.speaking) speechSynthesis.pause()
    //   }
    });
  });
}

// console.log(speechSynthesis.getVoices())
// d.addEventListener('click', (e)=>{
//     if(e.target.matches(play)){
//         if(speechSynthesis.paused) speechSynthesis.resume();
//         else{
//         uterance.addEventListener('end', ()=> $speechText.disabled = false);
//         $speechText.disabled = true;
//         console.log("Sexo")
//         speechSynthesis.speak(uterance)}
//     }
//     if(e.target.matches(pause)) {
//         if(speechSynthesis.speaking) speechSynthesis.pause()
//     }

//     if(e.target.matches(stop)){
//         if(speechSynthesis.speaking) {
//             speechSynthesis.resume()
//             speechSynthesis.cancel()
//         }
//     }
// })
