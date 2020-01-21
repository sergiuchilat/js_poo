document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculateNumberBut").addEventListener("click", function () {
    calculateNumber();
  });
  
  const calculateIntervalBut = document.getElementById("calculateIntervalBut");
  calculateIntervalBut.addEventListener("click", function () {
    calculateInterval();
  });
  
  const calculateNElementsBut = document.getElementById("calculateNElementsBut");
  calculateNElementsBut.addEventListener("click", function () {
    calculateNElements();
  });
});

function calculateNumber () {
  console.log("Calculate number");
}

function calculateInterval () {
  console.log("Calculate interval");
}

function calculateNElements () {
  console.log('Calculate N elements');
}
