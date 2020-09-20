const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const resField = document.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  // show result on the page
  scrollTo(0,0);
  result.classList.remove('d-none');
  //result.classList.add('d-block');

  let output = 0;
  const timer = setInterval(() => {
  resField.textContent = `${output}%`;
    if (output === score){
      clearInterval(timer);
    } else {
      output++;
    }

  }, 10);

});

//setTimeout(() => {
//  // do something
//}, 3000);
//let i = 0
//const timer = setInterval(() => {
//  console.log('hello');
//  i++;
//  if (i=== 5) {
//    clearInterval(timer);
//  }
//}, 1000);
