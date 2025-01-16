function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
    const sex = document.getElementById('sex').value;

    let missingFields = [];

    if (!weight) {
        missingFields.push('o peso');
    }
    if (!height) {
        missingFields.push('a altura');
    }
    if (!sex) {
        missingFields.push('o sexo');
    }

    if (missingFields.length > 0) {
        const message = `Por favor, preencha ${missingFields.join(' e ')}.`;
        document.getElementById('result').textContent = message;
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    document.getElementById('result').textContent = `IMC: ${imc} - ${classification}`;
}
