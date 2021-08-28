const calculateBtn = document.querySelector('#res-btn');
const baseElem = document.querySelector('#base');
const heightElem = document.querySelector('#height');
const resultElem = document.querySelector('.result');

calculateBtn.addEventListener('click',()=>{

    let base = Number(baseElem.value);
    let height = Number(heightElem.value);

    let hypoteneus = Math.sqrt((base*base)+(height*height));
    resultElem.innerText = `hypoteneus is=  ${hypoteneus} `;

})

