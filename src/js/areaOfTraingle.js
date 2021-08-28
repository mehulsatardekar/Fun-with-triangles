const sideOne = document.querySelector('#side-one')
const sideTwo = document.querySelector('#side-two')
const resultBtn = document.querySelector('#res-btn')
const result = document.querySelector('.result')

console.log(resultBtn);
resultBtn.addEventListener('click',()=>{
    
    console.log("works");
    if(sideOne.value && sideTwo.value){
    const areaOfTraingle = Number(sideOne.value) * Number(sideTwo.value)/2;
   
    result.innerText= `Area of Traingles is = ${areaOfTraingle} cm²`;
    }else{
        result.innerText= `Please Provide values `;

    }
})



