/**
 * Objects and Functions
 */

// Fun Quiz Game 

{
  const Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };
  
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    Array.from({
      length: this.answers.length,
    }, (_, i) => console.log(`${i}: ${this.answers[i]}`));
  };
  
  Question.prototype.checkAnswer = function (answer, callback) {
    var keepScore;
    if (answer === this.correctAnswer) {
      console.log('Correct Answer');
      keepScore = callback(true);
    } else {
      console.log('Wrong Answer');
      keepScore = callback(false);
    }

    this.displayScore(keepScore);
  };

  Question.prototype.displayScore = function (score) {
    console.log(`Your Current score is: ${score}`);
    console.log('------------------------------------');
  };
  
  const q1 = new Question(
    'Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0,
  );
  
  const q2 = new Question(
    'What is the Name of this course teacher?',
    ['John', 'Michael', 'Jonas'],
    2,
  );
  
  const q3 = new Question(
    'What does describe coding?',
    ['Boring', 'Hard', 'Fun'],
    2,
  );

  const questions = [q1, q2, q3];

  let sc = 0;
  const addScore = () => {
    return (correctAnswer) => {
      if (correctAnswer) {
        sc += 1;
      }
      return sc;
    };
  };

  const nextQuestion = () => {
    const n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    
    const answer = prompt('Please Select the correct Answer.');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer, 10), addScore());
      nextQuestion();
    }
  };

  nextQuestion();
}
