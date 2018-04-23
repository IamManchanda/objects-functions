/**
 * Objects and Functions
 */

// Function Constructor
const Person = function (name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
};

const harry = new Person('Harry', 1993, 'Web Developer');
const jane = new Person('Jane', 1969, 'Web Designer');
const mark = new Person('Mark', 1948, 'retired');

Person.prototype.calculateAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

Person.prototype.origin = 'Mother Earth';

console.log(harry, jane, mark);
console.log(
  harry.calculateAge(),
  jane.calculateAge(),
  mark.calculateAge(),
);
console.log(
  harry.origin,
  jane.origin,
  mark.origin,
);
