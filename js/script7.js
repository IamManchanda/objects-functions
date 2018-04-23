/**
 * Objects and Functions
 */

// Closures

const retirement = (retirementAge) => {
  return (name) => {
    return (birthYear) => {
      const age = new Date().getFullYear() - birthYear;
      console.log(`Hey ${name}, ${retirementAge - age} years are left untill your retirement.`);
    };
  };
};

retirement(60)('Harry')(1993);
retirement(66)('Larry')(1973);
