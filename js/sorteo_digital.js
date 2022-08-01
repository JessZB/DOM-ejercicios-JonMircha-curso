let d = document;

export default function whoWins (list, checkBtn, arr){
    let $lotteryList = d.querySelector(list),
    $button = d.querySelector(checkBtn);
    
    let listFragment = d.createDocumentFragment()
    arr.forEach(el=>{
        let li = d.createElement("li");
        li.innerHTML = el;
        listFragment.appendChild(li)
    })
    $lotteryList.appendChild(listFragment)

    $button.addEventListener('click', ()=>{
        let winner = Math.floor(Math.random()*arr.length);
        alert(`El ganador es ${arr[winner]}`)
        console.log(arr[winner])
        
    })
}

// Otra forma utilizando una lista existente de elementos HTML

// const getWinner = () =>{
//     const $players = d.querySelectorAll(selector),
//     random = Math.floor(Math.random() * $players.length),
//     winner = $players[random]
// }

