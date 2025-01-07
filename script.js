document.getElementById('respirationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const breathingRate = document.getElementById('breathingRate').value;

    if (name && age && breathingRate) {
        // Calculate breathing rate category
        let category;
        if (breathingRate < 12) {
            category = 'Low';
        } else if (breathingRate >= 12 && breathingRate <= 20) {
            category = 'Normal';
        } else {
            category = 'High';
        }

        // Display result
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h3>Results</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Breathing Rate:</strong> ${breathingRate} breaths/minute</p>
            <p><strong>Breathing Rate Category:</strong> ${category}</p>
        `;
        resultDiv.style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
});
