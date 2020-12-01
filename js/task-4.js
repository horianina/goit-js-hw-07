const resultEl=document.querySelector('#value')

const decrementBtn=document.querySelector('button[data-action="decrement"]')
const incrementBtn=document.querySelector('button[data-action="increment"]')
decrementBtn.addEventListener('click',decrement)
incrementBtn.addEventListener('click',increment)
function decrement(){
  const counterValue=Number(resultEl.textContent)
  resultEl.textContent=counterValue-1
}
function increment(){
  const counterValue=Number(resultEl.textContent)
  resultEl.textContent=counterValue+1
}