const renderBtn = document.querySelector('#controls button [data-action="render"]')
const destroyBtn =  document.querySelector('#controls button [data-action="destroy"]')
const boxes = document.querySelector('#boxes')
const controlsInput = document.querySelector('#controls input')
const randomRgbColor  = ()=>{
  const r=Math.round(Math.random()*256)
  const g=Math.round(Math.random()*256)
  const b=Math.round(Math.random()*256)
  return `rgb (${r},${g},${b})`
}

const INITIAL_SIZE = 30
const STEP =10
renderBtn.addEventListener('click', () => handleCreate(Number(controlsInput).value))
destroyBtn.addEventListener('click', destroyBoxes)
function handleCreate(amount){
  const box=[...new Array(amount)]
  const arrBoxes=box.map((_, i)=>createBoxes(i)).join('')
  box.insertAdjacentHTML('beforeend',arrBoxes )
}
function createBoxes(i){
  const size=`${i*STEP+INITIAL_SIZE}px`
  return `<div style=width: ${size}; height: ${size}; background-color: ${randomRgbColor}></div>`

}
function destroyBoxes(){
  boxes.innerHTML=''
controlsInput.value=''
}