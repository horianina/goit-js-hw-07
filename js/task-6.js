const inputRef = document.querySelector('#validation-input')

const dataLength=Number(inputRef.dataset.length)

inputRef.addEventListener('blur',(event)=>{
  const currentValueLength = event.currentTarget.value.length
  currentValueLength===dataLength
  ?(inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
  :inputRef.classList.add('invalid'), inputRef.classList.remove('valid')
})