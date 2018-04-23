/**
 * Objects and Functions
 */

// Functions returning functions

const interviewQuestion = (job) => {
  if (job === 'designer') {
    return (name) => {
      console.log(`Hey ${name}, can you please explain what UX design is?`);
    };
  } else if (job === 'teacher') {
    return (name) => {
      console.log(`Hey ${name}, what subject do you teach?`);
    };
  }
  return (name) => {
    console.log(`Hello! Dear ${name}, can you tell me what do you do?`);
  };
};

const teacherQuestion = interviewQuestion('teacher');
const designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');
teacherQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Harry');
