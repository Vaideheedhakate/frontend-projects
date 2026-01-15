const input = document.getElementsByTagName('input')[0];
const buttons = document.querySelectorAll('button');

for(let i=0; i<buttons.length; i++){
    let buttonElement = buttons[i];
    buttonElement.addEventListener('click', (e)=>{
        input.value = e.target.innerHTML;
    });
}