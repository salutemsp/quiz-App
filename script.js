'use strict';

const title = document.querySelector('.title');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const op1 = document.querySelector('.op1');
const op2 = document.querySelector('.op2');
const okay = document.querySelector('.okay');
const back = document.querySelector('.back');
const result = document.querySelector('.result');
const scoreEl = document.querySelector('.score');

const quiz = {
  question: [
    ['Fear of ants'],
    ['Fear of alcohol'],
    ['Fear of beards'],
    ['Fear of birds'],
    ['Fear of bridges or of crossing them'],
    ['Fear of cats'],
    ['Fear of chickens'],
    ['Fear of clothing'],
    ['Fear of clouds'],
    ['Fear of colors'],
  ],
  answer0: ['antsophobia', 'myrmecophobia'],
  answer1: ['mythyphobia', 'alcolophobia'],
  answer2: ['pogonophobia', 'myrmecophobia'],
  answer3: ['ornithophobia', 'felinophobia'],
  answer4: ['dromophobia', 'gephyrophobia'],
  answer5: ['ailurophobia', 'felinophobia'],
  answer6: ['alektorophobia', 'ornithophobia'],
  answer7: ['clothophobia', 'vestiphobia'],
  answer8: ['cloudophobia', 'nephophobia'],
  answer9: ['chromophobia', 'chromatophobia'],

  correct: [2, 1, 1, 1, 2, [1, 2], 1, 2, 2, [1, 2]],
};

let x = 0;
let score = 0;

//set the default values of the quiz app
const init = function () {
  question.textContent = quiz.question[x];
  op1.textContent = quiz['answer0'][0];
  op2.textContent = quiz['answer0'][1];
};
init();

//set the question and choices depending on the value of x
const setQuiz = function () {
  question.textContent = quiz.question[x];
  op1.textContent = quiz[`answer${x}`][0];
  op2.textContent = quiz[`answer${x}`][1];
};

//check if the value of the answer is equal to the correct answer add 1 to score it its correct
const checkAnswer = function () {
  if (
    Number(answer.value) === quiz.correct[x - 1] ||
    quiz.correct[x - 1][0] ||
    quiz.correct[x - 1][1]
  ) {
    score++;
  } else {
  }
};

// a click event for ok that if the value of x is less than the quiz.length then it will call the setquiz and check answer function
okay.addEventListener('click', function () {
  if (x < quiz.question.length - 1) {
    x++;
    setQuiz();
    checkAnswer();

    // this will check if the x is equal then it will also add 1 to the counter but wont set the quiz anymore just hide it and display your total score
  } else if (x === quiz.question.length - 1) {
    x++;
    checkAnswer();
    console.log(score);
    document.querySelector('main').classList.toggle('hidden');
    result.classList.toggle('hidden');
    scoreEl.textContent = score;
  }
});

//this the back click event which just as it said will make you go back to the last question
back.addEventListener('click', function () {
  if (x !== 0) {
    x = x - 1;
    setQuiz();
  }
});
