const d = document;

export function countDown (countInfo, limitDate, FinalMessage){
    const countdownDate = new Date(limitDate).getTime(),
    $countdown = d.querySelector(countInfo);
        let countdownTempo = setInterval(() => {
          let dateNow = new Date().getTime(),
          limitDate = countdownDate - dateNow,
          dias = Math.floor(limitDate / (1000 * 60 * 60 * 24)),
          hora = ("0" + Math.floor(limitDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
          minutos = ("0" + Math.floor(limitDate % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
          segundos = ("0" + Math.floor(limitDate % (1000 * 60) / (1000))).slice(-2);

          $countdown.innerHTML = `<h3 class="section-h3">¡Faltan ${dias} días, ${hora} horas, ${minutos} minutos, ${segundos} segundos, para el Fin de Año!</h3>`;

          if(limitDate < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `${FinalMessage}`;
          }
        }, 1000);

    
}
