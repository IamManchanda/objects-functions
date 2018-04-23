/**
 * Objects and Functions
 */

// Passing Functions as arguments
const years = [1990, 1965, 1937, 2005, 1998];

const arrayCalc = (arr, fn) => {
  const arrRes = [];
  arr.forEach((el) => {
    arrRes.push(fn(el));
  });
  return arrRes;
};

const calculateAge = (el) => {
  return new Date().getFullYear() - el;
};

const isAdult = (el) => {
  return el >= 18;
};

const maxHeartRate = (el) => {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  }
  return 'Wrong age';
};

const getAges = arrayCalc(years, calculateAge);
const checkAdults = arrayCalc(getAges, isAdult);
const heartRates = arrayCalc(getAges, maxHeartRate);

console.log(getAges, checkAdults, heartRates);
