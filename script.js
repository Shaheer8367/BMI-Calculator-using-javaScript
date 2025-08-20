document.getElementById("bmiForm").addEventListener('submit', function (e) {
    e.preventDefault();
    // stop default form submission 
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInches = parseInt(document.getElementById("height-inches").value);
    const weight = parseInt(document.getElementById("weight").value);
    // check if all fields are filled 
    if (gender && age && heightFeet && heightInches >= 0 && weight) {
        const heightInMeters = (heightFeet * 12 + heightInches) * 0.0254;
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById("result");
        // check BMI category 
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        }
        else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        let resultMessage = 'Your BMI is ' + bmi.toFixed(2) + '<br>'; resultMessage += 'Category: ' + category;
        resultElement.innerHTML = resultMessage;
    }
}); 