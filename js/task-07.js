const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text')
text.style.fontSize = control.style.fontSize
control.addEventListener("input",(event)=>{
    const value = event.target.value;
    text.style.fontSize= `${value}px`
}
)