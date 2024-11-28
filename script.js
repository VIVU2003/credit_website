document.getElementById('fraudForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values from the form
    let time = parseFloat(document.getElementById('time').value);
    let amount = parseFloat(document.getElementById('amount').value);
    let v1 = parseFloat(document.getElementById('v1').value);
    let v2 = parseFloat(document.getElementById('v2').value);

    // Dummy Model Logic (for demonstration only)
    // This would be replaced with actual logic or API call to your model
    let prediction = simulateFraudDetection(time, amount, v1, v2);

    // Display the result
    document.getElementById('predictionText').textContent = prediction;
});

function simulateFraudDetection(time, amount, v1, v2) {
    // For simplicity, let's assume that fraud occurs if the amount is greater than a threshold
    // and certain PCA features are in a specific range.
    if (amount > 1000 || v1 > 2.5 || v2 < -2.0) {
        return "The transaction is **Fraudulent**!";
    } else {
        return "The transaction is **Not Fraudulent**.";
    }
}