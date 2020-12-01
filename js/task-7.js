const inputRef = document.querySelector('#font-size-control')
const inputLabelRef = document.querySelector('#text')
inputRef.addEventListener('input',handleChangeInput)
function handleChangeInput({currentTarget}){
  const value=currentTarget.value
  inputLabelRef.style.fontSize=value+'px'
}