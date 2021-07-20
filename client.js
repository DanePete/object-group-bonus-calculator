let daEmployee = "";

$(document).ready(weReady);

function weReady() {
  console.log("jQuery is working")
  $('#checkEmpButton').on('click', empNameAssigner);
}

function empNameAssigner () {
  daEmployee = $('#empName').val();
  let employeeDetails = ourEmployeeFunction(daEmployee);
  let empNameId = $('#employeeName');
  let empBonusPercent = $('#bonusPercent');
  let empTotalComp = $('#totalComp');
  let empTotalBonus = $('#totalBonus');
  emptyValues();
  empNameId.append('Employee Name: ', employeeDetails.name);
  empBonusPercent.append('Employee Bonus Percent: ', parseFloat((employeeDetails.bonusPercentage - 1)).toFixed(2));
  empTotalComp.append('Employee Total Compensation: ', employeeDetails.totalCompensation);
  empTotalBonus.append('Employee Total Bonus ', employeeDetails.totalBonus);
}

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

/**
 * Clear out Fields
*/
function emptyValues() {
  $('#empName').empty();
  $('#employeeName').empty();
  $('#bonusPercent').empty();
  $('#totalComp').empty();
  $('#totalBonus').empty();
}

function ourEmployeeFunction(empName) {
  //start iteration for if statement to validate
  for (employeeIndex of employees) {
    // If statement to check if input parameter matches employee
    if (employeeIndex.name === empName) {
      // create new object
      let newObj = {
        name: empName,
        bonusPercentage: percCalc(employeeIndex),
        totalCompensation: ( percCalc(employeeIndex) * employeeIndex.annualSalary ),
        totalBonus: Math.round(( (percCalc(employeeIndex) - 1) * employeeIndex.annualSalary ))
      }
      return newObj;
    }
  }
}

//Bonus Percent Calc

function percCalc(employeeIndex) {
  // let baseBonus = 0;

  if (employeeIndex.reviewRating < 2 ) {
    baseBonus = 1.0;
    if (employeeIndex.employeeNumber.length === 4) {
      baseBonus += .05;
    }
    //Salary check to decrease 1%
    if (parseInt(employeeIndex.annualSalary) > 65000) {
      baseBonus -= .01;
    }

    return parseFloat(baseBonus);
  }
  if (employeeIndex.reviewRating === 3 ) {
    baseBonus = 1.04;
    if (employeeIndex.employeeNumber.length === 4) {
      baseBonus += .05;
    }
    //Salary check to decrease 1%
    if (parseInt(employeeIndex.annualSalary) > 65000) {
      baseBonus -= .01;
    }

    return parseFloat(baseBonus);
  }
  if (employeeIndex.reviewRating === 4 ) {
    baseBonus = 1.06;
    if (employeeIndex.employeeNumber.length === 4) {
      baseBonus += .05;
    }
    //Salary check to decrease 1%
    if (parseInt(employeeIndex.annualSalary) > 65000) {
      baseBonus -= .01;
    }
    //Check base bonus is in acceptable range
    if (baseBonus > 1.13) {
      baseBonus = 1.12;
    }

    return parseFloat(baseBonus);
  }
  if (employeeIndex.reviewRating === 5 ) {
    baseBonus = 1.1;
    if (employeeIndex.employeeNumber.length === 4) {
      baseBonus += .05;
    }
    //Salary check to decrease 1%
    if (parseInt(employeeIndex.annualSalary) > 65000) {
      baseBonus -= .01;
    }

    //Check base bonus is in acceptable range
    if (baseBonus > 1.13) {
      baseBonus = 1.12;
    }

    let test = parseFloat(baseBonus);
    
    return test;
  }
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
