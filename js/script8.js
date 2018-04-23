/**
 * Objects and Functions
 */

// Call, Apply and Bind
const harry = {
  name: 'Harry Manchanda',
  age: 25,
  job: 'Web Developer',
  presentation(style, timeOfDay) {
    if (style === 'formal') {
      console.log(`
        Good ${timeOfDay} Ladies & Gentlemen. 
        This is ${this.name}. 
        I'm ${this.job} by profession and is ${this.age} years old.
      `);
    } else if (style === 'friendly') {
      console.log(`
        Hey, What's up? I'm ${this.name}, 
        I'm ${this.job} by profession and is ${this.age} years old. 
        Have a nice ${timeOfDay}
      `);
    }
  },
};

const emily = { name: 'Emily Jackson', age: 23, job: 'designer' };
const nicky = { name: 'Nicky James', age: 26, job: 'HR' };
const larry = { name: 'Larry Page', age: 45, job: 'Computer Scientist' };

harry.presentation('formal', 'morning');
harry.presentation.call(emily, 'friendly', 'afternoon');
harry.presentation.apply(nicky, ['formal', 'evening']);
harry.presentation.bind(larry, 'friendly')('morning');
