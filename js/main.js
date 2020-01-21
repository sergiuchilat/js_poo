document.addEventListener("DOMContentLoaded", function () {
  
  const calculatorObject = new Calculator();
  
  document.getElementById("calculateNumberBut").addEventListener("click", function () {
    calculatorObject.calculateNumber();
  });
  
  document.getElementById("calculateIntervalBut").addEventListener("click", function () {
    calculatorObject.calculateInterval();
  });
  
  document.getElementById("calculateNElementsBut").addEventListener("click", function () {
    calculatorObject.calculateNElements();
  });
});

class Calculator {
  calculateNumber () {
    console.log("Calculate number");
  }
  
  calculateInterval () {
    console.log("Calculate interval");
  }
  
  calculateNElements () {
    console.log('Calculate N elements');
  }
}


