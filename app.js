const btn = document.querySelector('#generate-Btn')
const number = document.querySelector('#number')

btn.addEventListener('click',()=>{
    let random = Math.ceil(Math.random() *10)
    number.textContent = random
})

// function btnclick () {
//     const btn = document.querySelector('#generate-Btn')
    
// }

function btnClick() {
  let btnClick = document.querySelector('#generate-Btn');
  btnClick.style = "1";
}
button1.addEventListener("click", changeText);