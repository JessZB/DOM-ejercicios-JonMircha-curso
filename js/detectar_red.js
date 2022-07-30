const d = document,
  w = window,
n = navigator;


export default function networkStatus(){

  const isOnline = ()=>{
    const $div = d.createElement("div");
    if(n.onLine){
      $div.textContent = "Conexión Reestablecida";
      $div.classList.add('online')
      $div.classList.add('active')
      $div.classList.remove('offline')
      setTimeout(()=>{
        $div.classList.remove('active')
      },3000)
    }else{
      $div.textContent = "Conexión Perdida";
      $div.classList.add('offline');
      $div.classList.add('active')
      $div.classList.remove('online');
      setTimeout(()=>{
        $div.classList.remove('active')
      },3000)
    }

    d.body.insertAdjacentElement('afterbegin', $div);
    
    setTimeout(()=>{
      d.body.removeChild($div)
    },6000)
  }
  
      w.addEventListener("online", isOnline)
      w.addEventListener("offline", isOnline)
}

// export default function isOnline(message, online, offline) {
//   let msg = d.getElementById(message);
//     w.addEventListener("offline", (e) => {
//       console.log("sexo");
//       msg.classList.add(offline);
//       msg.innerHTML = "Conexión Perdida";
//       setTimeout(() => {
//         msg.classList.remove(offline);
//       }, 5000);
//     });

//     w.addEventListener("online", (e) => {
//         console.log("sexo2")
//       msg.classList.add(online);
//       msg.innerHTML = "Conexión Restablecida";
//       setTimeout(() => {
//         msg.classList.remove(online);
//       }, 5000);
//     });
  
// }
