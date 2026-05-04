export const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100;
  const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let status = "";
  let color = "#3b82f6"; // Default Blue

  if (bmiValue < 18.5) {
    status = "Underweight";
    color = "#3b82f6"; 
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    status = "Normal";
    color = "#10b981"; // Green
  } else {
    status = "Overweight";
    color = "#ef4444"; // Red
  }

  return { 
    bmi: bmiValue, 
    status, 
    message: `You are ${status}`, 
    color 
  };
};