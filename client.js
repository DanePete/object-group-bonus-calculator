const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function ourEmployeeFunction(empName) {
  //start iteration for if statement to validate
  for (employeeIndex of employees) {
    // If statement to check if input parameter matches employee
    if (employeeIndex.name === empName) {
      // create new object
      let newObj = {
        name: empName,
        bonusPercentage: bonusCalc(employeeIndex),
        totalCompensation: empName,
        totalBonus: empName    
      }
      return newObj;
    }
  }
}

//Bonus Calc

function bonusCalc(employeeIndex) {
  // let baseBonus = 0;
  

  if (employeeIndex.reviewRating < 2 ) {
    baseBonus = 1.0;
    return employeeIndex.annualSalary * baseBonus;
  }
  if (employeeIndex.reviewRating === 3 ) {
    baseBonus = 1.04;
    return employeeIndex.annualSalary * baseBonus;
  }
  if (employeeIndex.reviewRating === 4 ) {
    baseBonus = 1.06;
    return employeeIndex.annualSalary * baseBonus;
  }
  if (employeeIndex.reviewRating === 5 ) {
    baseBonus = 1.1;
    return employeeIndex.annualSalary * baseBonus;
  }
}

// Those who have a rating of a 2 or below should not receive a bonus.
// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.




// If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// No bonus can be above 13% or below 0% total.



console.log("console log test", ourEmployeeFunction('Jem'));

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
