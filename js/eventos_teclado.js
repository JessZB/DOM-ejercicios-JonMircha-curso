const d = document;
let x = 0,
  y = 0;

export function shortCuts(e) {
  if (e.altKey) {
    if (e.keyCode === "a") {
      alert("Esto es una Alerta");
    }
    if (e.keyCode === "i") {
      prompt("Cómo estás?");
    }
    if (e.keyCode === "c") {
      prompt("¿Te gustan los perros?");
    }
  }
}

export function moveBall(e, ball, area) {
  const $ball = d.querySelector(ball),
    $area = d.querySelector(area),
    limitBall = $ball.getBoundingClientRect(),
    limitArea = $area.getBoundingClientRect();
if(e.altKey){
  switch (e.key) {
    case "ArrowLeft":
      if (limitBall.left > limitArea.left) {
        e.preventDefault();
        x--;
      }
      break;
    case "ArrowUp":
      if (limitBall.top > limitArea.top) {
        e.preventDefault();
        y--;
      }
      break;
    case "ArrowRight":
      if (limitBall.right < limitArea.right) {
        e.preventDefault();
        x++;
      }
      break;
    case "ArrowDown":
      if (limitBall.bottom < limitArea.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    }
}
  
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

// export function moveItem(e, area, item) {
//   let mTop = 0,
//     mLeft = 0,
//     mBottom = 0,
//     mRight = 0,
//     velocidad = 50;
//   d.addEventListener("keydown", (e) => {
//     if (e.altKey) {
//       const $item = d.querySelector(item);
//       if (e.key === "ArrowUp") {
//         mBottom += velocidad;
//         $item.style.marginBottom = mBottom + "px";
//       } else if (e.key === "ArrowLeft") {
//         mRight += velocidad;
//         $item.style.marginRight = mRight + "px";
//       } else if (e.key === "ArrowDown") {
//         mTop += velocidad;
//         $item.style.marginTop = mTop + "px";
//       } else if (e.key === "ArrowRight") {
//         mLeft += velocidad;
//         $item.style.marginLeft = mLeft + "px";
//       }
//     }
//   });
// }
