const inputRef=document.querySelector('#name-input')
const nameRef=document.querySelector('#name-output')
inputRef.addEventListener('input',event=>{
  const defaultName ='незнакомец'
  if(event.target.value){
    nameRef.textContent=event.target.value
  }else{nameRef.textContent=defaultName}
})
