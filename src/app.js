let BMR;
let Age;
let gender;
let Weight;
let height;

function calculateBMI(event) {

    event.preventDefault();


    // Get user input from the form
    weight = parseFloat(document.getElementById('weightInput').value);
    height = parseFloat(document.getElementById('heightInput').value);

    // Check if input is valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height.');
        return;
    }

    // Calculate BMI
    BMI = 0;

    // Display BMI in console
    console.log('BMR:', BMR);

    // Display results
    document.getElementById('resultWeight').innerText = weight.toFixed(2);
    document.getElementById('resultHeight').innerText = height.toFixed(2);
    document.getElementById('resultBMR').innerText = BMR.toFixed(2);

    
}

function resetForm() {
    // Clear user input and results
    document.getElementById('ageInput').value = '';
    document.getElementById('weightInput').value = '';
    document.getElementById('heightInput').value = '';
    document.getElementById('resultAge').innerText = '-';
    document.getElementById('resultGender').innerText = '-';
    document.getElementById('resultWeight').innerText = '-';
    document.getElementById('resultHeight').innerText = '-';
    document.getElementById('resultBMI').innerText = '-';

}

document.getElementById('calculateButton').addEventListener('click', calculateBMI);
document.getElementById('resetButton').addEventListener('click', resetForm);