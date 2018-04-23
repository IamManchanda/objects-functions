/**
 * Objects and Functions
 */

// Object.create
const personProto = {
  calculateAge: function() {
    return new Date().getFullYear() - this.birthYear;
  },
};

const john = Object.create(personProto);
john.name = 'John';
john.birthYear = '1990';
console.log(john, john.calculateAge());

const jane = Object.create(personProto, {
  name: {
    value: 'Jane',
  },
  birthYear: {
    value: 1969,
  },
});

console.log(jane, jane.calculateAge());
