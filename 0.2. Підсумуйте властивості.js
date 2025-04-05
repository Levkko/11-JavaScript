let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

function sumSalaries(salaries) { 
  let sum = 0;
  for (let name in salaries) {
    sum = sum + salaries[name];
  }
  return sum;
}   

alert( sumSalaries(salaries) ); // 650