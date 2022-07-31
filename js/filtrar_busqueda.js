const d = document;

export default function searchItem(input, selector){
    let search = d.getElementById(input),
    items = d.querySelectorAll(selector);

    search.addEventListener('input', (e)=>{
        let value = e.target.value.toLowerCase();       
        items.forEach(el=>{
            let isValid = el.textContent.toLowerCase().includes(value);
            el.classList.toggle("hide", !isValid)
            
        })
         
    })
}


// First try
// export default function searchItem(input, selector){
//     let search = d.getElementById(input),
//     items = d.querySelector(selector);
    
//     let content = [];
//         for(let childs of items.children){
//             content.push(childs.children[0])
//          }
    
//     search.addEventListener('input', (e)=>{
//         let value = e.target.value.toLowerCase();
       
//         content.forEach(el=>{
//             let isValid = el.alt.includes(e.target.value);
//             el.parentNode.classList.toggle("hide", !isValid)
            
//         })
         
//     })
// }