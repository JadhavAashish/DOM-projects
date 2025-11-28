const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const weight = parseInt(document.querySelector('weight').value);
    const height = parseInt(document.querySelector('height').value);

    const result = document.querySelector('result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.push(`Please give a valid height... ${height}`);
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.push(`Please give a valid weight... ${weight}`);
    } else {
        const bmi = (weight / ((height * height) / 10000).toFixed(2));
        result.innerHTML = `<span>${bmi}</span>`
    }

});



