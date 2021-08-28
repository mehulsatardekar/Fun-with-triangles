const checkAns = document.querySelector('.check-ans');
const quizformdata = document.querySelector('.quiz')
const result = document.querySelector('.result');

const answers = [ "90°",
"right angled",
"one right angle", "12, 16, 20",
"Equilateral triangle",
"100°"]
function me(e){

    e.preventDefault()
    let score =0,index=0;
   const formData = new FormData(quizformdata);
   for(let entry of formData.values()){
      if(answers[index]=== entry){
        score+=1;
      }
      index+=1;
   }

   result.innerText = `Your score is ${score}`;
}
checkAns.addEventListener('click',me)