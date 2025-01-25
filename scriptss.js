// Function to calculate BMI
function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2); // Convert height to meters
  }
  
  // Function to generate personalized meal and exercise plans
  function generateMealPlan() {
    const name = document.getElementById("name").value;
    const age