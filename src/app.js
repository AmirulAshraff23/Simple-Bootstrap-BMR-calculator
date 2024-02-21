let BMR;
let Age;
let gender;
let Weight;
let height;

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