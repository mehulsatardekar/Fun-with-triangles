const angle1_input = document.querySelector('#angle1-input');
const angle2_input = document.querySelector('#angle2-input');
const angle3_input = document.querySelector('#angle3-input');
const checkresbtn = document.querySelector('#checkresbtn')
const result = document.querySelector('.result')

checkresbtn.addEventListener('click',()=>{
    
    let isTraingle=0;
    if(angle1_input.value && angle2_input.value && angle3_input.value){
       isTraingle = Number(angle1_input.value)+ Number(angle2_input.value) + Number(angle3_input.value)
       if(isTraingle === 180){
         result.innerText = `It's forms a Triangle 🔺`;
       }else{
           result.innerText =`It doesn't forms Triangle`;
       }
    }else{
        result.innerText = `Enter all the fields`;
    }
})
