const calculateBmi = (cm: number, kg: number): string => {
  const bmi = kg / Math.pow(cm / 100.0, 2);

  if (bmi < 15) {
    return 'Very severely underweight';
  } else if (bmi < 16) {
    return 'Severely underweight';
  } else if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal';
  } else if (bmi < 30) {
    return 'Overweight';
  } else if (bmi < 35) {
    return 'Obese Class I';
  } else if (bmi < 40) {
    return 'Obese Class II';
  } else {
    return 'Obese Class III';
  }
};

console.log(calculateBmi(180, 74));
