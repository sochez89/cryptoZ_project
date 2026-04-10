const currencies = {
    "GBP": "gb", "AUD": "au", "USD": "us", "EUR": "eu", 
    "JPY": "jp", "NGN": "ng", "CAD": "ca", "INR": "in"
};

const baseCur = document.getElementById('base-currency');
const quoteCur = document.getElementById('quote-currency');
const baseAmt = document.getElementById('base-amount');
const quoteAmt = document.getElementById('quote-amount');
const dateInput = document.getElementById('exchange-date');

function init() {
    // Populate dropdowns
    for (let code in currencies) {
        baseCur.add(new Option(code, code));
        quoteCur.add(new Option(code, code));
    }
    
    // Set defaults
    baseCur.value = "GBP";
    quoteCur.value = "AUD";
    dateInput.valueAsDate = new Date();

    // Listeners for real-time updates
    [baseCur, quoteCur, baseAmt, dateInput].forEach(el => {
        el.addEventListener('change', runConversion);
        el.addEventListener('input', runConversion);
    });

    runConversion();
}

function updateUIFlags() {
    [baseCur, quoteCur].forEach(select => {
        const flagImg = select.parentElement.querySelector('img');
        const countryCode = currencies[select.value];
        flagImg.src = `https://flagcdn.com/w40/${countryCode}.png`;
    });
}